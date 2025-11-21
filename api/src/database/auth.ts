import {
  Prisma,
  PrismaClient,
} from "../../node_modules/.prisma/client/index.js";
import { UserTemplate } from "../types/authTemplate.js";

const prisma = new PrismaClient();

export const createUser = async (
  username: string,
  email: string,
  password: string,
  is_administrator: boolean
): Promise<{
  user?: UserTemplate;
  error_msg?: string;
  error?: Error | unknown;
}> => {
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        is_administrator,
      },
    });
    return { user };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if ((error as any).code === "P2002") {
        // Error code P2002 indicates a unique constraint violation
        return { error_msg: "This email is already in use", error };
      }
      console.log(error);
      return { error_msg: "Erro inesperado ao criar usuário", error };
    }
    console.error(error);
    // Handle unexpected errors
    console.log(error);
    return { error_msg: "Erro inesperado ao criar usuário", error };
  }
};

export const getUserByEmail = async (
  email: string
): Promise<{
  user?: UserTemplate;
  error_msg?: string;
  error?: Error | unknown;
}> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return { user: user ?? undefined };
  } catch (error) {
    // Handle unexpected errors
    return { error_msg: "Erro inesperado ao buscar usuário", error };
  }
};
