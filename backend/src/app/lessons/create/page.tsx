import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import "@/styles/lessons.css";
import Link from "next/link";

async function create(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();

  if (!title || !content) {
    throw new Error("Título e conteúdo são obrigatórios");
  }

  try {
    await prisma.material.create({
      data: {
        title,
        content,
        created_at: new Date(),
      },
    });
  } catch (error) {
    console.error("Erro ao criar lição:", error);
    throw new Error("Erro ao criar lição");
  }

  revalidatePath("/lessons");
  redirect("/lessons");
}

export default function CreateLessonPage() {
  return (
    <main className="lesson-create-container">
      <Link href="/lessons" className="back-link">
        ← Voltar para Aulas
      </Link>

      <div className="lesson-create-card">
        <header className="lesson-create-header">
          <h1 className="lesson-create-title">Criar Nova Aula</h1>
          <p className="lesson-create-subtitle">
            Preencha os campos abaixo para adicionar uma nova aula
          </p>
        </header>

        <form action={create} className="lesson-create-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Título da Aula
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              placeholder="Ex: Introdução à Teoria Musical"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">
              Conteúdo da Aula
            </label>
            <textarea
              id="content"
              name="content"
              className="form-textarea"
              rows={12}
              placeholder="Descreva o conteúdo da aula..."
              required
            ></textarea>
          </div>

          <button type="submit" className="form-submit-btn">
            Criar Aula
          </button>
        </form>
      </div>
    </main>
  );
}
