import { Request, Response } from "express";
import { render } from "../utils.js";

export const getHome = (req: Request, res: Response) => {
  render(req, res, "index.ejs", {});
};
