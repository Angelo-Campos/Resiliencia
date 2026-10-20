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
  Heart,
  Award,
  PartyPopper,
  Shield,
  Star,
  Anchor,
  Armchair
} from 'lucide-react';

export default function CelebracionTemaSeisPage() {
  const poderesConquistadosTemaSeis = [
    {
      id: 'PODER 01',
      titulo: 'La Técnica de la Tortuga',
      descripcion:
        'Sé meterme a mi caparazón protector, pausar mi cuerpo como una estatua y respirar profundo cuando todo va muy rápido.',
      colorBadge: 'bg-emerald-500',
      colorBg: 'bg-emerald-50/50',
      colorText: 'text-emerald-700',
      icono: <Shield className="w-3.5 h-3.5 text-white" />
    },
    {
      id: 'PODER 02',
      titulo: 'Contar Estrellas hasta 10',
      descripcion:
        'Enfoco mi mente contando estrellas del cielo de la calma, dándole aire fresco a mi respiración hasta apagar la alarma.',
      colorBadge: 'bg-amber-400',
      colorBg: 'bg-amber-50/50',
      colorText: 'text-amber-800',
      icono: <Star className="w-3.5 h-3.5 text-amber-950 fill-amber-950" />
    },
    {
      id: 'PODER 03',
      titulo: 'El Ancla de los 5 Sentidos',
      descripcion:
        'Uso mi mapa 5-4-3-2-1 para ver, tocar, oír, oler y saborear el mundo, regresando mis pies y mi mente a tierra firme.',
      colorBadge: 'bg-indigo-600',
      colorBg: 'bg-indigo-50/50',
      colorText: 'text-indigo-800',
      icono: <Anchor className="w-3.5 h-3.5 text-white" />
    },
    {
      id: 'PODER 04',
      titulo: 'El Rincón de la Calma',
      descripcion:
        'Construyo mi espacio seguro con cojines, peluches y cuentos para descansar con ternura hasta sentirme renovado.',
      colorBadge: 'bg-purple-600',
      colorBg: 'bg-purple-50/50',
      colorText: 'text-purple-800',
      icono: <Armchair className="w-3.5 h-3.5 text-white" />
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
            <button className="flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-700 px-4 py-2 rounded-2xl border border-stone-200/80 font-medium text-sm transition-colors shadow-sm cursor-pointer">
              <Map className="w-4 h-4 text-stone-500" />
              Mapa de Temas
            </button>
            <button className="bg-white hover:bg-stone-50 text-stone-700 p-2.5 rounded-2xl border border-stone-200/80 transition-colors shadow-sm cursor-pointer">
              <Home className="w-4 h-4 text-stone-500" />
            </button>
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
                <div className="bg-rose-500 w-full h-full rounded-full" />
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
                  🐢
                </div>
                <div className="absolute -bottom-2 bg-rose-700 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white">
                  ★ TEMA 06 • OFICIAL ★
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
              <Award className="w-4 h-4 text-amber-600" />
              GUARDIÁN DE LA TORTUGA Y LOS 5 SENTIDOS
            </span>
          </div>

          {/* Mensaje principal */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-rose-900 tracking-tight leading-tight">
              ¡Felicitaciones, pequeño gran explorador!
            </h1>
            <h2 className="text-sm md:text-base font-bold text-amber-900">
              Has unlocked the Medalla: &quot;Guardián de la Tortuga y los 5 Sentidos&quot;
            </h2>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
              ¡Trabajo asombroso! Ahora tienes en tu corazón las 4 herramientas mágicas para calmar cualquier tormenta: sabes refugiarte a respirar como la tortuga, encender tus estrellas de calma, anclarte con tus 5 sentidos y descansar en tu rincón especial[cite: 12].
            </p>
          </div>

          {/* Grid de los 4 Poderes Conquistados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {poderesConquistadosTemaSeis.map((poder) => (
              <div
                key={poder.id}
                className={`${poder.colorBg} border border-stone-200/60 rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-6 h-6 rounded-full ${poder.colorBadge} flex items-center justify-center shadow-xs`}>
                      {poder.icono}
                    </div>
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
          <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-base border-b-4 border-amber-600 active:translate-y-0.5 cursor-pointer">
            <span>🗺️ ¡Volver al Mapa de Temas!</span>
          </button>
            </Link>
            <Link href={'/TecnicasControl/page01'}>
          <button className="w-full sm:w-auto bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-bold px-6 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer">
            <RotateCcw className="w-4 h-4 text-indigo-700" />
            <span>Repasar Tema 06</span>
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