'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Trophy,
  Map,
  Home,
  RotateCcw,
  CheckCircle2,
  Award,
  PartyPopper
} from 'lucide-react';

export default function CelebracionFinalPage() {
  const poderesConquistados = [
    {
      id: 'PODER 01',
      titulo: 'Detector del Volcán',
      descripcion:
        'Sé reconocer el calor en mis mejillas y mis manos antes de que la rabia o el impulso estallen.',
      colorDot: 'bg-rose-500',
      colorBg: 'bg-rose-50/50',
      colorText: 'text-rose-600'
    },
    {
      id: 'PODER 02',
      titulo: 'Semáforo del Cuerpo',
      descripcion:
        'Pongo luz roja para frenar mis manos y respirar hondo antes de empujar o hablar con enfado.',
      colorDot: 'bg-amber-500',
      colorBg: 'bg-amber-50/50',
      colorText: 'text-amber-600'
    },
    {
      id: 'PODER 03',
      titulo: 'Regla de 5 Segundos',
      descripcion:
        'Cuento del 1 al 5 soplando la velita para darle tiempo a mi cerebro sabio de tomar el control.',
      colorDot: 'bg-emerald-500',
      colorBg: 'bg-emerald-50/50',
      colorText: 'text-emerald-600'
    },
    {
      id: 'PODER 04',
      titulo: 'Consecuencias Amables',
      descripcion:
        'Elijo palabras que abrazan y construyo puentes en vez de derrumbar torres con mis amigos.',
      colorDot: 'bg-indigo-500',
      colorBg: 'bg-indigo-50/50',
      colorText: 'text-indigo-600'
    }
  ];

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
            <button className="flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-700 px-4 py-2 rounded-2xl border border-stone-200/80 font-medium text-sm transition-colors shadow-sm">
              <Map className="w-4 h-4 text-stone-500" />
              Mapa de Temas
            </button>
            <Link href={'/Impulsividad/page05'}>
            <button className="bg-white hover:bg-stone-50 text-stone-700 p-2.5 rounded-2xl border border-stone-200/80 transition-colors shadow-sm">
              <Home className="w-4 h-4 text-stone-500" />
            </button>
            </Link>
          </div>
        </header>

        {/* 2. Banner de Estado Superior */}
        <div className="bg-white border border-stone-200/80 rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5 text-amber-600" />
            </div>
            <span className="font-extrabold text-stone-900 text-base">
              Paso 05 / 05 : Celebración Final
            </span>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="flex flex-col items-end gap-1 w-full sm:w-48">
              <div className="flex justify-between w-full text-[11px] font-bold text-amber-800">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> 100% Completado
                </span>
                <span>05 / 05</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 w-full h-full rounded-full" />
              </div>
            </div>

            <span className="bg-emerald-800 text-white font-extrabold text-xs px-3.5 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4" />
              ¡Tema Completado!
            </span>
          </div>
        </div>

        {/* 3. Tarjeta de Felicitaciones y Medalla Central */}
        <div className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden space-y-8">
          
          {/* Badge flotante superior */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 border border-amber-200/60 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <span>🧠</span>
              <span>¡Cerebrito salta de alegría por tu logro!</span>
              <PartyPopper className="w-4 h-4 text-amber-600" />
            </div>
          </div>

          {/* Medalla e Insignia */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="relative flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-amber-100/50 border-4 border-amber-300 flex flex-col items-center justify-center p-4 shadow-inner relative">
                <div className="w-24 h-24 bg-white rounded-full border border-amber-200 flex items-center justify-center text-4xl shadow-sm">
                  🌋
                </div>
                <div className="absolute -bottom-2 bg-rose-700 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white">
                  ★ TEMA 05 • OFICIAL ★
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-black px-3 py-1 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-amber-600" />
              MAESTRO DEL VOLCÁN INTERIOR
            </span>
          </div>

          {/* Mensaje principal */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-rose-900 tracking-tight leading-tight">
              ¡Felicitaciones, pequeño gran explorador!
            </h1>
            <h2 className="text-sm md:text-base font-bold text-amber-900">
              Has desbloqueado la Medalla: &quot;Maestro de la Calma y el Freno Mágico&quot;
            </h2>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
              ¡Excelente trabajo! Hoy aprendiste que los impulsos son como chispas de lava caliente: tú tienes el súper poder de frenar a tiempo con tu semáforo interior, esperar 5 segundos mágicos y responder siempre con amor y palabras que cuidan[cite: 6].
            </p>
          </div>

          {/* Grid de los 4 Poderes Conquistados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {poderesConquistados.map((poder) => (
              <div
                key={poder.id}
                className={`${poder.colorBg} border border-stone-200/60 rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`w-3 h-3 rounded-full ${poder.colorDot}`} />
                    <span className={`text-[10px] font-extrabold tracking-wider ${poder.colorText}`}>
                      {poder.id}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-sm">
                    {poder.titulo}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {poder.descripcion}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-700 text-[11px] font-extrabold pt-2 border-t border-stone-200/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Habilidad Conquistada</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4. Botones Principales de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href={'/'}>
          <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-base border-b-4 border-amber-600 active:translate-y-0.5">
            <span>🗺️ ¡Volver al Mapa de Temas!</span>
          </button>
          </Link>
            <Link href={'/Impulsividad/page01'}>
          <button className="w-full sm:w-auto bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-bold px-6 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm">
            <RotateCcw className="w-4 h-4 text-indigo-700" />
            <span>Repasar Tema 05</span>
          </button>
          </Link>
        </div>

      </div>

      {/* Footer minimalista */}
    </div>
  );
}