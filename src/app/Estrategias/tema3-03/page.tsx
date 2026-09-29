import { ArrowLeft, ArrowRight, CloudRain, Flame, Search, ShieldAlert, Wand2 } from "lucide-react";
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
            <span className="font-extrabold">03 / 06</span>
            <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="w-3/6 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 font-black text-[10px] px-3 py-1 rounded-full border border-amber-200 mb-2">
            <span>👁️</span> ¡Modo Detective Emocional Activado!
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-2">
            ¿Siempre tiene que ser así?
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-3xl leading-relaxed">
            A veces nuestro cerebro nos hace <strong className="text-rose-600 font-extrabold">trampas secretas</strong> y nos hace creer cosas exageradas que no son del todo ciertas. ¡Aprende a reconocerlas!
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-rose-500 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <CloudRain className="w-5 h-5 text-white" />
                </div>
                <span className="bg-white/20 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase">
                  Trampa #1
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-rose-100 block">
                SOBREGENERALIZAR
              </span>
              <h2 className="text-base font-black leading-tight mb-4">
                La nube de SIEMPRE y NUNCA
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-rose-200 flex items-center gap-1">
                    👥 Lo que dice la mente:
                  </span>
                  <p className="font-semibold italic leading-snug">
                    "¡A mí NUNCA me sale nada bien!"
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-rose-200 flex items-center gap-1">
                    💡 Falso truco:
                  </span>
                  <p className="text-[11px] font-medium text-rose-100 leading-snug">
                    Pensar que porque pasó una sola vez, siempre volverá a salir igual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-500 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <span className="bg-white/20 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase">
                  Trampa #2
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-amber-100 block">
                BLANCO O NEGRO
              </span>
              <h2 className="text-base font-black leading-tight mb-4">
                El volcán del TODO O NADA
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-amber-100 flex items-center gap-1">
                    👥 Lo que dice la mente:
                  </span>
                  <p className="font-semibold italic leading-snug">
                    "¡Si no es perfecto, está completamente arruinado!"
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-amber-100 flex items-center gap-1">
                    💡 Falso truco:
                  </span>
                  <p className="text-[11px] font-medium text-amber-50 leading-snug">
                    No ver que entre el blanco y el negro hay matices y cosas hermosas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-600 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <span className="bg-white/20 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase">
                  Trampa #3
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-100 block">
                PERSONALIZACIÓN
              </span>
              <h2 className="text-base font-black leading-tight mb-4">
                La lupa de la CULPA
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-emerald-200 flex items-center gap-1">
                    👥 Lo que dice la mente:
                  </span>
                  <p className="font-semibold italic leading-snug">
                    "¡Seguro que todos se burlan de mí o fue culpa mía!"
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-emerald-200 flex items-center gap-1">
                    💡 Falso truco:
                  </span>
                  <p className="text-[11px] font-medium text-emerald-100 leading-snug">
                    Creer que todo lo malo que pasa alrededor gira en torno a nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-600 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <span className="bg-white/20 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase">
                  Trampa #4
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider text-purple-200 block">
                ADIVINAR PENSAMIENTOS
              </span>
              <h2 className="text-base font-black leading-tight mb-4">
                El adivino del FUTURO
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-purple-200 flex items-center gap-1">
                    👥 Lo que dice la mente:
                  </span>
                  <p className="font-semibold italic leading-snug">
                    "¡Seguro mi amigo ya no me quiere hablar nunca más!"
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-purple-200 flex items-center gap-1">
                    💡 Falso truco:
                  </span>
                  <p className="text-[11px] font-medium text-purple-100 leading-snug">
                    Inventar lo que el otro siente o piensa sin preguntarle primero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rose-50/60 border border-rose-100 rounded-3xl p-4 sm:p-5 flex items-center gap-4 mb-6 relative overflow-hidden shadow-sm">
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-2 border-rose-100">
              🧠
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-900 p-1 rounded-full border-2 border-white">
              <Search className="w-3 h-3 stroke-[3]" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold">
              <ShieldAlert className="w-3 h-3 text-amber-600" />
              Consejo del Inspector Cerebrito
            </div>

            <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm">
              "¡Cuando escuches 'nunca', 'todo' o 'nadie', enciende tu linterna!"
            </h3>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Las palabras extremas casi nunca dicen la verdad. Hazte una pregunta mágica: <strong className="text-rose-600 font-bold">¿Esto es 100% real o es solo una trampa de mi mente?</strong>
            </p>
          </div>
        </section>

        <footer className="flex items-center justify-between pt-2">
          <Link href={'/Estrategias/tema3-02'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>
            <Link href={'/Estrategias/tema3-04'}>
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
            Continuar
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button></Link>
        </footer>

      </main>
    </div>
  );
  }