'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Anchor,
  HelpCircle,
  CheckCircle2,
  Hand,
  Check
} from 'lucide-react';

export default function AnclaCincoSentidosPage() {
  // Estado para las etapas completadas del mapa sensorial (array con los números del 1 al 5 completados)
  const [pasosCompletados, setPasosCompletados] = useState<number[]>([]);
  // Estado para saber si se completó la misión táctica rápida
  const [misionTactilLista, setMisionTactilLista] = useState<boolean>(false);

  // Función para alternar el estado de cada sentido en el mapa 5-4-3-2-1
  const toggleSentido = (numero: number) => {
    if (pasosCompletados.includes(numero)) {
      setPasosCompletados(pasosCompletados.filter((n) => n !== numero));
    } else {
      setPasosCompletados([...pasosCompletados, numero]);
    }
  };

  // Función para marcar todos de golpe con el botón principal
  const tirarAnclaCompleta = () => {
    if (pasosCompletados.length === 5) {
      setPasosCompletados([]);
    } else {
      setPasosCompletados([5, 4, 3, 2, 1]);
    }
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
            <Link href={'/TecnicasControl/page02'}>
          <button className="w-9 h-9 rounded-full bg-stone-200/60 flex items-center justify-center hover:bg-stone-300/60 transition-colors">
            <ArrowLeft className="w-4 h-4 text-stone-700" />
          </button></Link>
        </div>

        {/* 2. Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* COLUMNA IZQUIERDA (7 de 12) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Cabecera del tema */}
            <div className="bg-white/80 border border-stone-200/70 rounded-3xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
                Técnicas de control — <span className="text-indigo-600">El ancla de los 5 sentidos</span>[cite: 9]
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Si sientes que tu mente flota perdida en una tormenta de enfado o miedo, ¡tira el ancla mágica al suelo! Tus 5 sentidos te traen suavemente de vuelta al aquí y al ahora[cite: 9].
              </p>
            </div>

            {/* Tarjeta: El Mapa del Ancla Sensorial */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 shadow-sm space-y-5">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-indigo-950 text-sm">El Mapa del Ancla Sensorial 5-4-3-2-1</h3>[cite: 9]
                  </div>
                </div>

                <span className="bg-white text-indigo-900 border border-indigo-100 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-2xs">
                  {pasosCompletados.length} de 5 completados[cite: 9]
                </span>
              </div>

              {/* Lista de los 5 Pasos Sensoriales */}
              <div className="space-y-3">

                {/* Paso 5: VER */}
                <div
                  onClick={() => toggleSentido(5)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    pasosCompletados.includes(5) ? 'border-indigo-500 bg-indigo-50/80 shadow-xs' : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-extrabold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs md:text-sm">
                        Cosas que puedes <span className="text-indigo-600 font-extrabold">VER</span> con tus ojos 👀[cite: 9]
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Por ejemplo: un libro con dibujos, una nube viajera o tus propios zapatos[cite: 9].
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    pasosCompletados.includes(5) ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {pasosCompletados.includes(5) && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Paso 4: TOCAR */}
                <div
                  onClick={() => toggleSentido(4)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    pasosCompletados.includes(4) ? 'border-indigo-500 bg-indigo-50/80 shadow-xs' : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-extrabold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs md:text-sm">
                        Cosas que puedes <span className="text-indigo-600 font-extrabold">TOCAR</span> con tus manos ✋[cite: 9]
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Por ejemplo: tu camiseta suavecita, la mesa lisa o el suelo firme[cite: 9].
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    pasosCompletados.includes(4) ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {pasosCompletados.includes(4) && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Paso 3: OÍR */}
                <div
                  onClick={() => toggleSentido(3)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    pasosCompletados.includes(3) ? 'border-indigo-500 bg-indigo-50/80 shadow-xs' : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-extrabold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs md:text-sm">
                        Cosas que puedes <span className="text-indigo-600 font-extrabold">OÍR</span> con tus orejitas 💡[cite: 9]
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Por ejemplo: el tic-tac de un reloj, un pájaro lejano o el susurro del viento[cite: 9].
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    pasosCompletados.includes(3) ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {pasosCompletados.includes(3) && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Paso 2: OLER */}
                <div
                  onClick={() => toggleSentido(2)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    pasosCompletados.includes(2) ? 'border-indigo-500 bg-indigo-50/80 shadow-xs' : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-extrabold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs md:text-sm">
                        Cosas que puedes <span className="text-indigo-600 font-extrabold">OLER</span> con tu nariz 👃[cite: 9]
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Por ejemplo: un dulce aroma a manzana fresca, madera o tu colonia limpia[cite: 9].
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    pasosCompletados.includes(2) ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {pasosCompletados.includes(2) && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Paso 1: SABOREAR */}
                <div
                  onClick={() => toggleSentido(1)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    pasosCompletados.includes(1) ? 'border-indigo-500 bg-indigo-50/80 shadow-xs' : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-extrabold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs md:text-sm">
                        Cosa que puedes <span className="text-indigo-600 font-extrabold">SABOREAR</span> con tu boca 👅[cite: 9]
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Por ejemplo: el sorbo de agua fresca, una menta o el sabor de tu sonrisa[cite: 9].
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    pasosCompletados.includes(1) ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {pasosCompletados.includes(1) && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

              </div>

              {/* Botón Tirar el ancla */}
              <button
                onClick={tirarAnclaCompleta}
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-3.5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm border-b-4 border-amber-500 active:translate-y-0.5 cursor-pointer"
              >
                <Anchor className="w-4 h-4 text-amber-950" />
                <span>¡Tirar el ancla y conectar mis sentidos!</span>[cite: 9]
              </button>

            </div>

          </div>

          {/* COLUMNA DERECHA (5 de 12) */}
          <div className="lg:col-span-5 space-y-5">

            {/* Consejo del Búho Guardián */}
            <div className="bg-indigo-100/70 border border-indigo-200/80 rounded-3xl p-5 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-xs uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                CONSEJO DEL BÚHO GUARDIÁN[cite: 9]
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-medium italic">
                &laquo;Cuando enfocas toda tu atención en lo que tocas o ves, tu cerebro deja de alimentar la rabia y empieza a descansar plácidamente.&raquo;[cite: 9]
              </p>
            </div>

            {/* Misión Interactiva */}
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-7 shadow-sm space-y-5">

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  MISIÓN INTERACTIVA[cite: 9]
                </div>
                <h2 className="text-xl font-black text-stone-900 tracking-tight">
                  Encuentra en tu entorno[cite: 9]
                </h2>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  Prueba rápida: Toca ahora mismo un objeto suave cerca de ti (tu ropa, un cojín, tu muñeco favorito o la palma de tu mano)[cite: 9].
                </p>
              </div>

              {/* Imagen Ilustrativa Interactiva */}
              <div className="w-full h-40 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner text-white p-4">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="relative z-10 text-center space-y-2">
                  <span className="text-4xl">🧸✨</span>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block">
                    <span className="text-[11px] font-extrabold text-indigo-100">Ejercicio de presencia táctil</span>[cite: 9]
                  </div>
                </div>
              </div>

              {/* Botón Misión Táctil */}
              <button
                onClick={() => setMisionTactilLista(!misionTactilLista)}
                className={`w-full font-extrabold py-3.5 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm cursor-pointer ${
                  misionTactilLista
                    ? 'bg-emerald-500 text-white shadow-emerald-200'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                <Hand className="w-4 h-4" />
                <span>{misionTactilLista ? '¡Excelente! Objeto sentido con éxito' : '¡Ya lo toqué, se siente tibio y suave!'}</span>[cite: 9]
              </button>

            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/TecnicasControl/page02'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>
          <Link href={'/TecnicasControl/page04'}>
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-3 rounded-2xl shadow-md transition-colors text-sm cursor-pointer">
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