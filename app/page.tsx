"use client";

import { useState } from "react";

export default function Home() {
  const [gruss, setGruss] = useState("Viel Schnee & gute Schwünge aus der Lenzerheide! ⛷️");

  return (
    <main className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-6">
      <h1 className="text-white text-4xl font-black mb-8 tracking-wide">
        ✉️ Postkarte aus der Lenzerheide
      </h1>

      {/* Die Postkarte */}
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
        {/* Hintergrundbild */}
        <img
          src="https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&q=80"
          alt="Lenzerheide Winter"
          className="w-full object-cover"
          style={{ height: "420px" }}
        />

        {/* Gruß-Text auf dem Bild */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6"
          style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
        >
          <p className="text-white text-2xl font-bold text-center"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
            {gruss}
          </p>
        </div>
      </div>

      {/* Eingabefeld */}
      <div className="mt-8 w-full max-w-2xl">
        <label className="text-white/80 text-sm mb-2 block">Euer Gruß auf der Postkarte:</label>
        <textarea
          className="w-full rounded-xl p-4 text-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/60 resize-none"
          rows={3}
          value={gruss}
          onChange={(e) => setGruss(e.target.value)}
        />
      </div>
    </main>
  );
}
