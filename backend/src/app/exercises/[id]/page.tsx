"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

type Alternative = { id?: number; content: string; is_correct?: boolean };
type Exercise = {
  id: number;
  title: string;
  content: string;
  alternatives: Alternative[];
};

export default function ExerciseSolve({ params }: { params: { id: string } }) {
  const id = params?.id;
  const [exercise, setExercise] = useState<Exercise | null>(null);
  useEffect(() => {
    if (!id) return;
    fetch(`/api/exercises/${id}`)
      .then((r) => (r.ok ? r.json() : Promise.resolve(null)))
      .then((data) => setExercise(data))
      .catch(() => setExercise(null));
  }, [id]);
  if (!exercise)
    return (
      <div>
        <Header />
        <main style={{ maxWidth: 700, margin: "2rem auto" }}>
          Carregando...
        </main>
      </div>
    );
  return (
    <div>
      <main style={{ maxWidth: 700, margin: "2rem auto" }}>
        <h1>{exercise.title}</h1>
        <p>{exercise.content}</p>
        <form action={`/api/exercises/${exercise.id}`} method="POST">
          {exercise.alternatives.map((alt, idx) => (
            <div key={idx}>
              <label>
                <input type="radio" name="choice" value={idx} /> {alt.content}
              </label>
            </div>
          ))}
          <div style={{ marginTop: 12 }}>
            <button
              type="submit"
              style={{
                background: "#ef6257",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: 6,
              }}
            >
              Enviar resposta
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
