import { NextRequest, NextResponse } from "next/server";
import argon2 from "argon2";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password, isAdministrator } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);
    if (isAdministrator) {
      if (session?.user.role !== "ADMIN") {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 403 }
        );
      }
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create the user with role
    const user = await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
        role: isAdministrator ? "ADMIN" : "USER", // using role enum
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      user,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error creating user" },
      { status: 500 }
    );
  }
}
