import { ArrowLeft, ArrowRight, Frown, Heart, HelpCircle, MessageSquare, Volume2, Wind } from "lucide-react";
import Link from "next/link";

  export default function Tema4(){
     return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        {/* ENCABEZADO CON BARRA DE PROGRESO (02 / 06) */}
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3">
            <span className="bg-amber-100/80 text-amber-900 font-black text-xs px-3.5 py-1 rounded-full border border-amber-200/80 shadow-sm flex items-center gap-1.5">
              <span>⛵</span> Aventura en el Aula
            </span>

            {/* BARRA DE PROGRESO */}
            <div className="flex items-center gap-2.5 bg-indigo-50/80 px-3.5 py-1 rounded-full text-xs font-bold text-slate-700 border border-indigo-100 shadow-sm">
              <span className="font-extrabold text-[11px]">02 / 06</span>
              <div className="w-16 h-2 bg-indigo-200/70 rounded-full overflow-hidden">
                <div className="w-2/6 h-full bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        <section className="text-center max-w-2xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-2 flex items-center justify-center gap-2">
            Cuando reaccionamos sin pensar...
            <span className="text-2xl">💨</span>
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Si dejamos que el rayito maneje nuestro cuerpo sin frenar, las cosas se pueden complicar.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          <div className="bg-rose-50/60 border border-rose-100 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-sm">
                    ⚡
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-rose-600 block">
                      EL IMPULSO APURADO
                    </span>
                    <h2 className="text-base font-black text-slate-800">
                      Reaccionar muy rápido
                    </h2>
                  </div>
                </div>
                <span className="bg-rose-500 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  Sin frenar
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-rose-100/70 border border-rose-200/60 h-36 flex items-center justify-center p-3 text-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-3xl">🧱💥</div>
                  <span className="bg-rose-500/90 text-white font-black text-[10px] px-3 py-0.5 rounded-full shadow-sm">
                    ¡Pum! Los bloques cayeron
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-white rounded-2xl p-2.5 border border-rose-100 shadow-sm flex items-center gap-2.5">
                  <span className="text-base">🗣️</span>
                  <span className="font-bold text-slate-700">Hablar gritando muy fuerte</span>
                </div>

                <div className="bg-white rounded-2xl p-2.5 border border-rose-100 shadow-sm flex items-center gap-2.5">
                  <span className="text-base">😤</span>
                  <span className="font-bold text-slate-700">Arrebatar o empujar con molestia</span>
                </div>

                <div className="bg-white rounded-2xl p-2.5 border border-rose-100 shadow-sm flex items-center gap-2.5">
                  <span className="text-base">🥺</span>
                  <span className="font-bold text-slate-700">Sentirse triste o arrepentido después</span>
                </div>
              </div>
            </div>

            <div className="bg-rose-100/80 rounded-2xl p-3 border border-rose-200/60 flex items-start gap-2 text-xs">
              <Frown className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <p className="text-rose-950 font-medium leading-snug">
                <strong className="font-black text-rose-700">¿Qué pasa después?</strong> Nos quedamos enojados, se rompe el juego y podemos hacer sentir mal a un compañero querido.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-black shadow-sm">
                    ✨
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 block">
                      EL SUPERPODER TRANQUILO
                    </span>
                    <h2 className="text-base font-black text-slate-800">
                      Hacer una pausa mágica
                    </h2>
                  </div>
                </div>
                <span className="bg-emerald-700 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  Frenar 3 seg
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-emerald-100/70 border border-emerald-200/60 h-36 flex items-center justify-center p-3 text-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-3xl">🧩🤝</div>
                  <span className="bg-emerald-700/90 text-white font-black text-[10px] px-3 py-0.5 rounded-full shadow-sm">
                    ¡Jugando juntos en paz!
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-white rounded-2xl p-2.5 border border-emerald-100 shadow-sm flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-rose-500 flex-shrink-0"></div>
                  <span className="font-bold text-slate-700">Poner manitas quietas y calmas</span>
                </div>

                <div className="bg-white rounded-2xl p-2.5 border border-emerald-100 shadow-sm flex items-center gap-2.5">
                  <Wind className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span className="font-bold text-slate-700">Respiración honda como inflando un globo</span>
                </div>

                <div className="bg-white rounded-2xl p-2.5 border border-emerald-100 shadow-sm flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-bold text-slate-700">Pedir la palabra o buscar una alternativa</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-100/80 rounded-2xl p-3 border border-emerald-200/60 flex items-start gap-2 text-xs">
              <Heart className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5 fill-emerald-600" />
              <p className="text-emerald-950 font-medium leading-snug">
                <strong className="font-black text-emerald-800">¡El gran resultado!</strong> Protegemos a nuestros amigos, cuidamos nuestro corazón y encontramos una solución justa.
              </p>
            </div>
          </div>

        </section>

        <section className="bg-amber-100/80 border border-amber-200 rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-sm mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center text-xl shadow-sm flex-shrink-0">
              🧠
            </div>
            <div className="text-xs">
              <span className="font-black text-amber-900 uppercase text-[9px] tracking-wide block">
                💡 CONSEJO DE CEREBRITO
              </span>
              <p className="text-slate-800 font-extrabold text-xs sm:text-sm leading-tight">
                “¡Un segundo de pausa te ahorra un gran dolor de cabeza y cuida a tus amigos!”
              </p>
            </div>
          </div>

          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-[10px] px-3.5 py-2 rounded-full shadow-sm flex items-center gap-1.5 flex-shrink-0 transition-transform active:scale-95 border border-amber-500/40">
            <Volume2 className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">Escuchar a Cerebrito</span>
          </button>
        </section>

        <section className="bg-rose-50/80 border border-rose-100 rounded-2xl p-3.5 flex items-start gap-2.5 shadow-sm mb-6 text-xs">
          <HelpCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
          <p className="text-slate-700 font-medium leading-relaxed">
            <strong className="font-black text-slate-800">Pregunta para la asamblea infantil:</strong> ¿A quién le ha pasado que el rayito apurado quiso tirar un juguete o decir algo sin frenar? ¿Cómo se sintió tu pechito luego? (Invitar a 2 niñas o niños a compartir y ensayar juntos la respiración del globo).
          </p>
        </section>

        <footer className="flex items-center justify-between pt-2">
          <Link href={'/Impulsos/tema4-01'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>

          <Link href={'/Impulsos/tema4-03'}>
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