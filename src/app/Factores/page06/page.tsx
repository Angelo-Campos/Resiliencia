'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ActividadQuienMeAyuda() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);

  const opciones = [
    {
      id: 'A',
      titulo: 'Familia protectora',
      etiqueta: 'Paciencia',
      colorEtiqueta: 'bg-[#fde6d2] text-[#9a3412]',
      descripcion:
        'Pedir a mamá, papá o abuelos que le sostengan la bicicleta con paciencia hasta tener equilibrio.',
      subtag: '🛡️ Acompañamiento seguro paso a paso',
      icono: '👨‍👩‍👧',
    },
    {
      id: 'B',
      titulo: 'Maestra guía',
      etiqueta: 'Estrategia',
      colorEtiqueta: 'bg-[#dcfce7] text-[#166534]',
      descripcion:
        'Contarle a su maestra para que le muestre el truco de armar primero las esquinas del rompecabezas.',
      subtag: '🛠️ Aprender nuevos trucos y métodos',
      icono: '👩‍🏫',
    },
    {
      id: 'C',
      titulo: 'Amiguitos del aula',
      etiqueta: 'Ánimo',
      colorEtiqueta: 'bg-[#fce7f3] text-[#9d174d]',
      descripcion:
        'Invitar a un amiguito para que lo anime, celebre cada avance y lo intente junto a él.',
      subtag: '🎉 Divertirse compartiendo el desafío',
      icono: '👦👧',
    },
  ];

  return (
    <div data-aos="fade-in" className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      
      {/* Encabezado superior */}
     

      {/* Tarjeta principal blanca */}
      <main className="w-full max-w-6xl bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
        
        {/* Barra superior de navegación interna */}
        <div className="flex items-center justify-between mb-6">
            <Link href="/tema02/page05">
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
</Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-[#bd1e51]">
              TEMA 01 <span className="text-slate-400 font-normal">|</span> 06 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-full h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Rejilla de contenido en 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
          
          {/* Columna izquierda: Situación para conversar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Etiquetas superiores */}
            <div className="flex items-center gap-2">
              <span className="bg-[#fce8ed] text-[#bd1e51] font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                <span>📣</span> Dinámica participativa
              </span>
              <span className="bg-[#e6f4ea] text-[#137333] font-bold text-[11px] px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#137333]"></span> En ronda
              </span>
            </div>

            {/* Título de la actividad */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Actividad: ¿Quién me ayuda?
            </h1>

            {/* Tarjeta morada reflexiva */}
            <div className="bg-[#f3effa] rounded-2xl p-4 sm:p-5 border border-[#e5ded0] flex flex-col gap-3">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fae8ff] border border-[#f5d0fe] flex items-center justify-center text-xl flex-shrink-0">
                  🧠
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">
                    Cerebrito reflexiona...
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug">
                    “Quiero aprender cosas nuevas, ¡pero algunas me dan miedo!”
                  </p>
                </div>
              </div>

              <hr className="border-slate-200/80 my-1" />

              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">
                  Situación para conversar:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Cerebrito quiere aprender a andar en bicicleta y armar un rompecabezas muy grande, pero le parece muy difícil y siente miedo de caerse.
                </p>
              </div>

              {/* Caja rosada con la pregunta clave */}
              <div className="bg-[#fce8ed] border border-[#f8b4d0] rounded-xl p-3 flex items-start gap-2.5 mt-1">
                <span className="text-base flex-shrink-0">📍</span>
                <p className="text-xs font-extrabold text-[#9d174d] leading-snug">
                  ¿A quién podría acudir Cerebrito y qué podría aprender de ellos?
                </p>
              </div>

            </div>

            {/* Imagen ilustrativa */}
            <div className="relative w-full h-40 bg-[#e5ded0] rounded-2xl overflow-hidden border border-slate-200 shadow-xs flex items-center justify-center">
              <div className="bg-slate-300 w-full h-full flex items-center justify-center text-slate-500 font-semibold text-xs">
                [Imagen de niños y maestra conversando en el aula]
              </div>
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/70 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-xl text-center">
                ♡ Aprender juntos nos hace valientes y seguros
              </div>
            </div>

          </div>

          {/* Columna derecha: Opciones de votación y Guía docente */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Encabezado de la columna derecha */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-black text-slate-800 text-sm sm:text-base">
                <span>⚖️</span> Voten y elijan juntos:
              </div>
              <span className="bg-slate-100 text-slate-600 text-[10px] font-extrabold px-3 py-1 rounded-full border border-slate-200">
                ¡Todas suman valor!
              </span>
            </div>

            {/* Lista de opciones intercaladas (A, B, C) */}
            <div className="flex flex-col gap-3">
              {opciones.map((opcion) => {
                const esSeleccionado = opcionSeleccionada === opcion.id;
                return (
                  <div
                    key={opcion.id}
                    onClick={() => setOpcionSeleccionada(opcion.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      esSeleccionado
                        ? 'bg-[#fefce8] border-[#fde047] shadow-sm ring-2 ring-[#f39a1e]'
                        : 'bg-[#f8f8fb] border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-200/80 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {opcion.id}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
                          <span>{opcion.icono}</span> {opcion.titulo}
                        </h3>
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${opcion.colorEtiqueta}`}>
                          {opcion.etiqueta}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">
                        {opcion.descripcion}
                      </p>

                      <div className="text-[11px] text-slate-500 font-semibold italic">
                        {opcion.subtag}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Caja de Guía para la Maestra */}
            <div className="bg-[#fff7ed] border-2 border-[#fed7aa] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#f39a1e] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-xs">
                💡
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-800">
                    Guía para la maestra
                  </h4>
                  <span className="bg-[#ffedd5] text-[#c2410c] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    Estrategia socioemocional
                  </span>
                </div>

                <p className="text-xs font-bold text-slate-700 italic leading-snug mb-2">
                  “Pide a los niños que levanten la mano según a quién acudirían ellos en esta situación.”
                </p>

                <p className="text-[11px] font-medium text-slate-600 leading-snug">
                  Refuerza el mensaje clave: Pedir ayuda no es debilidad, ¡es el superpoder de los exploradores resilientes!
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Botones inferiores de navegación */}
        <div className="mt-4 pt-2 flex items-center justify-between">
                        <Link href="/Factores/page05">
             <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
            </Link>
            <Link href="/Factores/page07">
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

      {/* Pie de página exterior */}

    </div>
  );
}