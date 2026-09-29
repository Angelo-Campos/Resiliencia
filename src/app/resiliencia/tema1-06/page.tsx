    'use client'
import { ArrowLeft, Brain, Lightbulb, MessageCircle, RefreshCw, Sparkles, Star, Trophy, Users, Users2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


  export default function tema6(){ 

       const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = [
    {
      id: 1,
      number: '01',
      title: 'Pensar con calma',
      code: 'OPCIÓN A',
      description: 'Respirar hondo y transformar la mancha en un dragón o una nube mágica.',
      icon: Brain,
      color: 'rose',
      border: 'border-rose-200',
      bgIcon: 'bg-rose-100 text-rose-600',
      activeBg: 'bg-rose-50 border-rose-400',
      barColor: 'bg-rose-500',
    },
    {
      id: 2,
      number: '02',
      title: 'Pedir ayuda',
      code: 'OPCIÓN B',
      description: 'Contarle a la profesora o a un compañero para buscar ideas juntos.',
      icon: Users,
      color: 'amber',
      border: 'border-amber-200',
      bgIcon: 'bg-amber-100 text-amber-700',
      activeBg: 'bg-amber-50 border-amber-400',
      barColor: 'bg-amber-500',
    },
    {
      id: 3,
      number: '03',
      title: 'Intentarlo otra vez',
      code: 'OPCIÓN C',
      description: 'Tomar una hoja nueva y empezar con más calma y experiencia.',
      icon: RefreshCw,
      color: 'emerald',
      border: 'border-emerald-200',
      bgIcon: 'bg-emerald-100 text-emerald-700',
      activeBg: 'bg-emerald-50 border-emerald-400',
      barColor: 'bg-emerald-500',
    },
  ];

    return(
      <div data-aos="fade-in" className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-sans text-slate-800 selection:bg-rose-100">
      <main className="w-full max-w-4xl bg-white rounded-[32px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col gap-6 relative overflow-hidden">
        
        <header className="flex items-center justify-between">
            <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full flex items-center justify-center transition-all active:scale-90">
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100 shadow-inner text-xs sm:text-sm font-bold text-slate-600">
            <span className="text-rose-500 font-black tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              TEMA 01
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-extrabold text-slate-700">06 / 06</span>
            <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-full h-full bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          <div className="lg:col-span-8 space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200/60">
              <MessageCircle className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
              DINÁMICA PARTICIPATIVA EN EL AULA
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Actividad: <span className="text-rose-500">¿Qué harías tú?</span>
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Hablemos juntos en clase: ¿Cómo podemos resolver esta situación?
            </p>
          </div>

          <div className="lg:col-span-4 bg-indigo-50/70 border border-indigo-100/80 p-3.5 rounded-2xl flex items-start gap-3 shadow-sm">
            <div className="w-8 h-8 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
              <Lightbulb className="w-4 h-4 fill-slate-900" />
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
              <strong className="text-slate-900 block font-bold">Para la Maestra:</strong>
              Invita a 2 o 3 niños a dramatizar su solución favorita antes de pulsar.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-50/70 via-indigo-50/40 to-pink-50/50 border border-purple-100 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shadow-sm relative overflow-hidden">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md border-2 border-purple-100 overflow-hidden">
            <span className="text-5xl sm:text-6xl drop-shadow-sm select-none">🎨</span>
            <div className="absolute top-2 right-2 bg-rose-500 text-white p-1 rounded-full">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block bg-rose-100 text-rose-700 font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider border border-rose-200/50">
              📖 El caso del dibujo mágico
            </span>
            <h2 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
              "El cerebrito estaba dibujando un hermoso castillo para su aventura, pero se le derramó un poco de pintura sobre el papel. <span className="text-rose-600 font-black">¿Qué podría hacer ahora?</span>"
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Todas las respuestas pueden ser valiosas. Elige la alternativa que mejor te ayude a ser resiliente:
            </p>
          </div>
        </section>

        {/* Interactive Options */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedOption === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedOption(item.id)}
                className={`bg-white border-2 rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none relative overflow-hidden group hover:scale-[1.02] hover:shadow-md ${
                  isSelected
                    ? item.activeBg + ' shadow-lg ring-2 ring-offset-1 ring-slate-400'
                    : item.border + ' shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-slate-300 group-hover:text-slate-400 transition-colors">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {item.code}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-110 ${item.bgIcon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                  <div className={`h-full w-full transition-transform duration-300 ${item.barColor} ${isSelected ? 'translate-x-0' : '-translate-x-full group-hover:-translate-x-1/2'}`}></div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="bg-amber-100/90 border border-amber-300/60 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center text-slate-900 flex-shrink-0 shadow-md">
            <Star className="w-5 h-5 fill-slate-900 text-slate-900" />
          </div>
          <div>
            <h4 className="font-extrabold text-amber-950 text-xs sm:text-sm">
              ¡Excelente! ¡Todas las respuestas son correctas y resilientes!
            </h4>
            <p className="text-amber-900/90 text-xs font-medium leading-tight">
              Todas demuestran una forma genial de afrontar el reto. ¡Haz clic en cualquiera de las 3 opciones para explorarlas!
            </p>
          </div>
        </section>
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <Link href={'/resiliencia/tema1-05'}>
            <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
          </Link>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-all active:scale-95 w-full sm:w-auto justify-center">
            <ArrowLeft className="w-4 h-4" />
            Volver a la historia
          </button>

          <Link href={'/resiliencia/tema1-07'}><button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600 w-full sm:w-auto justify-center">
            <Trophy className="w-5 h-5 fill-slate-900" />
            ¡Ver Mi Medalla y Celebrar! →
          </button></Link>
        </footer>

      </main>
      <aside className="w-full max-w-4xl mt-4 bg-white/80 backdrop-blur-sm border border-stone-200/80 rounded-2xl p-3 px-5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm">
        <span className="text-base select-none">🗣️</span>
        <p className="text-xs sm:text-sm">
          <strong className="text-slate-900 font-extrabold">Pregunta para la asamblea escolar:</strong>{" "}
          <em className="text-slate-600 font-medium font-serif">"¿Alguna vez hiciste algo increíble tras equivocarte?"</em>
        </p>
      </aside>
    </div>
    )
  }
