<<<<<<< Updated upstream
import { Request, Response } from "express";
import { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } from "../database/exercise";
import { render } from "../utils";

export const getQuestionsPage = async (req: Request, res: Response) => {
  const questionList = await getQuestions();
  render(req, res, "questions.ejs", { questionList });
};

export const getQuestionPage = async (req: Request, res: Response) => {
  const question = await getQuestionById(Number(req.params.id));
render(req, res, "question.ejs", { question });
};

export const postCreateQuestion = async (req: Request, res: Response) => {
  const { content, imageId } = req.body;
  await createQuestion(content, imageId ? Number(imageId) : undefined);
  res.redirect("/exercises");
};

export const postUpdateQuestion = async (req: Request, res: Response) => {
  const { id, content, imageId } = req.body;
  await updateQuestion(Number(id), content, imageId ? Number(imageId) : undefined);
  res.redirect("/exercises");
};

export const postDeleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteQuestion(Number(id));
  res.redirect("/exercises");
=======
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { render } from '../utils';

const prisma = new PrismaClient();

export const listExercises = async (req: Request, res: Response) => {
  const exercises = await prisma.question.findMany({
    include: { image: true }
  });
  render(req, res, 'exercises/list.ejs', { exercises });
};

export const getExercise = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const exercise = await prisma.question.findUnique({
    where: { id },
    include: { image: true, alternatives: true }
  });
  render(req, res, 'exercises/solve.ejs', { exercise });
};

export const postExercise = async (req: Request, res: Response) => {
  // Lógica para validar resposta do usuário
  // Exemplo: comparar alternativa marcada com a correta
  // ...
  res.send('Resposta recebida!');
>>>>>>> Stashed changes
};