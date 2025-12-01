"use client";
import { useEffect, useState } from "react";

type Exercise = { id: number; title: string; content: string };

export default function ExercisesList() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  useEffect(() => {
    // Recomenda-se criar um endpoint JSON no servidor Express para /api/exercises
    fetch("/api/exercises")
      .then((r) => (r.ok ? r.json() : Promise.resolve([])))
      .then((data) => {
        setExercises(Array.isArray(data) ? data : []);
      })
      .catch(() => setExercises([]));
  }, []);
  return (
    <div>
      <main style={{ maxWidth: 700, margin: "2rem auto" }}>
        <h1>Lista de Exercícios</h1>
        {exercises.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {exercises.map((ex) => (
              <li
                key={ex.id}
                style={{
                  marginBottom: 16,
                  padding: 12,
                  background: "#fff",
                  borderRadius: 8,
                }}
              >
                <a
                  href={`/exercises/${ex.id}`}
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#ef6257",
                    textDecoration: "none",
                  }}
                >
                  {ex.title}
                </a>
                <p>
                  {ex.content.length > 200
                    ? ex.content.slice(0, 200) + "..."
                    : ex.content}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum exercício encontrado</p>
        )}
      </main>
    </div>
  );
}
