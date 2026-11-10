'use client';

import React from 'react';
import Link from 'next/link';

export default function EstresSensorDeAlarma() {
  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
            <Link href={'/'}>
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
            </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              01 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-1/6 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#eaf6ec] text-[#2e7d32] font-extrabold text-[11px] px-3.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            <span>🌿</span> MÓDULO EMOCIONAL CLAVE
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2 flex items-center gap-2">
            08. Estrés: El sensor de alarma de nuestro cuerpo <span>🔔</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold max-w-4xl leading-relaxed">
            El estrés no es un monstruo malo; ¡es como un detector de humo interior que nos avisa cuando algo nos parece difícil o desafiante! Aprende a escucharlo y a calmar la alarma con calma y valentía.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#fcf8ed] rounded-3xl p-5 border border-[#fae2b8] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#fcecc7] text-[#9a5312] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Paso 1
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#fcecc7] text-[#b45309] flex items-center justify-center text-sm">
                    🔔
                  </div>
                </div>

                <h3 className="font-black text-base text-slate-800 mb-1">
                  ¿Qué es el estrés?
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Descubre cómo tu cerebro enciende la alarma protectora cuando hay un reto, un examen o una sorpresa nueva.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-bold text-amber-800 bg-[#faedcd] px-3 py-2 rounded-xl mb-3 flex items-center gap-1.5">
                  <span>💡</span> ¡Tu alarma te quiere cuidar, no asustar!
                </div>
                <button className="w-full bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs py-2.5 rounded-full shadow-xs transition flex items-center justify-center gap-2">
                  <span>⚙️</span> Explorar alarma
                </button>
              </div>
            </div>
            <div className="bg-[#f7f4fc] rounded-3xl p-5 border border-[#e5dcf5] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#ede4fc] text-[#6b21a8] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Paso 2
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#ede4fc] text-[#7c3aed] flex items-center justify-center text-sm">
                    💜
                  </div>
                </div>

                <h3 className="font-black text-base text-slate-800 mb-1">
                  Señales en mi cuerpo
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Nudos en la pancita, hombros apretados y respiración rápida. ¡Aprende a leer tus pistas corporales al instante!
                </p>
              </div>

              <div>
                <div className="text-[11px] font-bold text-purple-900 bg-[#ede4fc] px-3 py-2 rounded-xl mb-3 flex items-center gap-1.5">
                  <span>🕊️</span> El cuerpo habla antes que las palabras.
                </div>
                <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-xs py-2.5 rounded-full shadow-xs transition flex items-center justify-center gap-2">
                  <span>🤸</span> Ver mapa corporal
                </button>
              </div>
            </div>
            <div className="bg-[#fcf8ed] rounded-3xl p-5 border border-[#fae2b8] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#fcecc7] text-[#9a5312] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Paso 3
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#fcecc7] text-[#b45309] flex items-center justify-center text-sm">
                    ❓
                  </div>
                </div>

                <h3 className="font-black text-base text-slate-800 mb-1">
                  Mis detonantes diarios
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Exámenes escolares, prisas matutinas o ruidos muy fuertes: descubre qué situaciones encienden tu chispa interior.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-bold text-amber-800 bg-[#faedcd] px-3 py-2 rounded-xl mb-3 flex items-center gap-1.5">
                  <span>⚡</span> Conocer tu chispa evita el incendio.
                </div>
                <button className="w-full bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs py-2.5 rounded-full shadow-xs transition flex items-center justify-center gap-2">
                  <span>🔍</span> Detectar chispas
                </button>
              </div>
            </div>
            <div className="bg-[#f0fdf4] rounded-3xl p-5 border border-[#dcfce7] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Paso 4
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#22c55e] flex items-center justify-center text-sm">
                    💚
                  </div>
                </div>

                <h3 className="font-black text-base text-slate-800 mb-1">
                  Kit de descarga y calma
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  Sacudida de león, soltar hombros pesados y la respiración de hoja suave para apagar el ruido de la alarma.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-bold text-emerald-800 bg-[#dcfce7] px-3 py-2 rounded-xl mb-3 flex items-center gap-1.5">
                  <span>🌿</span> Herramientas mágicas en tus manos.
                </div>
                <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs py-2.5 rounded-full shadow-xs transition flex items-center justify-center gap-2">
                  <span>🧰</span> Abrir botiquín
                </button>
              </div>
            </div>

          </div>
          <div className="lg:col-span-1 bg-[#f7f5ff] rounded-3xl p-5 border border-[#e8e2f8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-sm text-slate-800 flex items-center gap-1.5">
                  <span>🦉</span> ¿Cómo escuchar al cuerpo?
                </h3>
                <span className="bg-[#ede4fc] text-[#6b21a8] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  20 / 24
                </span>
              </div>
              <div className="relative w-full h-32 bg-[#e8e0f8] rounded-2xl overflow-hidden mb-4 border border-[#dcd2f6] flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <span className="text-4xl">🦉🧸</span>
                  <p className="text-[11px] font-extrabold text-purple-900 mt-1">
                    Sabia Lechuza Lupe
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 mb-4">
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl shadow-2xs border border-purple-100">
                  <span className="w-5 h-5 rounded-full bg-[#7c3aed] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Pon tu mano en el pecho</p>
                    <p className="text-[10px] text-slate-500 font-medium">Siente el latido y dale permiso de descansar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl shadow-2xs border border-purple-100">
                  <span className="w-5 h-5 rounded-full bg-[#7c3aed] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Di en voz baja:</p>
                    <p className="text-[10px] text-slate-500 font-medium">&quot;Mi alarma está sonando, pero estoy seguro.&quot;</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-2.5 rounded-2xl shadow-2xs border border-purple-100">
                  <span className="w-5 h-5 rounded-full bg-[#7c3aed] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Suelta el aire despacio</p>
                    <p className="text-[10px] text-slate-500 font-medium">Imagina que apagas una vela sin hacerla humo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-xs py-3 rounded-full shadow-sm transition mb-3 flex items-center justify-center gap-1">
                Comenzar con el Paso 1 <span>▷</span>
              </button>
              <div className="bg-[#eaf6ec] border border-[#dcfce7] rounded-2xl p-2.5 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-xs">
                    ⏱️
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-emerald-900 leading-tight">Reto de 10 segundos</p>
                    <p className="text-[9px] font-medium text-emerald-700">Haz la respiración de oso con Lupe</p>
                  </div>
                </div>
                <button className="bg-white hover:bg-emerald-50 text-emerald-800 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-emerald-200 transition">
                  Pausar
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <Link href={'/'}>
          <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás 
          </button>
            </Link>
            <Link href={'/Estres/page02'}>
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

    </div>
  );
}