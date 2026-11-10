import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PersonasQueNosEnsenan() {
  return (
    <div data-aos="fade-in" className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800">
      
      {/* Encabezado principal */}
      

      {/* Contenedor blanco central */}
      <main className="w-full max-w-6xl bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden my-auto">
        
        {/* Barra superior interna */}
        <div className="flex items-center justify-between mb-4">
            <Link href="/tema02/page01">
          <button className="w-10 h-10 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center transition">
            ←
          </button>
            </Link>
          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-sm text-slate-700">02 / 06</span>
            <div className="w-20 h-2 bg-white rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Título y descripción */}
        <div className="relative flex flex-col items-center text-center my-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#fbf2d8] border border-[#e8d5a3] text-[#785425] font-extrabold text-xs px-4 py-1 rounded-full mb-3 uppercase tracking-wide">
            👥 Nuestros guías y amigos
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
            Personas que nos enseñan
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl font-bold leading-relaxed">
            Aprendemos muchas cosas maravillosas observando y compartiendo con quienes nos rodean. ¡Toca cada tarjeta para descubrir su súper poder!
          </p>
        </div>

        {/* Las 4 tarjetas juntas en 1 fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2 w-full">
          
          {/* Tarjeta 1: Familia */}
          <div className="bg-[#e12454] min-h-[450px] rounded-3xl p-4 text-white flex flex-col justify-between shadow-md hover:-translate-y-1 transition duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg">👥</span>
                <span className="bg-white/20 text-[11px] font-extrabold px-3 py-0.5 rounded-full backdrop-blur-sm">
                  01 • Amor
                </span>
              </div>
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
                <Image 
                  src="/images/tema02/tarjeta1.png" 
                  alt="Familia" 
                  className="w-full h-full object-cover" 
                  fill
                />
                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Hogar seguro
                </div>
              </div>
              <h2 className="font-extrabold text-lg mb-1 flex items-center gap-1">
                Familia <span className="text-sm">♡</span>
              </h2>
              <p className="text-xs font-medium leading-snug opacity-95">
                Nos cuidan con amor, nos enseñan valores y nos dan calma cuando algo sale mal.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-1">
                <span>🔊</span>
                <span>Pulsa para escuchar</span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                ▶
              </button>
            </div>
          </div>

          {/* Tarjeta 2: Maestra */}
          <div className="bg-[#f39a1e] rounded-3xl p-4 text-white flex flex-col justify-between shadow-md hover:-translate-y-1 transition duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg">🎓</span>
                <span className="bg-white/20 text-[11px] font-extrabold px-3 py-0.5 rounded-full backdrop-blur-sm">
                  02 • Guía
                </span>
              </div>
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
                <Image 
                  src="/images/tema02/tarjeta2.png" 
                  alt="Familia" 
                  className="w-full h-full object-cover" 
                  fill
                />
                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  En el aula
                </div>
              </div>
              <h2 className="font-extrabold text-lg mb-1 flex items-center gap-1">
                Maestra <span className="text-sm">💡</span>
              </h2>
              <p className="text-xs font-medium leading-snug opacity-95">
                Nos guía con paciencia en el aula, nos anima a intentar otra vez y descubre nuestros talentos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-1">
                <span>🔊</span>
                <span>Pulsa para escuchar</span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                ▶
              </button>
            </div>
          </div>

          {/* Tarjeta 3: Amigos y Hermanos */}
          <div className="bg-[#21a53f] rounded-3xl p-4 text-white flex flex-col justify-between shadow-md hover:-translate-y-1 transition duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg">🧩</span>
                <span className="bg-white/20 text-[11px] font-extrabold px-3 py-0.5 rounded-full backdrop-blur-sm">
                  03 • Equipo
                </span>
              </div>
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
                <Image 
                  src="/images/tema02/tarjeta3.png" 
                  alt="Familia" 
                  className="w-full h-full object-cover" 
                  fill
                />
                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Juntos jugamos
                </div>
              </div>
              <h2 className="font-extrabold text-lg mb-1 flex items-center gap-1">
                Amigos y Hermanos <span className="text-sm">😃</span>
              </h2>
              <p className="text-xs font-medium leading-snug opacity-95">
                Comparten juegos, aprendemos a turnarnos, colaborar y levantarnos juntos si nos tropezamos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-1">
                <span>🔊</span>
                <span>Pulsa para escuchar</span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                ▶
              </button>
            </div>
          </div>

          {/* Tarjeta 4: Escuela y Comunidad */}
          <div className="bg-[#6c35de] rounded-3xl p-4 text-white flex flex-col justify-between shadow-md hover:-translate-y-1 transition duration-200">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg">🏫</span>
                <span className="bg-white/20 text-[11px] font-extrabold px-3 py-0.5 rounded-full backdrop-blur-sm">
                  04 • Unión
                </span>
              </div>
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
                <Image 
                  src="/images/tema02/tarjeta4.png" 
                  alt="Familia" 
                  className="w-full h-full object-cover" 
                  fill
                />
                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Espacio seguro
                </div>
              </div>
              <h2 className="font-extrabold text-lg mb-1 flex items-center gap-1">
                Escuela y Comunidad <span className="text-sm">🏰</span>
              </h2>
              <p className="text-xs font-medium leading-snug opacity-95">
                Un lugar seguro y lleno de amigos donde todos nos ayudamos mutuamente.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-1">
                <span>🔊</span>
                <span>Pulsa para escuchar</span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                ▶
              </button>
            </div>
          </div>

        </div>

        {/* Banner inferior con consejo */}
        <div className="mt-6 bg-[#f1eefa] rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 border border-[#e3dcf5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f8d0dc] flex items-center justify-center text-lg shadow-sm">
              🧠
            </div>
            <div>
              <h3 className="font-black text-[#bd1e51] text-xs sm:text-sm">
                Cerebrito explorador dice:
              </h3>
              <p className="text-[10px] font-extrabold text-[#6c35de] tracking-wider uppercase">
                Consejo de resiliencia
              </p>
            </div>
          </div>

          <div className="bg-[#fcecd7] border border-[#f3d3a8] rounded-xl px-4 py-2.5 flex items-center gap-2.5 w-full md:w-auto flex-1 max-w-xl">
            <div className="w-6 h-6 rounded-full bg-[#f39a1e] text-white flex items-center justify-center text-xs flex-shrink-0">
              💡
            </div>
            <p className="text-xs font-extrabold text-[#4d3209] leading-snug">
              ¡Cada persona nos regala una enseñanza especial para ser más fuertes y felices!
            </p>
          </div>
        </div>

        {/* Botones de navegación inferior */}
        <div className="mt-6 flex items-center justify-between">
                        <Link href="/tema02/page01">
          <Link href={'/Factores/page01'}>
           <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition">
            ← Atrás
          </button>
          </Link>
        </Link>
        <Link href="/Factores/page03">
          <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2">
            Continuar →
          </button>
          </Link>
        </div>

      </main>

      {/* Pie de página exterior */}

    </div>
  );
}