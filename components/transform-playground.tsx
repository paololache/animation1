"use client";
import React, { useState } from "react";

const devices = {
  escritorio: { label: "Escritorio", scale: [1.05, 1] },
  movil: { label: "Móvil (≤ 768 px)", scale: [0.7, 0.9] },
} as const;

type Device = keyof typeof devices;

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

export function TransformPlayground() {
  const [progress, setProgress] = useState(0);
  const [device, setDevice] = useState<Device>("escritorio");

  const [scaleFrom, scaleTo] = devices[device].scale;
  const rotate = lerp(20, 0, progress);
  const scale = lerp(scaleFrom, scaleTo, progress);
  const translate = lerp(0, -100, progress);

  const readouts = [
    { name: "rotateX", value: `${rotate.toFixed(1)}°`, range: "20° → 0°", note: "La pantalla pasa de inclinada hacia atrás a quedar de frente." },
    { name: "scale", value: scale.toFixed(3), range: `${scaleFrom} → ${scaleTo}`, note: "En escritorio se reduce un poco; en móvil crece para ganar protagonismo." },
    { name: "translateY", value: `${translate.toFixed(0)} px`, range: "0 → −100 px", note: "El título sube mientras la pantalla se endereza." },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div className="rounded-3xl border border-rule bg-white p-6 md:p-10">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tipo de pantalla">
          {(Object.keys(devices) as Device[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setDevice(key)}
              aria-pressed={device === key}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                device === key
                  ? "border-ink bg-ink text-white"
                  : "border-rule text-ink hover:border-ink"
              }`}
            >
              {devices[key].label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex h-64 items-center justify-center overflow-hidden md:h-80">
          <div className="w-full text-center" style={{ perspective: "1000px" }}>
            <p
              className="font-display text-lg font-semibold text-ink"
              style={{ transform: `translateY(${translate * 0.4}px)` }}
            >
              Título
            </p>
            <div
              className="mx-auto mt-3 h-40 w-4/5 rounded-2xl border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-xl md:h-52"
              style={{ transform: `rotateX(${rotate}deg) scale(${scale})` }}
            >
              <div className="grid h-full grid-cols-3 gap-2 rounded-lg bg-gray-100 p-3">
                <div className="col-span-3 h-3 rounded bg-cobalt/70" />
                <div className="rounded bg-rule" />
                <div className="rounded bg-rule" />
                <div className="rounded bg-signal/80" />
              </div>
            </div>
          </div>
        </div>

        <label htmlFor="progress" className="mt-8 flex items-baseline justify-between text-sm">
          <span>Progreso del scroll</span>
          <span className="font-mono text-cobalt">{progress.toFixed(2)}</span>
        </label>
        <input
          id="progress"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="mt-3 w-full accent-cobalt"
        />
        <div className="mt-1 flex justify-between font-mono text-xs text-ink/60">
          <span>0 · la sección entra</span>
          <span>1 · la sección termina</span>
        </div>
      </div>

      <dl className="divide-y divide-rule border-y border-rule">
        {readouts.map((r) => (
          <div key={r.name} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-6">
            <dt className="font-mono text-sm text-ink/70">{r.name}</dt>
            <dd className="row-span-2 self-center text-right font-display text-3xl font-semibold tabular-nums text-ink md:text-4xl">
              {r.value}
            </dd>
            <dd className="text-sm text-ink/70">
              <span className="font-mono text-cobalt">{r.range}</span> · {r.note}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
