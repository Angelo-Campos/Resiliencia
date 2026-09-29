'use client';

import Link from 'next/link';
import React from 'react';

export default function CelebracionFinal() {
  const aprendizajes = [
    {
      id: 1,
      icono: '❤️',
      colorFondoIcono: 'bg-rose-100',
      texto: 'Reconoces a las personas que te cuidan, quieren y enseñan día a día.',
    },
    {
      id: 2,
      icono: '👁️',
      colorFondoIcono: 'bg-amber-100',
      texto: 'Sabes observar los buenos ejemplos de los demás para aprender de ellos.',
    },
    {
      id: 3,
      icono: '🤼',
      colorFondoIcono: 'bg-purple-100',
      texto: 'Cuentas con una gran Red de Apoyo siempre lista para tenderte una mano.',
    },
  ];

  return (
    <div data-aos="fade-in" className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      
 
     

      {/* Tarjeta principal blanca */}
      <main className="w-full max-w-6xl bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
        
        {/* Barra de progreso de la lección */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-[#faf8f5] p-3 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-700">
            <span className="text-amber-500 text-base">🏆</span>
            Paso 07 de 07: Celebración final
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[11px] font-extrabold text-slate-500 whitespace-nowrap">
              🎯 100% completado <span className="text-slate-400 font-normal">| 06/06</span>
            </span>
            <div className="w-32 h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
              <div className="w-full h-full bg-gradient-to-r from-amber-400 to-[#f39a1e] rounded-full"></div>
            </div>
          </div>

          <span className="bg-[#15803d] text-white font-extrabold text-xs px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1">
            ✓ ¡Tema completado!
          </span>
        </div>

        {/* Sección central de insignia y logro */}
        <div className="flex flex-col items-center text-center my-2 relative">
          
          {/* Elementos flotantes decorativos e Insignia */}
          <div className="relative flex items-center justify-center gap-6 sm:gap-10 mb-6">
            
            {/* Tarjeta previa en miniatura */}
            <div className="hidden md:flex flex-col items-center bg-pink-50 p-2 rounded-xl border border-pink-200 shadow-xs rotate-[-6deg]">
              <span className="bg-amber-400 text-white text-[9px] font-black px-2 py-0.5 rounded-full mb-1">
                ¡Viva!
              </span>
              <div className="w-20 h-14 bg-white rounded-lg flex items-center justify-center text-xl shadow-inner">
                🧸🎉
              </div>
            </div>

            {/* Medalla principal */}
            <div className="relative flex flex-col items-center">
              
              {/* Cinta superior */}
              <div className="w-12 h-6 bg-[#bd1e51] rounded-t-lg relative -mb-2 z-0 border-b-2 border-rose-800"></div>

              {/* Círculo dorado exterior */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 p-2 shadow-lg z-10 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white border-4 border-amber-200 flex flex-col items-center justify-center p-2">
                  <span className="text-3xl sm:text-4xl mb-0.5">🧠</span>
                  <span className="text-[10px] sm:text-[11px] font-black text-[#bd1e51] tracking-tight leading-none uppercase">
                    Red de apoyo
                  </span>
                  <span className="text-amber-400 text-[10px] font-black mt-0.5">
                    ★★★
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-2">
                Insignia oficial desbloqueada
              </span>
            </div>

            {/* Etiqueta flotante derecha */}
            <div className="hidden md:block bg-[#fde6d2] text-[#9a3412] text-xs font-black px-3 py-1.5 rounded-full shadow-xs border border-amber-200 rotate-[4deg]">
              ¡Lo logramos juntos, campeón!
            </div>

          </div>

          {/* Subtítulo de felicitación */}
          <div className="inline-flex items-center gap-1.5 bg-[#fef3c7] text-[#b45309] font-extrabold text-[11px] px-4 py-1 rounded-full mb-3 uppercase tracking-wide">
            <span>🏅</span> ¡Felicitaciones, pequeño explorador! <span>🏅</span>
          </div>

          {/* Título de la medalla */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-3 max-w-2xl">
            Has desbloqueado la medalla: <br />
            <span className="text-[#bd1e51]">“Guardián de la red de apoyo”</span>
          </h1>

          {/* Mensaje principal */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl leading-relaxed mb-6">
            ¡Excelente trabajo! Hoy aprendiste que <strong className="text-[#bd1e51]">nunca estamos solos</strong>. Tu familia, maestras y amigos son tu súper equipo para crecer y superar cualquier reto. ¡Tu mente es cada vez más fuerte y solidaria!
          </p>

          {/* Caja contenedora de lo aprendido */}
          <div className="w-full bg-[#f3effa] rounded-3xl p-5 border border-[#e5ded0] mb-6">
            <div className="flex items-center gap-2 font-black text-slate-800 text-xs sm:text-sm mb-4">
              <span className="w-5 h-5 rounded-full bg-[#bd1e51] text-white flex items-center justify-center text-[10px]">
                ✓
              </span>
              Lo que aprendiste en el tema 02:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {aprendizajes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-2xs flex flex-col items-start text-left gap-2"
                >
                  <div
                    className={`w-7 h-7 rounded-full ${item.colorFondoIcono} flex items-center justify-center text-xs`}
                  >
                    {item.icono}
                  </div>
                  <p className="text-xs text-slate-700 font-bold leading-snug">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de acción principal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
            
             <Link href={'/'}>
              <button className="w-full sm:w-auto bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2">
              <span>🗺️</span> ¡Volver al mapa y continuar!
            </button>
             </Link>

            <Link href={'/Factores/page01'}>
             <button className="w-full sm:w-auto bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition flex items-center justify-center gap-2">
              <span>🔄</span> Repasar el tema 02
            </button>
            </Link>
          </div>

        </div>

      </main>

      {/* Pie de página */}
      <footer className="w-full max-w-6xl mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-semibold px-2">
        <span>Plataforma educativa de aprendizaje socioemocional • Nivel inicial (5-7 años)</span>
        <span className="text-[#bd1e51] font-bold mt-1 sm:mt-0">
          ♡ Con amor para pequeños grandes exploradores
        </span>
      </footer>

    </div>
  );
}