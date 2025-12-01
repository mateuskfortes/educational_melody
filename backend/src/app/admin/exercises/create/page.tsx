"use client";
import { useState } from "react";

export default function AdminCreateExercise() {
  const [alternatives, setAlternatives] = useState(["", ""]);
  const addAlt = () => setAlternatives((prev) => [...prev, ""]);
  const updateAlt = (i: number, v: string) =>
    setAlternatives((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  return (
    <div>
      <main style={{ maxWidth: 600, margin: "2rem auto" }}>
        <h1>Criar Exercício</h1>
        <form
          action="/api/admin/exercises"
          method="POST"
          encType="multipart/form-data"
          style={{ background: "#fff", padding: 20, borderRadius: 8 }}
        >
          <label>Título:</label>
          <br />
          <input
            name="title"
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
          <label>Enunciado:</label>
          <br />
          <textarea
            name="content"
            required
            style={{ width: "100%", height: 120, marginBottom: 12 }}
          />
          <label>Alternativas:</label>
          {alternatives.map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <input
                name={`alternatives[${i}][content]`}
                value={a}
                onChange={(e) => updateAlt(i, e.target.value)}
                style={{ flex: 1 }}
              />
              <label style={{ display: "flex", alignItems: "center" }}>
                <input type="radio" name="correct" value={i} /> correta
              </label>
            </div>
          ))}
          <button type="button" onClick={addAlt} style={{ marginBottom: 12 }}>
            Adicionar alternativa
          </button>
          <div>
            <label>Imagem (opcional):</label>
            <br />
            <input type="file" name="image" accept="image/*" />
          </div>
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
              Criar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
