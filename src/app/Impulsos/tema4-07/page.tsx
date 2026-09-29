import { ArrowLeft, CheckCircle, RotateCcw, Sparkles, Star, Trophy } from "lucide-react";
import Link from "next/link";

  export default function Tema4(){
     return (
         <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      
      <header className="w-full max-w-5xl bg-white rounded-full border border-slate-200/80 shadow-sm px-6 py-2.5 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center shadow-sm">
            <Trophy className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-black text-slate-800 text-xs sm:text-sm">
            Paso 07 de 07: Celebración Final
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[9px] font-black uppercase text-rose-500 tracking-wider">
              🧠 100% Completado
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold text-slate-500">06 / 06</span>
              <div className="w-24 sm:w-32 h-2 bg-indigo-100 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <span className="bg-emerald-800 text-white font-extrabold text-[10px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <CheckCircle className="w-3.5 h-3.5" />
            ¡Tema Completado!
          </span>
        </div>
      </header>

      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col items-center justify-between relative overflow-hidden text-center">
        
        <div className="absolute top-6 left-8 text-amber-400 opacity-60">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute top-8 right-10 text-2xl">
          🎉
        </div>
        <div className="absolute top-1/2 left-6 w-2.5 h-2.5 bg-rose-300 rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-3 h-3 bg-amber-400 rounded-full"></div>
        <div className="absolute bottom-12 left-10 text-amber-400 opacity-70">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-10 right-12 text-slate-400 opacity-50">
          <Star className="w-4 h-4" />
        </div>

        <div className="flex flex-col items-center mb-6 z-10">
          <span className="bg-amber-100/80 text-amber-900 font-black text-[10px] sm:text-xs px-4 py-1 rounded-full border border-amber-200/80 shadow-sm flex items-center gap-1.5 mb-4">
            🧠 ¡Cerebrito salta de alegría por tu logro!
          </span>

          <div className="relative my-2 flex items-center justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-amber-200 via-amber-100 to-amber-300 p-2.5 shadow-xl border-4 border-amber-300/60 flex items-center justify-center relative">
              <div className="w-full h-full bg-amber-50/90 rounded-full flex flex-col items-center justify-center p-3 border border-amber-200/80 shadow-inner">
                <span className="text-4xl sm:text-5xl mb-1">🧠</span>
                <span className="text-xl">✨</span>
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-full mt-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
              </div>

              <div className="absolute -top-3 flex gap-1">
                <div className="w-5 h-8 bg-rose-500 rounded-t-sm shadow-sm"></div>
                <div className="w-5 h-8 bg-amber-400 rounded-t-sm shadow-sm"></div>
              </div>

              <span className="absolute -bottom-3 bg-white text-rose-600 font-black text-[8px] sm:text-[9px] px-3 py-1 rounded-full border border-rose-200 shadow-md uppercase tracking-wider">
                🏷️ TEMA 04 ★ OFICIAL
              </span>
            </div>
          </div>

          <span className="bg-white/90 text-slate-800 font-black text-[10px] sm:text-xs px-4 py-1 rounded-full border border-slate-200 shadow-sm uppercase tracking-wider mt-5">
            🏆 CAPITÁN DEL SEMÁFORO EMOCIONAL
          </span>
        </div>

        <section className="max-w-2xl mx-auto mb-8 z-10">
          <h1 className="text-2xl sm:text-4xl font-black text-rose-700 tracking-tight mb-2 flex items-center justify-center gap-2">
            🌟 ¡Felicitaciones, pequeño gran explorador! 🌟
          </h1>

          <p className="text-sm sm:text-base font-black text-amber-900 mb-3">
            Has desbloqueado la Medalla: "Capitán del Semáforo Emocional"
          </p>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed max-w-xl mx-auto">
            ¡Excelente trabajo! Hoy aprendiste que tus impulsos son como chispas de energía: tú tienes el súper poder de frenar en <strong className="text-rose-600 font-black">rojo</strong>, respirar en <strong className="text-amber-600 font-black">amarillo</strong> y actuar en <strong className="text-emerald-600 font-black">verde</strong> con amor y sabiduría.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8 z-10">
          
          <div className="bg-indigo-50/40 border border-indigo-100 rounded-3xl p-4 shadow-sm flex flex-col justify-between text-left relative overflow-hidden">
            <span className="absolute top-3 right-3 bg-rose-100 text-rose-700 text-[9px] font-black px-2 py-0.5 rounded-full">
              Poder 01
            </span>
            <div className="space-y-2">
              <div className="w-7 h-7 rounded-full bg-rose-500 shadow-sm flex items-center justify-center text-white text-xs font-bold">
                🔴
              </div>
              <h2 className="text-xs sm:text-sm font-black text-rose-700">
                Freno de Emergencia
              </h2>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Sé detenerme a tiempo, pausar mi cuerpo y no actuar con gritos o empujones cuando sienta enojo.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-50/80 p-1.5 rounded-xl border border-emerald-100">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Habilidad Conquistada</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100 rounded-3xl p-4 shadow-sm flex flex-col justify-between text-left relative overflow-hidden">
            <span className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-0.5 rounded-full">
              Poder 02
            </span>
            <div className="space-y-2">
              <div className="w-7 h-7 rounded-full bg-amber-400 shadow-sm flex items-center justify-center text-slate-900 text-xs font-bold">
                🟡
              </div>
              <h2 className="text-xs sm:text-sm font-black text-amber-800">
                Respiración del Semáforo
              </h2>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Inhalo calma como oliendo una flor y exhalo despacio como apagando una velita para pensar con claridad.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-50/80 p-1.5 rounded-xl border border-emerald-100">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Habilidad Conquistada</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100 rounded-3xl p-4 shadow-sm flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black px-2 py-0.5 rounded-full">
                Poder 03
              </span>
            </div>
            <div className="space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-600 shadow-sm flex items-center justify-center text-white text-xs font-bold">
                🟢
              </div>
              <h2 className="text-xs sm:text-sm font-black text-emerald-800">
                Capitán Sabio
              </h2>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Elijo palabras amables, propongo soluciones pacíficas y cuido el corazón de mis compañeros de clase.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-50/80 p-1.5 rounded-xl border border-emerald-100">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Habilidad Conquistada</span>
            </div>
          </div>

        </section>

        <footer className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full z-10 pt-2">
           
            <Link href={'/'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Inicio
          </button>
          </Link>
        <Link href={'/tema4-01'}>
          <button className="w-full sm:w-auto bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 border border-indigo-100">
            <RotateCcw className="w-4 h-4 text-indigo-700" />
            Repasar Tema 04
          </button>
        </Link>
        </footer>

      </main>
    </div> 
     )
  }