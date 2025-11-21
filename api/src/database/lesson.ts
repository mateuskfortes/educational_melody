import { PrismaClient } from "../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();

export async function inserirLicao(title: string, content: string) {
  try {
    const newLesson = await prisma.material.create({
      data: {
        title,
        content,
        created_at: new Date(),
      },
    });

    return newLesson;
  } catch (error) {
    return { error_msg: "Erro ao criar lição", error };
  }
}

export async function selecionarLicaoPeloId(id: number) {
  try {
    const lesson = await prisma.material.findUnique({
      where: { id },
    });

    return lesson;
  } catch (error) {
    return { error_msg: "Erro ao acessar lição", error };
  }
}

export const selecionarListaLicoes = async () => {
  return await prisma.material.findMany();
};
