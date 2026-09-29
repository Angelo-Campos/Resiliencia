import { ArrowLeft, CheckCircle, Hand, HeartHandshake, Rocket, RotateCcw, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

 

  export default function Tema7(){
    return(
       <div data-aos="fade-in" className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-4xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden ">
        
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 shadow-sm">
              <Trophy className="w-5 h-5 fill-slate-900" />
            </div>
            <span className="font-extrabold text-sm sm:text-base text-slate-800">
              Paso 07 de 07: Celebración Final
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <span className="text-rose-500 font-extrabold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  100% Completado
                </span>
                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md text-[10px] font-black">
                  06 / 06
                </span>
              </div>
              <div className="w-48 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div className="w-full h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-emerald-800 text-white font-black text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              ¡Tema Completado!
            </div>
          </div>
        </header>

        <section className="bg-gradient-to-b from-[#F7F4FF] to-[#FAF8FF] border border-indigo-100/70 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative mb-8 shadow-sm gap-10">
          <div className="bg-rose-100/80 text-rose-700 font-extrabold text-[11px] px-4 py-1 rounded-full flex items-center gap-1.5 mb-6 border border-rose-200/60">
            <span>😃</span> ¡Cerebrito salta de alegría por tu logro!
          </div>

          <div className="relative mb-6 flex flex-col items-center">
            <div className="relative w-36 h-36 rounded-full bg-amber-400/20 flex items-center justify-center p-3 border-4 border-amber-300/60 shadow-inner">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-4 border-white shadow-md flex flex-col items-center justify-center p-2 text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-1 text-2xl shadow-sm">
                  🧠
                </div>
                <span className="text-[9px] font-black text-amber-950 uppercase tracking-wider leading-tight">
                  TEMA 01 • OFICIAL
                </span>
              </div>
              <div className="absolute -top-3 flex gap-1">
                <div className="w-4 h-8 bg-rose-500 rounded-sm"></div>
                <div className="w-4 h-8 bg-amber-400 rounded-sm"></div>
              </div>
            </div>

            <div className="bg-amber-400 text-slate-900 font-black text-xs sm:text-sm px-6 py-2 rounded-full border-2 border-white shadow-md flex items-center gap-2 -mt-4 z-10">
              <Trophy className="w-4 h-4 fill-slate-900" />
              CAMPEONES DE LA RESILIENCIA
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400" />
            ¡Felicitaciones, pequeños exploradores!
            <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400" />
          </h1>

          <h2 className="text-sm sm:text-base font-extrabold text-amber-900 mb-3">
            Han desbloqueado la Medalla: <span className="text-amber-700">"Explorador Resiliente"</span>
          </h2>

          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-2xl leading-relaxed">
            ¡Increíble trabajo! Hoy aprendieron que cuando algo difícil ocurre o las cosas no salen como esperábamos, podemos parar, respirar, pedir ayuda y volver a intentarlo con una gran sonrisa.
          </p>
        </section>

        <section className="mb-8">
          <div className="text-center mb-6">
            <span className="bg-amber-100/80 text-amber-900 font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">
              TUS NUEVAS SUPERHERRAMIENTAS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mt-2">
              Poderes Emocionales Conquistados
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FAF7FF] border border-indigo-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-rose-100 text-rose-700 font-black text-[10px] px-2.5 py-0.5 rounded-full">
                    Poder 01
                  </span>
                  <div className="w-7 h-7 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
                    <Hand className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-2 flex items-center gap-1.5">
                  Freno y Calma 🛑
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-snug mb-4">
                  Sé respirar hondo y detener mi frustración cuando una torre de bloques se cae.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-[11px]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Habilidad Conquistada ✓</span>
              </div>
            </div>

            <div className="bg-[#FAF7FF] border border-indigo-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-800 font-black text-[10px] px-2.5 py-0.5 rounded-full">
                    Poder 02
                  </span>
                  <div className="w-7 h-7 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-2 flex items-center gap-1.5">
                  Pedir Ayuda con Cariño 🤝
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-snug mb-4">
                  Sé que levantar la mano y pedir apoyo a mi maestra y amigos me hace valiente.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-[11px]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Habilidad Conquistada ✓</span>
              </div>
            </div>

            <div className="bg-[#FAF7FF] border border-indigo-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-emerald-100 text-emerald-800 font-black text-[10px] px-2.5 py-0.5 rounded-full">
                    Poder 03
                  </span>
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                    <Rocket className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-2 flex items-center gap-1.5">
                  Volver a Intentar 🚀
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-snug mb-4">
                  Transformo los tropiezos en nuevas oportunidades para aprender y divertirme.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-[11px]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Habilidad Conquistada ✓</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href={'/resiliencia/tema1-06'}>
            <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
          </Link>
          <Link href={'/'}><button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600 w-full sm:w-auto">
            <span>🗺️</span> ¡Volver al Mapa y Continuar!
          </button></Link>
          <Link href={'/resiliencia/tema1-01'}>
          
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 hover:text-slate-800 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 border border-indigo-100 w-full sm:w-auto">
            <RotateCcw className="w-4 h-4 text-indigo-600" />
            Repasar el Tema 01
          </button>
          </Link>
        </footer>

        <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-6 mt-6 border-t border-slate-100">
          <button className="flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Anterior (Paso 06)
          </button>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Módulo 01 finalizado • Listo para continuar con el siguiente tema
          </div>
        </div>

      </main>
    </div>
    )
  }