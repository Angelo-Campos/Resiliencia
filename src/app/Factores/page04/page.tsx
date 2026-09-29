'use client';

import React from 'react';
import Link from 'next/link';
export default function LoQueVivimosTambienNosEnsena() {
  return (
    <div data-aos="fade-in" className="bg-[#f6f3eb] min-h-screen p-4 md:p-8 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      
      {/* Header Superior Externo */}
    

      {/* Contenedor Principal Blanco */}
      <main className="w-full max-w-5xl bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-slate-100 flex flex-col justify-between my-auto relative">
        
        {/* Navegación Superior Interna y Barra de Progreso */}
        <div className="flex items-center justify-between mb-6">
            <Link href="/tema02/page03">
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
        </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              04 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-slate-200/70 rounded-full overflow-hidden p-0.5">
              <div className="w-[66%] h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Encabezado y Titular Central */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#e2f4e5] text-[#2d7a3a] font-extrabold text-[11px] px-3.5 py-1 rounded-full mb-3 uppercase tracking-wide">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M17 8C8 10 59 16.17 3.82 22 12C3 18.2 5 22 8 22c1.25 0 2.5-1 3-2 1.5 1 3 2 5 2 4 0 7-4 7-9 0-2.5-1-4.5-2.5-6zM17 12c-1.5 0-2.5 1.5-2.5 3s1 2.5 2.5 2.5 2.5-1 2.5-2.5-1-3-2.5-3z"/>
            </svg>
            <span>CADA DÍA ES UNA OPORTUNIDAD</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e293b] tracking-tight mb-2">
            Lo que vivimos también nos enseña
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
            No solo aprendemos en los libros: ¡cada momento y experiencia cotidiana entrena nuestro corazón y nuestra mente!
          </p>
        </div>

        {/* Cuadrícula de 4 Tarjetas de Aprendizaje (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          
          {/* Tarjeta 1: Equivocarnos */}
          <div className="bg-[#f8f6f0] rounded-2xl p-5 border-2 border-[#fce7f3] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#bd1e51] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#bd1e51]"></span>
                <span className="text-[#bd1e51] font-extrabold text-[10px] uppercase tracking-wider">
                  PISTA MÁGICA
                </span>
              </div>
              <h2 className="font-extrabold text-base text-slate-800 mb-1">
                1. Equivocarnos
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Equivocarse no es malo; es la pista mágica para descubrir cómo hacerlo mejor la próxima vez.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Compartir y cooperar */}
          <div className="bg-[#f8f6f0] rounded-2xl p-5 border-2 border-[#fce7f3] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f39a1e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#f39a1e]"></span>
                <span className="text-[#b45309] font-extrabold text-[10px] uppercase tracking-wider">
                  SUPERPODER DE EQUIPO
                </span>
              </div>
              <h2 className="font-extrabold text-base text-slate-800 mb-1">
                2. Compartir y cooperar
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Jugar en equipo nos enseña que entre dos o más encontramos soluciones más rápidas y divertidas.
              </p>
            </div>
          </div>

          {/* Tarjeta 3: Pedir ayuda a tiempo */}
          <div className="bg-[#f8f6f0] rounded-2xl p-5 border-2 border-[#e0e7ff] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#21a53f] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23 5.5V11h-5.5M1 18.5V13h5.5M3.51 9a9 9 0 0 1 14.85-3.36L23 11M1 13l4.64 5.36A9 9 0 0 0 20.49 15"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#21a53f]"></span>
                <span className="text-[#15803d] font-extrabold text-[10px] uppercase tracking-wider">
                  VALENTÍA REAL
                </span>
              </div>
              <h2 className="font-extrabold text-base text-slate-800 mb-1">
                3. Pedir ayuda a tiempo
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Decir &quot;¿me ayudas por favor?&quot; es de niños valientes y nos enseña trucos que no conocíamos.
              </p>
            </div>
          </div>

          {/* Tarjeta 4: Intentar algo nuevo */}
          <div className="bg-[#f8f6f0] rounded-2xl p-5 border-2 border-[#e0e7ff] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#bd1e51] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 9.15l2.12-2.12c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-3.83 3.83c-.39.39-1.02.39-1.41 0l-3.83-3.83c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.1 2.1c.16-4.29 1.8-8.23 4.29-10.98 1.9-2.1 4.39-3.6 7.13-4.32-1.34 1.83-2.3 3.97-2.9 6.17zM13.13 22c2.74-.72 5.23-2.22 7.13-4.32 2.49-2.75 4.13-6.69 4.29-10.98l2.1 2.1c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-3.83-3.83c-.39-.39-1.02-.39-1.41 0l-3.83 3.83c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.12-2.12c-.13 3.57-1.53 6.86-3.57 9.15-.6 2.2-1.56 4.34-2.9 6.17z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#bd1e51]"></span>
                <span className="text-[#bd1e51] font-extrabold text-[10px] uppercase tracking-wider">
                  GRAN SALTO
                </span>
              </div>
              <h2 className="font-extrabold text-base text-slate-800 mb-1">
                4. Intentar algo nuevo
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Probar un juego desconocido o atarnos los zapatos solos nos hace sentir muy capaces y orgullosos.
              </p>
            </div>
          </div>

        </div>

        {/* Banner: Mensaje de Cerebrito Explorador */}
        <div className="bg-[#fef3d6] border-2 border-[#fde68a] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f39a1e] text-white flex items-center justify-center relative flex-shrink-0 shadow-sm">
              <span className="text-2xl">🧠</span>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#21a53f] text-white flex items-center justify-center text-[10px] font-extrabold border-2 border-white">
                ✨
              </div>
            </div>
            <div>
              <div className="text-[10px] font-extrabold text-[#b45309] uppercase tracking-wider mb-0.5">
                MENSAJE DE CEREBRITO EXPLORADOR
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                ✨ &quot;Las experiencias difíciles nos transforman en exploradores valientes y sabios.&quot;
              </p>
            </div>
          </div>

          <button className="bg-white hover:bg-slate-50 text-slate-700 font-extrabold text-xs px-4 py-2 rounded-full shadow-sm border border-amber-200/80 whitespace-nowrap transition">
            ♡ ¡Tú puedes!
          </button>
        </div>

        {/* Botones de Navegación Inferiores */}
        <div className="flex items-center justify-between">
            <Link href="/Factores/page03">
          <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
        </Link>
        <Link href="/Factores/page05">
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md border-b-2 border-[#c07308] transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

      {/* Franja Azul/Morada Exterior: Para el facilitador */}
      <div className="w-full max-w-5xl bg-[#edf0fe] rounded-2xl p-3.5 px-5 my-4 flex items-center gap-2.5 text-xs text-[#3b4878] font-bold border border-[#dbe0fe]">
        <span className="text-sm">📖</span>
        <span>
          Para el facilitador: Pide a los niños compartir una ocasión donde hayan aprendido al intentar algo nuevo.
        </span>
      </div>

      {/* Pie de Página Exterior */}
      <footer className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-semibold px-2 pb-2">
        <span>Plataforma Educativa de Aprendizaje Socioemocional • Nivel Inicial (5-7 años)</span>
        <span className="text-[#bd1e51] font-bold mt-1 sm:mt-0">
          ♡ Con amor para pequeños grandes exploradores
        </span>
      </footer>

    </div>
  );
}