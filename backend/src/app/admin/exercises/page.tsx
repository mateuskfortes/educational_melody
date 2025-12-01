"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Exercise = {
  id: number;
  title: string;
  content: string;
  image?: { name: string } | null;
};

export default function AdminExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  useEffect(() => {
    // Recomenda-se criar um endpoint JSON no servidor Express para /api/admin/exercises
    fetch("/api/admin/exercises")
      .then((r) => (r.ok ? r.json() : Promise.resolve([])))
      .then((data) => {
        setExercises(Array.isArray(data) ? data : []);
      })
      .catch(() => setExercises([]));
  }, []);
  return (
    <div>
      <main style={{ maxWidth: 900, margin: "2rem auto", padding: "0 1rem" }}>
        <h1>Administração de Exercícios</h1>
        <a
          href="/admin/exercises/create"
          style={{
            display: "inline-block",
            marginBottom: 12,
            background: "#ef6257",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Novo Exercício
        </a>
        <table
          style={{
            width: "100%",
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Enunciado</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex) => (
              <tr key={ex.id}>
                <td>{ex.id}</td>
                <td>{ex.title}</td>
                <td>
                  {ex.content.length > 60
                    ? ex.content.slice(0, 60) + "..."
                    : ex.content}
                </td>
                <td>
                  {ex.image ? (
                    <Image
                      src={`/uploads/${ex.image.name}`}
                      style={{ maxWidth: 80 }}
                      alt=""
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  <a href={`/admin/exercises/${ex.id}/edit`}>Editar</a>
                  <form
                    action={`/admin/exercises/${ex.id}/delete`}
                    method="POST"
                    style={{ display: "inline", marginLeft: 8 }}
                  >
                    <button
                      type="submit"
                      onClick={(e) => {
                        if (!confirm("Tem certeza que deseja deletar?"))
                          e.preventDefault();
                      }}
                    >
                      Deletar
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {exercises.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: 20 }}>
                  Nenhum exercício encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}
