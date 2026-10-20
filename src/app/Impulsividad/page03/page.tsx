'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Timer,
  BookOpen,
  Trophy,
  Heart,
  PlayCircle,
  Brain,
  Check,
  Flower2,
  Mountain,
  Hand,
  Footprints,
  Scissors
} from 'lucide-react';

export default function ReglaCincoSegundosPage() {
  // Estado para la técnica seleccionada en la Misión Interactiva
  const [tecnicaSeleccionada, setTecnicaSeleccionada] = useState<number>(1);
  // Estado para el paso activo de la cuenta de 5 segundos
  const [pasoCuenta, setPasoCuenta] = useState<number>(1);

  const pasosRegla = [
    { numero: 1, etiqueta: 'Pausa' },
    { numero: 2, etiqueta: 'Inhala' },
    { numero: 3, etiqueta: 'Siente' },
    { numero: 4, etiqueta: 'Exhala' },
    { numero: 5, etiqueta: '¡Elige!' }
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
            <div className="flex items-center gap-3 bg-stone-100/80 px-4 py-2 rounded-2xl">
              <span className="text-xs font-bold text-stone-600 tracking-wider">03 / 06</span>
              <div className="w-28 bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-3/6 h-full rounded-full transition-all duration-300"></div>
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
            <Link href={'/Impulsividad/page02'}>
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
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  <Timer className="w-3.5 h-3.5" />
                  IMPULSO 3 DE 4 • TÉCNICA DE AUTORREGULACIÓN
                </div>
                <div className="inline-flex items-center gap-1 bg-purple-100/70 text-purple-800 px-2.5 py-1 rounded-full text-[11px] font-bold">
                  <BookOpen className="w-3 h-3" />
                  Cuento interactivo
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-950 tracking-tight">
                La regla de los 5 segundos
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Cuando sentimos un impulso gigante, contar del 1 al 5 le da tiempo a nuestra mente sabia para tomar el control de nuevo. Pausa, respira profundo y enciende tu superpoder.
              </p>
            </div>

            {/* Tarjeta: El Relojito Mágico */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-800 flex items-center justify-center">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">El Relojito Mágico</h3>
                    <p className="text-[11px] text-stone-500 font-medium">Inhala suave, cuenta despacito</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold px-3 py-1 rounded-full border border-indigo-100">
                  <Heart className="w-3 h-3 fill-indigo-500 text-indigo-500" />
                  Superpoder activo
                </span>
              </div>

              {/* Display Central de la Cuenta */}
              <div className="bg-indigo-50/40 border border-indigo-100/70 rounded-3xl p-6 text-center space-y-5">
                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <span className="text-3xl font-black text-amber-950">{pasoCuenta}s</span>
                </div>

                <p className="text-xs font-semibold text-stone-700">
                  Toca el botón amarillo para activar la cuenta respiratoria guiada.
                </p>

                {/* Pasos del 1 al 5 */}
                <div className="flex items-center justify-between gap-1 pt-2 max-w-xs mx-auto">
                  {pasosRegla.map((p) => (
                    <button
                      key={p.numero}
                      onClick={() => setPasoCuenta(p.numero)}
                      className="flex flex-col items-center gap-1 flex-1 group"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        pasoCuenta === p.numero
                          ? 'bg-amber-400 text-amber-950 ring-4 ring-amber-100 scale-110 shadow-sm'
                          : 'bg-indigo-100/70 text-indigo-800 group-hover:bg-indigo-200/70'
                      }`}>
                        {p.numero}
                      </div>
                      <span className={`text-[10px] font-bold ${
                        pasoCuenta === p.numero ? 'text-amber-900' : 'text-stone-500'
                      }`}>
                        {p.etiqueta}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Botón Practicar */}
              <button 
                onClick={() => setPasoCuenta((prev) => (prev % 5) + 1)}
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-3.5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <PlayCircle className="w-4 h-4 fill-amber-950 text-amber-400" />
                ¡Practicar la cuenta mágica de 5 segundos!
              </button>

            </div>

            {/* Dato Curioso Cerebral */}
            <div className="bg-indigo-100/60 border border-indigo-200/60 rounded-3xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Brain className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-indigo-950 text-xs uppercase tracking-wider">Dato curioso cerebral</h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  Nuestro cerebro pensador tarda unos 5 segundos en alcanzar a nuestra emoción rápida. ¡Darle esos 5 segundos te convierte en un genio de la calma!
                </p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA (7 de 12) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Misión Interactiva */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">

              {/* Header Misión */}
              <div className="space-y-1">
                <div className="text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  MISIÓN INTERACTIVA: EL JUEGO DE LAS 5 ESTRELLITAS
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 leading-snug">
                  ¿Qué puedes hacer mientras cuentas del 1 al 5 con tus dedos?
                </h2>
                <p className="text-xs text-stone-600 font-medium">
                  Selecciona la técnica que mejor te ayuda a enfriar el motor de tu cuerpo:
                </p>
              </div>

              {/* Lista de Opciones */}
              <div className="space-y-3">

                {/* Opción 1: Inhalar aire fresco */}
                <div
                  onClick={() => setTecnicaSeleccionada(1)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    tecnicaSeleccionada === 1
                      ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Flower2 className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-stone-900 text-xs md:text-sm leading-snug">
                      Inhalar aire fresco como oliendo flores y soplar una vela.
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    tecnicaSeleccionada === 1 ? 'bg-emerald-500 text-white' : 'border border-stone-300'
                  }`}>
                    {tecnicaSeleccionada === 1 && <Check className="w-4 h-4" />}
                  </div>
                </div>

                {/* Opción 2: Cerrar los ojos */}
                <div
                  onClick={() => setTecnicaSeleccionada(2)}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    tecnicaSeleccionada === 2
                      ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0">
                      <Mountain className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-stone-900 text-xs md:text-sm leading-snug">
                      Cerrar los ojos e imaginar tu lugar favorito.
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${
                    tecnicaSeleccionada === 2 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                  }`} />
                </div>

                {/* Opción 3: Apretar una pelotita */}
                <div
                  onClick={() => setTecnicaSeleccionada(3)}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    tecnicaSeleccionada === 3
                      ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0">
                      <Hand className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-stone-900 text-xs md:text-sm leading-snug">
                      Apretar una pelotita suave y soltarla lentamente.
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${
                    tecnicaSeleccionada === 3 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                  }`} />
                </div>

                {/* Opción 4: Caminar 5 pasos */}
                <div
                  onClick={() => setTecnicaSeleccionada(4)}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    tecnicaSeleccionada === 4
                      ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0">
                      <Footprints className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-stone-900 text-xs md:text-sm leading-snug">
                      Caminar 5 pasos lentos hacia atrás.
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${
                    tecnicaSeleccionada === 4 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                  }`} />
                </div>

              </div>

              {/* Logro Desbloqueado / Card de Feedback */}
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-600 font-extrabold text-xs tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    ¡LOGRO DESBLOQUEADO!
                  </div>
                  <span className="bg-amber-100 text-amber-900 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                    +20 Resili-Puntos
                  </span>
                </div>

                <div className="bg-indigo-50/60 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-200 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-stone-700 italic leading-relaxed">
                    &quot;¡Gran elección! Al inhalar y exhalar mientras cuentas hasta 5, el impulso se desvanece como una nube en el viento.&quot;
                  </p>
                </div>

                {/* Barra de Serenidad */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-stone-600">Calma alcanzada</span>
                    <span className="text-emerald-600">100% Serenidad</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 w-full h-full rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/Impulsividad/page02'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>
            <Link href={'/Impulsividad/page04'}>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm">
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
          <span className="text-rose-500">♥</span>
        </p>
      </footer>
    </div>
  );
}