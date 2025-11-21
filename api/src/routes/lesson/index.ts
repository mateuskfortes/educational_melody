import { Request, Response } from "express";
import { selecionarListaLicoes } from "../../database/lesson.js";
import { render } from "../../utils.js";

export async function getLessons(req: Request, res: Response) {
  try {
    const lessonList = await selecionarListaLicoes();
    render(req, res.status(200), "lessons", { lessonList: lessonList });
  } catch (e) {
    render(req, res.status(500), "lessons", { lessonList: [] });
  }
}
