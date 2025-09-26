import { Request, Response } from "express";
import { EjsRenderArgsTemplate } from "./types/utilsTemplate";

export const render = (
  req: Request,
  res: Response,
  path: string,
  {
    administrator_checkbox = req.session?.user?.is_administrator || false,
    error_msg = "",
    title = "",
    message = "",
    question = {},
    questionList = [],
    exercises = undefined,
    exercise = undefined, // adicione esta linha
    lesson = {},
    lessonList = []
  }: EjsRenderArgsTemplate = {}
) => {
  const is_logged_in = !!req.session?.user;

  return res.render(path, {
    administrator_checkbox,
    error_msg,
    title,
    message,
    is_logged_in,
    question,
    questionList,
    exercises,
    exercise, // adicione esta linha
    lesson,
    lessonList
  });
};
