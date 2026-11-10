'use client';

import React, { useState } from 'react';
import  Link  from 'next/link';

interface PuntoCuerpo {
  id: number;
  nombre: string;
  badgeTag: string;
  subtitulo: string;
  descripcion: string;
  pistaAlivio: string;
  icono: string;
  colorIcono: string;
}

export default function SenalesEnMiCuerpo() {
  const puntos: PuntoCuerpo[] = [
    {
      id: 1,
      nombre: 'Cabeza',
      badgeTag: 'Punto seleccionado',
      subtitulo: 'Sensor de ideas a Toda Marcha',
      descripcion:
        '"Pensamientos que van muy rápido, como carritos de carreras dando vueltas sin frenar."',
      pistaAlivio:
        'Cierra los ojos un segundito y sopla una vela imaginaria para que los carritos bajen la velocidad.',
      icono: '💡',
      colorIcono: 'bg-amber-100 text-amber-700 border-amber-300',
    },
    {
      id: 2,
      nombre: 'Mandíbula',
      badgeTag: 'Punto seleccionado',
      subtitulo: 'Dientes Apretados o Tensión',
      descripcion:
        '"Apretamos los dientecitos o la boca como si estuviéramos guardando un secreto muy pesado."',
      pistaAlivio:
        'Abre la boca grande como un león bostezando y mueve la mandíbula suavemente de lado a lado.',
      icono: '😬',
      colorIcono: 'bg-purple-100 text-purple-700 border-purple-300',
    },
    {
      id: 3,
      nombre: 'Pecho',
      badgeTag: 'Punto seleccionado',
      subtitulo: 'Corazón Acelerado',
      descripcion:
        '"El corazón tamborilea rápido como si estuviera corriendo una maratón sin moverse."',
      pistaAlivio:
        'Pon tu manita en el pecho, siente los latidos y dile en voz baja: "tranquilo, estamos a salvo".',
      icono: '🫀',
      colorIcono: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    },
    {
      id: 4,
      nombre: 'Pancita',
      badgeTag: 'Punto seleccionado',
      subtitulo: 'Nudito o Mariposas',
      descripcion:
        '"Mariposas revoloteando o un nudito suave que se siente justo antes de un momento importante."',
      pistaAlivio:
        'Haz un masaje suave en círculos alrededor de tu ombligo respirando como un globitó que se infla.',
      icono: '🦋',
      colorIcono: 'bg-rose-100 text-rose-700 border-rose-300',
    },
  ];

  const [puntoSeleccionado, setPuntoSeleccionado] = useState<PuntoCuerpo>(puntos[0]);
  const [opcionMision, setOpcionMision] = useState<number | null>(null);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
            <Link href={'/Estres/page02'}>
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
            </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              03 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-1/2 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#faf8f3] rounded-2xl p-4 sm:p-5 border border-[#ede5d4] mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1 text-[#6b21a8] font-extrabold text-[11px] uppercase tracking-wider mb-1">
              <span>🧠</span> MÓDULO 08 • ESTRÉS Y ALARMA NATURAL
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              08. Estrés — 2. Señales en mi cuerpo
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              ¡Tu cuerpo habla antes de que te des cuenta! Aprende a escanear tus pistas físicas para descubrir cuándo tu pequeño sensor de alarma se ha encendido y necesita un momento de calma.
            </p>
          </div>

          <div className="bg-amber-100 border border-amber-300 text-amber-900 px-4 py-2 rounded-2xl text-center flex-shrink-0 shadow-2xs self-end sm:self-auto">
            <span className="block text-xs font-black">🏆 +25 Pts</span>
            <span className="text-[10px] font-bold">Por explorar</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                    <div className="lg:col-span-7 bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🧘</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">El Mapa del Cuerpo Sabio</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Escáner sensorial interactivo de alertas infantiles</p>
                  </div>
                </div>
                <button className="bg-[#ede4fc] hover:bg-[#dfd3f8] text-[#7c3aed] text-[10px] font-extrabold px-3 py-1 rounded-full transition flex items-center gap-1">
                  <span>🎯</span> Escanear todo
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#f4f0fa] rounded-2xl p-4 border border-[#e2d9f3] mb-4">
                                <div className="sm:col-span-5 flex justify-center py-4 relative">
                  <div className="w-28 h-56 rounded-full border-4 border-[#7c3aed]/40 relative flex flex-col items-center justify-between p-3 bg-white/50 backdrop-blur-2xs">
                                        <button
                      onClick={() => setPuntoSeleccionado(puntos[0])}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition ${
                        puntoSeleccionado.id === 1 ? 'bg-amber-400 ring-4 ring-amber-200 scale-110' : 'bg-amber-200 hover:bg-amber-300'
                      }`}
                    >
                      💡
                    </button>
                    <button
                      onClick={() => setPuntoSeleccionado(puntos[1])}
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition ${
                        puntoSeleccionado.id === 2 ? 'bg-purple-500 text-white ring-4 ring-purple-200 scale-110' : 'bg-purple-300 hover:bg-purple-400'
                      }`}
                    >
                      🤹
                    </button>
                    <button
                      onClick={() => setPuntoSeleccionado(puntos[2])}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition ${
                        puntoSeleccionado.id === 3 ? 'bg-emerald-500 text-white ring-4 ring-emerald-200 scale-110' : 'bg-emerald-300 hover:bg-emerald-400'
                      }`}
                    >
                      🟢
                    </button>
                    <button
                      onClick={() => setPuntoSeleccionado(puntos[3])}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition ${
                        puntoSeleccionado.id === 4 ? 'bg-rose-400 text-white ring-4 ring-rose-200 scale-110' : 'bg-rose-200 hover:bg-rose-300'
                      }`}
                    >
                      🌀
                    </button>

                  </div>
                </div>
                <div className="sm:col-span-7 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-200 text-amber-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {puntoSeleccionado.badgeTag}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                      <span>✔</span> Sonido suave listo
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-base text-slate-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 text-xs flex items-center justify-center font-bold">
                        {puntoSeleccionado.id}
                      </span>
                      1. La {puntoSeleccionado.nombre} Pensativa
                    </h4>
                    <p className="text-[11px] font-bold text-[#7c3aed] mb-1">
                      {puntoSeleccionado.subtitulo}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed bg-white/80 p-2.5 rounded-xl border border-purple-100">
                    {puntoSeleccionado.descripcion}
                  </p>

                  <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                    <span className="text-[10px] font-extrabold text-emerald-800 block mb-0.5">
                      💡 Pista de Alivio Infantil:
                    </span>
                    <p className="text-[11px] font-medium text-emerald-900 leading-snug">
                      {puntoSeleccionado.pistaAlivio}
                    </p>
                  </div>

                  <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-xs py-2 rounded-xl transition shadow-2xs flex items-center justify-center gap-1.5">
                    <span>🔊</span> Escuchar Sonido de Calma
                  </button>
                </div>

              </div>
              <div className="grid grid-cols-4 gap-2">
                {puntos.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPuntoSeleccionado(p)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 border ${
                      puntoSeleccionado.id === p.id
                        ? 'bg-slate-800 text-white border-slate-800'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-amber-200 text-slate-900 text-[10px] font-black flex items-center justify-center">
                      {p.id}
                    </span>
                    <span className="truncate">{p.nombre}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs">
              <div className="flex items-center gap-1.5 text-amber-700 font-extrabold text-[11px] uppercase tracking-wider mb-2">
                <span>🎯</span> MISIÓN INTERACTIVA
              </div>

              <h3 className="font-black text-base text-slate-800 mb-1">
                Chequeo de hoy: ¿Dónde lo sientes tú?
              </h3>
              <p className="text-xs text-slate-500 font-medium mb-3 leading-relaxed">
                Toca la parte de tu cuerpo que más notas cuando tienes mucha tarea acumulada o prisas por la mañana:
              </p>

              <div className="flex flex-col gap-2.5">
                <div
                  onClick={() => setOpcionMision(1)}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                    opcionMision === 1
                      ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🤲</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Hombros como piedras o dientes apretados</p>
                      <p className="text-[10px] text-slate-500">Siento que me encojo hacia arriba</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${opcionMision === 1 ? 'bg-[#7c3aed] border-[#7c3aed]' : 'border-slate-300'}`}></div>
                </div>

                <div
                  onClick={() => setOpcionMision(2)}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                    opcionMision === 2
                      ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🐝</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Un nudito o mariposas en la panza</p>
                      <p className="text-[10px] text-slate-500">Se siente revuelta o con hambre falsa</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${opcionMision === 2 ? 'bg-[#7c3aed] border-[#7c3aed]' : 'border-slate-300'}`}></div>
                </div>

                <div
                  onClick={() => setOpcionMision(3)}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                    opcionMision === 3
                      ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">💓</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Manitas con cosquillas o corazón con prisa</p>
                      <p className="text-[10px] text-slate-500">Quiero mover los dedos o caminar rápido</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${opcionMision === 3 ? 'bg-[#7c3aed] border-[#7c3aed]' : 'border-slate-300'}`}></div>
                </div>
              </div>
            </div>
            <div className="bg-[#f0ebfc] border border-[#e1d6f7] rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-2xs">
                🦉
              </div>
              <div>
                <div className="text-[10px] font-black text-[#6b21a8] uppercase tracking-wider mb-0.5">
                  Lechuza Lupe dice: <span className="font-normal text-purple-700">Consejo Sabio</span>
                </div>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;Cuando notes la señal, no te enfades con tu cuerpo: ¡solo te está avisando! Dale un abrazo a esa parte con una respiración profunda y dile: &apos;Gracias por avisarme, ya estamos a salvo&apos;.&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#e6f4ea] border border-[#b7e4c7] rounded-2xl p-3 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#137333] text-white flex items-center justify-center text-sm">
                  🧘
                </div>
                <div>
                  <div className="text-xs font-black text-[#137333] flex items-center gap-1">
                    Escáner Maestro <span>✓</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-600">
                    Autoconciencia: 100% Calibrado hoy
                  </div>
                </div>
              </div>
              <span className="bg-[#fef3c7] text-[#b45309] font-black text-[10px] px-2.5 py-1 rounded-full border border-amber-200">
                +25 Resili-Puntos
              </span>
            </div>

          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <Link href={'/Estres/page02'}>
          <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
            </Link>
            <Link href={'/Estres/page04'}>
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

    </div>
  );
}