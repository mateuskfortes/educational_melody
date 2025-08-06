import { Request, RequestHandler, Response } from "express";
import { render } from "../utils";
import { selecionarLicaoPeloId, selecionarListaLicoes, inserirLicao } from "../database/lesson"

export async function getLessons(req: Request, res: Response) {

  try {
    const lessonList = await selecionarListaLicoes()
    render(req, res.status(200), 'lessons', { lessonList: lessonList })

  } catch (e) {
    render(req, res.status(500), 'lessons', { lessonList: [] })
  }
}

export async function getLesson(req: Request, res: Response) {

  const idParam = Number(req.params.id);

  const result = await selecionarLicaoPeloId(idParam);


  if (!result || (result as any).error_msg) {

    return render(req, res.status(404), "lesson", {
      error_msg: (result as any)?.error_msg || "Lição não encontrada",
      title: `Lição #${idParam}`,
      lesson: {},
    });

  }

  render(req, res, "lesson", {
    title: `Lição #${idParam}`,
    lesson: result,
  });

}

export async function getCreateLesson(req: Request, res: Response) {

  if (!req.session.user?.is_administrator) {

    res.status(403).send()

    return
  }

  render(req, res, 'create_lesson', {})

  return
};

export async function postCreateLesson(req: Request, res: Response) {

  if (!req.session.user?.is_administrator) {
    res.status(403).send()
    return
  }


  const { title, content } = req.body;

  if (!title || title.trim() === "") {

    return render(req, res.status(422), "create_lesson", {
      error_msg: "Título obrigatório",
      title: "Criar Lição",
    });

  }

  if (!content || content.trim() === "") {

    return render(req, res.status(422), "create_lesson", {
      error_msg: "Conteúdo obrigatório",
      title: "Criar Lição",
    });

  }

  const result = await inserirLicao(title, content);

  if ((result as any).error) {

    return render(req, res.status(500), "create_lesson", {
      error_msg: (result as any).error_msg,
      title: "Criar Lição",
    });

  }

  const newLesson = result as any;

  res.status(302).redirect(`/lesson/view/${newLesson.id}`);

  return
};