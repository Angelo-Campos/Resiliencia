import { ArrowLeft, ArrowRight, Compass, Eye, Heart, RefreshCcw, RefreshCw, Shield, Smile, Sparkles, Zap } from "lucide-react";
import Link from "next/link";


 

  export default function Tema4(){
    return(
       <section data-aos="fade-in" className="w-full h-auto">
      <div className="container-section w-[90%] mx-auto items-center flex min-h-[calc(100vh-100px)] justify-center py-6">
        <div className="relative w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-10 border-4 border-white flex flex-col justify-between">
          
          <div className="flex items-center justify-between mb-2">
            <Link href={'/resiliencia/tema1-03'} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
                <span>04 / 06</span>
                <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                  <div className="w-4/6 h-full bg-rose-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center my-auto">
            <div className="bg-rose-100/70 text-rose-700 font-extrabold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              EL ARTE DE CRECER
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
              ¿Qué hace una persona resiliente?
            </h1>

            <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-xl mb-6">
              Descubrimos nuestros 4 superpoderes mágicos para superar cualquier reto y seguir brillando:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <div className="bg-[#FF3366] text-white rounded-3xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center font-black text-xs">
                      1
                    </span>
                    <span className="bg-white/20 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Heart className="w-3 h-3" /> Social
                    </span>
                  </div>
                  <div className="w-full h-28 bg-white/20 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">🐣</span>
                  </div>
                  <h3 className="font-extrabold text-base text-left mb-1">
                    Ayuda y comparte
                  </h3>
                  <p className="text-[11px] text-white/90 font-medium text-left leading-tight">
                    Se relaciona con los demás con cariño, escucha con paciencia y trabaja en equipo.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/20 text-[10px] font-bold text-white/80">
                  <span>Amor & Empatía</span>
                  <Heart className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="bg-[#FFB703] text-white rounded-3xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center font-black text-xs">
                      2
                    </span>
                    <span className="bg-white/20 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Autonomía
                    </span>
                  </div>
                  <div className="w-full h-28 bg-white/20 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">🧠</span>
                  </div>
                  <h3 className="font-extrabold text-base text-left mb-1">
                    Lo intenta por sí misma
                  </h3>
                  <p className="text-[11px] text-white/90 font-medium text-left leading-tight">
                    Tiene iniciativa propia, no teme equivocarse y confía plenamente en sus talentos.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/20 text-[10px] font-bold text-white/80">
                  <span>Fuerza interior</span>
                  <Shield className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="bg-[#2A9D8F] text-white rounded-3xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center font-black text-xs">
                      3
                    </span>
                    <span className="bg-white/20 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" /> Creatividad
                    </span>
                  </div>
                  <div className="w-full h-28 bg-white/20 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="font-extrabold text-base text-left mb-1">
                    Busca soluciones
                  </h3>
                  <p className="text-[11px] text-white/90 font-medium text-left leading-tight">
                    Piensa con calma diferentes caminos y pide apoyo ingenioso antes de rendirse.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/20 text-[10px] font-bold text-white/80">
                  <span>Mente flexible</span>
                  <Compass className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="bg-[#7209B7] text-white rounded-3xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center font-black text-xs">
                      4
                    </span>
                    <span className="bg-white/20 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Propósito
                    </span>
                  </div>
                  <div className="w-full h-28 bg-white/20 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">🌈</span>
                  </div>
                  <h3 className="font-extrabold text-base text-left mb-1">
                    Mira con esperanza
                  </h3>
                  <p className="text-[11px] text-white/90 font-medium text-left leading-tight">
                    Sabe que después de la lluvia sale el sol, guarda ilusión y sueña con alegría su futuro.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/20 text-[10px] font-bold text-white/80">
                  <span>Visión positiva</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-200 rounded-2xl flex items-center justify-center text-rose-600 flex-shrink-0">
                <Smile className="w-6 h-6" />
              </div>
              <div className="bg-amber-100/80 border border-amber-200/80 px-4 py-2 rounded-2xl text-amber-900 font-extrabold text-xs sm:text-sm">
                ¡Tienes estos 4 poderes dentro de ti! ⭐
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href={'/resiliencia/tema1-03'} className="bg-indigo-100 hover:bg-slate-200 text-indigo-900 font-bold text-sm px-5 py-3 rounded-full flex items-center gap-1.5 transition-all active:scale-95">
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </Link>
              <Link href={'/resiliencia/tema1-05'} className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
                Continuar
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
    