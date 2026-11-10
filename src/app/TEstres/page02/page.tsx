'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TiposDeEstresPage02() {
  const [momentoSeleccionado, setMomentoSeleccionado] = useState(1);
  const [opcionMision, setOpcionMision] = useState<string | null>(null);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
          <Link href={'/TEstres/page01'}>
            <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer">
              ←
            </button>
          </Link>

          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              02 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-2/6 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#faedcd] text-[#9a5312] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                ⚡ PASO • ENERGÍA POSITIVA
              </span>
              <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                🧠 Mente en Acción
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              09. Tipos de estrés — 1. El estrés chispa (Eustrés)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              ¡Es la chispa de superhéroe! Esa emoción cosquillosa antes de una obra escolar, tirar un penalti o subir a la montaña rusa. Te ayuda a brillar, no a asustarte.
            </p>
          </div>

          <div className="bg-amber-100 border border-amber-300 text-amber-900 px-4 py-2 rounded-2xl text-center flex-shrink-0 shadow-2xs self-end sm:self-auto">
            <span className="block text-[9px] font-bold text-amber-700">Modo</span>
            <span className="text-xs font-black">Eustrés</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
          <div className="lg:col-span-7 bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">El Encendedor de Superpoderes</h3>
                    <p className="text-[10px] text-slate-500 font-medium">La chispa interior que te pone alerta y listo</p>
                  </div>
                </div>
                <span className="bg-[#ede4fc] text-[#7c3aed] text-[10px] font-extrabold px-3 py-1 rounded-full">
                  Laboratorio Emocional
                </span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs mb-4 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl shadow-inner flex-shrink-0">
                  🚀
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    <span>✨ Cohete Listo <span className="text-amber-700">Chispa (Eustrés)</span></span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Medidor de entusiasmo:</span>
                    <span className="text-amber-600 font-black">100%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5 mb-2">
                    <div className="w-full h-full bg-amber-500 rounded-full"></div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                    <span>✔</span> <strong>¡Nivel de chispa: 100% Listo para jugar!</strong>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    Tu corazón late un poquito más rápido para llevar oxígeno a tus músculos y a tu cerebro.
                  </p>
                </div>
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
                Toca para ver cuándo se activa tu chispa:
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div 
                  onClick={() => setMomentoSeleccionado(1)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                    momentoSeleccionado === 1 ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-2xs' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm block mb-1">🎯</span>
                  <p className="text-[10px] font-black text-slate-800">Momento 1</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Minutos antes de un gol o baile</p>
                </div>

                <div 
                  onClick={() => setMomentoSeleccionado(2)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                    momentoSeleccionado === 2 ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-2xs' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm block mb-1">🎠</span>
                  <p className="text-[10px] font-black text-slate-800">Momento 2</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Primer día en el parque de juegos</p>
                </div>

                <div 
                  onClick={() => setMomentoSeleccionado(3)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                    momentoSeleccionado === 3 ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-2xs' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm block mb-1">🎁</span>
                  <p className="text-[10px] font-black text-slate-800">Momento 3</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Cuando abres un regalo sorpresa</p>
                </div>
              </div>
              <div className="bg-[#ede4fc] border border-[#dcd2f6] rounded-2xl p-4 mb-4">
                <h4 className="font-black text-xs text-purple-900 mb-1 flex items-center gap-1.5">
                  <span>✨</span> {momentoSeleccionado === 1 ? '¡Minutos antes del gol o presentación!' : momentoSeleccionado === 2 ? '¡Llegando al parque de juegos!' : '¡Abriendo tu gran sorpresa!'}
                </h4>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {momentoSeleccionado === 1 
                    ? 'Sientes cosquillitas y energía veloz en los pies. Tu mente dice: «¡Concéntrate, allá vamos!». Es la adrenalina buena que te hace correr y coordinar mucho mejor.'
                    : momentoSeleccionado === 2
                    ? 'Sientes emoción burbujeante al ver los juegos nuevos listos para ser explorados.'
                    : 'La sorpresa te llena de energía y una sonrisa gigante de oreja a oreja.'}
                </p>
              </div>
            </div>
            <div className="bg-[#fef3c7] border border-[#fde68a] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">☀️</span>
                <span className="text-xs font-black text-amber-900">¡Sentir la chispa de emoción en el pecho!</span>
              </div>
              <span className="text-[10px] font-extrabold text-amber-800 bg-white px-3 py-1 rounded-full border border-amber-200">
                Chispas probadas: 0 veces
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#7c3aed] font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <span>🚀</span> MISIÓN RÁPIDA
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  Reto 1 de 1
                </span>
              </div>

              <h3 className="font-black text-base text-slate-800 mb-2">
                ¿Chispa genial o alarma de peligro?
              </h3>
              
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs mb-3">
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  Mañana te toca recitar un poema corto frente a tu clase y sientes mariposas rápidas en la barriga... ¿Qué te está diciendo tu cuerpo?
                </p>
              </div>
              <div className="flex flex-col gap-2.5 mb-3">
                <div
                  onClick={() => setOpcionMision('A')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'A'
                      ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    A
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">¡Es mi chispa mágica activándose para hablar fuerte y claro!</p>
                    <p className="text-[10px] text-slate-500">Tu cuerpo te está regalando energía para brillar.</p>
                  </div>
                </div>

                <div
                  onClick={() => setOpcionMision('B')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'B'
                      ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    B
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Que todo va a salir mal y debería esconderme.</p>
                    <p className="text-[10px] text-slate-500">Pensar que es un monstruo que nos persigue.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fdf2e9] border border-[#fbd5b5] rounded-2xl p-4 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🦝</span>
              <div>
                <span className="text-[10px] font-black text-[#b45309] uppercase tracking-wider block mb-0.5">
                  CONSEJO DE TOBI EL MAPACHE
                </span>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;¡Las mariposas en la barriga no son para asustarse, ¡solo enséñales a volar en formación con dos respiraciones hondas!&quot;
                </p>
              </div>
            </div>

          </div>

        </div>
        <div className="bg-[#fef3c7] border border-[#fde68a] rounded-2xl p-3.5 mb-6 flex items-center gap-3 shadow-2xs">
          <span className="text-xl flex-shrink-0">👑</span>
          <div>
            <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider block mb-0.5">
              REGLA DE ORO INFANTIL
            </span>
            <p className="text-xs font-extrabold text-slate-800">
              «El estrés chispa dura poquito y te llena de ganas de dar lo mejor de ti.»
            </p>
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/TEstres/page01'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/TEstres/page03'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}