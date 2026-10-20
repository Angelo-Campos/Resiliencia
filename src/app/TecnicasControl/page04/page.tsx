'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Home as HomeIcon,
  BookOpen,
  Music,
  Check,
  Bookmark,
  Heart,
  HelpCircle,
  Lightbulb,
  Wand2
} from 'lucide-react';

export default function RinconCalmaPage() {
  // Estado de los 4 elementos interactivos del Rincón de Calma
  const [elementosActivos, setElementosActivos] = useState<{ [key: string]: boolean }>({
    cojines: true,
    libros: true,
    peluche: true,
    lluvia: true
  });

  // Estado para la opción seleccionada en la misión interactiva
  const [opcionEscenario, setOpcionEscenario] = useState<number>(1);

  // Toggle de elementos del rincón
  const toggleElemento = (llave: string) => {
    setElementosActivos((prev) => ({
      ...prev,
      [llave]: !prev[llave]
    }));
  };

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
            <button className="flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-700 px-4 py-2 rounded-2xl border border-stone-200/80 font-medium text-sm transition-colors shadow-sm cursor-pointer">
              <Map className="w-4 h-4 text-stone-500" />
              Mapa de Temas
            </button>
            <button className="bg-white hover:bg-stone-50 text-stone-700 p-2.5 rounded-2xl border border-stone-200/80 transition-colors shadow-sm cursor-pointer">
              <Home className="w-4 h-4 text-stone-500" />
            </button>
          </div>
        </header>

        {/* Botón Atrás superior */}
        <div>
            <Link href={'/TecnicasControl/page03'}>
          <button className="w-9 h-9 rounded-full bg-stone-200/60 flex items-center justify-center hover:bg-stone-300/60 transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-stone-700" />
          </button>
          </Link>
        </div>

        {/* 2. Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* COLUMNA IZQUIERDA (7 de 12) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Cabecera del tema */}
            <div className="bg-white/80 border border-stone-200/70 rounded-3xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 bg-purple-100/70 text-purple-900 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                <HomeIcon className="w-3.5 h-3.5" />
                TÉCNICA 4 DE 4 • ESPACIO SEGURO Y AUTOCUIDADO
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
                06. Técnicas de control — <span className="text-indigo-600">4. El rincón de la calma</span>[cite: 10]
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Un rincón de la calma <span className="font-extrabold text-indigo-900 underline decoration-amber-400">no es un castigo</span>, ¡es tu guarida secreta de recarga! Un lugar donde puedes ir a abrazar un cojín, hojear un cuento o simplemente descansar hasta estar listo[cite: 10].
              </p>
            </div>

            {/* Tarjeta: Diseña tu Rincón de Calma Mágico */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 shadow-sm space-y-5">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-amber-500" />
                  <h3 className="font-extrabold text-stone-900 text-base">
                    Diseña tu Rincón de Calma Mágico[cite: 10]
                  </h3>
                </div>

                <span className="bg-indigo-100 text-indigo-900 text-[11px] font-bold px-3 py-1 rounded-full">
                  ¡Toca para activar![cite: 10]
                </span>
              </div>

              {/* Escena Ilustrativa del Rincón con tooltips interactivos */}
              <div className="w-full h-56 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl relative overflow-hidden flex items-center justify-center p-4 border border-indigo-200/40 shadow-inner">
                {/* Elementos ambientales / stickers representativos */}
                <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

                <div className="relative z-10 text-center space-y-2">
                  <span className="text-5xl">⛺🧸📚🌧️</span>
                  <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-xs font-bold text-white inline-block">
                    CALM CORNER
                  </div>
                </div>

                {/* Badges de ubicación dentro de la ilustración */}
                {elementosActivos.cojines && (
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-stone-200 text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    🛋️ Manta suave[cite: 10]
                  </span>
                )}
                {elementosActivos.peluche && (
                  <span className="absolute bottom-10 left-1/3 bg-white/90 backdrop-blur-sm border border-stone-200 text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    🧸 Mi peluche guardián[cite: 10]
                  </span>
                )}
                {elementosActivos.libros && (
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm border border-stone-200 text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    📚 Cuentos[cite: 10]
                  </span>
                )}
                {elementosActivos.lluvia && (
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-stone-200 text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    🎵 Sonido de lluvia[cite: 10]
                  </span>
                )}
              </div>

              {/* Botones Grid de los 4 Elementos del Rincón */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                {/* Elemento 1 */}
                <button
                  onClick={() => toggleElemento('cojines')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    elementosActivos.cojines
                      ? 'border-indigo-500 bg-indigo-50/60 shadow-xs'
                      : 'border-stone-200 bg-stone-50/50 opacity-60'
                  }`}
                >
                  <span className="text-xl">🛋️</span>
                  <span className="text-xs font-bold text-stone-900">Cojines y Manta[cite: 10]</span>
                  <span className="text-[10px] font-extrabold text-emerald-600 flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> {elementosActivos.cojines ? 'Activo' : 'Inactivo'}[cite: 10]
                  </span>
                </button>

                {/* Elemento 2 */}
                <button
                  onClick={() => toggleElemento('libros')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    elementosActivos.libros
                      ? 'border-indigo-500 bg-indigo-50/60 shadow-xs'
                      : 'border-stone-200 bg-stone-50/50 opacity-60'
                  }`}
                >
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span className="text-xs font-bold text-stone-900">Libros de Paz[cite: 10]</span>
                  <span className="text-[10px] font-extrabold text-emerald-600 flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> {elementosActivos.libros ? 'Activo' : 'Inactivo'}[cite: 10]
                  </span>
                </button>

                {/* Elemento 3 */}
                <button
                  onClick={() => toggleElemento('peluche')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    elementosActivos.peluche
                      ? 'border-indigo-500 bg-indigo-50/60 shadow-xs'
                      : 'border-stone-200 bg-stone-50/50 opacity-60'
                  }`}
                >
                  <span className="text-xl">🧸</span>
                  <span className="text-xs font-bold text-stone-900">Peluche Guardián[cite: 10]</span>
                  <span className="text-[10px] font-extrabold text-emerald-600 flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> {elementosActivos.peluche ? 'Activo' : 'Inactivo'}[cite: 10]
                  </span>
                </button>

                {/* Elemento 4 */}
                <button
                  onClick={() => toggleElemento('lluvia')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    elementosActivos.lluvia
                      ? 'border-indigo-500 bg-indigo-50/60 shadow-xs'
                      : 'border-stone-200 bg-stone-50/50 opacity-60'
                  }`}
                >
                  <Music className="w-5 h-5 text-indigo-600" />
                  <span className="text-xs font-bold text-stone-900">Botella / Lluvia[cite: 10]</span>
                  <span className="text-[10px] font-extrabold text-emerald-600 flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> {elementosActivos.lluvia ? 'Activo' : 'Inactivo'}[cite: 10]
                  </span>
                </button>

              </div>

              {/* Botón Guardar Rincón */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer border-b-4 border-indigo-800 active:translate-y-0.5">
                <Bookmark className="w-4 h-4 fill-white" />
                <span>¡Guardar mi rincón ideal en mi diario de resiliencia![cite: 10]</span>
              </button>

            </div>

          </div>

          {/* COLUMNA DERECHA (5 de 12) */}
          <div className="lg:col-span-5 space-y-5">

            {/* Misión Interactiva */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-7 shadow-sm space-y-5">

              {/* Header Misión */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-indigo-700 text-[11px] font-extrabold uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                  MISIÓN INTERACTIVA[cite: 10]
                </div>
                <h2 className="text-xl font-black text-stone-900 tracking-tight">
                  ¿Cómo usar tu rincón de la calma?[cite: 10]
                </h2>
              </div>

              {/* Escenario */}
              <div className="bg-indigo-50/60 border border-indigo-100 p-4 rounded-2xl space-y-1">
                <span className="font-bold text-indigo-900 text-xs">Escenario:[cite: 10]</span>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  Cuando sientas que necesitas un momento para ti y tu pecho está muy agitado...[cite: 10]
                </p>
              </div>

              {/* Opciones */}
              <div className="space-y-3">

                {/* Opción 1: Decir con voz tranquila */}
                <div
                  onClick={() => setOpcionEscenario(1)}
                  className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                    opcionEscenario === 1
                      ? 'border-emerald-500 bg-emerald-50/40 shadow-xs'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-stone-900 leading-snug">
                      Decir con voz tranquila: &quot;Necesito 5 minutos en mi rincón de calma&quot;[cite: 10]
                    </p>
                    <span className="inline-block text-[10px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                      Opción recomendada para expresar lo que sientes[cite: 10]
                    </span>
                  </div>
                </div>

                {/* Opción 2: Dar portazo */}
                <div
                  onClick={() => setOpcionEscenario(2)}
                  className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                    opcionEscenario === 2
                      ? 'border-indigo-500 bg-indigo-50/40 shadow-xs'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    🚪
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-stone-900 leading-snug">
                      Ir dando un portazo y tirando juguetes[cite: 10]
                    </p>
                    <span className="inline-block text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                      Tarjeta de reflexión[cite: 10]
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/TecnicasControl/page03'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>
        <Link href={'/TecnicasControl/page05'}>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm cursor-pointer">
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