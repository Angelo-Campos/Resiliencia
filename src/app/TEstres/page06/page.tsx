'use client';

import React from 'react';
import Link from 'next/link';

export default function TiposDeEstresPage06() {
  const poderes = [
    {
      id: '01',
      titulo: 'Chispa de Eustrés',
      descripcion: 'Aprovecho la energía cosquillosa y divertida antes de jugar, bailar o rendir una prueba.',
      icono: '⚡',
      colorFondo: 'bg-amber-100 text-amber-700',
    },
    {
      id: '02',
      titulo: 'Soplar la Nube Pasajera',
      descripcion: 'Entiendo que los sobresaltos rápidos pasan volando en minutos cuando respiro hondo 3 veces.',
      icono: '💨',
      colorFondo: 'bg-amber-100 text-amber-700',
    },
    {
      id: '03',
      titulo: 'Alerta de Distrés',
      descripcion: 'Reconozco cuándo la alarma dura muchos días seguidos y se siente como piedras en los pies.',
      icono: '🔔',
      colorFondo: 'bg-emerald-100 text-emerald-700',
    },
    {
      id: '04',
      titulo: 'Vaciar la Mochila',
      descripcion: 'Uso las 4 llaves mágicas: desahogarme con mamá o papá, dibujar, moverme y descansar como un lirón.',
      icono: '🎒',
      colorFondo: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex flex-col items-center text-center my-2 relative">
          
          <div className="text-xs font-extrabold text-amber-700 bg-amber-100 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            🧠 ¡Cerebrito salta de alegría por tu logro!
          </div>
          <div className="relative flex flex-col items-center mb-4">
            <div className="flex gap-1 -mb-2 z-0">
              <div className="w-3 h-5 bg-[#bd1e51] rounded-t-sm"></div>
              <div className="w-3 h-5 bg-[#bd1e51] rounded-t-sm"></div>
            </div>

            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 p-2 shadow-lg z-10 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white border-4 border-amber-200 flex flex-col items-center justify-center p-2 relative">
                <span className="text-4xl mb-1">🦝</span>
                <div className="absolute bottom-3 bg-amber-400 text-amber-900 text-[8px] font-black px-2 py-0.5 rounded-full flex gap-1">
                  <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
                </div>
              </div>
            </div>

            <span className="bg-[#bd1e51] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider mt-3 shadow-2xs">
              ★ TEMA 09 • OFICIAL ★
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold text-xs px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <span>✓</span> MAESTRO CLASIFICADOR DEL ESTRÉS
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">
            🌟 ¡Felicitaciones, pequeño gran explorador! 🌟
          </h1>
          <h2 className="text-base sm:text-lg font-extrabold text-[#bd1e51] mb-3">
            Has desbloqueado la Medalla: &quot;Maestro Clasificador del Estrés&quot;
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed mb-8">
            ¡Logro extraordinario! Ahora distingues la chispa genial del eustrés que te impulsa a brillar, dejas pasar la nube del estrés pasajero y sabes cómo pedir ayuda para vaciar cualquier piedra pesada de tu mochila.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {poderes.map((poder) => (
              <div
                key={poder.id}
                className="bg-[#faf8f5] rounded-3xl p-5 border border-[#ede7d9] shadow-2xs flex flex-col justify-between text-left relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-8 h-8 rounded-full ${poder.colorFondo} flex items-center justify-center text-sm shadow-2xs`}>
                      {poder.icono}
                    </div>
                    <span className="text-[10px] font-black text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                      PODER {poder.id}
                    </span>
                  </div>

                  <h3 className="font-black text-sm text-slate-800 mb-1">
                    {poder.titulo}
                  </h3>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                    {poder.descripcion}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full self-start">
                  <span>✔</span> Habilidad Conquistada
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mb-6">
            <Link href={'/'}>
              <button className="bg-gradient-to-r from-amber-400 to-[#f39a1e] hover:from-amber-500 hover:to-[#e08b12] text-white font-extrabold text-sm sm:text-base px-10 py-4 rounded-full shadow-lg transition flex items-center gap-2 cursor-pointer">
                <span>🗺️</span> ¡Volver al Mapa de Temas!
              </button>
            </Link>
          </div>

        </div>
        <div className="pt-4 flex items-center justify-between border-t border-slate-100">
          <Link href={'/TEstres/page05'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/TEstres/page01'}>
            <button className="bg-[#ede4fc] hover:bg-[#e2d5fc] text-[#6b21a8] font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-2xs transition flex items-center gap-2 cursor-pointer">
              <span>🔄</span> Repasar Tema 09
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}