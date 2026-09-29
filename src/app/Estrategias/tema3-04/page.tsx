import { ArrowLeft, ArrowRight, Check, Cloud, Frown, Lightbulb, Lock, Smile, Sparkles, Star, Sun, Wand2, X } from "lucide-react";
import Link from "next/link";

 

  export default function Tema3(){
   return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
            <span className="font-extrabold">04 / 06</span>
            <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="w-4/6 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="text-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-black text-rose-600 tracking-tight mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400" />
            Podemos mirarlo de otra manera
            <Lightbulb className="w-6 h-6 text-amber-500 fill-amber-400" />
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cuando cambiamos los anteojos oscuros por anteojos de explorador, <strong className="text-rose-600 font-extrabold">¡descubrimos soluciones brillantes!</strong>
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mb-6 relative">
          
          <div className="lg:col-span-5 bg-[#FAF8FF] border border-indigo-100/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-rose-100 text-rose-700 font-extrabold text-[10px] px-3 py-1 rounded-full border border-rose-200/50 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-rose-600" />
                  PENSAMIENTO QUE ME TRABA
                </span>
                <Cloud className="w-4 h-4 text-indigo-300" />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-3 relative">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Frown className="w-4 h-4" />
                  </div>
                  <blockquote className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                    "¡No puedo armar este rompecabezas, soy muy chiquito y todo me sale mal!"
                  </blockquote>
                </div>
              </div>

              <div className="bg-rose-50/80 rounded-2xl p-3 border border-rose-100 flex items-start gap-2.5">
                <div className="w-8 h-8 bg-rose-200 text-rose-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Frown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-rose-700 block">
                    ¿QUÉ SE SIENTE EN EL CUERPO?
                  </span>
                  <p className="text-[11px] font-medium text-slate-600 leading-tight">
                    Rabia en la pancita, ganas de tirar las piezas lejos y dejar de jugar.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-rose-600 mt-4">
              <X className="w-3.5 h-3.5 stroke-[3]" />
              <span>La mente se siente atrapada y cansada</span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center justify-center z-10 py-2 lg:py-0">
            <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Wand2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="text-[9px] font-black text-amber-900 uppercase tracking-widest mt-1 text-center">
              MAGIA RESILIENTE
            </span>
          </div>

          <div className="lg:col-span-5 bg-[#F4FBF1] border border-emerald-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-white" />
                  PENSAMIENTO QUE ME IMPULSA
                </span>
                <Sun className="w-4 h-4 text-amber-500 fill-amber-400" />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100/80 mb-3 relative">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Smile className="w-4 h-4" />
                  </div>
                  <blockquote className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    "Esta pieza no entra aquí... pero si respiro hondo y busco por colores, <strong className="text-emerald-700 font-black">¡lo voy a lograr paso a paso!</strong>"
                  </blockquote>
                </div>
              </div>

              <div className="bg-emerald-100/70 rounded-2xl p-3 border border-emerald-200/60 flex items-start gap-2.5">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  🧠
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-900 block">
                    ¿QUÉ DESCUBRIMOS JUNTOS?
                  </span>
                  <p className="text-[11px] font-medium text-slate-700 leading-tight">
                    Calma en el pecho, curiosidad, pedir una pista a la maestra y sonreír.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-emerald-700 mt-4">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>¡La mente se llena de energía y superpoderes!</span>
            </div>
          </div>

        </section>

        <section className="bg-amber-100/80 border-2 border-amber-300 rounded-3xl p-4 sm:p-5 mb-4 shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              <Lightbulb className="w-6 h-6 fill-slate-900" />
            </div>
            <div className="space-y-1">
              <h3 className="font-black text-amber-950 text-xs sm:text-sm">
                Regla de Oro de Cerebrito:
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
                No siempre podemos cambiar lo difícil que es un juego, <strong className="underline decoration-amber-500 decoration-2 underline-offset-2 font-black">¡pero siempre podemos elegir cómo hablarle con cariño a nuestra mente!</strong>
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-2 mb-6 px-1">
          <div className="bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5">
            <span>👓</span>
            <span>Modo: Anteojos de Explorador Activos</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        <footer className="flex items-center justify-between pt-2">
          <Link href={'/Estrategias/tema3-03'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>


          <Link href={'/Estrategias/tema3-05'}>
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            Continuar
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button></Link>
        </footer>

      </main>
    </div>
  );
  }