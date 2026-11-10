import { ArrowLeft, ArrowRight, Hand, Lightbulb, Repeat, Sparkles } from "lucide-react";
import Link from "next/link";

 

 export default function Tema3(){
  return(
     <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
            <span className="font-extrabold">02 / 06</span>
            <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="w-2/6 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-amber-600 font-black text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            CADENA DE REACCIÓN EMOCIONAL
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
            <span className="text-rose-600">Lo que pienso</span>
            <span className="text-amber-500 mx-2">→</span>
            <span className="text-rose-600">Lo que siento</span>
            <span className="text-amber-500 mx-2">→</span>
            <span className="text-emerald-600">Lo que hago</span>
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl mx-auto">
            ¡Nuestros pensamientos, emociones y acciones están conectados como un trencito de 3 vagones!
          </p>
        </section>

        <section className="relative grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-amber-300 -translate-y-6 z-0"></div>

          <div className="bg-[#FAF8FF] border border-indigo-100/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative z-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-indigo-900 bg-indigo-100/70 px-2.5 py-0.5 rounded-full">
                  <span>Vagón 01</span>
                  <span>•</span>
                  <span>Cabeza del tren</span>
                </div>
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </div>

              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-black text-xl mb-3 shadow-inner">
                  ?
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                  1. LO QUE PIENSO
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-indigo-50 shadow-sm relative space-y-1">
                <span className="bg-indigo-50 text-indigo-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Voz interna
                </span>
                <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                  "Se derramó mi pintura y pienso: <strong className="text-rose-600 font-black">'¡Soy malo dibujando y nunca podré!'</strong>"
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 px-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-200"></span>
              <div className="h-1 flex-1 bg-indigo-100 mx-2 rounded-full"></div>
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-200"></span>
            </div>
          </div>

          <div className="bg-[#FAF8FF] border border-indigo-100/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative z-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-rose-800 bg-rose-100/70 px-2.5 py-0.5 rounded-full">
                  <span>Vagón 02</span>
                  <span>•</span>
                  <span>El motor sensible</span>
                </div>
                <span className="text-rose-500 text-xs font-bold">〰</span>
              </div>

              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center text-xl mb-3 shadow-sm">
                  🙁
                </div>
                <h3 className="font-extrabold text-rose-600 text-sm sm:text-base">
                  2. LO QUE SIENTO
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-rose-50 shadow-sm relative space-y-1">
                <span className="bg-rose-50 text-rose-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  En el cuerpo
                </span>
                <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                  "Mi cuerpo siente <strong className="text-rose-600 font-black">tristeza</strong>, un nudito en la garganta y muchas ganas de llorar."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 px-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <div className="h-1 flex-1 bg-rose-200 mx-2 rounded-full"></div>
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
            </div>
          </div>

          <div className="bg-[#FAF8FF] border border-indigo-100/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative z-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  <span>Vagón 03</span>
                  <span>•</span>
                  <span>El resultado</span>
                </div>
                <span className="text-emerald-600 text-xs font-bold">🏃</span>
              </div>

              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl mb-3 shadow-inner">
                  <Hand className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-emerald-700 text-sm sm:text-base">
                  3. LO QUE HAGO
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-emerald-50 shadow-sm relative space-y-1">
                <span className="bg-emerald-50 text-emerald-700 font-extrabold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Conducta visible
                </span>
                <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                  "<strong className="text-emerald-700 font-black">Cruzo los brazos</strong>, tiro el dibujo a la papelera y decido no jugar más con témperas."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 px-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <div className="h-1 flex-1 bg-emerald-100 mx-2 rounded-full"></div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            </div>
          </div>
        </section>

        <section className="bg-amber-100/80 border border-amber-200/80 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              <Sparkles className="w-5 h-5 fill-slate-900" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="font-black text-amber-950 text-xs sm:text-sm">
                  ¡El secreto de los exploradores resilientes!
                </h4>
                <span className="bg-amber-200/80 text-amber-900 text-[9px] font-black px-2 py-0.5 rounded-md">
                  Pista de Oro
                </span>
              </div>
              <p className="text-amber-900 text-xs font-semibold leading-tight">
                Si cambiamos el primer vagón (lo que pensamos), ¡todos los demás vagones cambian de vía y viajan derechito hacia la calma y la alegría!
              </p>
            </div>
          </div>

          <button className="bg-white hover:bg-amber-50 text-slate-800 font-extrabold text-xs px-4 py-2.5 rounded-full border border-amber-200 flex items-center gap-2 shadow-sm transition-all active:scale-95 flex-shrink-0">
            <Repeat className="w-3.5 h-3.5 text-amber-600" />
            ¿Y si cambiamos el vagón 1?
          </button>
        </section>

        <section className="bg-indigo-50/70 border border-indigo-100/80 rounded-2xl p-3.5 px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs">
              
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-900 block">
                PREGUNTA PARA LA ASAMBLEA INFANTIL
              </span>
              <p className="text-xs font-semibold text-slate-700">
                ¿Qué pasaría en nuestro cuerpo y con nuestras manos si en vez de pensar "soy malo", decimos con voz de campeón: <strong className="text-slate-900 font-extrabold">"¡Puedo limpiarlo y seguir jugando!"</strong>?
              </p>
            </div>
          </div>

          <span className="bg-white text-indigo-900 font-extrabold text-[10px] px-3 py-1 rounded-full border border-indigo-100 flex-shrink-0">
            Dinámica 3 min
          </span>
        </section>

        <footer className="flex items-center justify-between pt-2">
          
        <Link href={'/Estrategias/tema3-01'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>

          <Link href={'/Estrategias/tema3-03'}>
           <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            Continuar
            <ArrowRight className="w-5 h-5 stroke-[3]" />
       
          </button>
             </Link>
        </footer>

      </main>
    </div>
    
  
  )
 }