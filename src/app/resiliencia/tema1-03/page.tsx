import { ArrowLeft, ArrowRight, Hand, Lightbulb, Puzzle, RefreshCw, Rocket, Search } from "lucide-react";
import Link from "next/link";


 
  export default function Tema3(){
    return(
      <section data-aos="fade-in" className="w-full h-auto">
      <div className="container-section w-[90%] mx-auto items-center flex min-h-[calc(100vh-100px)] justify-center py-6">
        <div className="relative w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-10 border-4 border-white flex flex-col justify-between">
          
          <div className="flex items-center justify-between mb-2">
            <Link href={'/resiliencia/tema1-02'} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-3">
              <div className="bg-rose-100/80 text-rose-700 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm flex items-center gap-2 border border-rose-200/50">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                Tema 01: Resiliencia
              </div>

              <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
                <span>03 / 06</span>
                <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                  <div className="w-3/6 h-full bg-rose-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center my-auto">
            <div className="bg-indigo-100/70 text-indigo-700 font-extrabold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              Estrategia de 4 pasos
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
              Podemos intentar <span className="text-rose-500">otra vez</span>
            </h1>

            <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-xl mb-8">
              Cuando algo no sale como esperamos, nos detenemos y pensamos... ¡así encontramos nuevas ideas para lograrlo!
            </p>

            <div className="relative w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-amber-300 -translate-y-6 -z-0"></div>

              <div className="relative bg-[#FFF0F3] border border-rose-100 rounded-2xl p-5 flex flex-col items-center text-center z-10 shadow-sm">
                <div className="absolute -top-3 w-7 h-7 bg-rose-600 text-white font-black text-xs rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  1
                </div>
                <div className="w-12 h-12 bg-rose-200/60 rounded-full flex items-center justify-center text-rose-600 my-2">
                  <Hand className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-rose-600 text-sm mb-1">PARAR</h3>
                <p className="text-xs text-slate-600 font-medium mb-4">
                  "Respiro hondo y me calmo"
                </p>
                <span className="mt-auto bg-rose-100 text-rose-700 font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1">
                  🫁 Inhalo, exhalo
                </span>
              </div>

              <div className="relative bg-[#FFFBEB] border border-amber-100 rounded-2xl p-5 flex flex-col items-center text-center z-10 shadow-sm">
                <div className="absolute -top-3 w-7 h-7 bg-amber-500 text-white font-black text-xs rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  2
                </div>
                <div className="w-12 h-12 bg-amber-200/60 rounded-full flex items-center justify-center text-amber-700 my-2">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-amber-800 text-sm mb-1">PENSAR</h3>
                <p className="text-xs text-slate-600 font-medium mb-4">
                  "¿Qué puedo cambiar?"
                </p>
                <span className="mt-auto bg-amber-100 text-amber-800 font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1">
                  🧠 Explora opciones
                </span>
              </div>

              <div className="relative bg-[#F0FDF4] border border-emerald-100 rounded-2xl p-5 flex flex-col items-center text-center z-10 shadow-sm">
                <div className="absolute -top-3 w-7 h-7 bg-emerald-600 text-white font-black text-xs rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  3
                </div>
                <div className="w-12 h-12 bg-emerald-200/60 rounded-full flex items-center justify-center text-emerald-700 my-2">
                  <Puzzle className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-emerald-700 text-sm mb-1">SOLUCIÓN</h3>
                <p className="text-xs text-slate-600 font-medium mb-4">
                  "Pido ayuda o pruebo otra forma"
                </p>
                <span className="mt-auto bg-emerald-100 text-emerald-800 font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1">
                  🧩 Trabajo en equipo
                </span>
              </div>

              <div className="relative bg-[#FFF0F3] border border-rose-100 rounded-2xl p-5 flex flex-col items-center text-center z-10 shadow-sm">
                <div className="absolute -top-3 w-7 h-7 bg-rose-700 text-white font-black text-xs rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  4
                </div>
                <div className="w-12 h-12 bg-rose-200/60 rounded-full flex items-center justify-center text-rose-700 my-2">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-rose-700 text-sm mb-1">¡A INTENTAR!</h3>
                <p className="text-xs text-slate-600 font-medium mb-4">
                  "¡Manos a la obra con energía!"
                </p>
                <span className="mt-auto bg-rose-100 text-rose-700 font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1">
                  💪 ¡No me rindo!
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <Link href={'/resiliencia/tema1-02'}>
              <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
            </Link>
            <div className="flex items-center gap-3 bg-amber-100/80 border border-amber-200/80 p-2.5 px-4 rounded-2xl">
              <div className="relative w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-600 flex-shrink-0">
                <span className="text-lg">🧠</span>
                <div className="absolute -bottom-1 -right-1 bg-amber-400 p-0.5 rounded-full border border-white">
                  <Search className="w-2.5 h-2.5 text-slate-800" />
                </div>
              </div>
              <div>
                <h4 className="font-extrabold text-amber-900 text-xs sm:text-sm">
                  ¡Genial explorador!
                </h4>
                <p className="text-amber-800 text-[11px] sm:text-xs font-semibold">
                  Equivocarse es la mejor forma de aprender cosas nuevas.
                </p>
              </div>
            </div>
     
      <Link href={'/resiliencia/tema1-04'} className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
              Continuar
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
    )
  } 