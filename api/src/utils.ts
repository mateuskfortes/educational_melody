import { Request, Response } from "express";
import { EjsRenderArgsTemplate } from "./types/utilsTemplate";

// Render the ejs template
export const render = (
  req: Request, 
  res: Response, 
  path: string, 
  {
    administrator_checkbox = req.session?.user?.is_administrator || false, // Check if the user is an administrator
    error_msg = "",
    title = "",
    message = "",
    is_logged_in
  }: EjsRenderArgsTemplate
) => {

  if (!is_logged_in && req.session?.user) is_logged_in = true
  else is_logged_in = false

  return res.render(path, {
    administrator_checkbox,
    error_msg,
    title,
    message,
    is_logged_in,
  });
};
