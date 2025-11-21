import { PrismaClient } from "../../node_modules/.prisma/client/index.js";

const prisma = new PrismaClient();

export const createQuestion = async (content: string, imageId?: number) => {
  return await prisma.question.create({
    data: { content, imageId },
  });
};

export const getQuestions = async () => {
  return await prisma.question.findMany({
    include: { alternatives: true, image: true },
  });
};

export const getQuestionById = async (id: number) => {
  return await prisma.question.findUnique({
    where: { id },
    include: { alternatives: true, image: true },
  });
};

export const updateQuestion = async (
  id: number,
  content: string,
  imageId?: number
) => {
  return await prisma.question.update({
    where: { id },
    data: { content, imageId },
  });
};

export const deleteQuestion = async (id: number) => {
  return await prisma.question.delete({
    where: { id },
  });
};
