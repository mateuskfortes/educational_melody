import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import argon2 from "argon2"

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { username, email, password, is_administrator } = body

    if (!username || !email || !password) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Verifica se o e-mail já existe
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: "E-mail já cadastrado" }, { status: 400 })
    }

    // Criptografa a senha
    const hashedPassword = await argon2.hash(password)

    // Cria o usuário
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        is_administrator: Boolean(is_administrator),
      },
    })

    return NextResponse.json({ message: "Usuário criado com sucesso", userId: user.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 })
  }
}
