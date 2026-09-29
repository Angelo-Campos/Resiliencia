import { ArrowLeft, ArrowRight, CheckCircle2, Frown, Hand, Heart, Megaphone, Scissors, Smile, Sun, Users, XCircle } from "lucide-react";
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
            <span className="font-extrabold">05 / 06</span>
            <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div className="w-5/6 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 font-bold text-[10px] px-3 py-1 rounded-full border border-amber-200 mb-2">
            <span>🌱</span> El poder de elegir cómo vemos las cosas
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-rose-600 tracking-tight mb-2">
            Cambiar de pensamiento cambia nuestro día
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Una misma situación puede tener dos finales completamente diferentes según el camino que elijamos en nuestra cabeza.
          </p>
        </section>

        <section className="flex flex-col items-center mb-6 relative">
          <div className="bg-amber-50/90 border-2 border-amber-200/80 rounded-2xl p-4 max-w-xl w-full shadow-sm relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Scissors className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-black uppercase text-amber-900 flex items-center gap-1">
                    🎯 LA SITUACIÓN INICIAL
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.2 rounded-md">
                    En el aula
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-black text-slate-800">
                  "Estoy aprendiendo a recortar con tijeras y el papel se rompió."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl h-8 relative hidden sm:block">
            <svg className="w-full h-full" viewBox="0 0 600 30" fill="none">
              <path d="M300 0 C300 15, 150 15, 150 30" stroke="#E11D48" strokeWidth="3" strokeDasharray="4 4" />
              <path d="M300 0 C300 15, 450 15, 450 30" stroke="#16A34A" strokeWidth="3" strokeDasharray="4 4" />
            </svg>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          <div className="bg-rose-50/70 border border-rose-100/80 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-rose-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <XCircle className="w-3 h-3" />
                  Camino 1: El Bloqueo
                </span>
                <span className="text-rose-600 font-extrabold text-[10px]">
                  Respuesta Reactiva
                </span>
              </div>

              <h2 className="text-lg font-black text-rose-700 mb-4 flex items-center gap-2">
                La nube gris ☁️
              </h2>

              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-3 border border-rose-100/80 shadow-sm flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    💬
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-rose-700 block">PENSAMIENTO</span>
                    <p className="text-xs font-bold text-slate-800">"¡Nunca aprenderé, odio las tijeras!"</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-rose-100/80 shadow-sm flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Frown className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-rose-700 block">EMOCIÓN EN EL CUERPO</span>
                    <p className="text-xs font-medium text-slate-700">Enojo, calor caliente en las mejillas y tristeza.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-rose-100/80 shadow-sm flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Hand className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-rose-700 block">ACCIÓN FINAL</span>
                    <p className="text-xs font-medium text-slate-700">Arrugar la hoja y sentarse en un rincón con los brazos cruzados.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-rose-600 text-white rounded-2xl p-3 text-center shadow-sm">
              <p className="text-xs font-extrabold">
                Resultado final: No aprende el corte y se pierde el momento divertido con sus amigos.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-100/80 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3 h-3" />
                  Camino 2: El Camino Resiliente
                </span>
                <span className="text-emerald-700 font-extrabold text-[10px] flex items-center gap-1">
                  ⭐ Recomendado
                </span>
              </div>

              <h2 className="text-lg font-black text-emerald-800 mb-4 flex items-center gap-2">
                El superpoder de intentar <Sun className="w-5 h-5 text-amber-500 fill-amber-400" />
              </h2>

              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-sm flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    💡
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-emerald-800 block">PENSAMIENTO</span>
                    <p className="text-xs font-bold text-slate-800">"¡Es difícil, pero si voy despacio por la línea de puntos me saldrá mejor!"</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-sm flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-emerald-800 block">EMOCIÓN EN EL CUERPO</span>
                    <p className="text-xs font-medium text-slate-700">Respiración tranquila, calma, determinación y curiosidad.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-emerald-100/80 shadow-sm flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-emerald-800 block">ACCIÓN FINAL</span>
                    <p className="text-xs font-medium text-slate-700">Pide a la maestra que le guíe la mano una vez y lo vuelve a intentar con una sonrisa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-emerald-700 text-white rounded-2xl p-3 text-center shadow-sm flex items-center justify-center gap-2">
              <Megaphone className="w-4 h-4 flex-shrink-0" />
              <p className="text-xs font-extrabold">
                Resultado final: ¡Logra recortar su figura, se siente orgulloso y festeja con todos!
              </p>
            </div>
          </div>

        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          <div className="lg:col-span-7 bg-indigo-50/70 border border-indigo-100 rounded-2xl p-3.5 px-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg">
              🧠
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-black uppercase text-rose-600">CEREBRITO TE RECUERDA:</span>
                <span className="text-[10px] text-slate-500 font-bold">• Conductor mental</span>
              </div>
              <p className="text-xs font-extrabold text-slate-800">
                "¡Tú tienes el volante de tus pensamientos! ¿Hacia qué camino quieres conducir tu nave hoy?"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 px-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-amber-900 block">
                DINÁMICA DE AULA (5-7 AÑOS)
              </span>
              <p className="text-xs font-bold text-slate-800">
                Invita a los niños a señalar con el <strong className="text-amber-900 font-black">pulgar hacia arriba 👍</strong> cuál de los dos caminos los hace sentir más fuertes y valientes.
              </p>
            </div>
          </div>
        </section>

        <footer className="flex items-center justify-between pt-2">
          <Link href={'/Estrategias/tema3-04'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>
           <Link href={'/Estrategias/tema3-06'} >
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