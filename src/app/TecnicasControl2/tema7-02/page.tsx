 'use client'
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, Heart, Pause, Flag, Sparkles, Hand, Wind, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EstrategiaBotonPausa() {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const options = [
    {
      id: 0,
      title: "Apretar pausa mental",
      badge: "¡Sabio!",
      desc: "Respirar 3 segundos y decir con calma: «Por favor devuélvemelo, lo estoy usando para terminar mi sol»."
    },
    {
      id: 1,
      title: "Empujar y gritarle muy fuerte",
      desc: "El volcán explota de inmediato y el lápiz termina roto en medio de la discusión."
    },
    {
      id: 2,
      title: "Llorar y tirar todos los útiles al suelo",
      desc: "Sentirte muy triste sin explicar qué pasó, perdiendo tu tiempo de recreo."
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
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-xl text-xs font-black tracking-wider uppercase">
              <Pause className="w-3.5 h-3.5" />
              PASO 1 DE 4 • PAUSA COGNITIVA Y CALMA
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Estrategias de control — 1. El botón de pausa mental
            </h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-3xl">
              Cuando sientes que vas a explotar o decir algo feo, aprieta tu botón mágico imaginario. ¡Detén el tiempo 3 segundos antes de actuar!
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-slate-100 self-stretch sm:self-auto shrink-0">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-lg shadow-inner">
              💡
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Superpoder Actual</p>
              <p className="text-sm font-extrabold text-slate-800">Mente Mágica</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-full flex items-center justify-between mb-6">
                <span className="text-xs font-black text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  Dispositivo de calma activo
                </span>
                <span className="text-[11px] font-extrabold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  Conexión Cerebral Lista
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-2">
                El Control Remoto de la Mente
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md mb-8">
                ¡Tu cerebro tiene un botón de congelación temporal! Toca el botón central y observa cómo se apaga el enojo paso a pasito.
              </p>

              <div className="relative my-4 flex flex-col items-center justify-center">
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-amber-400 border-8 border-amber-300 shadow-xl flex flex-col items-center justify-center gap-1 transition-transform active:scale-95 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-amber-900/20 flex items-center justify-center text-amber-950 mb-1">
                    <Pause className="w-7 h-7 fill-amber-950" />
                  </div>
                  <span className="font-black text-amber-950 tracking-wider text-sm">¡PAUSA!</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-3 my-6 flex-wrap">
                <span className="bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-amber-400 text-amber-950 text-[10px] flex items-center justify-center font-black">1</span> 1.. Congelo
                </span>
                <span className="text-slate-300 font-black">→</span>
                <span className="bg-purple-100 text-purple-900 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-purple-300 text-purple-950 text-[10px] flex items-center justify-center font-black">2</span> 2.. Respiro
                </span>
                <span className="text-slate-300 font-black">→</span>
                <span className="bg-slate-100 text-slate-700 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-slate-300 text-slate-800 text-[10px] flex items-center justify-center font-black">3</span> 3.. Soluciono
                </span>
              </div>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1">
                <span>🖐️</span> ¡Apretar el Botón de Pausa Ahora! ⏸️
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#F3E8FF]/60 border border-purple-200/60 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 bg-purple-200 rounded-lg flex items-center justify-center text-purple-800 font-black text-xs mb-3">
                    1
                  </div>
                  <div className="text-[10px] font-black text-purple-600 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Hand className="w-3 h-3" /> PASO UNO
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1.5">Mano al pecho</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Pon tu mano sobre el corazón y conglate como una estatua mágica por un instante.
                  </p>
                </div>
              </div>

              <div className="bg-[#ECFDF5]/80 border border-emerald-200/60 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 bg-emerald-200 rounded-lg flex items-center justify-center text-emerald-800 font-black text-xs mb-3">
                    2
                  </div>
                  <div className="text-[10px] font-black text-emerald-600 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Wind className="w-3 h-3" /> PASO DOS
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1.5">Oler galletitas</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Toma aire despacio por la nariz, imaginando el aroma tibio de galletas de canela.
                  </p>
                </div>
              </div>

              <div className="bg-[#FEF3C7]/60 border border-amber-200/60 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 bg-amber-200 rounded-lg flex items-center justify-center text-amber-800 font-black text-xs mb-3">
                    3
                  </div>
                  <div className="text-[10px] font-black text-amber-600 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Lightbulb className="w-3 h-3" /> PASO TRES
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1.5">Mente despejada</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Con el volcán apagado, elige palabras amables para comunicar lo que necesitas.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-amber-700 font-black text-xs tracking-wider uppercase">
                <Flag className="w-4 h-4 text-amber-500" />
                MISIÓN INTERACTIVA
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                El Reto de los 3 Segundos
              </h2>

              <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100 text-xs text-purple-900 leading-relaxed font-medium">
                <span className="font-extrabold text-purple-700">Situación:</span> Tu hermanito o compañero de clase te quita un lápiz de sorpresa mientras dibujas. ¿Qué haces con tu botón de pausa?
              </div>

              <div className="space-y-3">
                {options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-emerald-50/50 border-emerald-400'
                          : 'bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-extrabold text-slate-800 text-xs sm:text-sm">
                            {opt.title}
                          </span>
                          {opt.badge && (
                            <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {opt.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-500 text-emerald-950 font-extrabold text-sm rounded-2xl shadow-sm transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                Confirmar mi Elección Resiliente
              </button>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-[28px] p-5 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100/80 flex items-center justify-center text-2xl shrink-0 border border-amber-200">
            🦝
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-extrabold">
              <Sparkles className="w-3 h-3 text-emerald-600" /> Consejo de Tobi el Mapache
            </span>
            <h4 className="font-extrabold text-slate-800 text-sm">
              «¡Tres segundos salvan amistades gigantes!»
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Tobi descubrió que cuando frena 3 segundos antes de reclamar un juguete, sus palabras salen dulces y nunca lástima a sus mejores amigos del bosque.
            </p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <Link
            href="/TecnicasControl2/tema7-01"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </Link>

          <Link
            href="/TecnicasControl2/tema7-03"
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