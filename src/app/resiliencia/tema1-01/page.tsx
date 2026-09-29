import { ArrowLeft, ArrowRight, Compass, Footprints, Sprout, Users, Wind } from "lucide-react";
import Link from "next/link";

  

   export default function About(){
    return(
       <section data-aos="fade-in" className="w-full min-h-[80vh] py-4 bg-[#F5F2EB] flex flex-col justify-center items-center font-sans">
      <div className="container-section w-[90%] max-w-5xl mx-auto h-full flex flex-col justify-between gap-3">
        <div className="relative bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-8 border-4 border-white overflow-hidden flex flex-col justify-between items-center flex-1 min-h-[70vh]">
          
          <div className="w-full flex items-center justify-between">
            <Link href={'/'} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="bg-rose-100/80 text-rose-700 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm flex items-center gap-2 border border-rose-200/50 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
              Tema 01 • Resiliencia
            </div>

            <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100 shadow-sm">
              <span>01 / 06</span>
              <div className="w-16 h-2 bg-indigo-200/70 rounded-full overflow-hidden">
                <div className="w-1/6 h-full bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center my-auto w-full max-w-3xl py-2">
            <div className="bg-amber-100/80 text-amber-900 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 mb-3 border border-amber-200 shadow-sm">
              <Compass className="w-4 h-4 text-amber-600" />
              ¡Empecemos nuestra aventura!
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 drop-shadow-sm">
                <span className="text-rose-500">¿Qué </span>
                <span className="text-amber-500">es </span>
                <span className="text-slate-800">la </span>
                <span className="text-rose-500">R</span>
                <span className="text-amber-500">E</span>
                <span className="text-emerald-500">S</span>
                <span className="text-rose-500">I</span>
                <span className="text-blue-500">L</span>
                <span className="text-purple-500">I</span>
                <span className="text-emerald-500">E</span>
                <span className="text-amber-500">N</span>
                <span className="text-rose-500">C</span>
                <span className="text-blue-500">I</span>
                <span className="text-rose-500">A?</span>
              </h1>

              <p className="text-slate-600 font-semibold text-base sm:text-lg mb-1">
                A veces las cosas se ponen difíciles o nos dan miedo...
              </p>
              <p className="text-rose-600 font-extrabold text-base sm:text-lg">
                ¡Pero tenemos el poder de aprender, superar el reto y seguir adelante!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
              <div className="bg-indigo-50/50 hover:bg-indigo-50 border-2 border-indigo-100/60 p-5 rounded-2xl flex items-center gap-4 transition-all hover:shadow-md">
                <div className="bg-amber-500 text-white p-3.5 rounded-2xl shadow-md flex-shrink-0">
                  <Footprints className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg mb-0.5">
                    Afrontar los retos
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Respirar hondo y dar el primer paso con valentía.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50/50 hover:bg-indigo-50 border-2 border-indigo-100/60 p-5 rounded-2xl flex items-center gap-4 transition-all hover:shadow-md">
                <div className="bg-emerald-500 text-white p-3.5 rounded-2xl shadow-md flex-shrink-0">
                  <Sprout className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg mb-0.5">
                    Aprender y crecer
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Cada equivocación nos hace más fuertes y sabios.
                  </p>
                </div>
              </div>
            </div>
          </div>

     <div className="w-full flex items-center justify-end gap-4 sm:gap-6 pt-4 relative">
          <Link href={'/'}>
            <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
          </Link>
         <div className="bg-amber-200 text-amber-900 font-black text-xs px-3.5 py-2 rounded-xl shadow-sm border border-amber-300 hidden sm:block whitespace-nowrap">
    💡 ¡Tú puedes lograrlo!
          </div>

      <Link href={'/resiliencia/tema1-02'} className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-7 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 z-20 border-b-4 border-amber-600">
    Continuar
      <ArrowRight className="w-5 h-5 stroke-[3]" />
      </Link>
       </div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-emerald-500 -z-0"></div>
        </div>

        <div className="bg-indigo-50/90 border border-indigo-100 rounded-2xl p-3.5 px-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 gap-2 shadow-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-rose-500 flex-shrink-0" />
            <span>
              <strong className="text-slate-900 font-extrabold">Pregunta detonadora para el aula:</strong>{" "}
              <em className="text-slate-600 font-medium">"¿Qué hacen ustedes cuando una torre de bloques se les cae al suelo?"</em>
            </span>
          </div>
          <button className="flex items-center gap-1.5 text-rose-600 hover:text-rose-700 font-bold whitespace-nowrap bg-rose-50 hover:bg-rose-100 px-3 py-1 rounded-xl transition-colors border border-rose-200/60">
            <Wind className="w-4 h-4" />
            Dinámica de respiración
          </button>
        </div>
      </div>
    </section>
    )
   }