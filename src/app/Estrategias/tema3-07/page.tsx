import { CheckCircle2, Compass, Lock, RotateCcw, Search, Sparkles, Trophy, Wand2 } from "lucide-react";
import Link from "next/link";

 

  export default function Tema3(){
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex flex-wrap items-center justify-between gap-10 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center shadow-md border-b-2 border-amber-600">
              <Trophy className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-slate-800 text-sm sm:text-base">
              Paso 07 de 07: Celebración Final
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-rose-600 font-extrabold text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                100% Completado
              </span>
              <div className="w-24 sm:w-36 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div className="w-full h-full bg-gradient-to-r from-rose-500 via-amber-400 to-amber-500 rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-slate-500">06 / 06</span>
            </div>

            <div className="bg-emerald-700 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              ¡Tema Completado!
            </div>
          </div>
        </header>

        <section className="flex flex-col items-center text-center my-4 relative gap-5">
          
          <div className="absolute top-2 left-10 text-amber-400 text-xl animate-bounce">✨</div>
          <div className="absolute top-12 right-12 text-rose-400 text-xl">🌟</div>
          <div className="absolute bottom-4 left-1/4 text-emerald-400 text-lg">✦</div>
          <div className="absolute top-1/3 right-1/4 text-purple-400 text-lg">★</div>

          <div className="relative mb-4 flex flex-col items-center">
            <div className="flex gap-2 -mb-5 z-0">
              <div className="w-4 h-12 bg-rose-600 rounded-t-sm transform -rotate-12 shadow-sm"></div>
              <div className="w-4 h-12 bg-emerald-600 rounded-t-sm transform rotate-12 shadow-sm"></div>
            </div>

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 p-1.5 shadow-xl relative z-10 flex items-center justify-center border-4 border-amber-300">
              <div className="w-full h-full bg-rose-50 rounded-full flex flex-col items-center justify-center p-2 border-2 border-amber-200/60 relative overflow-hidden shadow-inner">
                
                <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-1 border border-rose-200 shadow-sm">
                  🧠
                </div>

                <span className="bg-slate-800 text-white font-black text-[8px] px-2 py-0.2 rounded-full uppercase mb-0.5">
                  PRO
                </span>

                <span className="text-amber-800 font-extrabold text-[9px] flex items-center gap-0.5">
                  💡 TEMA 03
                </span>

              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-amber-100/90 text-amber-900 font-black text-[10px] sm:text-xs px-4 py-1 rounded-full border border-amber-300/80 mb-3 shadow-sm">
            <Lock className="w-3 h-3 text-amber-800" />
            ¡INSIGNIA OFICIAL DESBLOQUEADA!
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-2">
            Maestro del Pensamiento Resiliente
          </h1>

          <div className="flex items-center justify-center gap-2 text-rose-600 font-black text-sm sm:text-base mb-2">
            <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
            ¡Felicitaciones, pequeño gran explorador!
            <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>

          <h2 className="text-xs sm:text-sm font-black text-amber-900 mb-3">
            Has desbloqueado la Medalla: <span className="text-amber-700">"Mago de los Pensamientos que Ayudan"</span>
          </h2>

          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-xl leading-relaxed">
            ¡Excelente trabajo! Hoy aprendiste que tus pensamientos no mandan sobre ti: tú puedes elegir pensamientos amables que llenan tu corazón de valentía y alegría.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 my-6">
          
          <div className="bg-white border border-rose-100/80 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
                  <Search className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-rose-600">
                  PODER 1
                </span>
              </div>

              <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm mb-1.5">
                Lupa de Detective
              </h3>

              <p className="text-[11px] font-medium text-slate-600 leading-relaxed mb-4">
                Reconozco cuándo una idea me bloquea y la examino con curiosidad antes de creerla.
              </p>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-black text-rose-600">
              <CheckCircle2 className="w-3.5 h-3.5" />
              ¡Dominado!
            </div>
          </div>

          <div className="bg-white border border-amber-100/80 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center">
                  <Wand2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-amber-700">
                  PODER 2
                </span>
              </div>

              <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm mb-1.5">
                Cambio Mágico
              </h3>

              <p className="text-[11px] font-medium text-slate-600 leading-relaxed mb-4">
                Transformo el "¡no puedo!" en un brillante <strong className="text-amber-800 font-bold">"¡puedo aprender paso a pasito!"</strong>.
              </p>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-black text-amber-800">
              <CheckCircle2 className="w-3.5 h-3.5" />
              ¡Dominado!
            </div>
          </div>

          <div className="bg-white border border-emerald-100/80 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Compass className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600">
                  PODER 3
                </span>
              </div>

              <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm mb-1.5">
                Acción Valiente
              </h3>

              <p className="text-[11px] font-medium text-slate-600 leading-relaxed mb-4">
                Elijo el camino que me llena de calma, respiro hondo y sigo intentándolo con alegría.
              </p>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-black text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              ¡Dominado!
            </div>
          </div>

        </section>

        <footer className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href={'/'}>
          <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            <span>🗺️</span>
            ¡Volver al Mapa y Continuar!
          </button>
          </Link>

          <Link href={'/Estrategias/tema3-01'}>
          <button className="w-full sm:w-auto bg-indigo-50/80 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 border border-indigo-100">
            <RotateCcw className="w-4 h-4" />
            Repasar el Tema 03
          </button>
          </Link>
        </footer>

      </main>
    </div>
  );
  }