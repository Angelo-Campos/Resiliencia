'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function KitDeDescargayCalma() {
  const [tecnicaSeleccionada, setTecnicaSeleccionada] = useState<number>(1);
  const [temporizadorActivo, setTemporizadorActivo] = useState<boolean>(false);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">

      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
        
        <div className="flex items-center justify-between mb-6">
          <Link href={'/Estres/page04'}>
            <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer">
              ←
            </button>
          </Link>

          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              05 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-5/6 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0fdf4] rounded-2xl p-4 sm:p-5 border border-[#dcfce7] mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                ✨ PASO • HERRAMIENTAS MÁGICAS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              08. Estrés — 4. Kit de descarga y calma
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              ¡Cuando sientas que la alarma no para de sonar, usa estas 3 herramientas mágicas para soltar la energía acumulada y devolver la sonrisa a tu rostro!
            </p>
          </div>

          <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2 rounded-2xl text-center flex-shrink-0 shadow-2xs">
            <span className="block text-[10px] font-bold text-emerald-700">Botiquín Emocional</span>
            <span className="text-xs font-black">3 Técnicas Activas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
          <div className="lg:col-span-7 bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🧰</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">El Botiquín Antiestrés Infantil</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Elige tu técnica para probarla y liberar tensión</p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded-full">
                  Toca cada tarjeta 👆
                </span>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                
                <div 
                  onClick={() => setTecnicaSeleccionada(1)}
                  className={`rounded-2xl p-4 border transition cursor-pointer ${
                    tecnicaSeleccionada === 1 ? 'bg-amber-50/70 border-amber-300 shadow-2xs ring-1 ring-amber-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-black text-sm text-slate-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs flex items-center justify-center font-bold">
                        1
                      </span>
                      La Sacudida del León
                    </h4>
                    <span className="text-base">🦁</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                    Ponte de pie y sacude brazos, piernas y cabeza durante 10 segundos como un león secándose tras la lluvia.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-900 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full">
                      Descarga física
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      ⏱️ 10 Segundos
                    </span>
                  </div>
                </div>
                <div 
                  onClick={() => setTecnicaSeleccionada(2)}
                  className={`rounded-2xl p-4 border transition cursor-pointer ${
                    tecnicaSeleccionada === 2 ? 'bg-emerald-50/70 border-emerald-300 shadow-2xs ring-1 ring-emerald-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-black text-sm text-slate-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-900 text-xs flex items-center justify-center font-bold">
                        2
                      </span>
                      La Respiración de la Vela y la Flor
                    </h4>
                    <span className="text-base">🌸</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                    Huele la flor despacio por la nariz y sopla suave la velita sin apagarla de golpe.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-900 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full">
                      Regulación respiratoria
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      🔄 3 Repeticiones
                    </span>
                  </div>
                </div>
                <div 
                  onClick={() => setTecnicaSeleccionada(3)}
                  className={`rounded-2xl p-4 border transition cursor-pointer ${
                    tecnicaSeleccionada === 3 ? 'bg-purple-50/70 border-purple-300 shadow-2xs ring-1 ring-purple-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-black text-sm text-slate-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-900 text-xs flex items-center justify-center font-bold">
                        3
                      </span>
                      El Abrazo de Mariposa
                    </h4>
                    <span className="text-base">🦋</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                    Cruza tus manos sobre el pecho y date palmaditas suaves alternadas como alas de mariposa.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-purple-100 text-purple-900 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full">
                      Autocalma y cariño
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      ✨ A tu ritmo
                    </span>
                  </div>
                </div>

              </div>
            </div>
            <div className="bg-[#fef3c7] border border-[#fde68a] rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤸‍♂️</span>
                  <h4 className="font-black text-sm text-amber-900">Laboratorio de Práctica en Vivo</h4>
                </div>
                <span className="bg-amber-500 text-white font-black text-[10px] px-2.5 py-0.5 rounded-full">
                  10s
                </span>
              </div>

              <p className="text-xs text-amber-900/90 font-medium leading-relaxed mb-3">
                ¡Haz clic en el botón gigante, levántate de tu silla y sacude el estrés hasta que el temporizador llegue a cero!
              </p>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setTemporizadorActivo(!temporizadorActivo)}
                  className="flex-1 bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs py-3 px-4 rounded-full shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>🔔</span> {temporizadorActivo ? '¡Sacudiendo el estrés...!' : '¡Probar la sacudida del león ahora!'} <span>🦁</span>
                </button>
                <button className="bg-white hover:bg-amber-50 text-amber-900 font-bold text-xs py-3 px-4 rounded-full border border-amber-300 transition cursor-pointer">
                  Reiniciar
                </button>
              </div>
            </div>

            <div className="bg-[#f0ebfc] border border-[#e1d6f7] rounded-2xl p-3.5 mt-3 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-sm flex-shrink-0">
                👑
              </div>
              <div>
                <span className="text-[10px] font-black text-[#6b21a8] uppercase tracking-wider block mb-0.5">
                  REGLA DE ORO
                </span>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;El estrés se descarga con movimiento y se calma con ternura.&quot;
                </p>
              </div>
            </div>

          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between mb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  🏆 ¡MÓDULO 08 COMPLETADO!
                </span>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded-full">
                  100 / 100 Pts
                </span>
              </div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 p-1.5 shadow-md flex items-center justify-center mb-3">
                <div className="w-full h-full rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-4xl shadow-inner">
                  🦉
                </div>
              </div>

              <h3 className="font-black text-lg text-slate-800 mb-1">
                ¡Maestro del Sensor de Alarma!
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                Has descubierto qué es el estrés, identificado las señales de tu cuerpo, conocido tus detonantes y guardado tu kit de descarga.
              </p>
              <div className="w-full bg-white rounded-2xl p-3 border border-slate-200/80 mb-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-2">
                  <span>Colección Tema 08:</span>
                  <span className="text-[#7c3aed]">4 / 4 Recompensas</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-rose-50 p-2 rounded-xl border border-rose-100">
                    <span className="text-base block">🧠</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Sensar</span>
                  </div>
                  <div className="bg-amber-50 p-2 rounded-xl border border-amber-100">
                    <span className="text-base block">⚡</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Señales</span>
                  </div>
                  <div className="bg-purple-50 p-2 rounded-xl border border-purple-100">
                    <span className="text-base block">🎯</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Detonante</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100">
                    <span className="text-base block">🧰</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Botiquín</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-24 bg-amber-100 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center border border-amber-200">
                <div className="text-center p-2">
                  <span className="text-2xl">🌟🧸</span>
                  <p className="text-[10px] font-bold text-amber-900 mt-1">
                    ¡Tu energía está en calma y lista para jugar!
                  </p>
                </div>
              </div>
              <Link href={'/Estres/page06'} className="w-full">
                <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-xs sm:text-sm py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 cursor-pointer">
                  <span>✨</span> ¡Completar Tema 08 y Avanzar al Tema 09! <span>→</span>
                </button>
              </Link>
            </div>

            {/* Rincón para la Familia */}
            <div className="bg-[#e6f4ea] border border-[#b7e4c7] rounded-3xl p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">👨‍👩‍👧‍👦</span>
                <h4 className="font-black text-xs text-[#137333] uppercase tracking-wider">
                  Rincón para la Familia
                </h4>
              </div>
              <p className="text-[10px] font-bold text-slate-600 mb-2">
                Guía para conversar en casa sobre las alarmas del día:
              </p>
              
              <div className="bg-white rounded-2xl p-3 border border-emerald-100">
                <span className="text-[10px] font-extrabold text-emerald-800 block mb-1">
                  💬 Pregunta para la cena o antes de dormir:
                </span>
                <p className="text-[11px] font-semibold text-slate-700 italic leading-snug">
                  &quot;¿Sonó tu alarma de león en algún momento de hoy? ¿Cuál de las tres herramientas mágicas podemos practicar juntos antes de descansar?&quot;
                </p>
              </div>
            </div>

          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/Estres/page04'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/Estres/page06'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}