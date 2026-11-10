import { ArrowLeft, ArrowRight, CheckCircle2, Cloud, Frown, Heart, HelpCircle, Info, Lightbulb, Sparkles, Users } from "lucide-react";
import Link from "next/link";

 

  export default function Tema3(){
     return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-rose-100/80 text-rose-700 font-extrabold px-4 py-1.5 rounded-full text-xs sm:text-sm flex items-center gap-2 border border-rose-200/50">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              Tema 03 Estrategias para el Desarrollo de Resiliencia •
            </div>

            <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
              <span className="font-extrabold">01 / 06</span>
              <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                <div className="w-1/6 h-full bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-amber-600 font-black text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 fill-amber-400 text-amber-500" />
            PODER MENTAL INFANTIL
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-rose-600 tracking-tight mb-2">
            Lo que pensamos importa
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-3xl leading-relaxed">
            Nuestros pensamientos son como <strong className="text-amber-800 font-extrabold">anteojos mágicos</strong>: ¡según lo que pensamos por dentro, podemos sentirnos tristes o llenos de energía y alegría!
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

          <div className="lg:col-span-7 bg-gradient-to-br from-indigo-50/60 via-purple-50/30 to-pink-50/40 border border-indigo-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-rose-100 text-rose-700 font-extrabold text-[10px] px-3 py-1 rounded-full border border-rose-200/50 flex items-center gap-1">
                  🎨 Momento de Pintura con Crayones
                </span>
                <span className="text-[10px] font-extrabold text-rose-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  ¡Línea manchada!
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-indigo-100/80 relative overflow-hidden">
                    <span className="text-5xl select-none">🧠</span>
                    <div className="absolute top-1 right-1 bg-rose-500 text-white p-0.5 rounded-full">
                      <Frown className="w-3 h-3" />
                    </div>
                  </div>
                  <span className="bg-rose-100 text-rose-700 font-extrabold text-[10px] px-3 py-0.5 rounded-full mt-3 flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                    ¡Corazón apachurrado!
                  </span>
                </div>

                <div className="sm:col-span-7 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-rose-600 font-black text-[10px] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    ¡Pensamiento Rápido!
                    <span className="text-slate-400 font-medium normal-case ml-auto">Llegó como un rayo</span>
                  </div>

                  <blockquote className="text-sm sm:text-base font-black text-rose-600 leading-tight">
                    "¡Oh no! ¡Todo me sale mal!"
                  </blockquote>

                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    Al salirse de la línea, Cerebrito sintió que su dibujo ya no servía y que no sabía pintar castillos. ¿Te ha pasado alguna vez?
                  </p>

                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-2 flex items-center gap-2 text-[10px] font-bold text-rose-700">
                    <Frown className="w-4 h-4 flex-shrink-0 text-rose-500" />
                    <span>Este pensamiento hace que nos den ganas de soltar los crayones y rendirnos.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-indigo-100/80 rounded-2xl p-3 flex items-center gap-2 text-xs font-bold text-slate-700 shadow-sm">
              <HelpCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span><strong>Recuerda:</strong> Nuestra cabeza inventa muchas historias al instante.</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="bg-rose-50/70 border-2 border-rose-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-black text-rose-700 text-base flex items-center gap-2">
                    <div className="w-7 h-7 bg-rose-600 text-white rounded-full flex items-center justify-center">
                      <Cloud className="w-4 h-4 fill-white" />
                    </div>
                    1. El pensamiento llega
                  </h3>
                  <span className="bg-rose-100 text-rose-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    Automático
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
                  A veces un pensamiento aparece sin pedir permiso y nos dice cosas que nos hacen sentir chiquitos o con ganas de llorar.
                </p>
              </div>

              <div className="bg-white/90 rounded-2xl p-2.5 px-3 border border-rose-100/80 flex items-center gap-2 text-[11px] font-bold text-slate-600">
                <Info className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>Es normal que aparezcan cuando algo se pone difícil.</span>
              </div>
            </div>

            <div className="bg-amber-50/70 border-2 border-amber-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm relative">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-black text-amber-900 text-base flex items-center gap-2">
                    <div className="w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 fill-white" />
                    </div>
                    2. ¿Será verdad lo que dice?
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    ¡Descubrimiento!
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
                  ¡Un pensamiento es solo una idea pasajera, no una verdad para siempre! Tú eres el capitán de tus crayones.
                </p>
              </div>

              <div className="bg-white/90 rounded-2xl p-2.5 px-3 border border-amber-100/80 flex items-center gap-2 text-[11px] font-bold text-amber-900">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>¡Una mancha no arruina todo el hermoso castillo!</span>
              </div>
            </div>

          </div>
        </section>
        <section className="bg-emerald-100/80 border border-emerald-200 text-emerald-950 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-700 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block">
                GUÍA PARA LA MAESTRA O FACILITADOR
              </span>
              <p className="text-xs sm:text-sm font-extrabold text-emerald-950">
                Pregunta a los niños: “¿Alguna vez pensaron que no podían hacer algo y después descubrieron que sí podían?”
              </p>
            </div>
          </div>

          <span className="bg-white/80 text-emerald-800 font-extrabold text-[10px] px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5 flex-shrink-0">
            👥 3 min de ronda
          </span>
        </section>

        <footer className="flex items-center justify-between pt-2">
         <Link href={'/'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
         </Link>

          <Link href={'/Estrategias/tema3-02'}><button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            Continuar
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button></Link>
        </footer>

      </main>
    </div>
  );

  }