import { ArrowLeft, ArrowRight, Rocket, Shield } from "lucide-react";
import Link from "next/link";

  export default function Tema4(){
    return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100 shadow-sm">
            <span className="font-extrabold">05 / 06</span>
            <div className="w-16 h-2 bg-indigo-200/70 rounded-full overflow-hidden">
              <div className="w-5/6 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-1.5 bg-rose-100/80 text-rose-900 font-black text-[10px] px-3.5 py-1 rounded-full border border-rose-200/80 shadow-sm mb-2">
            🧠 Lección Interactiva para Exploradores
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
            ¿Impulso o Instinto? 🐾 vs 🧠
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Dos fuerzas naturales que viven en nosotros, pero nuestro <strong className="text-rose-600 font-bold">cerebro sabio</strong> es quien guía el timón.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-100/80 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full border border-emerald-200/60">
                  🍃 Reacción Automática
                </span>
                <div className="w-9 h-9 bg-indigo-100/70 text-indigo-700 rounded-2xl flex items-center justify-center shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-black text-slate-800">
                  El Instinto <span className="text-xs font-bold text-slate-400">(El Escudo Natural)</span>
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-indigo-100/80 h-40 bg-amber-50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80" 
                  alt="Instinto - Mamá ave cuidando nido" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-slate-800 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-sm border border-slate-200">
                  🛡️ ¡Sin pensarlo!
                </span>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Es una reacción inmediata que cuida nuestra vida sin tener que razonarla. Por ejemplo: parpadear rápidamente si algo se acerca al ojo, o retirar la mano de golpe si una taza está muy caliente.
              </p>
            </div>

            <div className="bg-indigo-100/50 rounded-2xl p-3 border border-indigo-100 flex items-center gap-2 text-[11px] font-bold text-slate-700">
              <span className="text-sm">🍃</span>
              <span>¡Está diseñado por la madre naturaleza pura para protegernos las 24 horas del día!</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100/80 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded-full border border-amber-200/60">
                  ⚡ Chispa del Deseo
                </span>
                <div className="w-9 h-9 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center shadow-sm">
                  <Rocket className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-black text-slate-800">
                  El Impulso <span className="text-xs font-bold text-rose-500">(La Gran Chispa)</span>
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-indigo-100/80 h-40 bg-sky-50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80" 
                  alt="Impulso - Niño jugando" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-slate-800 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-sm border border-slate-200">
                  🚀 ¡Puedo elegir!
                </span>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Son ganas intensas de hacer, jugar o tener algo ya mismo: correr hacia el tobogán grande, querer comer un dulce justo antes del almuerzo o enfadarse si perdemos una partida.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-indigo-100 flex items-center gap-2 text-[11px] font-bold text-slate-700 shadow-sm">
              <span className="text-rose-500 text-sm">📍</span>
              <span>¡Aquí sí interviene nuestro capitán mental! Usamos el semáforo para elegir el momento correcto.</span>
            </div>
          </div>

        </section>

        <section className="bg-amber-100/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm mb-6">
          <div className="w-12 h-12 bg-rose-500 text-white rounded-full p-8 flex flex-col items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-xl">🧠</span>
            <span className="text-[8px] font-black uppercase tracking-wider">Cerebrito</span>
          </div>
          <div className="space-y-1 text-xs">
            <span className="font-extrabold text-amber-950 text-xs flex items-center gap-1.5">
              <span>💡</span> Consejo de Oro para el Recreo:
            </span>
            <p className="text-slate-800 font-medium leading-relaxed">
              “El instinto nos cuida automáticamente como un superescudo. El <strong className="text-rose-600 font-bold">impulso</strong> nos invita a actuar rápido, ¡pero con nuestra mente decidimos si le decimos <span className="bg-emerald-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded">SÍ</span>, <span className="bg-amber-500 text-white font-black text-[9px] px-1.5 py-0.5 rounded">ESPERA</span> o <span className="bg-rose-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded">AHORA NO</span>!”
            </p>
          </div>
        </section>

        <footer className="flex items-center justify-between pt-2">
          
           <Link href={'/Impulsos/tema4-04'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>

           <Link href={'/Impulsos/tema4-06'}>
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