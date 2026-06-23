"use client";

import { useState, useEffect } from "react";
import { kiBild, kiStimme } from "@/lib/kreativ";

// Geografisch korrekt: Rothorn (2865m) liegt östlich von Lenzerheide.
// Blick westwärts vom Gipfel: felsiges Vorgelände, Alpwiesen, dann das
// Hochplateau (~1480m) mit dem kleinen länglichen Heidsee am Südrand des
// winzig-verstreuten Alpendorfs Lenzerheide. Dahinter Piz Scalottas & Co.
const BILD_PROMPT =
  "Photorealistic scene at the rocky summit of Rothorn mountain (2865m) in Graubünden Switzerland on a clear summer day. " +
  "In the foreground: Lionel Messi wearing the light blue and white Argentina football jersey, smiling, and a young man (Niklas) in casual hiking clothes standing next to him. " +
  "One cow in the left foreground is entirely bright purple like a Milka advertisement cow, standing out vividly. Other cows are normal brown/white. " +
  "Looking WEST from the summit: steep rocky foreground drops into green alpine meadows, then a wide high plateau at 1480m elevation. " +
  "On the plateau: a small elongated lake (Heidsee, roughly 1km long, oval shape) nestled at the southern edge. " +
  "The village of Lenzerheide is TINY and scattered - just a few dozen small alpine hotels, chalets and farmhouses spread loosely across the plateau - NOT a town, NO urban density. " +
  "Behind the plateau: forested mountain slopes and further alpine peaks. Bright blue sky, summer light.";

const SPANISCH_GRUSS = "¡Muchos saludos desde Lenzerheide! Una montaña increíble, un paisaje que quita el aliento. ¡Viva la nieve, viva Suiza!";

export default function Home() {
  const [gruss, setGruss] = useState("Muchos saludos desde Lenzerheide! 🏔️🐄");
  const [bildUrl, setBildUrl] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [laedt, setLaedt] = useState(true);
  const [audioLaedt, setAudioLaedt] = useState(false);

  useEffect(() => {
    kiBild(BILD_PROMPT)
      .then((url) => { setBildUrl(url); setLaedt(false); })
      .catch(() => setLaedt(false));
  }, []);

  function messiSprechen() {
    setAudioLaedt(true);
    kiStimme(SPANISCH_GRUSS)
      .then((url) => { setAudioUrl(url); setAudioLaedt(false); })
      .catch(() => setAudioLaedt(false));
  }

  return (
    <main className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-6">
      <h1 className="text-white text-4xl font-black mb-8 tracking-wide">
        ✉️ Postkarte aus der Lenzerheide
      </h1>

      {/* Die Postkarte */}
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
        {laedt ? (
          <div className="w-full flex items-center justify-center bg-white/10 text-white/60 text-xl"
            style={{ height: "420px" }}>
            ✨ KI malt euer Bild … einen Moment …
          </div>
        ) : bildUrl ? (
          <img
            src={bildUrl}
            alt="Messi, Niklas und eine lila Kuh auf dem Rothorn"
            className="w-full object-cover"
            style={{ height: "420px" }}
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1551524164-687a55dd1126?w=900&q=80"
            alt="Lenzerheide"
            className="w-full object-cover"
            style={{ height: "420px" }}
          />
        )}

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

      {/* Messi spricht! */}
      <div className="mt-6 w-full max-w-2xl flex flex-col items-center gap-3">
        <button
          onClick={messiSprechen}
          disabled={audioLaedt}
          className="bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl text-lg transition-all"
        >
          {audioLaedt ? "⏳ Messi spricht …" : "🎙️ Messi grüsst auf Spanisch"}
        </button>
        {audioUrl && (
          <audio controls src={audioUrl} className="w-full mt-2" />
        )}
      </div>

      {/* Eingabefeld */}
      <div className="mt-6 w-full max-w-2xl">
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
