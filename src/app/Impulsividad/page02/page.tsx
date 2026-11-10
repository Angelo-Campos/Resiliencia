'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Bell,
  CheckCircle2,
  HelpCircle,
  Trophy,
  BookOpen,
  Timer,
  Zap,
  Check,
  AlertTriangle,
  Smile,
  Hand
} from 'lucide-react';

export default function SemaforoCuerpoPage() {
  // Estado para la opción seleccionada en la Misión Interactiva
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<number>(1);
  // Estado para la luz activa del semáforo sensorial
  const [luzActiva, setLuzActiva] = useState<'rojo' | 'amarillo' | 'verde'>('rojo');

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

        {/* Botón Atrás flotante/superior */}
        <div>
          <button className="w-9 h-9 rounded-full bg-stone-200/60 flex items-center justify-center hover:bg-stone-300/60 transition-colors">
            <ArrowLeft className="w-4 h-4 text-stone-700" />
          </button>
        </div>

        {/* 2. Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* COLUMNA IZQUIERDA (5 de 12) */}
          <div className="lg:col-span-5 space-y-5">

            {/* Cabecera del tema */}
            <div className="bg-white/80 border border-stone-200/70 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                <Bell className="w-3.5 h-3.5" />
                IMPULSO 2 DE 4 • AUTOCONCIENCIA CORPORAL
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
                El semáforo del cuerpo
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nuestro cuerpo es como un semáforo mágico que nos dice en qué color estamos para no chocar ni lastimar a los demás. ¡Aprende a escucharlo antes del salto!
              </p>
            </div>

            {/* Tarjeta: Semáforo Sensorial */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                  <Zap className="w-4 h-4 text-indigo-600" />
                  Semáforo Sensorial
                </div>
                <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-3 py-1 rounded-full">
                  Toca cada luz
                </span>
              </div>

              {/* Botones del Semáforo */}
              <div className="space-y-3">

                {/* Luz Roja */}
                <button
                  onClick={() => setLuzActiva('rojo')}
                  className={`w-full p-3.5 rounded-2xl flex items-center gap-3 transition-all text-left border ${
                    luzActiva === 'rojo'
                      ? 'bg-red-100/80 border-red-400 shadow-sm'
                      : 'bg-white border-stone-200/70 hover:bg-red-50/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Hand className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-red-700 text-sm">Rojo: ¡Alto!</div>
                    <div className="text-xs text-stone-600 font-medium">Respira profundo y no te muevas</div>
                  </div>
                </button>

                {/* Luz Amarilla */}
                <button
                  onClick={() => setLuzActiva('amarillo')}
                  className={`w-full p-3.5 rounded-2xl flex items-center gap-3 transition-all text-left border ${
                    luzActiva === 'amarillo'
                      ? 'bg-amber-100/80 border-amber-400 shadow-sm'
                      : 'bg-white border-stone-200/70 hover:bg-amber-50/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-amber-800 text-sm">Amarillo: ¡Atento!</div>
                    <div className="text-xs text-stone-600 font-medium">Piensa despacio antes de actuar</div>
                  </div>
                </button>

                {/* Luz Verde */}
                <button
                  onClick={() => setLuzActiva('verde')}
                  className={`w-full p-3.5 rounded-2xl flex items-center gap-3 transition-all text-left border ${
                    luzActiva === 'verde'
                      ? 'bg-emerald-100/80 border-emerald-400 shadow-sm'
                      : 'bg-white border-stone-200/70 hover:bg-emerald-50/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-800 text-sm">Verde: ¡Adelante!</div>
                    <div className="text-xs text-stone-600 font-medium">Toma decisiones con calma y alegría</div>
                  </div>
                </button>

              </div>

              {/* Botón Comprobar */}
              <div className="space-y-1.5 pt-1">
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-3.5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
                  <Zap className="w-4 h-4 fill-stone-900" />
                  ¡Comprobar mi luz de hoy!
                </button>
                <p className="text-[11px] text-center text-stone-500 font-medium">
                  Pasa el dedo o haz clic para sentir la vibración de cada color.
                </p>
              </div>

            </div>

            {/* Tarjeta: El secreto del búho sabio */}
            <div className="bg-indigo-100/60 border border-indigo-200/60 rounded-3xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-indigo-200/80 text-indigo-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-indigo-950 text-sm">El secreto del búho sabio</h4>
                <p className="text-xs text-stone-700 leading-relaxed italic">
                  &quot;Cuando sientas la luz amarilla en el pecho o en la panza, pon tu mano en el corazón y cuenta despacio hasta 3. ¡Así evitarás que el semáforo se ponga en rojo!&quot;
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
                <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  MISIÓN INTERACTIVA: LUCES DE ALERTA
                </div>
                <button className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center hover:bg-indigo-200 transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>

              {/* Pregunta */}
              <h2 className="text-xl md:text-2xl font-extrabold text-stone-900 leading-snug">
                ¿Qué luz debe encender tu cuerpo cuando sientes muchas ganas de empujar o decir una palabra fea?
              </h2>

              {/* Opciones */}
              <div className="space-y-3">

                {/* Opción 1: Luz Roja */}
                <div
                  onClick={() => setOpcionSeleccionada(1)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    opcionSeleccionada === 1
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Hand className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-sm">1. Luz Roja</div>
                      <div className="text-xs text-stone-600">¡Alto total! Manos quietas y respirar 3 veces profundo.</div>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    opcionSeleccionada === 1 ? 'bg-emerald-600 text-white' : 'border border-stone-300'
                  }`}>
                    {opcionSeleccionada === 1 && <Check className="w-4 h-4" />}
                  </div>
                </div>

                {/* Opción 2: Luz Amarilla */}
                <div
                  onClick={() => setOpcionSeleccionada(2)}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    opcionSeleccionada === 2
                      ? 'border-amber-500 bg-amber-50/30'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-sm">2. Luz Amarilla</div>
                      <div className="text-xs text-stone-600">¡Cuidado! Nombrar lo que me molesta con voz suave.</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${
                    opcionSeleccionada === 2 ? 'border-amber-500 bg-amber-500' : 'border-stone-300'
                  }`} />
                </div>

                {/* Opción 3: Luz Verde */}
                <div
                  onClick={() => setOpcionSeleccionada(3)}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    opcionSeleccionada === 3
                      ? 'border-emerald-500 bg-emerald-50/30'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-sm">3. Luz Verde</div>
                      <div className="text-xs text-stone-600">¡Calma! Hablar y buscar una solución divertida.</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border ${
                    opcionSeleccionada === 3 ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                  }`} />
                </div>

              </div>

              {/* Feedback Resultado Excelente */}
              <div className="bg-emerald-400/90 text-emerald-950 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800/20 flex items-center justify-center flex-shrink-0 text-emerald-950">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base">¡Excelente decisión!</h4>
                  <p className="text-xs font-medium text-emerald-950/90 mt-0.5">
                    La luz roja te da tiempo para proteger tus amistades y calmar tu mente.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-extrabold bg-emerald-800/15 px-2.5 py-0.5 rounded-md">
                    ⊕ +20 Resili-Puntos ganados
                  </span>
                </div>
              </div>

            </div>

            {/* Juego de entrenamiento */}
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-700 text-[11px] font-bold uppercase tracking-wider">
                  <Timer className="w-4 h-4" />
                  JUEGO DE ENTRENAMIENTO
                </div>
                <h3 className="font-bold text-stone-900 text-base">Técnica de la estatua mágica</h3>
                <p className="text-xs text-stone-600 leading-relaxed max-w-md">
                  Quédate congelado <span className="font-bold text-indigo-900">4 segundos</span> cuando sientas la luz roja. Siente tus pies firmes como rocas mágicas en el suelo.
                </p>
              </div>

              <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                <div className="text-right">
                  <span className="text-3xl font-black text-indigo-900 leading-none">04</span>
                  <span className="block text-[10px] text-stone-500 font-bold uppercase leading-tight">segundos de<br/>congelación</span>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-3 rounded-2xl shadow-md transition-colors">
                  ¡Congelarme ya!
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/Impulsividad/page01'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>
        <Link href={'/Impulsividad/page03'}>
          <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm">
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