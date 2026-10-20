'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Star,
  Moon,
  Wind,
  Heart,
  HelpCircle,
  CheckCircle2,
  Lightbulb,
  Check
} from 'lucide-react';

export default function ContarEstrellasPage() {
  const [estrellasEncendidas, setEstrellasEncendidas] = useState<number>(0);
  const [sensacionSeleccionada, setSensacionSeleccionada] = useState<number | null>(null);

  const handleEstrellaClick = (numero: number) => {
    if (estrellasEncendidas === numero) {
      setEstrellasEncendidas(numero - 1);
    } else {
      setEstrellasEncendidas(numero);
    }
  };

  const handleEncenderTodas = () => {
    setEstrellasEncendidas(10);
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
              <span className="text-xs font-bold text-stone-600 tracking-wider">02 / 06</span>
              <div className="w-28 bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-2/6 h-full rounded-full transition-all duration-300"></div>
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
            <Link href={'/TecnicasControl/page01'}>
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
            <div className="bg-white/80 border border-stone-200/70 rounded-3xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
                Técnicas de control — <span className="text-indigo-600">Contar estrellas hasta 10</span>
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Cuando las emociones van a toda velocidad, contar estrellas una a una le da tiempo a tu cerebro para apagar la alarma y volver a sonreír[cite: 8].
              </p>
            </div>

            {/* Tarjeta: El Cielo Estrellado de la Calma */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 shadow-sm space-y-5">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center font-bold">
                    <Moon className="w-5 h-5 fill-amber-950" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-indigo-950 text-sm">El Cielo Estrellado de la Calma</h3>
                    <p className="text-[11px] text-stone-500 font-medium">Toca cada estrella mientras respiras lento y profundo</p>
                  </div>
                </div>

                <span className="bg-white text-indigo-900 border border-indigo-100 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-2xs">
                  {estrellasEncendidas} de 10 encendidas
                </span>
              </div>

              {/* Grid de las 10 Estrellas */}
              <div className="bg-white/90 border border-indigo-100/80 rounded-2xl p-5 shadow-inner space-y-4">
                <div className="grid grid-cols-5 gap-3">
                  {Array.from({ length: 10 }, (_, index) => {
                    const numero = index + 1;
                    const estaEncendida = numero <= estrellasEncendidas;

                    return (
                      <button
                        key={numero}
                        onClick={() => handleEstrellaClick(numero)}
                        className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-0.5 border-2 transition-all cursor-pointer ${
                          estaEncendida
                            ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm scale-105'
                            : 'bg-stone-50 border-stone-200/80 text-stone-400 hover:border-amber-300'
                        }`}
                      >
                        <Star className={`w-5 h-5 ${estaEncendida ? 'fill-amber-500 text-amber-500' : 'text-stone-300'}`} />
                        <span className="text-xs font-bold">{numero}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Indicador de Ritmo respiratorio */}
                <div className="bg-stone-50/80 border border-stone-100 p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-stone-600">
                  <span className="flex items-center gap-2 text-indigo-900">
                    <Wind className="w-4 h-4 text-indigo-500" />
                    Ritmo respiratorio: Inhala suave, cuenta lento
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">1... 2... 3... hasta 10</span>
                </div>
              </div>

              {/* Botón Encender Estrellas */}
              <button
                onClick={handleEncenderTodas}
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-3.5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm border-b-4 border-amber-500 active:translate-y-0.5 cursor-pointer"
              >
                <Star className="w-4 h-4 fill-amber-950 text-amber-950" />
                <span>¡Encender las 10 estrellas de la tranquilidad!</span>
              </button>

            </div>

            {/* Dato Curioso Estelar */}
            <div className="bg-indigo-100/60 border border-indigo-200/60 rounded-3xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-indigo-950 text-xs uppercase tracking-wider">Dato curioso estelar</h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  ¿Sabías que contar despacio le avisa a tu corazón que ya estás a salvo y fuera de peligro? Al darle oxígeno limpio, tu pulso baja a su ritmo feliz[cite: 8].
                </p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA (7 de 12) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Misión Interactiva */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">

              {/* Header Misión */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  MISIÓN INTERACTIVA
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-black text-stone-900">
                  EL DETECTOR DE CALMA
                </h2>
                <p className="text-xs text-stone-600 font-medium">
                  ¿Cómo te sientes cuando llegas a la estrella número 10? Elige tus sensaciones[cite: 8]:
                </p>
              </div>

              {/* Lista de Sensaciones */}
              <div className="space-y-3">

                {/* Opción 1 */}
                <div
                  onClick={() => setSensacionSeleccionada(1)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    sensacionSeleccionada === 1
                      ? 'border-indigo-500 bg-indigo-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center flex-shrink-0 text-lg">
                      🧘
                    </div>
                    <span className="font-bold text-stone-900 text-xs md:text-sm">
                      Mis hombros bajan y se relajan[cite: 8]
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    sensacionSeleccionada === 1 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {sensacionSeleccionada === 1 && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Opción 2 */}
                <div
                  onClick={() => setSensacionSeleccionada(2)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    sensacionSeleccionada === 2
                      ? 'border-indigo-500 bg-indigo-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Wind className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="font-bold text-stone-900 text-xs md:text-sm">
                      Mi respiración se hace suave como una brisa[cite: 8]
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    sensacionSeleccionada === 2 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {sensacionSeleccionada === 2 && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Opción 3 */}
                <div
                  onClick={() => setSensacionSeleccionada(3)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    sensacionSeleccionada === 3
                      ? 'border-indigo-500 bg-indigo-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-amber-600 fill-amber-300" />
                    </div>
                    <span className="font-bold text-stone-900 text-xs md:text-sm">
                      Ya puedo pensar en una solución justa sin pelear[cite: 8]
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    sensacionSeleccionada === 3 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {sensacionSeleccionada === 3 && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

              </div>

              {/* Feedback Resultado */}
              <div className="bg-emerald-100/70 border border-emerald-200 text-emerald-950 p-4 rounded-2xl flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-emerald-900">¡Mente despejada![cite: 8]</h4>
                  <p className="text-xs text-stone-700 font-medium mt-0.5">
                    Has reunido 10 estrellas de paz en tu mochila de explorador[cite: 8].
                  </p>
                </div>
              </div>

              {/* Banner / Ilustración Nocturna de la Tortuga */}
              <div className="w-full h-36 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden shadow-inner text-white">
                <div className="absolute top-3 right-4 flex gap-1.5 opacity-80">
                  <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                  <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
                </div>

                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-4xl">🐢✨</span>
                  <p className="text-xs font-semibold italic text-indigo-100">
                    &quot;Cada estrella es un respiro de superpoder&quot;[cite: 8]
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/TecnicasControl/page01'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>
        <Link href={'/TecnicasControl/page03'}>
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