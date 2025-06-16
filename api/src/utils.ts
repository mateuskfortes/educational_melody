import { Request, Response } from "express";
import { EjsRenderArgsTemplate } from "./types/utilsTemplate";

// Render the ejs template
export const render = (
  req: Request, 
  res: Response, 
  path: string, 
  {
    administrator_checkbox = req.session.user?.is_administrator || false, // Check if the user is an administrator
    error_msg = "",
    title = "",
    message =""
  }: EjsRenderArgsTemplate
) => {
  return res.render(path, {
    administrator_checkbox,
    error_msg,
    title,
    message,
  });
};
