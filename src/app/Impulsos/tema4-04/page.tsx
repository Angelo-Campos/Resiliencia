import { ArrowLeft, ArrowRight, Battery, Heart, HelpCircle, PauseCircle, Shield, Trophy, Users } from "lucide-react";
import Link from "next/link";

  export default function Tema4(){
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
        
        {/* ENCABEZADO CON BOTÓN ATRÁS Y BARRA DE PROGRESO */}
        <header className="flex items-center justify-between mb-4">
          <button className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
            <span className="font-extrabold">04 / 06</span>
            <div className="w-16 h-2 bg-indigo-200/70 rounded-full overflow-hidden">
              <div className="w-4/6 h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 font-black text-[10px] px-3.5 py-1 rounded-full border border-amber-200/80 shadow-sm mb-2">
            📍 Nuestras Necesidades Clave
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
            ¿Qué necesito hoy?
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Detrás de cada impulso y emoción, hay una necesidad de nuestro cuerpo o de nuestro corazón pidiendo atención con cariño.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          
          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3 hover:border-rose-200 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  🍎
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  01 • Físico
                </span>
              </div>

              <h2 className="text-sm font-black text-slate-800">
                Energía y Comida
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                "Mi cuerpo necesita una frutita rica, comida nutritiva y agua fresca."
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-rose-600 pt-1">
              <Battery className="w-3.5 h-3.5" />
              <span>¡Carga tu batería!</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3 hover:border-indigo-200 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  😴
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  02 • Descanso
                </span>
              </div>

              <h2 className="text-sm font-black text-slate-800">
                Descanso y Sueño
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                "Cuando estoy con sueño o muy cansado, me pongo más irritable y sensible."
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-indigo-600 pt-1">
              <PauseCircle className="w-3.5 h-3.5" />
              <span>Pausar y respirar</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3 hover:border-amber-200 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  🛡️
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  03 • Seguridad
                </span>
              </div>

              <h2 className="text-sm font-black text-slate-800">
                Sentirme Seguro
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                "Necesito saber que estoy en un lugar protegido, predecible y en calma."
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-amber-700 pt-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Espacio de confianza</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3 hover:border-rose-200 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  🫂
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  04 • Vínculo
                </span>
              </div>

              <h2 className="text-sm font-black text-slate-800">
                Sentirme Acompañado
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                "A veces solo necesito un abrazo tierno o estar cerca de mis amigos y profes."
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-rose-500 pt-1">
              <Users className="w-3.5 h-3.5" />
              <span>Conexión y cercanía</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3 hover:border-rose-200 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-rose-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  💖
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  05 • Afecto
                </span>
              </div>

              <h2 className="text-sm font-black text-slate-800">
                Sentirme Querido
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                "Que me escuchen con paciencia sin juzgarme y me traten con amor y dulzura."
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-rose-600 pt-1">
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span>Amor incondicional</span>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-3 hover:border-emerald-200 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  ⭐
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                  06 • Logro
                </span>
              </div>

              <h2 className="text-sm font-black text-slate-800">
                Sentirme Capaz
              </h2>

              <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                "Tener la oportunidad de intentarlo a mi ritmo y saber que confían en mí."
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-600 pt-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>¡Sí puedo lograrlo!</span>
            </div>
          </div>

        </section>

        <section className="bg-amber-100/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm mb-4">
          <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center text-xl shadow-sm flex-shrink-0">
            🧠
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <h3 className="font-black text-amber-950 text-xs sm:text-sm">
                ¡Pista para exploradores!
              </h3>
              <span className="bg-amber-800 text-amber-100 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full">
                Secreto de autorregulación
              </span>
            </div>
            <p className="text-slate-800 font-medium leading-relaxed">
              “Cuando sientas muchas ganas de enojarte, gritar o llorar sin saber por qué, haz una pausa y pregúntale a tu cuerpo: <strong className="text-rose-600 font-bold">¿Tengo hambre, tengo sueño o solo necesito un abrazo apretado?</strong>”
            </p>
          </div>
        </section>

        <section className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-3.5 flex items-start gap-3 shadow-sm mb-6 text-xs">
          <div className="w-7 h-7 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="font-extrabold text-rose-600 text-[11px] block">
              Dinámica en Sala • Ronda de Preguntas
            </span>
            <p className="text-slate-600 font-medium leading-relaxed">
              Pida a cada niño que señale con su dedito la tarjeta que más necesita hoy. Luego pregunten juntos: <em>"¿Cómo podemos ayudar a nuestro amigo a recargar esa necesidad?"</em>.
            </p>
          </div>
        </section>

        <footer className="flex items-center justify-between pt-2">
           <Link href={'/Impulsos/tema4-03'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>
          <Link href={'/Impulsos/tema4-05'}>
          
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