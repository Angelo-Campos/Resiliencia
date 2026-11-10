'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MisDetonantesDiarios() {
  const [detonante1, setDetonante1] = useState<string | null>(null);
  const [detonante2, setDetonante2] = useState<string | null>(null);
  const [detonante3, setDetonante3] = useState<string | null>(null);
  const [detonante4, setDetonante4] = useState<string | null>(null);
  const [opcionMision, setOpcionMision] = useState<string | null>(null);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
          <Link href={'/Estres/page03'}>
            <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer">
              ←
            </button>
          </Link>

          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              04 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-2/3 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#faf8f3] rounded-2xl p-4 sm:p-5 border border-[#ede5d4] mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#ede4fc] text-[#6b21a8] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                MÓDULO 08 • TEMA CLAVE
              </span>
              <span className="text-[10px] font-bold text-slate-500">
                Autoconocimiento emocional
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              08. Estrés — 3. Mis detonantes diarios
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              Un detonante es como la chispa que enciende la mecha. Si reconoces qué situaciones te activan el estrés, puedes prepararte como un gran héroe antes de que comiencen.
            </p>
          </div>

          <div className="w-24 h-20 bg-purple-100 rounded-2xl flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-2xs">
            <span className="text-4xl">✨</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                    <div className="lg:col-span-7 bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">El Tablero de las Chispas Comunes</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Toca para elegir si te pasa a veces o rara vez te afecta</p>
                  </div>
                </div>
                <span className="bg-[#faedcd] text-[#9a5312] text-[10px] font-extrabold px-3 py-1 rounded-full">
                  Elige tus 2 mayores
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm">
                        ✏️
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        Sin marcar
                      </span>
                    </div>
                    <h4 className="font-black text-sm text-slate-800 mb-1">Exámenes y notas</h4>
                    <p className="text-[11px] text-slate-600 font-medium leading-snug mb-3">
                      Sentir miedo o cosquillas fuertes en la barriga por equivocarse en una hoja de preguntas.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100">
                    <button 
                      onClick={() => setDetonante1('a-veces')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante1 === 'a-veces' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Me pasa a veces
                    </button>
                    <button 
                      onClick={() => setDetonante1('rara-vez')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante1 === 'rara-vez' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Rara vez
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm">
                        ⏰
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        Sin marcar
                      </span>
                    </div>
                    <h4 className="font-black text-sm text-slate-800 mb-1">Prisas matutinas</h4>
                    <p className="text-[11px] text-slate-600 font-medium leading-snug mb-3">
                      Correr sin encontrar los zapatos porque ya se hace tarde para subir al autobús o entrar al cole.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100">
                    <button 
                      onClick={() => setDetonante2('a-veces')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante2 === 'a-veces' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Me pasa a veces
                    </button>
                    <button 
                      onClick={() => setDetonante2('rara-vez')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante2 === 'rara-vez' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Rara vez
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">
                        🔊
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        Sin marcar
                      </span>
                    </div>
                    <h4 className="font-black text-sm text-slate-800 mb-1">Ruido y caos</h4>
                    <p className="text-[11px] text-slate-600 font-medium leading-snug mb-3">
                      Mucho griterío, televisión con volumen muy alto y demasiadas cosas tiradas al mismo tiempo.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100">
                    <button 
                      onClick={() => setDetonante3('a-veces')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante3 === 'a-veces' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Me pasa a veces
                    </button>
                    <button 
                      onClick={() => setDetonante3('rara-vez')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante3 === 'rara-vez' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Rara vez
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm">
                        🌪️
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        Sin marcar
                      </span>
                    </div>
                    <h4 className="font-black text-sm text-slate-800 mb-1">Cambios imprevistos</h4>
                    <p className="text-[11px] text-slate-600 font-medium leading-snug mb-3">
                      Cuando se cancela una salida que esperabas con ilusión o te cambian los planes de repente.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100">
                    <button 
                      onClick={() => setDetonante4('a-veces')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante4 === 'a-veces' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Me pasa a veces
                    </button>
                    <button 
                      onClick={() => setDetonante4('rara-vez')}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold transition border ${
                        detonante4 === 'rara-vez' ? 'bg-[#7c3aed] text-white border-[#7c3aed]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Rara vez
                    </button>
                  </div>
                </div>

              </div>
            </div>
            <div className="bg-[#fef3c7] border border-[#fde68a] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🎒</span>
                <div>
                  <h4 className="font-black text-xs text-amber-900">Mochila de Superpoderes</h4>
                  <p className="text-[10px] font-medium text-amber-800">Guarda lo aprendido para que tu kit te avise a tiempo.</p>
                </div>
              </div>
              <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs px-4 py-2 rounded-full shadow-2xs transition whitespace-nowrap">
                ♡ ¡Guardar en mi mochila!
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#7c3aed] font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <span>🎯</span> MISIÓN INTERACTIVA
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  +25 Puntos
                </span>
              </div>

              <h3 className="font-black text-base text-slate-800 mb-2">
                Plan de Anticipación
              </h3>
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs mb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                  <span>📍</span> SITUACIÓN EN EL COLEGIO:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  &quot;Mañana tienes una prueba de matemáticas y empiezas a sentir que el tiempo no alcanza y tu pecho late más rápido. ¿Qué haces?&quot;
                </p>
              </div>
              <div className="flex flex-col gap-2.5 mb-3">
                <div
                  onClick={() => setOpcionMision('A')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'A'
                      ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    A
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Repasar 20 minutos con calma</p>
                    <p className="text-[10px] text-slate-500">Preparar los lápices en la mochila y pedirle a mamá o papá un abrazo tibio antes de dormir.</p>
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
                    <p className="text-xs font-bold text-slate-800">Quedarme despierto hasta muy tarde</p>
                    <p className="text-[10px] text-slate-500">Preocuparme en la cama, enojarme y quejarme sin preparar mis cuadernos.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f0ebfc] border border-[#e1d6f7] rounded-2xl p-3 flex items-start gap-2.5">
                <span className="text-xl flex-shrink-0">🦝</span>
                <div>
                  <span className="text-[10px] font-black text-[#6b21a8] uppercase tracking-wider block mb-0.5">
                    Consejo del Mapache Tobi:
                  </span>
                  <p className="text-[11px] font-bold text-slate-700 italic leading-snug">
                    &quot;Preparar tus cosas con calma apaga la chispa antes de que haya humo. ¡Elige una opción arriba!&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#e6f4ea] border border-[#b7e4c7] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#137333] text-white flex items-center justify-center text-sm">
                  🏆
                </div>
                <div>
                  <div className="text-xs font-black text-[#137333] flex items-center gap-1">
                    LOGRO DESBLOQUEABLE <span>✓</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-600">
                    Medalla: Estratega Preventivo
                  </div>
                </div>
              </div>
              <span className="bg-[#fef3c7] text-[#b45309] font-black text-[10px] px-2.5 py-1 rounded-full border border-amber-200">
                +25 Puntos
              </span>
            </div>

          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/Estres/page03'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/Estres/page05'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}   