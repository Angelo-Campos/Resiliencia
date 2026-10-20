 'use client'
import { ArrowLeft, ArrowRight, Heart, Sparkles, Wand2, Volume2, ShieldCheck, CheckCircle2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EstrategiaVozInterior() {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const phrasePairs = [
    {
      id: 1,
      badTitle: "VOZ REGAÑONA",
      badPhrase: "¡Todo me sale mal, soy un tonto!",
      goodTitle: "VOZ AMIGA & FUERTE",
      goodPhrase: "Estoy aprendiendo y cada intento me hace más hábil."
    },
    {
      id: 2,
      badTitle: "VOZ REGAÑONA",
      badPhrase: "¡No puedo hacerlo, me rindo!",
      goodTitle: "VOZ AMIGA & FUERTE",
      goodPhrase: "Es difícil ahora, pero si practico un poquito más lo lograré."
    },
    {
      id: 3,
      badTitle: "VOZ REGAÑONA",
      badPhrase: "¡Nadie me quiere!",
      goodTitle: "VOZ AMIGA & FUERTE",
      goodPhrase: "Hoy fue un día raro, pero soy una persona valiosa y querida."
    }
  ];

  const quizOptions = [
    {
      id: 0,
      title: "¡ESCUDO DE SABIDURÍA!",
      badge: "Elegida",
      desc: "Decirme: \"Me equivoqué aquí, lo corrijo con borrador y sigo adelante con calma.\""
    },
    {
      id: 1,
      title: "REACCIÓN QUE LASTIMA",
      desc: "Romper la hoja de papel y decir que ya no sirvo para nada."
    },
    {
      id: 2,
      title: "REACCIÓN DE ESCAPE",
      desc: "Echarle la culpa a mi compañero de banco."
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
            <span className="text-base font-extrabold text-slate-700">04 <span className="text-slate-400 font-semibold">/ 06</span></span>
            <div className="w-24 h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div className="w-4/6 h-full bg-rose-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative bg-[#F7F5EF]/60 rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-xl text-xs font-black tracking-wider uppercase">
                <Heart className="w-3.5 h-3.5" />
                PASO 3 DE 4 • AUTOEMPATÍA Y LENGUAJE INTERIOR
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-[11px] font-extrabold">
                🪄 Varita de Autoestima
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-700 tracking-tight">
              Estrategias de control — 3. Mi voz interior amable
            </h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-3xl">
              Las palabras que te dices a ti mismo son como varitas mágicas. ¡Háblate con la misma ternura, paciencia y amor con la que le hablarías a tu mejor amigo!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-wider">HERRAMIENTA MÁGICA</span>
                    <h2 className="font-black text-slate-800 text-base sm:text-lg leading-tight">
                      El Espejo de las Frases Poderosas
                    </h2>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1 rounded-full">
                  ¡Transforma tu mente!
                </span>
              </div>

              <p className="text-xs text-slate-500 font-medium">
                Toca cada tarjeta para convertir la <span className="font-bold text-rose-500">voz regañona</span> que asusta en una <span className="font-bold text-emerald-600">voz amiga</span> que ayuda:
              </p>

              <div className="space-y-4">
                {phrasePairs.map((pair) => (
                  <div key={pair.id} className="grid grid-cols-1 sm:grid-cols-11 gap-2 items-center">
                    <div className="sm:col-span-5 bg-rose-50 border border-rose-100 rounded-2xl p-3.5 flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-black text-rose-500 uppercase tracking-wider block">
                          {pair.badTitle}
                        </span>
                        <p className="text-xs font-bold text-rose-700 leading-snug">
                          "{pair.badPhrase}"
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-1 flex justify-center">
                      <div className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center shadow-sm">
                        🪄
                      </div>
                    </div>

                    <div className="sm:col-span-5 bg-emerald-50 border border-emerald-100 rounded-2xl p-3.5 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block">
                          {pair.goodTitle}
                        </span>
                        <p className="text-xs font-bold text-emerald-800 leading-snug">
                          "{pair.goodPhrase}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 border-b-4 border-amber-600 active:border-b-0 active:translate-y-1">
                <Volume2 className="w-5 h-5" />
                ¡Repetir mis frases de superpoder con voz cariñosa!
              </button>
            </div>

            <div className="bg-purple-100/70 rounded-2xl p-4 border border-purple-200/60 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                🦉
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-purple-900">Consejo del Búho Sabio</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-[10px] font-bold text-purple-700 uppercase">Guía Emocional</span>
                </div>
                <p className="text-xs text-purple-900 font-medium leading-relaxed">
                  "Tu corazón escucha todo lo que piensas. Llénate de palabras que me me abracen en vez de palabras que pinchen."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  MISIÓN INTERACTIVA
                </span>
                <span className="text-emerald-700 font-black text-xs flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Actividad guiada
                </span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                  El Botiquín de Amor Propio
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Elige tu <span className="font-extrabold text-slate-700">escudo protector</span> cuando cometes un error en una tarea escolar:
                </p>
              </div>

              <div className="space-y-3">
                {quizOptions.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-emerald-50/60 border-emerald-400'
                          : 'bg-purple-50/40 border-purple-100 hover:border-purple-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>

                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-black text-slate-800 text-xs sm:text-sm">
                            {opt.title}
                          </span>
                          {opt.badge && (
                            <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                              ✓ {opt.badge}
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

              <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-black text-purple-900">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    Medidor de Autoestima y Calma
                  </span>
                  <span className="text-emerald-600">100% Lleno</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div className="w-full h-full bg-emerald-400 rounded-full" />
                </div>
                <p className="text-[11px] text-center font-bold text-slate-600 pt-1">
                  ¡Tu mente está en sintonía armónica y segura! 🛡️
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-2 flex items-center justify-between">
          <Link
            href="/TecnicasControl2/tema7-03"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </Link>

          <Link
            href="/TecnicasControl2/tema7-05"
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