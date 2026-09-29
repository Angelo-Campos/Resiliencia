'use client';

import React, { useState } from 'react';
import Link from 'next/link';
export default function MiRedDeApoyo() {
  const redData = [
    {
      id: 1,
      nombre: 'Familia',
      badgeTag: 'Círculo cercano 1',
      titulo: 'Mi familia',
      descripcion:
        'Es nuestro puerto seguro. Nos dan amor incondicional, abrazos reparadores, comida calientita y consuelo cuando las cosas se sienten difíciles o frustrantes.',
      etiquetaImagen: 'Refugio de cariño',
      frase: '“Siempre que tengo miedo, mis cuidadores me escuchan y me abrazan.”',
      colorIcono: '#bd1e51',
      colorFondoIcono: '#fce4ec',
      colorBorde: '#f8b4d0',
      posicion: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      icono: '👨‍👩‍👧‍👦',
    },
    {
      id: 2,
      nombre: 'Escuela',
      badgeTag: 'Círculo cercano 2',
      titulo: 'Mi escuela y maestros',
      descripcion:
        'Nos guían en cada descubrimiento, nos enseñan nuevas herramientas y nos brindan un entorno seguro para aprender, crear y equivocarnos sin miedo.',
      etiquetaImagen: 'Lugar de aprendizaje',
      frase: '“Mi profesora me ayuda a respirar y resolver dudas cuando me bloqueo.”',
      colorIcono: '#d97706',
      colorFondoIcono: '#feebd0',
      colorBorde: '#fcd34d',
      posicion: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
      icono: '🎓',
    },
    {
      id: 3,
      nombre: 'Amigos',
      badgeTag: 'Círculo cercano 3',
      titulo: 'Mis amigos',
      descripcion:
        'Comparten nuestras risas, juegos y aventuras. Con ellos aprendemos a compartir, escuchar y apoyarnos en equipo cuando algo se pone difícil.',
      etiquetaImagen: 'Compañeros de juego',
      frase: '“Cuando me caigo, mis amigos se acercan para ayudarme a levantarme.”',
      colorIcono: '#21a53f',
      colorFondoIcono: '#e2f7e2',
      colorBorde: '#86efac',
      posicion: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      icono: '👥',
    },
    {
      id: 4,
      nombre: 'Salud',
      badgeTag: 'Círculo cercano 4',
      titulo: 'Personal de salud',
      descripcion:
        'Doctores, enfermeros y psicólogos que cuidan nuestro cuerpo y nuestra mente para que crezcamos fuertes, sanos y llenos de energía.',
      etiquetaImagen: 'Cuidado y bienestar',
      frase: '“Los doctores y especialistas cuidan mi cuerpo para sentirme genial.”',
      colorIcono: '#7c3aed',
      colorFondoIcono: '#f3e8ff',
      colorBorde: '#c084fc',
      posicion: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
      icono: '🏥',
    },
  ];

  const [seleccionado, setSeleccionado] = useState(redData[0]);

  return (
    <div data-aos="fade-in" className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">
      
      {/* Encabezado superior */}
    

      {/* Contenedor principal */}
      <main className="w-full max-w-6xl bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
        
        {/* Navegación interna */}
        <div className="flex items-center justify-between mb-4">
            <Link href="/tema02/page04">
          <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition">
            ←
          </button>
            </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              05 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-[83%] h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Título y subtítulo */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#fce8ed] text-[#bd1e51] font-extrabold text-[11px] px-3.5 py-1 rounded-full mb-2 uppercase tracking-wide">
            <span>🛡️</span> Mi equipo protector
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">
            Mi red de apoyo
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
            Ser resiliente no significa hacerlo todo solos. ¡Tenemos un gran equipo a nuestro alrededor que nos sostiene, escucha y acompaña en cada aventura!
          </p>
        </div>

        {/* Diagrama e información interactiva */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-4">
          
          {/* Esquema radial */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-12">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-dashed border-slate-200 relative flex items-center justify-center">
              
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#e12454] to-[#bd1e51] text-white flex flex-col items-center justify-center text-center p-3 shadow-md z-10">
                <span className="text-xs mb-0.5">🧠</span>
                <span className="font-extrabold text-xs sm:text-sm leading-tight">
                  ¡Yo!
                </span>
                <span className="text-[10px] font-medium opacity-90 leading-tight">
                  Ganas de aprender
                </span>
              </div>

              {redData.map((item) => {
                const isSelected = seleccionado.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSeleccionado(item)}
                    className={`absolute ${item.posicion} flex flex-col items-center group transition-transform duration-200 hover:scale-105 z-20`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl shadow-sm border-2 transition-all ${
                        isSelected ? 'ring-4 ring-offset-2 ring-[#bd1e51]' : ''
                      }`}
                      style={{
                        backgroundColor: item.colorFondoIcono,
                        borderColor: item.colorBorde,
                        color: item.colorIcono,
                      }}
                    >
                      {item.icono}
                    </div>

                    <span
                      className={`text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full mt-1 border shadow-xs transition-colors ${
                        isSelected
                          ? 'bg-slate-800 text-white border-slate-800'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      {item.id}. {item.nombre}
                    </span>
                  </button>
                );
              })}

            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 bg-slate-100/80 text-slate-600 font-bold text-[11px] px-4 py-1.5 rounded-full border border-slate-200/60">
              <span>👆</span> Toca cada círculo para descubrir cómo nos ayuda
            </div>
          </div>

          {/* Tarjeta lateral de detalle */}
          <div className="lg:col-span-6">
            <div className="bg-[#f3f0fa] rounded-3xl p-5 sm:p-6 border border-[#e5ded0] shadow-sm flex flex-col justify-between min-h-[360px] transition-all">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#bd1e51] text-white flex items-center justify-center text-xs shadow-xs">
                    ♡
                  </div>
                  <span className="text-[#bd1e51] font-extrabold text-[10px] uppercase tracking-wider">
                    {seleccionado.badgeTag}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-2">
                  {seleccionado.titulo}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  {seleccionado.descripcion}
                </p>

                <div className="relative w-full h-36 bg-[#e8e2f4] rounded-2xl overflow-hidden mb-4 border border-[#ddd5ee] flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-1">{seleccionado.icono}</div>
                    <span className="text-xs font-bold text-slate-700">
                      {seleccionado.etiquetaImagen}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                    {seleccionado.etiquetaImagen}
                  </div>
                </div>
              </div>

              <div className="bg-white/90 rounded-2xl p-3 border border-slate-100 flex items-center gap-2.5 shadow-xs">
                <span className="text-base flex-shrink-0">🏡</span>
                <p className="text-[11px] sm:text-xs text-slate-700 font-bold italic leading-snug">
                  {seleccionado.frase}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mensaje inferior */}
        <div className="bg-[#fef3e2] border-2 border-[#fae2c3] rounded-2xl p-4 flex items-center gap-3.5 my-2 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#f39a1e] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-xs">
            💡
          </div>
          <div>
            <div className="text-[10px] font-extrabold text-[#b45309] uppercase tracking-wider mb-0.5">
              Mensaje para el corazón
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug">
              ¡Saber pedir ayuda a tu red de apoyo es un verdadero superpoder de la resiliencia!
            </p>
            <p className="text-[11px] font-medium text-slate-600 leading-snug">
              Los valientes no son los que nunca caen, sino quienes extienden su mano para levantarse juntos.
            </p>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="mt-4 pt-2 flex items-center justify-between">
        <Link href="/Factores/page04">
          <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
            </Link>
            <Link href="/Factores/page06">
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
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