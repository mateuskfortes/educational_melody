import { prisma } from "@/lib/prisma";
import "@/styles/lessons.css";
import Link from "next/link";

export default async function LessonPage() {
  const lessons = await prisma.material.findMany();

  return (
    <main className="student-area">
      <section className="intro">
        <h1>Área do Aluno</h1>
        <p>
          Essa área incluirá diversos tópicos e atividades que visam não apenas
          ensinar teoria musical, mas também aprimorar e testar o conhecimento
          do aluno de maneira dinâmica.
        </p>
      </section>

      <section className="lesson-list">
        <h2>01 Introdução à Teoria Musical</h2>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id} className="lesson-card-box">
              <Link href={`/lessons/${lesson.id}`} className="lesson-card">
                <span className="lesson-link-title">{lesson.title}</span>
                <span className="lesson-time">10&nbsp;min</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
