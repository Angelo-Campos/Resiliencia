import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EducationalScreen() {
  return (
    <div data-aos="fade-in" className="min-h-screen bg-[#F5F3EC] p-4 md:p-8 font-sans flex items-center justify-center">
      {/* Importing Google Font (Nunito) for the rounded, friendly appearance */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800;900&display=swap');
          body {
            font-family: 'Nunito', sans-serif;
          }
        `}
      </style>

      {}
      <div className="max-w-[1000px] w-full mx-auto bg-white rounded-[40px] p-6 md:p-8 shadow-2xl relative overflow-hidden">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          {/* Back Button */}
          <button className="w-10 h-10 bg-[#EDEAFF] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#E0DAFF] transition-colors cursor-pointer flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Center Pill Badge */}
          <div className="bg-[#FDF0F3] text-[#B81D5B] text-xs font-bold px-4 py-1.5 rounded-full hidden sm:block">
            • Tema 02 Factores que Promueven la Resiliencia •
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-[#1A202C]">01 / 06</span>
            <div className="w-16 h-3 bg-[#EDEAFF] rounded-full overflow-hidden">
              <div className="w-4 h-full bg-[#E53E3E] rounded-full"></div>
            </div>
          </div>
        </header>

        {}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-[#B81D5B] bg-[#FDF0F3] text-[11px] md:text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            ✨ Juntos somos más fuertes
          </div>
          
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#2D3748] mb-3">
            ¿Sabías que <span className="text-[#C21D5A]">no estamos solos</span>?
            {/* Custom wavy underline placeholder under 'no estamos solos' */}
            <div className="relative w-[180px] h-[3px] mx-auto mt-1 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSI0Ij48cGF0aCBkPSJNMCAyQzUgMiA1IDQgMTAgNFMxNSAyIDIwIDJWMGgtMjBWMnoiIGZpbGw9IiNDMjFENUEiLz48L3N2Zz4=')]"></div>
          </h1>
          
          <p className="text-[#4A5568] text-sm max-w-[600px] leading-relaxed font-semibold">
            Hay personas maravillosas a nuestro alrededor que nos cuidan, nos escuchan con amor y nos acompañan cuando algo se pone difícil.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column (Image Placeholder Area) */}
          <div className="relative w-full h-[350px] md:h-[420px] bg-[#E2E8F0] rounded-[32px] overflow-hidden shadow-inner group">
          <Image src={'/images/tema02/fam.png'} alt="fam"
          fill  />

            {/* Bottom Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex items-start gap-3 shadow-lg border border-white/50">
              <div className="w-8 h-8 rounded-full bg-[#E53E3E] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-md shadow-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="leading-snug pt-0.5">
                <span className="font-extrabold text-[#C21D5A] text-xs">Cerebrito dice: </span>
                <span className="text-[#2D3748] text-[13px] font-bold">"¡Pedir ayuda cuando estás triste o asustado es un acto de gran valentía!"</span>
              </p>
            </div>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="flex flex-col gap-4 justify-center">
            
            {}
            <div className="bg-[#FCF9F0] border-2 border-[#F5EAD4] rounded-[24px] p-4 flex gap-4 transition-transform hover:-translate-y-1 hover:shadow-sm">
              <div className="w-10 h-10 rounded-[12px] bg-[#FDECBF] text-[#D0652B] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L20 9V21H4V9L12 3ZM12 5.846L6 10.346V19H18V10.346L12 5.846ZM14 13V19H10V13H14Z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-[#2D3748] text-[15px]">1. En Casa</h3>
                  <span className="bg-[#FDECBF] text-[#D0652B] text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide">
                    Familia
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#4A5568] leading-relaxed">
                  Nuestros cuidadores y familiares que nos regalan abrazos tibios, un hogar seguro y mucha paciencia.
                </p>
              </div>
            </div>

            {}
            <div className="bg-[#F2FCF5] border-2 border-[#DDF4E4] rounded-[24px] p-4 flex gap-4 transition-transform hover:-translate-y-1 hover:shadow-sm">
              <div className="w-10 h-10 rounded-[12px] bg-[#D1F0DA] text-[#2F855A] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM12 5.18L19.81 9L12 12.82L4.19 9L12 5.18ZM4 11.83V16L12 21L20 16V11.83L12 16.17L4 11.83Z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-[#2D3748] text-[15px]">2. En el Aula</h3>
                  <span className="bg-[#D1F0DA] text-[#2F855A] text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide">
                    Escuela
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#4A5568] leading-relaxed">
                  Nuestra maestra y amiguitos listos para escucharnos con atención y compartir divertidos juegos.
                </p>
              </div>
            </div>

            {}
            <div className="bg-[#FFF7F8] border-2 border-[#FEE2E2] rounded-[24px] p-4 flex gap-4 transition-transform hover:-translate-y-1 hover:shadow-sm">
              <div className="w-10 h-10 rounded-[12px] bg-[#FEE2E2] text-[#C53030] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 14H21V16H18L13 22L8 16H5V14H13ZM18 10L13 16H8L13 10H18ZM13 4L18 10H8L13 4Z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-[#2D3748] text-[15px]">3. En la Comunidad</h3>
                  <span className="bg-[#FEE2E2] text-[#C53030] text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide">
                    Entorno
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#4A5568] leading-relaxed">
                  Vecinos amables, doctores y amigos con quienes aprendemos a convivir y cuidarnos entre todos.
                </p>
              </div>
            </div>

          </div>
        </div>

        {}
        <footer className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Footer Box */}
          <div className="bg-[#F4F0FC] rounded-[24px] p-4 flex items-center gap-4 w-full md:max-w-[65%]">
            <div className="w-11 h-11 rounded-full bg-[#B81D5B] flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M19 8v3" />
                <path d="M17.5 9.5h3" />
              </svg>
            </div>
            <div>
              <h4 className="text-[10px] font-extrabold text-[#B81D5B] tracking-wider mb-1 uppercase">
                Guía para el aula • Pregunta de asamblea
              </h4>
              <p className="font-extrabold text-[#2D3748] text-[13px] md:text-sm leading-snug">
                "¿Quién te dio un abrazo o te escuchó cuando te sentiste triste esta semana?"
              </p>
            </div>
          </div>

          {/* Right Button */}
          <Link href="/Factores/page02">
          <button className="w-full md:w-auto group relative bg-gradient-to-r from-[#FFB82E] to-[#F59E0B] text-[#1A202C] font-extrabold text-[15px] px-8 py-3.5 rounded-full shadow-[0_5px_0_#D97706] hover:translate-y-[2px] hover:shadow-[0_3px_0_#D97706] active:translate-y-[5px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0">
            <span>Continuar</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          </Link>
        </footer>

      </div>
    </div>
  );
}