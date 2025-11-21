import { Request, Response } from "express";
import { PrismaClient } from "../../node_modules/.prisma/client/index.js";
import { render } from "../utils.js";

const prisma = new PrismaClient();

export const listExercises = async (req: Request, res: Response) => {
  const exercises = await prisma.question.findMany({
    include: { image: true },
  });
  render(req, res, "exercises/list.ejs", { exercises });
};

export const getExercise = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const exercise = await prisma.question.findUnique({
    where: { id },
    include: { image: true, alternatives: true },
  });
  console.log("exercise:", exercise); // Adicione este log
  render(req, res, "exercises/solve.ejs", { exercise });
};

export const postExercise = async (req: Request, res: Response) => {
  // Lógica para validar resposta do usuário
  // Exemplo: comparar alternativa marcada com a correta
  // ...
  res.send("Resposta recebida!");
};
