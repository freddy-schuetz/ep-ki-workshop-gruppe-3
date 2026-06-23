"use client";

import { useEffect, useRef, useState } from "react";

const STATIONEN = [
  {
    nr: 1,
    emoji: "🌍",
    titel: "Die Welt",
    text: "Irgendwo da draußen wartet das perfekte Ski-Abenteuer. Die Reise beginnt.",
    bg: "bg-blue-950",
  },
  {
    nr: 2,
    emoji: "🏔️",
    titel: "Die Alpen rufen",
    text: "Südtirol, Italien. Tief im Ahrntal liegt eines der schönsten Skigebiete Europas.",
    bg: "bg-slate-700",
  },
  {
    nr: 3,
    emoji: "⛷️",
    titel: "Klausberg & Speikboden",
    text: "50 km Pisten, 2.510 m Höhe, Sonne pur. Willkommen im Ahrntal!",
    bg: "bg-sky-800",
  },
  {
    nr: 4,
    emoji: "🏠",
    titel: "Ankommen & Genießen",
    text: "Après-Ski, warme Stube, Südtiroler Küche. Der perfekte Abschluss eines perfekten Tags.",
    bg: "bg-amber-900",
  },
];

function Station({ s }: { s: (typeof STATIONEN)[0] }) {
  const ref = useRef<HTMLElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const beobachter = new IntersectionObserver(
      ([eintrag]) => { if (eintrag.isIntersecting) setSichtbar(true); },
      { threshold: 0.3 }
    );
    if (ref.current) beobachter.observe(ref.current);
    return () => beobachter.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${s.bg} flex min-h-screen flex-col items-center justify-center p-8 text-white`}
    >
      <div
        className="max-w-2xl text-center transition-all duration-1000"
        style={{ opacity: sichtbar ? 1 : 0, transform: sichtbar ? "translateY(0)" : "translateY(40px)" }}
      >
        <div className="text-6xl">{s.emoji}</div>
        <h2 className="mt-6 text-5xl font-black">{s.titel}</h2>
        <p className="mt-4 text-xl opacity-80">{s.text}</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {STATIONEN.map((s) => (
        <Station key={s.nr} s={s} />
      ))}
    </main>
  );
}
