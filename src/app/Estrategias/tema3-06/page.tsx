import { ArrowLeft, ArrowRight, CheckCircle2, Compass, GraduationCap, Heart, Lightbulb, Search, Sun, Volume2 } from "lucide-react";
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
            <div className="flex items-center gap-1 text-rose-600 font-extrabold text-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              TEMA 01
            </div>
            <span className="text-slate-300">|</span>
            <span className="font-extrabold">06 / 06</span>
            <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="w-full h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1 flex items-center gap-2">
            Actividad: Cambiemos el Pensamiento
            <Sun className="w-7 h-7 text-amber-500 fill-amber-400" />
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Hablemos en ronda: ¿Cómo podemos transformar un pensamiento nublado en un sol brillante?
          </p>
        </section>


        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-4 shadow-sm relative overflow-hidden">

              <div className="relative rounded-2xl overflow-hidden mb-3 bg-amber-100/60 border border-amber-200/50 h-36 flex items-center justify-center p-3 text-center">
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-slate-700 font-bold text-[9px] px-2.5 py-0.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
                  <span>🔔</span> En el patio de recreo
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 border-white">
                    🧠
                  </div>
                  <div className="text-left text-xs text-slate-600 font-medium max-w-[180px]">
                    <span className="font-bold text-slate-800">Cerebrito</span> está en la banca triste mientras otros juegan...
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-2xl p-3 border border-indigo-100 shadow-sm mb-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <span className="font-black text-slate-800 block mb-0.5">El suceso:</span>
                    <p className="text-slate-600 font-medium leading-snug">
                      Cerebrito se acerca sonriendo, pero un amiguito le grita: <strong className="text-rose-600 font-bold">«¡Ahora no, Cerebrito, estamos jugando a los piratas!»</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-indigo-100/60 text-indigo-900 rounded-2xl p-3 border border-indigo-200/50">
                  <span className="text-[9px] font-black uppercase tracking-wider text-indigo-600 block mb-0.5">
                    PENSAMIENTO NUBLADO
                  </span>
                  <p className="text-xs font-black text-rose-600 italic">
                    «¡Ya no me quieren en su grupo!»
                  </p>
                </div>

                <div className="bg-rose-100/70 text-rose-900 rounded-2xl p-3 border border-rose-200/60">
                  <span className="text-[9px] font-black uppercase tracking-wider text-rose-700 block mb-0.5">
                    ¿CÓMO SE SIENTE?
                  </span>
                  <p className="text-xs font-bold text-rose-800">
                    Triste, con el pecho apretado y ganas de esconderse.
                  </p>
                </div>
              </div>

            </div>
            <div className="bg-amber-100/80 border border-amber-300/80 rounded-2xl p-3.5 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Lightbulb className="w-5 h-5 fill-slate-900" />
              </div>
              <div className="text-xs">
                <h3 className="font-black text-amber-950">¡Tú puedes ser el detective!</h3>
                <p className="text-amber-900 font-medium leading-tight">
                  Un pensamiento nublado no siempre es verdad. ¡Vamos a iluminarlo!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-5 shadow-sm space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 font-bold text-base">🔄</span>
                  <h2 className="text-base font-black text-slate-800">
                    ¡Transformemos juntos la idea!
                  </h2>
                </div>
                <span className="bg-indigo-100/80 text-indigo-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Votación en clase
                </span>
              </div>

              <p className="text-xs font-medium text-slate-600 leading-snug">
                Levanten su mano por la opción que más les guste para ayudar a Cerebrito a convertir la nube en un sol:
              </p>

              <div className="space-y-3">

                <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm flex items-start gap-3 hover:border-rose-200 transition-all">
                  <div className="w-7 h-7 bg-rose-100 text-rose-600 font-black text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    A
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-extrabold text-rose-600 flex items-center gap-1 text-[11px]">
                      <Search className="w-3 h-3 stroke-[2.5]" />
                      Pensamiento Detective
                    </span>
                    <p className="font-bold text-slate-700 leading-snug">
                      «Tal vez el barco pirata ya está lleno ahorita, pero puedo preguntar si puedo ser el capitán en el próximo turno.»
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm flex items-start gap-3 hover:border-amber-200 transition-all">
                  <div className="w-7 h-7 bg-amber-100 text-amber-700 font-black text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    B
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-extrabold text-amber-600 flex items-center gap-1 text-[11px]">
                      <Compass className="w-3 h-3 stroke-[2.5]" />
                      Buscar Otra Aventura
                    </span>
                    <p className="font-bold text-slate-700 leading-snug">
                      «Puedo invitar a otros amiguitos a jugar a los exploradores espaciales o dibujar mientras ellos terminan.»
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm flex items-start gap-3 hover:border-emerald-200 transition-all">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 font-black text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    C
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-extrabold text-emerald-600 flex items-center gap-1 text-[11px]">
                      <Heart className="w-3 h-3 stroke-[2.5]" />
                      Preguntar con Amabilidad
                    </span>
                    <p className="font-bold text-slate-700 leading-snug">
                      «Respiro hondo como un león tranquilo y digo: "¿Puedo jugar con ustedes cuando empiece la nueva ronda?"»
                    </p>
                  </div>
                </div>

              </div>

              <div className="bg-emerald-700 text-white rounded-2xl p-3.5 flex items-start gap-2.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-xs font-extrabold leading-snug">
                  ¡Excelente elección! Cualquiera de estas tres opciones le da súper poderes de calma a Cerebrito.
                </p>
              </div>

            </div>
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-start gap-3 shadow-sm relative">
              <div className="w-9 h-9 bg-amber-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-800 uppercase text-[10px] tracking-wide">
                    GUÍA DIDÁCTICA PARA LA MAESTRA
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md">
                    3 a 5 min
                  </span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Pregunta a los niños cuál de las 3 opciones los ayuda a seguir alegres y sin enojarse. Destaca que ¡las tres respuestas son correctas y resilientes! Enseña que cuando un amiguito dice "ahora no", muchas veces solo significa esperar o intentar otro camino divertido sin pensar que ya no nos quieren.
                </p>
              </div>
            </div>

          </div>

        </section>
        <footer className="flex items-center justify-between pt-2">
           <Link href={'/Estrategias/tema3-05'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>

          <Link href={'/Estrategias/tema3-07'}>
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            Continuar
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button></Link>
        </footer>

      </main>
    </div>
  );
  }