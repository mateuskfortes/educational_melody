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
};