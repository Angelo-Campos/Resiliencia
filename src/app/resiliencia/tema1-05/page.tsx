
import { ArrowLeft, ArrowRight, Compass, Dumbbell, HeartHandshake, HelpCircle, RefreshCw, ShieldCheck, Sun, Zap } from "lucide-react";
import Link from "next/link";

 
  export default function Tema5(){
     return(
       <section data-aos="fade-in" className="w-full h-auto">
      <div className="container-section w-[90%] mx-auto items-center flex min-h-[calc(100vh-100px)] justify-center py-6">
        <div className="relative w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-10 border-4 border-white flex flex-col justify-between">
          
          <div className="flex items-center justify-between mb-2">
            <Link href={'/resiliencia/tema1-04'} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
                <span className="text-rose-500 font-extrabold">● TEMA 01</span>
                <span>|</span>
                <span>05 / 06</span>
                <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-rose-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center my-auto">
            <div className="bg-amber-100/80 text-amber-900 font-extrabold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 mb-3 border border-amber-200/80">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              Gran Pregunta Filosófica
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
              ¿Nacemos sabiendo ser <span className="text-rose-500 underline decoration-wavy decoration-amber-300">resilientes</span>?
            </h1>

            <p className="text-xs sm:text-sm font-extrabold text-rose-600 max-w-xl mb-6">
              ¡La resiliencia no es magia, se aprende y se entrena día a día!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              <div className="bg-[#FFFBEB] border-2 border-amber-200 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="bg-amber-500 text-white text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1">
                      ★ Lo que ya está en ti
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-800 tracking-wider uppercase">
                      NIVEL 1 • INNATO
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-200/70 rounded-full flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        Tu energía natural para empezar cada mañana con ganas de moverte y saltar.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-200/70 rounded-full flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                        <Compass className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        Tu gran curiosidad y deseo insaciable de tocar, descubrir y explorar el mundo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 flex items-center gap-3 border border-amber-100 shadow-sm">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    🌱
                  </div>
                  <div>
                    <h4 className="font-extrabold text-amber-900 text-xs sm:text-sm">
                      ¡La semillita!
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                      Naces con todo el potencial listo para crecer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F0FDF4] border-2 border-emerald-400 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="bg-emerald-600 text-white text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1">
                      🌱 Lo que aprendes practicando
                    </span>
                    <span className="text-[10px] font-extrabold text-emerald-800 tracking-wider uppercase">
                      NIVEL 2 • APRENDIDO
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-200/70 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                        <Sun className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        Con las experiencias cotidianas: resolver retos y superar pequeños tropezones.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-200/70 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        Con el cariño y guía de tu familia y tus maestras en el aula.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-200/70 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                        <RefreshCw className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        Intentándolo una y otra vez cuando una tarea parece difícil.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 flex items-center gap-3 border border-emerald-100 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-emerald-900 text-xs sm:text-sm">
                      ¡Entrenar la mente!
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                      Como un músculo: entre más juegas, más fuerte se hace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
            <div className="bg-emerald-100/80 border border-emerald-200 text-emerald-900 rounded-3xl p-3.5 px-5 flex items-center gap-3 max-w-md">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold leading-snug">
                “¡Cada experiencia nos enseña algo nuevo y nos hace más y más fuertes!”
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <Link href={'/resiliencia/tema1-04'}>
                <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
                  <ArrowLeft className="w-4 h-4" />
                  Atrás
                </button>
              </Link>
              <div className="bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-2xl flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <div>
                  <h5 className="text-xs font-black text-rose-600">¡Regando el corazón!</h5>
                  <p className="text-[10px] font-semibold text-slate-500">La práctica hace florecer tus superpoderes.</p>
                </div>
              </div>

              <Link href={'/resiliencia/tema1-06'} className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600 whitespace-nowrap">
                ¡Continuar!
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
 }
