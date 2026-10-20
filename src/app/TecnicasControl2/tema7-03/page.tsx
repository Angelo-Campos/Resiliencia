 'use client'
import { ArrowLeft, ArrowRight, Heart, Sparkles, MapPin, Compass, RotateCw, Lightbulb, CheckCircle2, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EstrategiaCambiarFoco() {
  const [selectedDestination, setSelectedDestination] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const destinations = [
    {
      id: 0,
      badge: "1. Arte Libre",
      title: "🎨 Dibujar una nube de colores",
      desc: "Hacer garabatos y rayas suaves para descargar la energía.",
      action: "Seleccionado"
    },
    {
      id: 1,
      badge: "2. Manos",
      title: "🧱 Apilar 10 bloques o legos",
      desc: "Conectar piezas una a una con paciencia y pulso firme.",
      action: "Toca para elegir"
    },
    {
      id: 2,
      badge: "3. Sonido",
      title: "🎵 Cantar o silbar gracioso",
      desc: "Cambia la letra de tu canción favorita a palabras divertidas.",
      action: "Toca para elegir"
    },
    {
      id: 3,
      badge: "4. Cuerpo",
      title: "🏃 Dar 5 saltos de rana",
      desc: "Estirar los brazos al cielo y sacudir pies con vigor.",
      action: "Toca para elegir"
    }
  ];

  const quizOptions = [
    {
      id: "A",
      text: "Ir a la cocina a tomar un vaso de agua fresca y estirar los brazos"
    },
    {
      id: "B",
      text: "Patear la mesa y enojarse con todos durante todo el día"
    },
    {
      id: "C",
      text: "Guardar silencio encerrado y con mucho resentimiento"
    }
  ];

  return (
    <section className="w-full h-auto py-8 bg-[#F5F2EB] min-h-screen font-sans">
      <div className="container-section w-[90%] lg:w-[85%] max-w-6xl mx-auto flex flex-col gap-6">

        <div className="flex items-center justify-between">
          <Link
            href="/TecnicasControl2/tema7-01"
            className="w-11 h-11 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center transition-transform hover:scale-105 shadow-sm border border-purple-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-base font-extrabold text-slate-700">02 <span className="text-slate-400 font-semibold">/ 06</span></span>
            <div className="w-24 h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div className="w-2/6 h-full bg-rose-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative bg-[#F7F5EF]/60 rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-xl text-xs font-black tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" />
                PASO 2 DE 4 • REDIRECCIÓN DE ENERGÍA Y CREATIVIDAD
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-extrabold">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Linterna Activa
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-[11px] font-extrabold">
                🎮 Modo Juego
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              07. Estrategias de control — 2. Cambiar el foco
            </h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-3xl">
              Cuando te sientas atrapado en el enojo o la frustración, mueve tu linterna mágica hacia otra actividad divertida para refrescar tu cabeza.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 self-stretch sm:self-auto shrink-0">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-lg shadow-inner">
              🌅
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">COMPAÑERO GUÍA</p>
              <p className="text-sm font-extrabold text-slate-800">¡Alumbra lo divertido!</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-black text-slate-800 text-base sm:text-lg leading-tight">
                      La Rueda Creativa de Enfoque
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      Selecciona o gira tu linterna mágica para redirigir tu atención
                    </p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-3 py-1 rounded-full">
                  4 Destinos
                </span>
              </div>

              <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white overflow-hidden min-h-[140px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-bold w-fit z-10 border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Destino seleccionado: <span className="text-amber-200 font-black">Nube de colores</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destinations.map((dest) => {
                  const isSelected = selectedDestination === dest.id;
                  return (
                    <div
                      key={dest.id}
                      onClick={() => setSelectedDestination(dest.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                        isSelected
                          ? 'bg-purple-50/70 border-purple-400'
                          : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                            {dest.badge}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-slate-800 text-sm mb-1">
                          {dest.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          {dest.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-purple-600 pt-2 border-t border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        {dest.action}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 border-b-4 border-amber-600 active:border-b-0 active:translate-y-1">
                <RotateCw className="w-4 h-4" />
                ¡Girar la linterna mágica de distracción sana!
              </button>

              <div className="bg-purple-50/60 rounded-2xl p-4 border border-purple-100/80 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black text-purple-700 uppercase tracking-wider">
                    DATO DE EXPLORADOR CURIOSO
                  </span>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    ¿Sabías que cuando haces algo con tus manos, el cerebro desconecta el botón de alarma del enojo automáticamente?
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  MISIÓN INTERACTIVA
                </span>
                <span className="text-amber-800 font-black text-xs flex items-center gap-1">
                  ⭐ +25 Resili-Puntos
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                Encuentra la actividad anti-rabia
              </h2>

              <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100 text-xs text-purple-900 leading-relaxed font-medium">
                <span className="font-extrabold text-purple-700">Situación de prueba:</span> "Armaste un rompecabezas de 100 piezas y se desarmó la última pieza al colocarla. Sientes muchas ganas de patear y romperlo todo. ¿Cómo cambias el foco?"
              </div>

              <div className="relative bg-amber-50 rounded-2xl p-4 border border-amber-100/80 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="w-full h-32 bg-amber-100/60 rounded-xl flex items-center justify-center text-4xl mb-2">
                  🧩🧸
                </div>
                <div className="absolute bottom-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-extrabold text-slate-700 shadow-sm border border-slate-100">
                  Respira hondo antes de elegir
                </div>
              </div>

              <div className="space-y-3">
                {quizOptions.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-purple-50/80 border-purple-400'
                          : 'bg-slate-50/50 border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {opt.id}
                        </span>
                        <p className="text-xs text-slate-700 font-bold leading-relaxed">
                          {opt.text}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                    </div>
                  );
                })}
              </div>

              <div className="bg-amber-100/70 border border-amber-200/80 rounded-2xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider">
                      INSIGNIA DESBLOQUEADA
                    </span>
                    <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm">
                      Explorador Creativo
                    </h4>
                  </div>
                </div>
                <span className="bg-amber-300 text-amber-950 font-black text-xs px-2.5 py-1 rounded-lg">
                  Nivel 2
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-2 flex items-center justify-between">
          <Link
            href="/TecnicasControl2/tema7-02"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </Link>

          <Link
            href="/TecnicasControl2/tema7-04"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-black rounded-2xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base border-b-4 border-amber-700 active:border-b-0 active:translate-y-1"
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-2 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-medium">
          <span>Plataforma Educativa de Aprendizaje Socioemocional • Nivel Inicial (5-7 años)</span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Con amor para pequeños grandes exploradores
          </span>
        </div>

      </div>
    </section>
  );
}