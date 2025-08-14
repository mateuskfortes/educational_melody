import { Request, Response } from "express";
import { render } from "../utils";

export const getSheetMusic = (req: Request, res: Response) => {
  render(req, res, 'sheet-music', {})
}