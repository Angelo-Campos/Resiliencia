'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Flame,
  Wind,
  Check,
  Zap,
  Hand,
  Heart,
  PartyPopper
} from 'lucide-react';

export default function VolcanInteriorPage() {
  // Estado para la opción seleccionada en la Misión Interactiva
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<number>(1);
  // Estado para el nivel de temperatura del volcán (1: Calmado, 2: Burbujeando, 3: A punto de estallar)
  const [nivelVolcan, setNivelVolcan] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#F7F4EA] text-stone-800 p-6 md:p-10 font-sans flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-6">

        {/* 1. Header principal */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-stone-200/60 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-rose-500 text-white p-2.5 rounded-2xl shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-rose-900">
              Cerebrito Aventuras
            </span>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="flex items-center gap-3 bg-stone-100/80 px-4 py-2 rounded-2xl">
              <span className="text-xs font-bold text-stone-600 tracking-wider">04 / 06</span>
              <div className="w-28 bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-4/6 h-full rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-700 px-4 py-2 rounded-2xl border border-stone-200/80 font-medium text-sm transition-colors shadow-sm">
              <Map className="w-4 h-4 text-stone-500" />
              Mapa de Temas
            </button>
            <button className="bg-white hover:bg-stone-50 text-stone-700 p-2.5 rounded-2xl border border-stone-200/80 transition-colors shadow-sm">
              <Home className="w-4 h-4 text-stone-500" />
            </button>
          </div>
        </header>

        {/* Botón Atrás superior */}
        <div>
            <Link href={'/Impulsividad/page03'}>
          <button className="w-9 h-9 rounded-full bg-stone-200/60 flex items-center justify-center hover:bg-stone-300/60 transition-colors">
            <ArrowLeft className="w-4 h-4 text-stone-700" />
          </button>
          </Link>
        </div>

        {/* 2. Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* COLUMNA IZQUIERDA (5 de 12) */}
          <div className="lg:col-span-5 space-y-5">

            {/* Cabecera del tema */}
            <div className="bg-white/80 border border-stone-200/70 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 bg-purple-100/70 text-purple-800 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Autoconocimiento Corporal
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
                El volcán interior
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Aprender a sentir cuándo el volcán dentro de nosotros empieza a calentarse nos da el superpoder de elegir cómo actuar antes de que haga erupción.
              </p>
            </div>

            {/* Tarjeta: Termómetro del Volcancito */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                  <span>🌡️</span>
                  Termómetro del Volcancito
                </div>

                <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  nivelVolcan === 1 ? 'bg-emerald-100 text-emerald-800' :
                  nivelVolcan === 2 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {nivelVolcan === 1 && 'Estado: Tranquilo y fresco'}
                  {nivelVolcan === 2 && 'Estado: Entibiándose'}
                  {nivelVolcan === 3 && 'Estado: Muy caliente'}
                </span>
              </div>

              {/* Área Gráfica del Volcán */}
              <div className="bg-indigo-50/40 border border-indigo-100/70 rounded-3xl p-6 text-center space-y-4 relative overflow-hidden">
                <div className="w-28 h-24 bg-stone-200/60 rounded-t-full mx-auto flex items-end justify-center relative pb-2 transition-transform">
                  <div className={`text-5xl transition-all ${nivelVolcan === 3 ? 'scale-125 animate-bounce' : ''}`}>
                    🌋
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-stone-100 py-2 px-4 rounded-2xl text-xs font-semibold text-stone-700 inline-block shadow-sm">
                  {nivelVolcan === 1 && '"¡Respira conmigo... me siento sereno y templado!"'}
                  {nivelVolcan === 2 && '"¡Mmm... siento algo de calorcito por aquí!"'}
                  {nivelVolcan === 3 && '"¡Cuidado! ¡Necesito aire fresco ya!"'}
                </div>
              </div>

              {/* Indicadores de Nivel */}
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className={nivelVolcan === 1 ? 'text-emerald-600' : 'text-stone-400'}>
                    🧘 1. Calmado
                  </span>
                  <span className={nivelVolcan === 2 ? 'text-amber-600' : 'text-stone-400'}>
                    〰️ 2. Burbujeando
                  </span>
                  <span className={nivelVolcan === 3 ? 'text-rose-600' : 'text-stone-400'}>
                    🔥 3. A punto de estallar
                  </span>
                </div>

                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden flex">
                  <div className={`h-full transition-all duration-300 ${
                    nivelVolcan === 1 ? 'w-1/3 bg-emerald-500' :
                    nivelVolcan === 2 ? 'w-2/3 bg-amber-400' : 'w-full bg-rose-500'
                  }`} />
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex gap-2 pt-1">
                <button 
                  onClick={() => setNivelVolcan(1)}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold py-3 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-1.5 text-xs"
                >
                  <Wind className="w-4 h-4" />
                  ¡Enfriar con respiración!
                </button>
                <button 
                  onClick={() => setNivelVolcan((prev) => (prev % 3) + 1)}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-3 px-4 rounded-2xl transition-colors text-xs flex items-center gap-1.5"
                >
                  <span>📈</span>
                  Sentir calor
                </button>
              </div>

            </div>

            {/* Consejo del Sabio Búho */}
            <div className="bg-indigo-100/60 border border-indigo-200/60 rounded-3xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-indigo-200 text-indigo-900 flex items-center justify-center flex-shrink-0 mt-0.5 text-lg">
                🐾
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-indigo-950 text-xs">El consejo del sabio búho</h4>
                  <span className="bg-indigo-200/80 text-indigo-900 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    Guía Guardián
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-medium pt-1">
                  &quot;La rabia no es mala, es solo energía caliente. Si la notas a tiempo en tu pancita o tu carita, puedes transformarla en calma soplando despacio como quien enfría una sopa caliente.&quot;
                </p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA (7 de 12) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Misión Interactiva Header Banner */}
            <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-sm space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 flex items-center gap-2">
                <span>MISIÓN INTERACTIVA</span>
                <span>•</span>
                <span>Toca una señal</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black">
                MISIÓN INTERACTIVA: EL DETECTOR DE LAVA
              </h2>
              <p className="text-xs text-indigo-100 font-medium">
                ¿Qué sientes en tu cuerpo cuando tu volcán interior empieza a despertar?
              </p>
            </div>

            {/* Lista de Opciones de Señales */}
            <div className="space-y-3">

              {/* Opción 1: Calor en las mejillas */}
              <div
                onClick={() => setOpcionSeleccionada(1)}
                className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  opcionSeleccionada === 1
                    ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                    : 'border-stone-200/80 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                    <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Calor en las mejillas o las orejas</div>
                    <div className="text-xs text-stone-500 font-medium">Tu carita se pone tibia y roja como manzana</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  opcionSeleccionada === 1 ? 'bg-emerald-500 text-white' : 'border border-stone-300'
                }`}>
                  {opcionSeleccionada === 1 && <Check className="w-4 h-4" />}
                </div>
              </div>

              {/* Opción 2: Manos apretadas */}
              <div
                onClick={() => setOpcionSeleccionada(2)}
                className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  opcionSeleccionada === 2
                    ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                    : 'border-stone-200/80 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center flex-shrink-0">
                    <Hand className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Manos apretadas en puños</div>
                    <div className="text-xs text-stone-500 font-medium">Tus deditos se me cierran con mucha fuerza</div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border ${
                  opcionSeleccionada === 2 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                }`} />
              </div>

              {/* Opción 3: Respiración rápida */}
              <div
                onClick={() => setOpcionSeleccionada(3)}
                className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  opcionSeleccionada === 3
                    ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                    : 'border-stone-200/80 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center flex-shrink-0">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Respiración rápida como un motor</div>
                    <div className="text-xs text-stone-500 font-medium">Tu pecho sube y baja rápido como un tren</div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border ${
                  opcionSeleccionada === 3 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                }`} />
              </div>

              {/* Opción 4: Ganas de gritar */}
              <div
                onClick={() => setOpcionSeleccionada(4)}
                className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  opcionSeleccionada === 4
                    ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                    : 'border-stone-200/80 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Ganas de gritar o saltar</div>
                    <div className="text-xs text-stone-500 font-medium">La energía busca salir de golpe hacia afuera</div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border ${
                  opcionSeleccionada === 4 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                }`} />
              </div>

            </div>

            {/* Retroalimentación Positiva */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-5 flex items-start gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-emerald-400 text-emerald-950 flex items-center justify-center flex-shrink-0 shadow-sm">
                <PartyPopper className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-stone-900 text-base">¡Muy bien observado!</h4>
                  <span className="bg-emerald-200/80 text-emerald-900 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                    +20 Resili-Puntos
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  Al notar el calor en tus mejillas, activas tu freno mágico y le me avisas a tu cerebro que es momento de respirar hondo. ¡Has dominado el primer paso!
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/Impulsividad/page03'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
            </Link>
            <Link href={'/Impulsividad/page05'}>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm">
            <span>Continuar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          </Link>
        </div>

      </div>

      {/* Footer minimalista */}
      <footer className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 pt-8 mt-6 border-t border-stone-200/50 gap-2">
        <p>Plataforma Educativa de Aprendizaje Socioemocional • Nivel Inicial (5-7 años)</p>
        <p className="flex items-center gap-1">
          <span>Con amor para pequeños grandes exploradores</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </p>
      </footer>
    </div>
  );
}