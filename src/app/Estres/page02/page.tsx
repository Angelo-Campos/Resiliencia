'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EstresQueEsElEstres() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
            <Link href={'/Estres/page01'}>
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
            </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              02 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-1/3 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#ede4fc] text-[#6b21a8] font-extrabold text-[11px] px-3.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            <span>🦉</span> PASO • LA ALARMA PROTECTORA
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
              08. Estrés — 1. ¿Qué es el estrés?
            </h1>
            
            <div className="flex items-center gap-2 bg-[#fdf2e9] border border-[#fbd5b5] px-3 py-1.5 rounded-full self-start md:self-auto shadow-2xs">
              <span className="text-sm">🦝</span>
              <span className="text-xs font-extrabold text-[#b45309]">Escuchar con Tobi</span>
              <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full">1:20 min</span>
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold max-w-4xl leading-relaxed">
            El estrés es el sistema de alerta natural de tu cuerpo. No es malo ni peligroso: es tu cerebro activando un escudo mágico de superenergía cuando nota que hay un desafío enfrente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
          <div className="lg:col-span-7 bg-[#fbfbfe] rounded-3xl p-5 sm:p-6 border border-[#e8e6f5] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📡</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">El Detector de Humo Interior</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Tu cerebro tiene un sensor amigable que te cuida</p>
                  </div>
                </div>
                <span className="bg-[#ede4fc] text-[#7c3aed] text-[10px] font-extrabold px-3 py-1 rounded-full">
                  Simulador Activo
                </span>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs mb-4 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-28 h-28 rounded-full bg-[#dcfce7] border-4 border-[#bbf7d0] flex flex-col items-center justify-center text-center p-2 shadow-inner flex-shrink-0">
                  <span className="text-2xl mb-1">🟢</span>
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider">Modo Seguro</span>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                    ESTADO ACTUAL DEL SENSOR:
                  </span>
                  <h4 className="font-black text-base text-emerald-700 mb-1">
                    Luz Verde: En Calma
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                    Tu cuerpo está relajado jugando, dibujando o leyendo tranquilamente. Todo está en paz y tu cuerpo recarga energías.
                  </p>
                  <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                    🛡️ Escudo Mágico en Reposo
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5 text-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto mb-1"></div>
                  <p className="text-[11px] font-black text-slate-800">1. Modo Seguro</p>
                  <p className="text-[9px] text-slate-500 font-medium">Cuerpo tranquilo, lectura y juegos en calma.</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center opacity-80">
                  <div className="w-4 h-4 rounded-full bg-amber-400 mx-auto mb-1"></div>
                  <p className="text-[11px] font-black text-slate-800">2. Alerta Curiosa</p>
                  <p className="text-[9px] text-slate-500 font-medium">Llega un reto nuevo: ojos abiertos y chispa lista.</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center opacity-80">
                  <div className="w-4 h-4 rounded-full bg-rose-500 mx-auto mb-1"></div>
                  <p className="text-[11px] font-black text-slate-800">3. Alarma Fuerte</p>
                  <p className="text-[9px] text-slate-500 font-medium">¡Mucho a la vez! El cerebro pide una pausa suave.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#ede4fc] border border-[#dcd2f6] rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎛️</span>
                <p className="text-xs font-bold text-slate-700">¿Quieres probar cómo suena y cambia tu detector?</p>
              </div>
              <button className="w-full sm:w-auto bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-xs transition whitespace-nowrap">
                🔔 ¡Tocar botón de prueba de alarma!
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#faf8f5] rounded-3xl p-5 sm:p-6 border border-[#f0ece1] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#7c3aed] font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <span>🎯</span> Misión Interactiva
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  Reto 01 / 01
                </span>
              </div>

              <h3 className="font-black text-base text-slate-800 mb-3">
                ¿Verdadero o Falso sobre el estrés?
              </h3>
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">
                  <span>💭</span> Imagina esta situación:
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  &quot;Cuando tengo que dar una exposición en el colegio y siento cosquillitas en la panza y energía veloz... ¿Eso es el estrés ayudándome a estar súper atento?&quot;
                </p>
              </div>
              <div className="flex flex-col gap-2.5 mb-4">
                <div 
                  onClick={() => setOpcionSeleccionada('A')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-center gap-3 ${
                    opcionSeleccionada === 'A' 
                      ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400 shadow-2xs' 
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0">
                    A
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    ¡Sí! Es mi energía enfocada para dar lo mejor.
                  </span>
                </div>

                <div 
                  onClick={() => setOpcionSeleccionada('B')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-center gap-3 ${
                    opcionSeleccionada === 'B' 
                      ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400 shadow-2xs' 
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0">
                    B
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    No, significa que todo va a salir mal.
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Medidor de comprensión:</span>
                  <span className="text-emerald-700 font-black">100% Entendido</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div className="w-full h-full bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-[#fef3c7] border border-[#fde68a] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center text-base shadow-2xs">
                  🏆
                </div>
                <div>
                  <div className="text-[9px] font-black text-amber-800 uppercase tracking-wider">
                    RECOMPENSA DESBLOQUEADA
                  </div>
                  <div className="text-xs font-extrabold text-slate-800">
                    +25 Resili-Puntos
                  </div>
                  <div className="text-[10px] font-medium text-slate-600">
                    Medalla: Detective de Alarmas 🏅
                  </div>
                </div>
              </div>
              <span className="bg-[#15803d] text-white font-black text-[10px] px-3 py-1 rounded-full shadow-2xs">
                ¡Completado!
              </span>
            </div>

          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-6 pt-2">
                    <div className="md:col-span-7 bg-[#fdf2e9] border border-[#fbd5b5] rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f39a1e] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-2xs">
              🦝
            </div>
            <div>
              <span className="text-[10px] font-black text-[#b45309] uppercase tracking-wider">
                Consejo de Tobi el Mapache Resiliente: <span className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded text-[9px]">¡Amigo Sabio!</span>
              </span>
              <p className="text-xs font-bold text-slate-700 leading-snug">
                &quot;¡Tu alarma no quiere asustarte, solo quiere cuidarte! Escúchala como a un amigo fiel que te avisa cuando es hora de respirar o saltar a la acción.&quot;
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-[#f1eff8] border border-[#e2def5] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">📖</span>
              <div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">
                  PRÓXIMO PASO EN LA AVENTURA
                </span>
                <span className="text-xs font-extrabold text-slate-800">
                  2. Señales en el cuerpo
                </span>
              </div>
            </div>
            <span className="text-[#3b4878] font-bold text-sm">→</span>
          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <Link href={'/Estres/page01'}>
          <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
        </Link>
        <Link href={'/Estres/page03'}>
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

    </div>
  );
}