"use client";

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

export default function Home() {
  return (
    <main>
      {STATIONEN.map((s) => (
        <section
          key={s.nr}
          className={`${s.bg} flex min-h-screen flex-col items-center justify-center p-8 text-white`}
        >
          <div className="max-w-2xl text-center">
            <div className="text-6xl">{s.emoji}</div>
            <h2 className="mt-6 text-5xl font-black">{s.titel}</h2>
            <p className="mt-4 text-xl opacity-80">{s.text}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
