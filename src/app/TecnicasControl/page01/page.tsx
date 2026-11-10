'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Shield,
  Star,
  Anchor,
  Armchair,
  Check,
  Lightbulb,
  Play,
  ChevronRight,
  Eye,
  Hand,
  Volume2,
} from 'lucide-react';

export default function TecnicasEstrategiasControlPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EA] text-stone-800 p-6 md:p-10 font-sans flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-8">

        {/* 1. Header principal */}
        <header data-aos="fade-down" className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-stone-200/60 shadow-sm">
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
              <span className="text-xs font-bold text-stone-600 tracking-wider">01 / 06</span>
              <div className="w-28 bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-1/6 h-full rounded-full transition-all duration-300"></div>
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
            <Link href={'/'}>
          <button className="w-9 h-9 rounded-full bg-stone-200/60 flex items-center justify-center hover:bg-stone-300/60 transition-colors">
            <ArrowLeft className="w-4 h-4 text-stone-700" />
          </button>
          </Link>
        </div>

        {/* 2. Cabecera del tema */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
              Módulo 06 • Superpoderes Emocionales
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Técnicas y estrategias de control <span className="text-indigo-600 block sm:inline">(Parte 1)</span>
            </h1>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Existen superpoderes secretos para calmar el cuerpo y la mente cuando la emoción sube como una ola gigante. Elige una tarjeta mágica para explorarla y ponerla en práctica hoy[cite: 7].
            </p>
          </div>

          {/* Badge del estado actual del explorador */}
          <div className="bg-white/80 border border-purple-100 p-3.5 rounded-2xl flex items-center gap-3 shadow-sm self-start md:self-auto">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg">
              🧘
            </div>
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider">Tu estado actual</span>
              <span className="font-extrabold text-indigo-900 text-sm">Explorador Tranquilo</span>
            </div>
          </div>
        </div>

        {/* 3. Grid Principal de Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Columna Izquierda: Tarjetas de Técnicas (2x2) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Tarjeta 1: La técnica de la tortuga (Activa) */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white border-2 border-emerald-400 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">
                    <Check className="w-3 h-3" /> Activa
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-stone-900">La técnica de la tortuga</h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Aprende a respirar lento y seguro en tu refugio secreto cuando todo vaya demasiado rápido[cite: 7].
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
                  <Volume2 className="w-4 h-4" /> Respiración guiada
                </span>
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Contar estrellas hasta 10 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white border border-stone-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-stone-900">Contar estrellas hasta 10</h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Enfoca tus ojos y mente en números luminosos para que la tormenta en tu pecho se calme[cite: 7].
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-800 text-xs font-bold">
                  <Eye className="w-4 h-4" /> Concentración visual
                </span>
                <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Tarjeta 3: El ancla de los 5 sentidos */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white border border-stone-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Anchor className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-stone-900">El ancla de los 5 sentidos</h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles y 1 que saboreas para volver a tierra firme[cite: 7].
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-purple-800 text-xs font-bold">
                  <Hand className="w-4 h-4" /> Atención corporal
                </span>
                <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Tarjeta 4: El rincón de la calma */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-white border border-stone-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Armchair className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-stone-900">El rincón de la calma</h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Construye con almohadones tu propio espacio de paz, cuentos favoritos y música suave de naturaleza[cite: 7].
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-indigo-800 text-xs font-bold">
                  <Armchair className="w-4 h-4" /> Espacio seguro
                </span>
                <div className="w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Paso a paso ¿Cómo aplicarla? */}
          <div data-aos="fade-left" data-aos-delay="200" className="bg-white border border-stone-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm space-y-6">
            <div className="space-y-4">

              {/* Header de la sección */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                  <Lightbulb className="w-5 h-5 fill-amber-400 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider">Paso a paso</span>
                  <h3 className="text-lg font-extrabold text-stone-900">¿Cómo aplicarla?</h3>
                </div>
              </div>

              {/* Contenedor de Imágenes Ilustrativas de la Tortuga */}
              <div className="grid grid-cols-2 gap-2 bg-emerald-50/50 p-2 rounded-2xl border border-emerald-100">
                <div className="h-28 bg-emerald-100/70 rounded-xl flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                  <span className="text-3xl">🐢</span>
                  <span className="text-[10px] font-bold text-emerald-900 mt-1 bg-white/80 px-2 py-0.5 rounded-full shadow-2xs">
                    La Tortuga Sabia
                  </span>
                </div>
                <div className="h-28 bg-emerald-100/70 rounded-xl flex items-center justify-center text-3xl">
                  ☁️🐢
                </div>
              </div>

              {/* Explicación de la técnica */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-emerald-800 text-sm">
                  Pasito 1: Meterse al caparazón
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Cuando sientas rabia o ganas de gritar, detente como una estatua. Encoge tus hombros, cierra los ojos e imagina que estás en tu caparazón protector[cite: 7].
                </p>
              </div>

              {/* Tip o Consejo Sabio */}
              <div className="bg-indigo-50/70 border border-indigo-100 p-4 rounded-2xl space-y-1">
                <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-xs">
                  <Lightbulb className="w-3.5 h-3.5 text-indigo-600" />
                  Consejo sabio:
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  Toma aire por la nariz durante 3 segundos, sostén 2 segundos y sopla despacito como apagando una vela[cite: 7].
                </p>
              </div>

            </div>

            {/* Botón Ver más detalles */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
              <span>Ver más detalles</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 4. Pie de página con botones de navegación global */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-between pt-4">
            <Link href={'/'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
            </Link>
            <Link href={'/TecnicasControl/page02'}>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm">
            <span>Continuar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          </Link>
        </div>

      </div>

      {/* Footer minimalista */}
    </div>
  );
}