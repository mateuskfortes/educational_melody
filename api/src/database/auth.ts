import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (
  email: string,
  password: string
): Promise<{ user: any; error: any }> => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        is_administrator: false,
      },
    });
    return { user, error: null };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        // Error code P2002 indicates a unique constraint violation
        return { user: null, error: "This email is already in use" };
      }
      return { user: null, error };
    }

    // Handle unexpected errors
    return { user: null, error: "Erro inesperado ao criar usuário" };
  }
};
