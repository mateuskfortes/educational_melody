import { Request, Response } from "express";
import { selecionarLicaoPeloId } from "../../database/lesson";
import { render } from "../../utils";

export async function getLesson(req: Request, res: Response) {

  const idParam = Number(req.params.id);

  const result = await selecionarLicaoPeloId(idParam);


  if (!result || (result as any).error_msg) {

    return render(req, res.status(404), "lesson", {
      error_msg: (result as any)?.error_msg || "Lição não encontrada",
      title: `Lição #${idParam}`,
      lesson: {},
    });

  }

  render(req, res, "lesson", {
    title: `Lição #${idParam}`,
    lesson: result,
  });

}