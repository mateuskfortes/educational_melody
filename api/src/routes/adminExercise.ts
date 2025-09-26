import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { render } from '../utils';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mainDir = __dirname;

// Configuração do multer para salvar imagens em disco
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = path.join(__dirname, '../../uploads');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, unique + path.extname(file.originalname));
    },
  }),
});

export const adminListExercises = async (req: Request, res: Response) => {
  const exercises = await prisma.question.findMany({ include: { image: true } });
  console.log('Exercícios encontrados:', exercises);
  render(req, res, 'admin/exercises/list.ejs', { exercises });
};

export const getAdminCreateExercise = (req: Request, res: Response) => {
  render(req, res, 'admin/exercises/create.ejs', {});
};

export const postAdminCreateExercise = [
  upload.single('image'),
  async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;
      let alternatives = req.body.alternatives;
      if (!Array.isArray(alternatives)) {
        alternatives = Object.values(alternatives);
      }
      alternatives = alternatives.map((alt: any) =>
        typeof alt === 'string' ? { content: alt } : alt
      );
      const correctIndex = req.body.correct;

      if (!content || !alternatives || alternatives.length < 2) {
        render(req, res, 'admin/exercises/create.ejs', {
          error_msg: 'Preencha o enunciado e pelo menos duas alternativas.',
        });
        return;
      }

      // Salva imagem se enviada
      let imageId: number | undefined = undefined;
      if (req.file) {
        const imageBuffer = fs.readFileSync(req.file.path);
        const image = await prisma.image.create({
          data: {
            image: imageBuffer,
            name: req.file.filename,
            created_at: new Date(),
          },
        });
        imageId = image.id;
      }

      // Cria a questão e as alternativas
      await prisma.question.create({
        data: {
          title,
          content,
          imageId,
          alternatives: {
            create: alternatives.map((alt: any, idx: number) => ({
              content: alt.content,
              is_correct: String(idx) === String(correctIndex),
            })),
          },
        },
      });
      console.log('Exercício criado com sucesso!');

      res.redirect('/admin/exercises');
    } catch (err) {
      console.error(err);
      render(req, res, 'admin/exercises/create.ejs', {
        error_msg: 'Erro ao criar exercício.',
      });
    }
  },
];

// Editar exercício (GET e POST)
export const adminEditExercise = [
  upload.single('image'),
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (req.method === 'GET') {
      const exercise = await prisma.question.findUnique({
        where: { id },
        include: { image: true, alternatives: true },
      });
      if (!exercise) {
        return res.status(404).send('Exercício não encontrado');
      }
      render(req, res, 'admin/exercises/edit.ejs', { exercise, editMode: true });
      return;
    }
    // POST: atualizar exercício
    try {
      console.log('adminEditExercise POST called', { params: req.params, bodyKeys: Object.keys(req.body || {}) });

      // fallback to body.id if params.id missing
      const idFromParams = Number(req.params.id);
      const idFromBody = Number(req.body?.id);
      const id = Number.isFinite(idFromParams) && idFromParams > 0 ? idFromParams : (Number.isFinite(idFromBody) ? idFromBody : NaN);
      console.log('Using id:', id);

      if (!Number.isFinite(id)) {
        console.error('Invalid id for update', { params: req.params, body: req.body });
        return res.status(400).send('Invalid id');
      }

      const { title, content } = req.body;
      let alternatives = req.body.alternatives;
      if (!Array.isArray(alternatives)) {
        alternatives = Object.values(alternatives);
      }
      alternatives = alternatives.map((alt: any) =>
        typeof alt === 'string' ? { content: alt } : alt
      );
      const correctIndex = req.body.correct;

      if (!title || !content || !alternatives || alternatives.length < 2) {
        const exercise = await prisma.question.findUnique({
          where: { id },
          include: { image: true, alternatives: true },
        });
        return render(req, res, 'admin/exercises/edit.ejs', {
          exercise,
          editMode: true,
          error_msg: 'Preencha o título, enunciado e pelo menos duas alternativas.',
        });
      }

      // Atualiza imagem se enviada
      let imageId: number | undefined = undefined;
      if (req.file) {
        const imageBuffer = fs.readFileSync(req.file.path);
        const image = await prisma.image.create({
          data: {
            image: imageBuffer,
            name: req.file.filename,
            created_at: new Date(),
          },
        });
        imageId = image.id;
      }

      // Antes de atualizar:
      console.log('Updating question', { id, title, content, alternativesCount: (req.body.alternatives ? (Array.isArray(req.body.alternatives) ? req.body.alternatives.length : Object.keys(req.body.alternatives).length) : 0) });

      // Atualiza questão
      const updated = await prisma.question.update({
        where: { id },
        data: {
          title,
          content,
          ...(imageId ? { imageId } : {}),
        },
      });
      console.log('Question updated result:', updated);

      // Remove alternativas antigas
      await prisma.alternative.deleteMany({ where: { questionsId: id } });

      // Cria novas alternativas
      await prisma.alternative.createMany({
        data: alternatives.map((alt: any, idx: number) => ({
          content: alt.content,
          is_correct: String(idx) === String(correctIndex),
          questionsId: id,
        })),
      });

      res.redirect('/admin/exercises');
    } catch (err) {
      console.error(err);
      const exercise = await prisma.question.findUnique({
        where: { id },
        include: { image: true, alternatives: true },
      });
      render(req, res, 'admin/exercises/edit.ejs', {
        exercise,
        editMode: true,
        error_msg: 'Erro ao editar exercício.',
      });
    }
  },
];

// Deletar exercício
export const adminDeleteExercise = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    // Remove alternativas
    await prisma.alternative.deleteMany({ where: { questionsId: id } });
    // Remove a questão
    await prisma.question.delete({ where: { id } });
    res.redirect('/admin/exercises');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar exercício.');
  }
};