import { ArrowLeft, ArrowRight, CheckCircle2, Play, Plus } from "lucide-react";
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
            <span className="text-rose-500 font-extrabold text-[10px] uppercase tracking-wider">● TEMA 01</span>
            <span className="font-extrabold">06 / 06</span>
            <div className="w-16 h-2 bg-indigo-200/70 rounded-full overflow-hidden">
              <div className="w-full h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-900 font-black text-[10px] px-3.5 py-1 rounded-full border border-emerald-200/80 shadow-sm mb-2">
            🟢 Laboratorio Vivencial de Conducta
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-2">
            Actividad: ¿Qué Harías Tú con el Semáforo? 🚦
          </h1>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Veamos una situación común en el patio del colegio y pongamos en práctica las 3 luces mágicas de nuestro cerebro.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          <div className="lg:col-span-5 bg-indigo-50/40 border border-indigo-100/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-indigo-100 h-44 bg-amber-50">
                <img 
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80" 
                  alt="Situación en Recreo" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-rose-600 font-black text-[9px] uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                  SITUACIÓN EN RECREO
                </span>
                <div className="absolute top-2 right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-sm">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white font-bold text-[9px] px-2 py-0.5 rounded-full">
                  🛝 Turno en el Tobogán
                </span>
              </div>

              <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-3 flex items-start gap-2.5 text-xs">
                <span className="text-amber-600 font-black text-sm">⚠️</span>
                <div>
                  <h2 className="font-extrabold text-slate-800 text-xs">El Suceso</h2>
                  <p className="text-slate-600 text-[11px] font-medium leading-tight">
                    Alguien se adelantó en la fila sin pedir permiso ni mirar quién estaba antes.
                  </p>
                </div>
              </div>

              <div className="bg-rose-50/80 border border-rose-100 rounded-2xl p-3 flex items-start gap-2.5 text-xs">
                <span className="text-rose-500 font-black text-sm">📍</span>
                <div>
                  <h2 className="font-extrabold text-slate-800 text-xs">El Impulso Inicial</h2>
                  <p className="text-rose-700 text-[11px] font-extrabold leading-tight">
                    Ganas automáticas de empujar o gritar con fuerza: “¡Oye, yo estaba primero!”.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-100/70 rounded-2xl p-3 border border-rose-200/60 flex items-center gap-2 text-[11px] font-bold text-slate-700">
              <span className="text-base">🧠</span>
              <span>“¡Sentir enojo es normal! Pero antes de mover el cuerpo, ¡prendamos el semáforo!”</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-slate-800 flex items-center gap-2">
                <span className="text-rose-500">●</span> Paso a Paso con el Semáforo
              </h2>
              <span className="bg-indigo-50 text-indigo-900 text-[9px] font-black px-2.5 py-0.5 rounded-full border border-indigo-100">
                Dinámica de Grupo
              </span>
            </div>

            <div className="bg-white border border-rose-100 rounded-2xl p-3.5 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 bg-rose-500 text-white rounded-2xl flex flex-col items-center justify-center font-black flex-shrink-0 shadow-sm p-5 rounded-full">
                <span className="text-xs">✋</span>
                <span className="text-[7px] tracking-wider uppercase">RED</span>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase text-rose-600 block tracking-wider">
                  PASO 1: DETENER EL CUERPO
                </span>
                <h3 className="text-xs font-black text-slate-800">
                  Me detengo y bajo mis manos
                </h3>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  No empujo, no lanzo palabras de fuego. Pongo mis pies quietos como una estatua por un momento.
                </p>
              </div>
            </div>

            <div className="bg-white border border-amber-100 rounded-2xl p-3.5 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 bg-amber-400 text-slate-900 rounded-2xl flex flex-col items-center justify-center font-black flex-shrink-0 shadow-sm p-5 rounded-full">
                <span className="text-xs">💨</span>
                <span className="text-[7px] tracking-wider uppercase">YELLOW</span>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase text-amber-700 block tracking-wider">
                  PASO 2: RESPIRAR Y PENSAR
                </span>
                <h3 className="text-xs font-black text-slate-800">
                  Respiro hondo como oliendo una flor
                </h3>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  Pienso: "Tal vez no vio la fila o está muy apurada. No es necesario pelear para resolver esto."
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-3.5 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-emerald-600 text-white rounded-2xl flex flex-col items-center justify-center font-black flex-shrink-0 shadow-sm p-5 rounded-full">
                  <span className="text-xs">🌱</span>
                  <span className="text-[7px] tracking-wider uppercase">GREEN</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase text-emerald-700 tracking-wider">
                      PASO 3: ACTUAR CON SABIDURÍA
                    </span>
                    <span className="bg-amber-100 text-amber-900 text-[8px] font-extrabold px-2 py-0.2 rounded-full border border-amber-200">
                      ⏱️ Votación en Clase!
                    </span>
                  </div>
                  <h3 className="text-xs font-black text-slate-800">
                    ¿Cuál camino verde elegirías tú?
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Haz clic en las tarjetas para registrar los votos de los niños alzando la mano en el aula:
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-white rounded-full px-3 py-2 border border-slate-100 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-rose-500 text-white rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm">
                      A
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-800 text-[11px]">Opción Asertiva</span>
                        <span className="text-[9px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.2 rounded-full">Hablar claro</span>
                      </div>
                      <p className="text-[10px] text-slate-600 italic">"Decirle con amabilidad: 'Hola amigo, la fila empieza acá atrás, ¿te pones detrás mío?'"</p>
                    </div>
                  </div>
                  <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-indigo-100 flex-shrink-0 transition-all active:scale-95">
                    <span>👥 14 manos</span>
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <div className="bg-white rounded-full px-3 py-2 border border-slate-100 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm">
                      B
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-800 text-[11px]">Opción con Apoyo</span>
                        <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-full">Pedir mediación</span>
                      </div>
                      <p className="text-[10px] text-slate-600 italic">"Pedirle apoyo a la maestra para que recuerde los turnos a todos en el patio con una campana."</p>
                    </div>
                  </div>
                  <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-indigo-100 flex-shrink-0 transition-all active:scale-95">
                    <span>👥 8 manos</span>
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <div className="bg-white rounded-full px-3 py-2 border border-slate-100 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm">
                      C
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-800 text-[11px]">Opción Pacífica</span>
                        <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full">Generosidad activa</span>
                      </div>
                      <p className="text-[10px] text-slate-600 italic">"Esperar un ratito con paciencia y proponer tirarse juntos o inventar turnos divertidos."</p>
                    </div>
                  </div>
                  <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-indigo-100 flex-shrink-0 transition-all active:scale-95">
                    <span>👥 11 manos</span>
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-emerald-600 text-white rounded-2xl p-3 flex items-center gap-2.5 text-xs shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-200" />
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider block text-emerald-200">¡GRAN REVELACIÓN EN CLASE!</span>
                  <p className="font-bold text-[11px] leading-tight">
                    ¡Excelente! Todas estas opciones usan el color VERDE y evitan que la chispa explote.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section className="bg-amber-100/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm mb-6">
          <div className="w-10 h-10 bg-amber-400 text-slate-900 rounded-2xl flex items-center justify-center text-xl shadow-sm flex-shrink-0">
            🎓
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <h3 className="font-black text-amber-950 text-xs sm:text-sm">
                Guía Didáctica para la Maestra
              </h3>
              <span className="bg-amber-800 text-amber-100 text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                ⏱️ 3 a 5 minutos
              </span>
            </div>
            <p className="text-slate-800 font-medium leading-relaxed">
              Pide a 2 voluntarios que dramaticen la fila del tobogán frente a la clase. Cuando el niño se cuele, grita: "¡SEMÁFORO ROJO!" e invita a todos los estudiantes a levantar las palmas abiertas y congelar el cuerpo. Luego guíalos en 2 respiraciones lentas ("Amarillo"). Por último, cuenta en voz alta los votos de cada opción para validar que todas las soluciones verbales y reflexivas son válidas y sanas.
            </p>
            <div className="flex items-center gap-3 pt-0.5 text-[10px] font-extrabold text-emerald-700">
              <span>FC Fomenta la asertividad</span>
              <span>FC Disminuye la agresión física</span>
            </div>
          </div>
        </section>

        <footer className="flex items-center justify-between pt-2">
          
           <Link href={'/Impulsos/tema4-05'}>
          <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>

          <Link href="/Impulsos/tema4-07">
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