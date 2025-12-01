import { prisma } from "@/lib/prisma";
import "@/styles/lessons.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ViewLesson({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = await prisma.material.findUnique({
    where: { id: Number(id) },
  });

  if (!lesson) {
    notFound();
  }

  return (
    <main className="lesson-view-container">
      <Link href="/lessons" className="back-link">
        ← Voltar para Aulas
      </Link>

      <article className="lesson-article">
        <header className="lesson-header">
          <h1 className="lesson-title">{lesson.title}</h1>
          <time
            className="lesson-date"
            dateTime={lesson.created_at.toISOString()}
          >
            Criada em:{" "}
            {new Date(lesson.created_at).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </header>

        <section className="lesson-content">
          <p>{lesson.content}</p>
        </section>
      </article>
    </main>
  );
}
