 'use client'
import { ArrowLeft, ArrowRight, Heart, Flag, Clock, MessageSquare, Ticket, Smile, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EstrategiaTiempoFuera() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const trafficSteps = [
    {
      id: 1,
      stepLabel: "PASO 1: PARAR",
      title: "Reconocer mi necesidad",
      phrase: '"Siento que me estoy sobrecargando"',
      bg: "bg-rose-50/70",
      border: "border-rose-100",
      badgeColor: "bg-rose-500",
      textColor: "text-rose-700"
    },
    {
      id: 2,
      stepLabel: "PASO 2: EXPRESAR",
      title: "La frase mágica",
      phrase: '"Por favor, dame 5 minutos a solas para respirar"',
      bg: "bg-amber-50/70",
      border: "border-amber-100",
      badgeColor: "bg-amber-500",
      textColor: "text-amber-800"
    },
    {
      id: 3,
      stepLabel: "PASO 3: RECONECTAR",
      title: "El regreso en paz",
      phrase: '"Ya estoy tranquilo, ahora sí podemos hablar y jugar bien"',
      bg: "bg-emerald-50/70",
      border: "border-emerald-100",
      badgeColor: "bg-emerald-500",
      textColor: "text-emerald-800"
    }
  ];

  const quizOptions = [
    {
      id: 0,
      text: 'Gritarles: "¡Cállense todos ya, son insoportables!"'
    },
    {
      id: 1,
      text: 'Decirles amablemente: "Voy a sentarme un ratito en el árbol a descansar, vuelvo en un momento".'
    },
    {
      id: 2,
      text: 'Irme corriendo llorando sin explicarle a nadie qué pasó.'
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
            <span className="text-base font-extrabold text-slate-700">05 <span className="text-slate-400 font-semibold">/ 06</span></span>
            <div className="w-24 h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div className="w-5/6 h-full bg-rose-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative bg-[#F7F5EF]/60 rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-xl text-xs font-black tracking-wider uppercase">
              <Flag className="w-3.5 h-3.5" />
              PASO 4 DE 4 • COMUNICACIÓN Y LÍMITES SANOS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              07. Estrategias de control — 4. Tiempo fuera respetuoso
            </h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-3xl">
              Un tiempo fuera no es un castigo ni aislarse con rencor: es saber decir con educación cuando tu mente necesita unos minutos a solas para reiniciarse.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-purple-100/80 p-3.5 rounded-2xl border border-purple-200/60 self-stretch sm:self-auto shrink-0">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-purple-700">Duración recomendada</p>
              <p className="text-sm font-extrabold text-purple-900">5 a 7 minutos</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center font-black">
                    🚦
                  </div>
                  <div>
                    <h2 className="font-black text-slate-800 text-base sm:text-lg leading-tight">
                      El Semáforo de la Comunicación Asertiva
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      Toca cada luz para practicar cómo hablar con calma
                    </p>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 font-extrabold text-xs px-3 py-1 rounded-full">
                  3 Pasos
                </span>
              </div>

              <div className="space-y-3 relative">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 hidden sm:block -z-0" />
                {trafficSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`${step.bg} border ${step.border} rounded-2xl p-4 flex items-start gap-3 relative z-10 transition-transform hover:translate-x-1 cursor-pointer`}
                  >
                    <div className={`w-3 h-3 rounded-full ${step.badgeColor} shrink-0 mt-1.5 shadow-sm`} />
                    <div className="space-y-0.5">
                      <span className={`text-[10px] font-black uppercase tracking-wider ${step.textColor}`}>
                        {step.stepLabel}
                      </span>
                      <h3 className="font-extrabold text-slate-800 text-sm">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 italic">
                        {step.phrase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50/70 border border-purple-100 rounded-[28px] p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-700">
                    HERRAMIENTA TÁCTIL
                  </span>
                </div>
                <span className="text-[11px] font-extrabold text-amber-800 bg-amber-100 px-3 py-0.5 rounded-full flex items-center gap-1">
                  🔑 Pase Oficial
                </span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-purple-100/80 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex flex-col items-center justify-center shrink-0 border border-purple-200">
                  <Ticket className="w-6 h-6" />
                  <span className="text-[9px] font-black mt-0.5">PASE #07</span>
                </div>
                <div className="space-y-1">
                  <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2 py-0.5 rounded-md">
                    Tarjeta Recortable Digital
                  </span>
                  <h4 className="font-extrabold text-slate-800 text-sm">
                    Mi Pase de Tiempo Fuera
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Guárdalo en tu bolsillo o muéstralo con tu mano cuando sientas que las palabras no salen fácil.
                  </p>
                </div>
              </div>

              <button className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2">
                <span>🎫</span> Mostrar mi pase de tiempo fuera a mamá, papá o profe 🎯
              </button>
            </div>

            <div className="bg-emerald-400 text-emerald-950 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-emerald-950 shrink-0">
                <Smile className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-black text-sm">Regla de oro</h4>
                <p className="text-xs font-semibold leading-relaxed text-emerald-950/90">
                  El tiempo fuera termina cuando tu cuerpo se siente suelto y tu sonrisa vuelve a aparecer.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-purple-700 font-black text-xs tracking-wider uppercase">
                <MessageSquare className="w-4 h-4 text-purple-600" />
                MISIÓN INTERACTIVA
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                Cómo pedir tiempo fuera sin pelear
              </h2>

              <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100 text-xs text-purple-900 leading-relaxed font-medium">
                <span className="font-extrabold text-purple-700">🔑 Escenario:</span> Tus amigos están jugando un juego muy ruidoso y tu cabeza empieza a doler y molestarse mucho.
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
                      <p className="text-xs text-slate-700 font-bold leading-relaxed">
                        {opt.text}
                      </p>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-purple-600 bg-purple-600' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        <div className="mt-2 flex items-center justify-between">
          <Link
            href="/TecnicasControl2/tema7-04"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </Link>

          <Link
            href="/TecnicasControl2/tema7-06"
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