import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Compass, Lightbulb, MessageCircle, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

 

  export default function Tema4(){
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3">
            <span className="bg-rose-100 text-rose-700 font-extrabold text-xs px-3 py-1 rounded-full border border-rose-200/60">
              Tema 04: Impulsos
            </span>
            <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
              <span className="font-extrabold">01 / 06</span>
              <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                <div className="w-1/6 h-full bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 font-black text-[10px] px-3 py-1 rounded-full border border-amber-200/60 mb-2">
              ☀️ Descubrimiento Inicial
            </span>
            <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-900 font-bold text-[10px] px-3 py-1 rounded-full border border-indigo-100">
              <Lightbulb className="w-3 h-3 text-amber-500 fill-amber-400" />
              Exploración sensorial
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-1 flex items-center gap-2">
            ¿Qué es un impulso?
            <Zap className="w-7 h-7 text-amber-400 fill-amber-400" />
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            A veces sentimos un rayito de energía que nos da ganas de actuar inmediatamente.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          <div className="lg:col-span-6 bg-rose-50/50 border border-rose-100/80 rounded-3xl p-4 shadow-sm space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-amber-100 to-amber-50 border border-amber-200/60 h-48 sm:h-56 flex items-center justify-center p-4">
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-amber-900 font-black text-[9px] px-2.5 py-0.5 rounded-full border border-amber-200 shadow-sm flex items-center gap-1">
                ☀️ ¡El Rayito Rápido!
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-4xl shadow-md border-2 border-white relative">
                  🧠
                  <div className="absolute -top-1 -right-1 text-xl">✨</div>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-3xl shadow-sm border-2 border-white">
                  🐰
                </div>
              </div>

              <button className="absolute bottom-3 right-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-[10px] px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 border border-amber-500/30 transition-transform active:scale-95">
                <span>👆</span> Tocar la chispa
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-rose-100 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 fill-amber-400" />
              </div>
              <div className="text-xs space-y-1">
                <span className="font-extrabold text-rose-600 block">¿Qué siente nuestro cuerpo?</span>
                <p className="text-slate-600 font-medium leading-relaxed">
                  ¿Sentiste alguna vez un <strong className="text-amber-800 font-bold">cosquilleo veloz en las manos o en los pies</strong> con ganas de saltar, quitar o gritar? ¡Eso es un impulso!
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-4 shadow-sm relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-xs font-black">
                    ⚡
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-900">
                    SENSACIÓN 01
                  </span>
                </div>
                <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
              </div>

              <h2 className="text-base font-black text-slate-800 mb-2">
                La chispa veloz
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
                Aparece súper rápido, como un relámpago en el pecho o en la panza. No avisa, ¡simplemente llega como un cohete!
              </p>

              <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 border border-amber-200 shadow-sm">
                <Clock className="w-3 h-3 text-amber-600" />
                Sucede en menos de 1 segundo
              </div>
            </div>

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-3xl p-4 shadow-sm relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs font-black">
                    🧠
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-900">
                    SUPERPODER 02
                  </span>
                </div>
                <Compass className="w-4 h-4 text-rose-600" />
              </div>

              <h2 className="text-base font-black text-slate-800 mb-2">
                El capitán del barco
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
                Pero nosotros tenemos un cerebro inteligente que puede <strong className="text-rose-600 font-extrabold">decidir qué hacer con esa chispa</strong> antes de actuar. ¡Nosotros tenemos el timón!
              </p>

              <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-[10px] font-bold text-emerald-700 border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Tú eliges cómo responder
              </div>
            </div>

            <div className="bg-slate-100/80 rounded-2xl p-3 flex items-center justify-between text-xs font-bold text-slate-700 border border-slate-200/60">
              <div className="flex items-center gap-2">
                <span className="text-rose-500">💡</span>
                <span>¿Has sentido esa chispa hoy?</span>
              </div>
              <button className="bg-white hover:bg-slate-50 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full border border-slate-300 shadow-sm flex items-center gap-1">
                ¡Sí, la conozco! 👋
              </button>
            </div>

          </div>

        </section>

        <section className="bg-amber-100/60 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm mb-6">
          <div className="w-9 h-9 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <MessageCircle className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-black text-amber-950 uppercase text-[10px] tracking-wide">
                Guía de diálogo para el aula
              </span>
              <span className="bg-amber-200/80 text-amber-900 text-[9px] font-extrabold px-2 py-0.2 rounded-md">
                Pregunta clave
              </span>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              Pregunta a los niños: <strong className="text-amber-950 font-bold">"¿En qué momentos sienten que su cuerpo quiere moverse o reaccionar como un cohete espacial?"</strong> Invítalos a señalar la panza, las manos o el pecho.
            </p>
          </div>
        </section>

        <footer className="flex items-center justify-between pt-2">
         <Link href={'/'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
         </Link>

          <Link href={'/Impulsos/tema4-02'}>
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            Continuar
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
          </Link>
        </footer>

      </main>
    </div>
  );
  }