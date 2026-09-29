import { ArrowLeft, ArrowRight, CheckSquare, Hand, Play, Sparkles, ThumbsUp } from "lucide-react";
import Link from "next/link";


  export default function Tema4(){
   return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
            <span className="font-extrabold">03 / 06</span>
            <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="mb-6 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-rose-100/80 text-rose-800 font-black text-[10px] px-3 py-1 rounded-full border border-rose-200/60 mb-2">
                🎯 Súper Poder Mental
              </span>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-1 flex items-center gap-2">
                El Semáforo para Pensar
                <span className="text-2xl">🚥</span>
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                Nuestra súper herramienta para pasar de la reacción a la <strong className="text-amber-600 font-bold">solución mágica</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-indigo-50 border border-indigo-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm max-w-xs">
              <div className="w-9 h-9 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                🧠
              </div>
              <div className="text-[11px] font-bold text-slate-700 leading-tight">
                <span className="font-black text-slate-900 block mb-0.5">Cerebrito dice:</span>
                "¡Cuando sientas ganas de explotar, enciende tu luz interior!"
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          <div className="bg-rose-50/60 border border-rose-100/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-rose-600 text-white rounded-full flex items-center justify-center shadow-md border-4 border-rose-200 mb-2">
                  <Hand className="w-7 h-7 stroke-[2.5]" />
                </div>
                <span className="bg-rose-600 text-white text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider mb-1">
                  PASO 1
                </span>
                <h2 className="text-base font-black text-rose-600 flex items-center gap-1">
                  🔴 ¡ME DETENGO!
                </h2>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed text-center italic">
                "Freno mis manos y mis pies. No grito, no empujo. Digo en mi mente: ¡Alto!"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-rose-100 shadow-sm text-center">
              <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">
                Gesto corporal sugerido:
              </span>
              <p className="text-xs font-bold text-slate-700 leading-tight">
                ✋ Manito abierta al frente o abrazarse con fuerza.
              </p>
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-100/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-amber-400 text-amber-950 rounded-full flex items-center justify-center shadow-md border-4 border-amber-200 mb-2">
                  <Sparkles className="w-7 h-7 stroke-[2.5]" />
                </div>
                <span className="bg-amber-500 text-slate-900 text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider mb-1">
                  PASO 2
                </span>
                <h2 className="text-base font-black text-amber-800 flex items-center gap-1">
                  🟡 ¡PIENSO Y RESPIRO!
                </h2>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed text-center italic">
                "Inhalo hondo como oliendo una flor 🌸 y soplo como apagando una velita 🎂. ¿Qué opciones tengo?"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-amber-100 shadow-sm text-center">
              <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">
                Gesto corporal sugerido:
              </span>
              <p className="text-xs font-bold text-slate-700 leading-tight">
                👈 Dedo suave en la sien y respirar despacio.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md border-4 border-emerald-200 mb-2">
                  <ThumbsUp className="w-7 h-7 stroke-[2.5]" />
                </div>
                <span className="bg-emerald-600 text-white text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider mb-1">
                  PASO 3
                </span>
                <h2 className="text-base font-black text-emerald-700 flex items-center gap-1">
                  🟢 ¡ACTÚO CON SABIDURÍA!
                </h2>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed text-center italic">
                "Elijo la mejor opción: hablo con voz clara, comparto el turno o le pido ayuda a mi maestra."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-emerald-100 shadow-sm text-center">
              <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">
                Gesto corporal sugerido:
              </span>
              <p className="text-xs font-bold text-slate-700 leading-tight">
                😊 Sonrisa y pulgar arriba listos para resolver.
              </p>
            </div>
          </div>

        </section>

        <section className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-4 sm:p-5 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-rose-500">📍</span>
            <h3 className="font-black text-slate-800 text-xs sm:text-sm">
              Ejemplo en Vivo en el Salón
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm">
              <span className="font-black text-slate-400 text-[9px] uppercase block mb-1">
                📋 Situación Desafiante
              </span>
              <p className="font-extrabold text-slate-800 leading-snug">
                “Alguien tomó los crayones que yo estaba usando sin preguntar.”
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-rose-100 shadow-sm">
              <span className="font-black text-rose-600 text-[9px] uppercase block mb-1">
                🔴 1. Freno Rojo
              </span>
              <p className="font-medium text-slate-700 leading-snug">
                Pongo las manos en mi regazo. No arrebato ni lloro. Me digo: “¡Tranqui, alto!”.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-amber-100 shadow-sm">
              <span className="font-black text-amber-600 text-[9px] uppercase block mb-1">
                🟡 2. Respiro Amarillo
              </span>
              <p className="font-medium text-slate-700 leading-snug">
                Olo la flor y soplo. Pienso: “Hay más crayones de color verde o puedo pedir turno amablemente.”
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-emerald-100 shadow-sm">
              <span className="font-black text-emerald-600 text-[9px] uppercase block mb-1">
                🟢 3. Acción Verde
              </span>
              <p className="font-medium text-slate-700 leading-snug">
                Miro a mi compañero y digo con calma: “¿Me lo prestas cuando termines de pintar?”
              </p>
            </div>

          </div>
        </section>

        <section className="bg-white border border-slate-100 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm mb-6">
          <div className="flex items-center gap-3 text-xs">
            <div className="w-8 h-8 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckSquare className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-black text-slate-800">Práctica Grupal del Semáforo</h4>
              <p className="text-slate-600 font-medium">
                Invita a los niños a levantarse y practicar los 3 gestos con su cuerpo al ritmo de tus palmas.
              </p>
            </div>
          </div>

          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-xs px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2 flex-shrink-0 transition-transform active:scale-95 border-b-2 border-amber-600">
            <Play className="w-3.5 h-3.5 fill-slate-900" />
            Probar el Semáforo
          </button>
        </section>

        <footer className="flex items-center justify-between pt-2">
           
            <Link href={'/Impulsos/tema4-02'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>

         <Link href={'/Impulsos/tema4-04'}>
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