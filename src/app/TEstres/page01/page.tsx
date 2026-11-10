'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TiposDeEstresPage01() {
  const [chispaEncendida, setChispaEncendida] = useState(true);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
          <Link href={'/'}>
            <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer">
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
        <div className="bg-[#faf8f3] rounded-2xl p-4 sm:p-5 border border-[#ede5d4] mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1 text-[#6b21a8] font-extrabold text-[11px] uppercase tracking-wider mb-1">
              <span>🧠</span> Descubrimiento Emocional Infantil
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              09. Tipos de estrés: Chispa de energía vs. Mochila pesada
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              No todos los momentos de estrés son iguales: algunos nos dan súper energía para jugar y ganar retos, mientras que otros se sienten como piedras en la espalda. ¡Aprende a diferenciarlos y descúbrete invencible!
            </p>
          </div>

          <div className="w-24 h-20 bg-purple-100 rounded-2xl flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-2xs">
            <span className="text-4xl">🎒</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="bg-[#fbfbfe] rounded-2xl p-4 border border-[#e8e6f5] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#faedcd] text-[#9a5312] text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Paso 1
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                    <span>🟢</span> Chispa Positiva
                  </span>
                </div>
                <h3 className="font-black text-sm text-slate-800 mb-1">El estrés chispa (Eustrés)</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                  La emoción divertida que sientes antes de subir a una montaña rusa, meter un gol decisivo o presentar un baile frente a tus amigos.
                </p>
                <span className="text-[10px] font-bold text-slate-400">Te prepara para la acción</span>
              </div>
              <button 
                onClick={() => setChispaEncendida(!chispaEncendida)}
                className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs py-2 px-4 rounded-full shadow-2xs transition whitespace-nowrap cursor-pointer flex-shrink-0"
              >
                ⚡ Encender chispa
              </button>
            </div>
            <div className="bg-[#fbfbfe] rounded-2xl p-4 border border-[#e8e6f5] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#ede4fc] text-[#6b21a8] text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Paso 2
                  </span>
                  <span className="text-[10px] font-bold text-purple-700 flex items-center gap-1">
                    <span>💨</span> Rápido como brisa
                  </span>
                </div>
                <h3 className="font-black text-sm text-slate-800 mb-1">El estrés pasajero (Agudo)</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                  Una sorpresa repentina o un susto que dura poquito tiempo y se desvanece suavemente como el viento cuando respiras profundo tres veces.
                </p>
                <span className="text-[10px] font-bold text-slate-400">Dura solo unos minutos</span>
              </div>
              <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-xs py-2 px-4 rounded-full shadow-2xs transition whitespace-nowrap cursor-pointer flex-shrink-0">
                🌬️ Aprender a soltar
              </button>
            </div>
            <div className="bg-[#fbfbfe] rounded-2xl p-4 border border-[#e8e6f5] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#fce8ed] text-[#bd1e51] text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Paso 3
                  </span>
                  <span className="text-[10px] font-bold text-rose-700 flex items-center gap-1">
                    <span>⚠️</span> ¡Cuidado!
                  </span>
                </div>
                <h3 className="font-black text-sm text-slate-800 mb-1">La mochila pesada (Acumulado)</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                  Cuando te preocupas durante varios días seguidos sin contarlo, tu espalda se pone tensa, te da sueño en el cole y la pancita avisa.
                </p>
                <span className="text-[10px] font-bold text-slate-400">Necesita ayuda para vaciarse</span>
              </div>
              <button className="bg-[#bd1e51] hover:bg-[#a01843] text-white font-extrabold text-xs py-2 px-4 rounded-full shadow-2xs transition whitespace-nowrap cursor-pointer flex-shrink-0">
                🎒 Pesar mi mochila
              </button>
            </div>
            <div className="bg-[#fbfbfe] rounded-2xl p-4 border border-[#e8e6f5] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#dcfce7] text-[#166534] text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Paso 4
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                    <span>🌱</span> ¡Solución genial!
                  </span>
                </div>
                <h3 className="font-black text-sm text-slate-800 mb-1">Cómo vaciar la mochila</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                  Hablar con mamá, papá o la profe, dibujar lo que sientes, correr al aire libre y dormir calientito como un lirón para recargar pilas mágicas.
                </p>
                <span className="text-[10px] font-bold text-slate-400">¡Corazón ligero!</span>
              </div>
              <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs py-2 px-4 rounded-full shadow-2xs transition whitespace-nowrap cursor-pointer flex-shrink-0">
                ♡ Soltar cargas
              </button>
            </div>

          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <span>⚖️</span> Laboratorio de las Emociones <span className="bg-purple-100 text-purple-700 text-[9px] px-2 py-0.5 rounded-full font-bold">Interactivo</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed">
                Usa los botones de la izquierda para ver cómo se transforma la balanza entre tu chispa veloz y las piedras pesadas.
              </p>
              <div className="w-full h-32 bg-white rounded-2xl border border-slate-200/80 mb-4 flex flex-col items-center justify-center relative p-3 shadow-inner">
                <div className="flex justify-between w-48 text-xl mb-1">
                  <span>⚡</span>
                  <span>🎒</span>
                </div>
                <div className="w-40 h-2 bg-slate-300 rounded-full relative flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs shadow-md">
                    ⚖️
                  </div>
                </div>
                <div className="flex justify-between w-48 text-[10px] font-extrabold text-slate-500 mt-2">
                  <span>Chispa</span>
                  <span>Mochila</span>
                </div>
              </div>

              <div className="text-center text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200 py-2 rounded-xl">
                <span>🎚️ Balanza equilibrada: Todo en calma</span>
              </div>
            </div>
            <div className="bg-[#fbfbfe] rounded-3xl p-4 border border-[#e8e6f5] shadow-2xs">
              <div className="flex items-center justify-between text-xs font-black text-slate-800 mb-2">
                <span>Medidor de Bienestar de Tobi</span>
                <span className="text-emerald-700">85% Óptimo</span>
              </div>
              <div className="flex justify-between text-[9px] font-bold text-slate-400 mb-1">
                <span>Cansado</span>
                <span>Enérgico</span>
                <span>¡Súper Resiliente!</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5 mb-3">
                <div className="w-4/5 h-full bg-emerald-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200/80">
                <span>Progreso de la lección</span>
                <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-[10px] font-black">100% Completo</span>
              </div>
            </div>
            <div className="bg-[#fdf2e9] border border-[#fbd5b5] rounded-2xl p-3.5 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🦝</span>
              <div>
                <span className="text-[10px] font-black text-[#b45309] uppercase tracking-wider block mb-0.5">
                  CONSEJO DE TOBI
                </span>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;¡Recuerda amiguito! Sentir mariposas en la panza es tu chispa preparándote para brillar.&quot;
                </p>
              </div>
            </div>

          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/TEstres/page02'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}