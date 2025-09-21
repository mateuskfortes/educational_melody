import { Request, Response } from "express";
import { EjsRenderArgsTemplate } from "./types/utilsTemplate";

// Render the ejs template
export const render = (
  req: Request, 
  res: Response, 
  path: string, 
<<<<<<< Updated upstream
  {
    administrator_checkbox = req.session?.user?.is_administrator || false, // Check if the user is an administrator
    error_msg = "",
    title = "",
    message = "",
    question = {},
    questionList = [],
  }: EjsRenderArgsTemplate
=======
  data: EjsRenderArgsTemplate = {}
>>>>>>> Stashed changes
) => {
  const is_logged_in = !!req.session?.user;

  return res.render(path, {
    ...data, // <-- repassa todos os dados, incluindo exercises/exercise
    administrator_checkbox: data.administrator_checkbox ?? (req.session?.user?.is_administrator || false),
    error_msg: data.error_msg ?? "",
    title: data.title ?? "",
    message: data.message ?? "",
    is_logged_in,
    question,
    questionList
  });
};
