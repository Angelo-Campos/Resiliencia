 'use client'
import { Award, CheckCircle2, Heart, Home, PauseCircle, Paintbrush, Volume2, Sparkles, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function CelebracionFinalTema07() {
  const powers = [
    {
      id: "01",
      title: "Botón de Pausa Mental",
      desc: "Sé detener el tiempo 3 segundos antes de responder con enojo: mano al pecho, respirar hondo y contar 1, 2, 3.",
      icon: PauseCircle,
      iconBg: "bg-amber-500",
      badgeColor: "bg-amber-100 text-amber-800",
      cardBg: "bg-[#F4F8FB]",
      powerTag: "PODER 01"
    },
    {
      id: "02",
      title: "Cambiar el Foco",
      desc: "Transformo la energía inquieta dibujando, construyendo o cantando una canción divertida para enfriar mi cabeza.",
      icon: Paintbrush,
      iconBg: "bg-amber-400",
      badgeColor: "bg-amber-100 text-amber-800",
      cardBg: "bg-[#F4F8FB]",
      powerTag: "PODER 02"
    },
    {
      id: "03",
      title: "Mi Voz Interior Amable",
      desc: "Me hablo con paciencia y ternura, transformando frases feas en palabras mágicas de superpoder y amor propio.",
      icon: Volume2,
      iconBg: "bg-emerald-500",
      badgeColor: "bg-emerald-100 text-emerald-800",
      cardBg: "bg-[#F4F8FB]",
      powerTag: "PODER 03"
    },
    {
      id: "04",
      title: "Tiempo Fuera Respetuoso",
      desc: 'Pido mi momento a solas con calma y educación diciendo: "Necesito un ratito para volver a sonreír".',
      icon: Sparkles,
      iconBg: "bg-purple-500",
      badgeColor: "bg-purple-100 text-purple-800",
      cardBg: "bg-[#F4F8FB]",
      powerTag: "PODER 04"
    }
  ];

  return (
    <section className="w-full h-auto py-8 bg-[#F5F2EB] min-h-screen font-sans">
      <div className="container-section w-[90%] lg:w-[85%] max-w-6xl mx-auto flex flex-col gap-6">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-black">
              🧠
            </div>
            <span className="font-extrabold text-slate-800 text-lg">
              Cerebrito Aventuras
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/Topics"
              className="px-4 py-2 bg-white text-slate-700 font-bold text-xs rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 hover:bg-slate-50 transition-colors"
            >
              Mapa de Temas
            </Link>
            <Link
              href="/"
              className="w-10 h-10 bg-white text-slate-700 rounded-2xl flex items-center justify-center transition-transform hover:scale-105 shadow-sm border border-slate-100"
            >
              <Home className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0">
              🏆
            </div>
            <span className="font-extrabold text-slate-700 text-xs sm:text-sm">
              Paso 06 de 06: Celebración Final
            </span>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-2 flex-1 sm:flex-none">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-wider">
                100% Completado
              </span>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-full h-full bg-amber-400 rounded-full" />
              </div>
            </div>
            <span className="bg-emerald-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl flex items-center gap-1 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" /> ¡TEMA COMPLETADO!
            </span>
          </div>
        </div>

        <div className="bg-white rounded-[36px] p-6 sm:p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 bg-amber-100/70 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black mb-6">
            <span>🧠 ¡Cerebrito salta de alegría por tu logro!</span>
          </div>

          <div className="relative mb-6 flex flex-col items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-amber-400/20 border-4 border-dashed border-amber-400 flex items-center justify-center p-2 relative">
              <div className="w-28 h-28 rounded-full bg-amber-400 border-4 border-amber-300 shadow-lg flex items-center justify-center text-4xl">
                🐻
              </div>
            </div>
            <span className="mt-2 bg-rose-600 text-white text-[9px] font-black tracking-widest px-3 py-0.5 rounded-full uppercase shadow-sm">
              ★ TEMA 07 • OFICIAL ★
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-black text-slate-700 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            GUARDIÁN DE LA EMPATÍA Y LA CALMA ACTIVA
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-3 flex items-center justify-center gap-2 flex-wrap">
            <span>🌟</span> ¡Felicitaciones, pequeño gran explorador! <span>🌟</span>
          </h1>

          <p className="font-extrabold text-rose-600 text-sm sm:text-base mb-3">
            Has desbloqueado la Medalla: "Guardián de la Empatía y la Calma Activa"
          </p>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mb-8">
            ¡Increíble trabajo! Ahora sabes cómo tomar buenas decisiones con tu mente despejada: pausar antes de reaccionar, transformar tu energía con juegos creativos, hablarte con cariño y pedir tu tiempo fuera respetuoso cuando lo necesitas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
            {powers.map((power) => {
              const IconComponent = power.icon;
              return (
                <div
                  key={power.id}
                  className={`${power.cardBg} border border-slate-100 rounded-3xl p-5 flex flex-col justify-between min-h-[180px] shadow-sm`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-full ${power.iconBg} text-white flex items-center justify-center shadow-sm`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${power.badgeColor}`}>
                        {power.powerTag}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-800 text-sm mb-1.5">
                      {power.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {power.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Habilidad Conquistada
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-amber-500 hover:bg-amber-600 text-amber-950 font-black rounded-2xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base border-b-4 border-amber-700 active:border-b-0 active:translate-y-1"
          >
            <span>🗺️</span> ¡Volver al Mapa de Temas!
          </Link>

          <Link
            href="/TecnicasControl2/tema7-01"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-2xl transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Repasar Tema 07
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