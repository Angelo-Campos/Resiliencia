'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TiposDeEstresPage05() {
  const [llaveActiva, setLlaveActiva] = useState<number>(1);
  const [piedrasRestantes, setPiedrasRestantes] = useState<number>(3);

  const vaciarPiedra = () => {
    if (piedrasRestantes > 0) {
      setPiedrasRestantes(piedrasRestantes - 1);
    }
  };

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">

      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
        
        <div className="flex items-center justify-between mb-6">
          <Link href={'/TEstres/page04'}>
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

        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#dcfce7] text-[#166534] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                🌱 PASO • HERRAMIENTAS DE LIBERACIÓN
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                🌿 Misión Final
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              09. Tipos de estrés — 4. Cómo vaciar la mochila
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              ¡Aprende las 4 llaves mágicas para sacar las piedras de tu espalda! Vaciar tu mochila te devuelve la ligereza, la risa y las ganas de jugar.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-2xl text-center flex-shrink-0 shadow-2xs">
            <span className="block text-[9px] font-bold text-emerald-600">Herramientas</span>
            <span className="text-xs font-black">4 Llaves Mágicas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔑</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">Las 4 Llaves para Aligerar la Carga</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Toca cada llave para descubrir su poder de transformación</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#7c3aed] bg-[#ede4fc] px-3 py-1 rounded-full">
                  4 Métodos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                
                <div 
                  onClick={() => setLlaveActiva(1)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                    llaveActiva === 1 ? 'bg-purple-50/70 border-purple-400 ring-2 ring-purple-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base">🗣️</span>
                      <span className="text-[9px] font-black text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Llave 1</span>
                    </div>
                    <h4 className="font-black text-xs text-slate-800 mb-1">Hablar con un adulto seguro</h4>
                    <p className="text-[10px] text-slate-600 font-medium leading-snug">
                      Contarte lo que sientes a mamá, papá o tu maestra favorita. Decir lo que nos asusta quita la mitad del peso en segundos.
                    </p>
                  </div>
                </div>

                <div 
                  onClick={() => setLlaveActiva(2)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                    llaveActiva === 2 ? 'bg-emerald-50/70 border-emerald-400 ring-2 ring-emerald-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base">🎨</span>
                      <span className="text-[9px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Llave 2</span>
                    </div>
                    <h4 className="font-black text-xs text-slate-800 mb-1">El papel de los dibujos mágicos</h4>
                    <p className="text-[10px] text-slate-600 font-medium leading-snug">
                      Dibujar o garabatear la preocupación, colorearla con fuerza y luego arrugar o romper el papel para dejarla ir.
                    </p>
                  </div>
                </div>

                <div 
                  onClick={() => setLlaveActiva(3)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                    llaveActiva === 3 ? 'bg-purple-50/70 border-purple-400 ring-2 ring-purple-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base">🌙</span>
                      <span className="text-[9px] font-black text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Llave 3</span>
                    </div>
                    <h4 className="font-black text-xs text-slate-800 mb-1">Descanso y sueño de lirón</h4>
                    <p className="text-[10px] text-slate-600 font-medium leading-snug">
                      Dormir en tu camita calientita, respirar suave y apagar pantallas brillantes una hora antes de soñar.
                    </p>
                  </div>
                </div>

                <div 
                  onClick={() => setLlaveActiva(4)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                    llaveActiva === 4 ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-300' : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base">🏃‍♂️</span>
                      <span className="text-[9px] font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">Llave 4</span>
                    </div>
                    <h4 className="font-black text-xs text-slate-800 mb-1">Movimiento y juego al aire libre</h4>
                    <p className="text-[10px] text-slate-600 font-medium leading-snug">
                      Correr, trepar o pedalear en bicicleta. Cuando el cuerpo brinca alegre, ¡la mente sacude el polvo y la tensión!
                    </p>
                  </div>
                </div>

              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 mb-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-0.5">
                    Piedras pesadas en tu mochila:
                  </span>
                  <span className="text-xs font-black text-amber-800">
                    {piedrasRestantes} {piedrasRestantes === 1 ? 'Piedra acumulada' : 'Piedras acumuladas'}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {Array.from({ length: piedrasRestantes }).map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs shadow-xs">
                      🪨
                    </div>
                  ))}
                  {piedrasRestantes === 0 && (
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      ✨ ¡Mochila vacía y ligera!
                    </span>
                  )}
                </div>
              </div>
              <button 
                onClick={vaciarPiedra}
                disabled={piedrasRestantes === 0}
                className={`w-full py-3 rounded-2xl font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 ${
                  piedrasRestantes > 0 
                    ? 'bg-[#f39a1e] hover:bg-[#e08b12] text-white cursor-pointer' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>✨</span> {piedrasRestantes > 0 ? '¡Vaciar una piedra de mi mochila ahora!' : '¡Mochila completamente vacía!'} <span>🎒</span>
              </button>
            </div>

            {/* Regla de Oro del Explorador */}
            <div className="bg-[#ede4fc] border border-[#dcd2f6] rounded-2xl p-3.5 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">👑</span>
              <div>
                <span className="text-[10px] font-black text-[#6b21a8] uppercase tracking-wider block mb-0.5">
                  REGLA DE ORO DEL EXPLORADOR
                </span>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;Pedir ayuda no es de débiles, ¡es el truco más sabio de los grandes exploradores!&quot;
                </p>
              </div>
            </div>

          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between mb-3">
                <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  🏆 ¡MÓDULO 09 COMPLETADO!
                </span>
                <span className="text-xs font-extrabold text-slate-700">
                  100 / 100 Pts
                </span>
              </div>

              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 p-1.5 shadow-md flex items-center justify-center mb-3">
                <div className="w-full h-full rounded-full bg-amber-400 text-amber-900 flex items-center justify-center text-4xl shadow-inner">
                  ⭐
                </div>
              </div>

              <h3 className="font-black text-lg text-slate-800 mb-1">
                ¡Maestro Clasificador del Estrés!
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                Has aprendido a distinguir la chispa que impulsa, el viento pasajero y la mochila pesada, ¡y ya sabes cómo vaciarla siempre!
              </p>

              <div className="w-full bg-white rounded-2xl p-3 border border-slate-200/80 mb-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-2">
                  <span>Insignias Desbloqueadas del Tema 09:</span>
                  <span className="text-emerald-700 font-extrabold">4 / 4 Coleccionadas</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-amber-50 p-2 rounded-xl border border-amber-100">
                    <span className="text-base block">⚡</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Chispa</span>
                  </div>
                  <div className="bg-purple-50 p-2 rounded-xl border border-purple-100">
                    <span className="text-base block">💨</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Brisa</span>
                  </div>
                  <div className="bg-rose-50 p-2 rounded-xl border border-rose-100">
                    <span className="text-base block">🎒</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Alerta</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100">
                    <span className="text-base block">🧰</span>
                    <span className="text-[9px] font-extrabold text-slate-600">Vacío</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#e6f4ea] border border-[#b7e4c7] rounded-2xl p-3.5 text-left shadow-2xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">👨‍👩‍👧‍👦</span>
                  <h4 className="font-black text-xs text-[#137333] uppercase tracking-wider">
                    Rincón para la Familia • Pregunta para Casa
                  </h4>
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-emerald-100 mt-2">
                  <p className="text-[11px] font-semibold text-slate-700 italic leading-snug">
                    &quot;¿Qué piedra pesada sientes que podemos sacar juntos de tu mochila hoy antes de dormir?&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/TEstres/page04'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/TEstres/page06'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}