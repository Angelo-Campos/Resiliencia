 'use client'
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, Heart, HelpCircle, Hourglass, LucideIcon, MessageSquare, Paintbrush, PauseCircle, Sparkles, Volume2 } from "lucide-react";
import Link from "next/link";

interface StepCard {
  id: string;
  stepLabel: string;
  title: string;
  description: string;
  actionText: string;
  type: 'pause' | 'foco' | 'voz' | 'tiempo';
  bgCard: string;
  borderCard: string;
  iconBg: string;
  iconColor: string;
  actionBg: string;
  actionTextClass: string;
  icon: LucideIcon;
  actionIcon: LucideIcon;
}

export default function TecnicasControl2() {
  const stepsData: StepCard[] = [
    {
      id: '01',
      stepLabel: 'Paso 1',
      title: 'El botón de pausa mental',
      description: 'Detén el tiempo 3 segundos antes de responder con enojo. Respira hondo y cuenta: 1.. 2.. 3.',
      actionText: 'Tocar para practicar',
      type: 'pause',
      bgCard: 'bg-[#FFF6EF]',
      borderCard: 'border-[#FFD8C2]',
      iconBg: 'bg-[#E56A32]',
      iconColor: 'text-white',
      actionBg: 'bg-[#FFE2D1]',
      actionTextClass: 'text-[#D3531D]',
      icon: PauseCircle,
      actionIcon: Volume2,
    },
    {
      id: '02',
      stepLabel: 'Paso 2',
      title: 'Cambiar el foco',
      description: 'Transforma la energía inquieta dibujando, apilando bloques o inventando una canción divertida.',
      actionText: 'Actividad creativa',
      type: 'foco',
      bgCard: 'bg-[#FFFDF0]',
      borderCard: 'border-[#FFEAA0]',
      iconBg: 'bg-[#D9A726]',
      iconColor: 'text-white',
      actionBg: 'bg-[#FFF3C4]',
      actionTextClass: 'text-[#B5850B]',
      icon: Paintbrush,
      actionIcon: Paintbrush,
    },
    {
      id: '03',
      stepLabel: 'Paso 3',
      title: 'Mi voz interior amable',
      description: 'Háblate con el mismo amor y paciencia que le tendrías a tu mejor amigo del mundo.',
      actionText: 'Frases mágicas',
      type: 'voz',
      bgCard: 'bg-[#F0FDF5]',
      borderCard: 'border-[#A7F3D0]',
      iconBg: 'bg-[#34D399]',
      iconColor: 'text-white',
      actionBg: 'bg-[#D1FAE5]',
      actionTextClass: 'text-[#059669]',
      icon: Volume2,
      actionIcon: MessageSquare,
    },
    {
      id: '04',
      stepLabel: 'Paso 4',
      title: 'Tiempo fuera respetuoso',
      description: 'Pide un momento a solas con respeto y serenidad: "Necesito un ratito para volver a sonreír".',
      actionText: 'Rincón de paz',
      type: 'tiempo',
      bgCard: 'bg-[#F5F3FF]',
      borderCard: 'border-[#DDD6FE]',
      iconBg: 'bg-[#A78BFA]',
      iconColor: 'text-white',
      actionBg: 'bg-[#ECE9FE]',
      actionTextClass: 'text-[#7C3AED]',
      icon: Sparkles,
      actionIcon: Hourglass,
    },
  ];

  return (
    <section className="w-full h-auto py-8 bg-[#F5F2EB] min-h-screen font-sans">
      <div className="container-section w-[90%] lg:w-[85%] max-w-6xl mx-auto flex flex-col gap-6">

        <div data-aos="fade-down" className="flex items-center justify-between">
          <Link
            href="/Topics"
            className="w-11 h-11 bg-white text-slate-700 rounded-2xl flex items-center justify-center transition-transform hover:scale-105 shadow-sm border border-slate-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
            <span className="text-base font-extrabold text-slate-700">01 <span className="text-slate-400 font-semibold">/ 06</span></span>
            <div className="w-24 h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div className="w-1/3 h-full bg-rose-500 rounded-full" />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="relative bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-amber-100 overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1 space-y-3 z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-xl text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Módulo de Autogobierno Emocional
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Técnicas y estrategias de control <span className="text-purple-600">(Parte 2)</span>
            </h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-2xl">
              Una vez que tu cuerpo está en calma, ¡es hora de tomar buenas decisiones! Aprende cómo resolver retos diarios con empatía, juego y corazón.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-purple-50/80 p-3.5 rounded-2xl border border-purple-100 self-stretch sm:self-auto shrink-0 z-10">
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-xl shadow-inner">
              😊
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Tobi el Mapache</p>
              <p className="text-xs text-emerald-600 font-semibold">¡Tu tutor resiliente!</p>
            </div>
          </div>

          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {stepsData.map((step) => {
              const IconComponent = step.icon;
              const ActionIcon = step.actionIcon;

              return (
                <div
                  key={step.id}
                  data-aos="fade-up"
                  data-aos-delay={(Number(step.id) - 1) * 100}
                  className={`${step.bgCard} border-2 ${step.borderCard} rounded-[28px] p-5 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 ${step.iconBg} ${step.iconColor} rounded-full flex items-center justify-center shadow-sm`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-extrabold text-slate-600 border border-slate-100">
                        {step.stepLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-800 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button className={`inline-flex items-center gap-2 px-3.5 py-2 ${step.actionBg} ${step.actionTextClass} rounded-xl text-xs font-bold transition-transform active:scale-95`}>
                      <ActionIcon className="w-4 h-4" />
                      {step.actionText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-full gap-5">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-600 font-extrabold text-xs tracking-wider uppercase">
                <Brain className="w-4 h-4 text-amber-500" />
                GIMNASIO CEREBRAL
              </div>

              <h2 className="text-xl font-black text-slate-800">
                ¿Cómo aplicarla?
              </h2>

              <div className="relative bg-amber-50 rounded-2xl p-4 border border-amber-100 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="w-full h-32 bg-amber-100/60 rounded-xl flex items-center justify-center text-4xl mb-2">
                  🦊🌳
                </div>
                <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-700 shadow-sm">
                  <Sparkles className="w-3 h-3 text-emerald-500" />
                  Mini-consejo
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                ¡Entrenar nuestro cerebro lo vuelve más fuerte y sabio cada día! Así como ejercitas tus piernas corriendo en el parque, estas cuatro llaves fortalecen tu autocontrol cuando las cosas se ponen difíciles.
              </p>

              <div className="bg-purple-50/60 rounded-2xl p-3.5 space-y-2 border border-purple-100/50">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Reconoce qué sientes primero</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Elige 1 de las 4 llaves maestras</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>¡Felicitate por tu esfuerzo!</span>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2">
              Ver más técnicas
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </Link>

          <Link
            href="/TecnicasControl2/tema7-02"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-black rounded-2xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base border-b-4 border-amber-700 active:border-b-0 active:translate-y-1"
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-4 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-medium">
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