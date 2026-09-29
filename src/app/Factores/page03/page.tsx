'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function AprendemosConElEjemplo() {
  return (
    <div data-aos="fade-in" className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      
      {/* Header superior externo */}
      

      {/* Tarjeta blanca contenedora principal */}
      <main className="w-full max-w-6xl bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden my-auto">
        
        {/* Barra superior interna */}
        <div className="flex items-center justify-between mb-6">
            <Link href="/tema02/page02">
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
            </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              03 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-1/2 h-full bg-[#e12454] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Sección de Encabezado y Título */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#fce8f3] text-[#bd1e51] font-extrabold text-[11px] px-3.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            <span>🔍</span> APRENDER DE LOS DEMÁS
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">
            Aprendemos con el ejemplo
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed max-w-3xl">
            Cuando vemos cómo otros resuelven un problema con calma,{' '}
            <span className="text-[#e12454] font-extrabold">
              ¡nuestro cerebro aprende cómo hacerlo también!
            </span>
          </p>
        </div>

        {/* GRID DE 4 TARJETAS EN 1 SOLA FILA CON LÍNEAS CONECTORAS */}
        <div className="relative my-4">
          
          {/* Línea conectora horizontal detrás de las tarjetas */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 items-stretch">
            
            {/* Paso 1: OBSERVO */}
            <div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#fce4ec] text-[#bd1e51] font-extrabold text-xs flex items-center justify-center">
                    1
                  </span>
                  <span className="bg-[#fce4ec] text-[#e12454] text-[10px] font-extrabold px-3 py-0.5 rounded-full">
                    Paso 1
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#e12454] text-white flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>

                <h2 className="font-extrabold text-sm text-slate-800 tracking-wide mb-1 uppercase">
                  OBSERVO
                </h2>

                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                  Veo cómo mi amigo o maestra respira hondo cuando una torre de bloques se cae.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#e12454] font-extrabold pt-2 border-t border-slate-100 mt-auto">
                <span>♡</span>
                <span>Mirar con atención</span>
              </div>
            </div>

            {/* Paso 2: RECUERDO */}
            <div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#feebd0] text-[#d97706] font-extrabold text-xs flex items-center justify-center">
                    2
                  </span>
                  <span className="bg-[#feebd0] text-[#f39a1e] text-[10px] font-extrabold px-3 py-0.5 rounded-full">
                    Paso 2
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#f39a1e] text-white flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                  </svg>
                </div>

                <h2 className="font-extrabold text-sm text-slate-800 tracking-wide mb-1 uppercase">
                  RECUERDO
                </h2>

                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                  Guardo en mi mente la idea: &quot;¡Ah, no hay que enojarse, respirar ayuda!&quot;
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#f39a1e] font-extrabold pt-2 border-t border-slate-100 mt-auto">
                <span>💡</span>
                <span>Guardar el truco</span>
              </div>
            </div>

            {/* Paso 3: LO INTENTO */}
            <div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#e2f7e2] text-[#21a53f] font-extrabold text-xs flex items-center justify-center">
                    3
                  </span>
                  <span className="bg-[#e2f7e2] text-[#21a53f] text-[10px] font-extrabold px-3 py-0.5 rounded-full">
                    Paso 3
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#21a53f] text-white flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23 5.5V11h-5.5M1 18.5V13h5.5M3.51 9a9 9 0 0 1 14.85-3.36L23 11M1 13l4.64 5.36A9 9 0 0 0 20.49 15"/>
                  </svg>
                </div>

                <h2 className="font-extrabold text-sm text-slate-800 tracking-wide mb-1 uppercase">
                  LO INTENTO
                </h2>

                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                  La próxima vez que algo se derrame o falle, yo también pruebo respirar con calma.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#21a53f] font-extrabold pt-2 border-t border-slate-100 mt-auto">
                <span>♟️</span>
                <span>Ponerlo en práctica</span>
              </div>
            </div>

            {/* Paso 4: APRENDO */}
            <div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#ede7f6] text-[#6c35de] font-extrabold text-xs flex items-center justify-center">
                    4
                  </span>
                  <span className="bg-[#ede7f6] text-[#6c35de] text-[10px] font-extrabold px-3 py-0.5 rounded-full">
                    Meta
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#2b2850] text-white flex items-center justify-center mb-3 shadow-sm">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>

                <h2 className="font-extrabold text-sm text-slate-800 tracking-wide mb-1 uppercase">
                  APRENDO
                </h2>

                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                  ¡Mi cerebro se vuelve más inteligente, valiente y súper resiliente!
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#e12454] font-extrabold pt-2 border-t border-slate-100 mt-auto">
                <span>✪</span>
                <span>¡Superpoder ganado!</span>
              </div>
            </div>

          </div>
        </div>

        {/* Sección inferior con 2 Cajas explicativas */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4 my-4">
          
          {/* Caja 1: Cerebrito dice */}
          <div className="bg-[#f0f3fa] rounded-2xl p-4 flex items-center gap-3 border border-[#e2e8f5]">
            <div className="w-12 h-12 rounded-xl bg-white p-1 flex-shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
              <span className="text-2xl">🧠</span>
            </div>
            <div>
              <h3 className="font-black text-xs text-slate-800 mb-0.5">
                Cerebrito dice:
              </h3>
              <p className="text-[11px] text-slate-600 font-medium leading-snug">
                “¡Copiar lo bueno de los demás es como tener un mapa secreto para no rendirnos jamás!”
              </p>
            </div>
          </div>

          {/* Caja 2: Dinámica en el aula sugerida */}
          <div className="bg-[#fef3e2] rounded-2xl p-4 flex items-center gap-3 border border-[#fae2c3]">
            <div className="w-10 h-10 rounded-full bg-[#f39a1e] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
              🎓
            </div>
            <div>
              <h3 className="font-black text-xs text-slate-800 mb-0.5">
                Dinámica en el aula sugerida
              </h3>
              <p className="text-[11px] font-bold text-slate-800 leading-snug">
                Juego de Mímica:{' '}
                <span className="font-medium text-slate-700">
                  Representar en parejas a un amigo que se le cae algo, respira hondo 3 veces con una mano en la pancita y vuelve a empezar sonriendo.
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Botones de navegación inferior */}
        <div className="mt-4 pt-2 flex items-center justify-between">
            <Link href="/Factores/page02">
          <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
            </Link>
            <Link href="/Factores/page04">
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

      {/* Pie de página exterior */}
      <footer className="w-full max-w-6xl mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-semibold px-2">
        <span>Plataforma Educativa de Aprendizaje Socioemocional • Nivel Inicial (5-7 años)</span>
        <span className="text-[#bd1e51] font-bold mt-1 sm:mt-0">
          ♡ Con amor para pequeños grandes exploradores
        </span>
      </footer>

    </div>
  );
}