'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Map,
  Home,
  Shield,
  Heart,
  HelpCircle,
  Play,
  Hand,
  Check
} from 'lucide-react';

export default function TecnicaTortugaPage() {
  // Estado para el paso activo de la técnica (1, 2 o 3)
  const [pasoActivo, setPasoActivo] = useState<number>(1);

  // Estado para la opción seleccionada en el Simulador del Caparazón
  const [opcionSimulador, setOpcionSimulador] = useState<number | null>(1);

  const pasosCaparazon = [
    {
      numero: 1,
      titulo: '¡Alto! Deténte',
      descripcion: 'Para tu cuerpo quieto como una linda estatua.',
      icono: <Hand className="w-4 h-4 text-purple-600" />
    },
    {
      numero: 2,
      titulo: 'Al Caparazón',
      descripcion: 'Mete suavemente tu cabeza y hombros.',
      icono: <Shield className="w-4 h-4 text-emerald-600" />
    },
    {
      numero: 3,
      titulo: '3 Alientos',
      descripcion: 'Inhala calma fresca, exhala el fuego.',
      icono: <span>💨</span>
    }
  ];

  const handleProbarTecnica = () => {
    setPasoActivo((prev) => (prev % 3) + 1);
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
              <span className="text-xs font-bold text-stone-600 tracking-wider">05 / 06</span>
              <div className="w-28 bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-5/6 h-full rounded-full transition-all duration-300"></div>
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
            <Link href={'/TecnicasControl/page04'}>
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
              <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-900 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                TÉCNICA 1 DE 4 • RESPIRACIÓN Y REFUGIO
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-950 tracking-tight">
                06. Técnicas de control — <span className="text-emerald-700">1. La técnica de la tortuga</span>[cite: 11]
              </h1>
              <p className="text-stone-600 text-sm leading-relaxed">
                Cuando sientas rabia, enojo o ganas de explotar, ¡conviértete en una tortuga sabia! Entra a tu caparazón imaginario, respira hondo y sal cuando tu mente esté fresca como una lechuga verde[cite: 11].
              </p>
            </div>

            {/* Tarjeta: Caparazón Protector Guiado */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 shadow-sm space-y-5">

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-3xl shadow-xs flex-shrink-0">
                  🐢
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                    Modo Refugio Activado
                  </span>
                  <h3 className="font-extrabold text-stone-900 text-base">
                    Caparazón Protector Guiado[cite: 11]
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    Toca cada paso con tus dedos o presiona el botón dorado para iniciar el ritual de paz[cite: 11].
                  </p>
                </div>
              </div>

              {/* Los 3 pasos interactivos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pasosCaparazon.map((paso) => {
                  const esActivo = pasoActivo === paso.numero;
                  return (
                    <button
                      key={paso.numero}
                      onClick={() => setPasoActivo(paso.numero)}
                      className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                        esActivo
                          ? 'border-indigo-500 bg-white shadow-md scale-102'
                          : 'border-stone-200/80 bg-white/70 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white ${
                          esActivo ? 'bg-indigo-600' : 'bg-stone-300'
                        }`}>
                          {paso.numero}
                        </span>
                        {paso.icono}
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="font-extrabold text-stone-900 text-xs">{paso.titulo}[cite: 11]</h4>
                        <p className="text-[11px] text-stone-500 leading-tight">{paso.descripcion}[cite: 11]</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botón Probar Técnica */}
              <button
                onClick={handleProbarTecnica}
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-3.5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm border-b-4 border-amber-500 active:translate-y-0.5 cursor-pointer"
              >
                <span>🐢 ¡Probar la técnica de la tortuga ahora!</span>
                <Play className="w-4 h-4 fill-amber-950 text-amber-950" />
              </button>

            </div>

            {/* El Secreto de la Tortuga Sabia */}
            <div className="bg-indigo-100/60 border border-indigo-200/60 rounded-3xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-white border border-indigo-200 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-extrabold text-indigo-950 text-xs">El Secreto de la Tortuga Sabia[cite: 11]</h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  Nadie puede molestarte dentro de tu mente mientras respiras. Enojarse no es malo, ¡todos los animalitos del bosque lo sienten! Lo genial es que tú mandas sobre tu cuerpo y sabes cuándo descansar para tomar la mejor decisión con amor[cite: 11].
                </p>
              </div>
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
                  MISIÓN INTERACTIVA[cite: 11]
                </div>
                <h2 className="text-xl font-black text-stone-900 tracking-tight">
                  El Simulador del Caparazón[cite: 11]
                </h2>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  ¿En qué situación usarías tu caparazón mágico? ¡Toca una opción para comprobar tu sabiduría![cite: 11]
                </p>
              </div>

              {/* Opciones */}
              <div className="space-y-3">

                {/* Opción 1: Recomendada */}
                <div
                  onClick={() => setOpcionSimulador(1)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    opcionSimulador === 1
                      ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                      🧸
                    </div>
                    <p className="text-xs font-bold text-stone-900 leading-snug">
                      Cuando mi hermano toma mi juguete favorito sin permiso[cite: 11]
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    opcionSimulador === 1 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {opcionSimulador === 1 && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Opción 2 */}
                <div
                  onClick={() => setOpcionSimulador(2)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    opcionSimulador === 2
                      ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0">
                      📢
                    </div>
                    <p className="text-xs font-bold text-stone-900 leading-snug">
                      Gritar muy fuerte y arrebatarle las cosas[cite: 11]
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    opcionSimulador === 2 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {opcionSimulador === 2 && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Opción 3 */}
                <div
                  onClick={() => setOpcionSimulador(3)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                    opcionSimulador === 3
                      ? 'border-indigo-500 bg-indigo-50/50 shadow-xs'
                      : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0">
                      🤐
                    </div>
                    <p className="text-xs font-bold text-stone-900 leading-snug">
                      Cruzar los brazos y no hablar nunca más[cite: 11]
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    opcionSimulador === 3 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-stone-300'
                  }`}>
                    {opcionSimulador === 3 && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 3. Navegación inferior */}
        <div className="flex items-center justify-between pt-4">
            <Link href={'/TecnicasControl/page04'}>
          <button className="flex items-center gap-2 bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-900 font-bold px-6 py-3 rounded-2xl transition-colors text-sm cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          </Link>
          <Link href={'/TecnicasControl/page06'}>
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