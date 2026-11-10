'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TiposDeEstresPage03() {
  const [opcionMision, setOpcionMision] = useState<string | null>(null);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
        
        <div className="flex items-center justify-between mb-6">
          <Link href={'/TEstres/page02'}>
            <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer">
              ←
            </button>
          </Link>

          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              03 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-3/6 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#fce8ed] text-[#bd1e51] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                ⚠️ PASO • SOBRECARGA Y ALARMA
              </span>
              <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                💤 Distrés (Estrés Negativo)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              09. Tipos de estrés — 2. El estrés de sobrecarga (Distrés)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              Cuando la alarma suena demasiado fuerte o por mucho tiempo y nos agota o asusta. ¡Aprende a reconocer el distrés y cómo pedir ayuda a tiempo!
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-2 rounded-2xl text-center flex-shrink-0 shadow-2xs">
            <span className="block text-[9px] font-bold text-rose-600">Nivel de alarma</span>
            <span className="text-xs font-black">Sobrecarga Activa</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌡️</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">El Termómetro del Distrés (Sobrecarga)</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Aprende cómo avisa el cuerpo cuando el estrés deja de ser útil</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#7c3aed] bg-[#ede4fc] px-3 py-1 rounded-full">
                  Activar escudo de calma
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white rounded-2xl p-4 border border-slate-200/80 mb-4">
                <div className="sm:col-span-4 flex flex-col items-center justify-center p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                  <div className="w-12 h-36 bg-slate-200 rounded-full relative flex flex-col justify-end p-1 mb-2 shadow-inner">
                    <div className="w-full h-3/4 bg-gradient-to-t from-amber-500 via-rose-500 to-red-600 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    ESTADO DEL SISTEMA
                  </span>
                  <span className="text-xs font-black text-rose-600 mt-0.5">
                    ¡Alarma en rojo!
                  </span>
                </div>

                <div className="sm:col-span-8 flex flex-col gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-xs text-emerald-900">Nivel 1: Ruido molesto</h4>
                      <p className="text-[10px] text-emerald-700 font-medium">Inquietud, cosquilleo en las manos y tensión leve.</p>
                    </div>
                    <span className="text-emerald-700 font-black text-sm">✓</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-xs text-amber-900">Nivel 2: Sobrecalentamiento</h4>
                      <p className="text-[10px] text-amber-700 font-medium">Irritabilidad, dolor de cabeza o ganas de llorar.</p>
                    </div>
                    <span className="text-amber-700 font-black text-sm">!</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-xs text-rose-900">Nivel 3: Saturación total</h4>
                      <p className="text-[10px] text-rose-700 font-medium">Bloqueo mental, cansancio extremo y pesadillas.</p>
                    </div>
                    <span className="text-rose-600 font-black text-sm">🛑</span>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-rose-900">Intensidad de la sobrecarga corporal:</span>
                <span className="text-[10px] font-black text-rose-700 bg-white px-2.5 py-0.5 rounded-full border border-rose-200">Alta intensidad — ¡Pide apoyo!</span>
              </div>
            </div>

            <div className="bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">❓</span>
                <div>
                  <h3 className="font-black text-sm text-slate-800">¿Cómo se siente el Distrés a diferencia del Eustrés?</h3>
                  <p className="text-[10px] text-slate-500 font-medium">Compara lo que ocurre en tu cuerpo y mente:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-200">
                  <span className="text-xs font-black text-emerald-800 block mb-1">🟢 Eustrés (Estrés chispa)</span>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    Dura poco tiempo, te da energía para resolver un reto y desaparece con alivio y alegría.
                  </p>
                </div>

                <div className="bg-rose-50/70 rounded-2xl p-3.5 border border-rose-200">
                  <span className="text-xs font-black text-rose-800 block mb-1">🔴 Distrés (Estrés sobrecarga)</span>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    Se queda atascado muchos días, agota tus fuerzas y hace que sientas miedo o ganas de esconderte.
                  </p>
                </div>
              </div>

              <div className="bg-[#ede4fc] border border-[#dcd2f6] rounded-2xl p-3.5 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">💜</span>
                <div>
                  <span className="text-[10px] font-black text-[#6b21a8] uppercase tracking-wider block mb-0.5">
                    ¡La clave de oro del Distrés!
                  </span>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    Cuando el estrés se vuelve distrés, la solución más rápida es hablar con un adulto de confianza. ¡Compartir la alarma la apaga!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fef3c7] border border-[#fde68a] rounded-2xl p-3.5 flex items-center gap-3 shadow-2xs">
              <span className="text-xl flex-shrink-0">💡</span>
              <p className="text-xs font-bold text-amber-900 leading-tight">
                El distrés no significa que seas débil: significa que tu alarma lleva demasiado tiempo encendida.
              </p>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#7c3aed] font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <span>🎯</span> MISIÓN INTERACTIVA
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  Caso #02
                </span>
              </div>

              <h3 className="font-black text-base text-slate-800 mb-2">
                ¿Es Eustrés o Distrés?
              </h3>
              
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs mb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                  <span>📍</span> Situación de detective:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  &quot;Llevas una semana sin poder dormir bien porque sientes que no alcanzarás a terminar tus tareas y te duele la pancita... ¿Qué tipo de estrés es?&quot;
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mb-4">
                <div
                  onClick={() => setOpcionMision('A')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'A'
                      ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    A
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Es Distrés: la alarma está sobrecargada y necesito contárselo a un adulto de confianza.</p>
                  </div>
                </div>

                <div
                  onClick={() => setOpcionMision('B')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'B'
                      ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    B
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Es Eustrés: es solo emoción divertida para jugar.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Medidor de aprendizaje:</span>
                  <span className="text-slate-400 font-medium">Pendiente de responder</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div className="w-1/4 h-full bg-[#f39a1e] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-[#fdf2e9] border border-[#fbd5b5] rounded-2xl p-4 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🦉</span>
              <div>
                <span className="text-[10px] font-black text-[#b45309] uppercase tracking-wider block mb-0.5">
                  CONSEJO DE LA LECHUZA LUPE
                </span>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;¡El Eustrés te da alas para volar; el Distrés te pone piedras en los pies. ¡Si sientes distrés, nunca te lo guardes solo!&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#e6f4ea] border border-[#b7e4c7] rounded-2xl p-3 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#137333] text-white flex items-center justify-center text-sm">
                  🛡️
                </div>
                <div>
                  <div className="text-xs font-black text-[#137333]">
                    +25 Resili-Puntos ganados
                  </div>
                  <div className="text-[10px] font-bold text-slate-600">
                    Insignia desbloqueada: Escudo Anti-Distrés
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/TEstres/page02'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/TEstres/page04'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}