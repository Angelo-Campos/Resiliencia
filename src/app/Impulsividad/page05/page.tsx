'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  AlertTriangle,
  CheckCircle2,
  VolumeX,
  Smile,
  PartyPopper
} from 'lucide-react';

export default function ConsecuenciasAmablesPage() {
  // Estado para la opción seleccionada en el taller de respuestas
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number>(2);

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
              <span className="text-xs font-bold text-stone-600 tracking-wider">05 / 06</span>
              <div className="w-28 bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-5/6 h-full rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-700 px-4 py-2 rounded-2xl border border-stone-200/80 font-medium text-sm transition-colors shadow-sm">
              <Map className="w-4 h-4 text-stone-500" />
              Mapa de Temas
            </button>
            <Link href={'/Impulsividad/page04'}>
            <button className="bg-white hover:bg-stone-50 text-stone-700 p-2.5 rounded-2xl border border-stone-200/80 transition-colors shadow-sm">
              <Home className="w-4 h-4 text-stone-500" />
            </button>
            </Link>
          </div>
        </header>

        {/* Botón Atrás superior */}
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
              <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-950 tracking-tight">
                Consecuencias amables
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Cada cosa que decimos o hacemos tiene un eco. Cuando elegimos con cuidado, sembramos sonrisas y amistades fuertes[cite: 5].
              </p>
            </div>

            {/* Tarjeta: El rincón del abrazo */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 shadow-sm space-y-4">
              
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-stone-900 text-sm">El rincón del abrazo</h3>
                <div className="flex gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    🌱 Eco positivo
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ❤️ Amor en acción
                  </span>
                </div>
              </div>

              {/* Imagen Ilustrativa del Rincón */}
              <div className="w-full h-40 bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl overflow-hidden relative flex items-center justify-center shadow-inner">
                <div className="text-4xl">🦊🐰🧸</div>
              </div>

              {/* Notas de crecimiento */}
              <div className="bg-stone-50 border border-stone-100 p-4 rounded-2xl space-y-3">
                <p className="text-xs text-stone-600 font-medium">
                  ¿Notas cómo crecen las flores cuando hablamos con cariño?
                </p>
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  ¡Ver el poder de las palabras que cuidan!
                </button>
              </div>

              {/* Efecto multiplicador */}
              <div className="bg-indigo-50/70 border border-indigo-100 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-200 text-indigo-800 flex items-center justify-center flex-shrink-0">
                  <Smile className="w-4 h-4" />
                </div>
                <p className="text-xs text-stone-700 leading-snug">
                  <span className="font-bold text-indigo-950">Efecto multiplicador:</span> Una palabra cariñosa apaga el fuego del enojo en menos de 3 segundos.
                </p>
              </div>

            </div>

            {/* Consejo del Búho Sabio */}
            <div className="bg-indigo-100/60 border border-indigo-200/60 rounded-3xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-lg">
                🦉
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-indigo-950 text-xs">Consejo del Búho Sabio</h4>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  &quot;Pregunta mágica antes de actuar: ¿Lo que voy a hacer o decir ayuda a mi amigo o le hace sentir mal? Si ayuda, ¡adelante!&quot;
                </p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA (7 de 12) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Misión Interactiva */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">

              {/* Header Taller */}
              <div className="flex items-center justify-between">
                <span className="text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  TALLER DE RESPUESTAS
                </span>
                <span className="bg-white border border-stone-200 text-stone-600 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  Situação real
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-extrabold text-indigo-950 leading-snug">
                  MISIÓN INTERACTIVA: EL PUENTE DE LAS PALABRAS BUENAS
                </h2>
                <p className="text-xs text-stone-700 font-bold bg-white/80 p-3 rounded-2xl border border-stone-200/60 shadow-sm">
                  🐾 Tu amigo derribó tu torre de bloques sin querer. ¿Qué respuesta genera una consecuencia amable?
                </p>
              </div>

              {/* Opciones del Taller */}
              <div className="space-y-3">

                {/* Opción 1: Respuesta impulsiva */}
                <div
                  onClick={() => setRespuestaSeleccionada(1)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    respuestaSeleccionada === 1
                      ? 'border-rose-500 bg-rose-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 text-xs uppercase tracking-wider text-rose-700">Respuesta impulsiva (Alerta)</span>
                      </div>
                      <p className="text-xs font-bold text-stone-900">&quot;Gritarle y tirarle sus bloques&quot;</p>
                      <p className="text-[11px] text-stone-500 leading-tight">
                        Consecuencia: Crea tristeza, susto y una pelea que arruina el recreo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Opción 2: Respuesta sabia y amable */}
                <div
                  onClick={() => setRespuestaSeleccionada(2)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    respuestaSeleccionada === 2
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-xs uppercase tracking-wider text-emerald-800">Respuesta sabia y amable</span>
                          <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">Recomendada</span>
                        </div>
                        <p className="text-xs font-extrabold text-stone-900">&quot;Decirle: 'Me costó armarla, ¿me ayudas a reconstruirla juntos?'&quot;</p>
                        <p className="text-[11px] text-stone-600 leading-tight">
                          Consecuencia: Genera empatía, aprenden juntos y terminan construyendo una torre más alta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opción 3: Respuesta de silencio distante */}
                <div
                  onClick={() => setRespuestaSeleccionada(3)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    respuestaSeleccionada === 3
                      ? 'border-indigo-500 bg-indigo-50/40 shadow-sm'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <VolumeX className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 text-xs uppercase tracking-wider text-stone-600">Respuesta de silencio distante</span>
                      </div>
                      <p className="text-xs font-bold text-stone-900">&quot;Irse enojado sin decir nada&quot;</p>
                      <p className="text-[11px] text-stone-500 leading-tight">
                        Consecuencia: Tu amigo no sabe qué pasó y ambos se quedan tristes sin resolverlo.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mensaje de Logro y Feedback */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-400 text-emerald-950 flex items-center justify-center flex-shrink-0">
                  <PartyPopper className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-stone-700 leading-snug">
                  <span className="font-extrabold text-stone-900">¡Gran elección!</span> Expresar cómo te sientes sin agredir abre paso a la cooperación inmediata.
                </p>
              </div>

              <p className="text-center text-[11px] font-bold text-indigo-900 pt-1">
                Has conquistado las 4 etapas del autocontrol. ¡Tu insignia está guardada en tu mochila!
              </p>

            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/Impulsividad/page04'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        </Link>
        <Link href={'/Impulsividad/page06'}>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm">
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