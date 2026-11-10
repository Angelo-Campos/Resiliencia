'use client';
import Link from 'next/link';
import React from 'react';
import { 
  Compass, 
  Lock, 
  RotateCcw, 
  Search, 
  Sparkles, 
  Trophy, 
  Wand2, 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  ChevronRight, 
  Home, 
  Map, 
  CheckCircle2, 
  Lightbulb,
} from 'lucide-react';

export default function ImpulsividadPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 p-6 md:p-10 font-sans flex flex-col justify-between">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Barra superior */}
        <header data-aos="fade-down" className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-stone-200/60 shadow-sm">
          <div className="flex items-center gap-3">
            <button className="bg-rose-500 text-white p-2.5 rounded-2xl shadow-md hover:bg-rose-600 transition-colors">
              <Sparkles className="w-5 h-5" />
            </button>
            <span className="font-bold text-lg tracking-tight text-rose-900">Cerebrito Aventuras</span>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="flex items-center gap-3 bg-stone-100 px-4 py-2 rounded-2xl">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">01 / 06</span>
              <div className="w-28 bg-stone-200 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 w-1/6 h-full rounded-full"></div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-2xl font-medium text-sm transition-colors">
              <Map className="w-4 h-4 text-stone-500" />
              Mapa de Temas
            </button>
            <button className="bg-stone-100 hover:bg-stone-200 text-stone-700 p-2.5 rounded-2xl transition-colors">
              <Home className="w-4 h-4 text-stone-500" />
            </button>
          </div>
        </header>

        {/* Cabecera de sección */}
        <div className="space-y-3" data-aos="fade-up">
          <div className="flex items-center gap-2">
            <Link href={'/'}>
            <button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors">
              <ArrowLeft className="w-4 h-4 text-stone-600" />
            </button>
            </Link>
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              <Lightbulb className="w-3.5 h-3.5" />
              Estrategias de calma
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">Impulsividad</h1>
              <p className="text-stone-600 mt-1 flex items-center gap-1.5 text-sm md:text-base">
                <Wand2 className="w-4 h-4 text-amber-500" />
                Aprender a reconocer nuestros impulsos es como tener un <span className="font-semibold text-stone-800 underline decoration-amber-400">freno mágico</span>. Descubre cómo entender las ganas de actuar antes de pensar.
              </p>
            </div>
            
            <button className="flex items-center gap-2 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 px-5 py-3 rounded-2xl shadow-sm font-medium transition-all self-start md:self-auto">
              <Volume2 className="w-4 h-4 text-indigo-500" />
              Escuchar historia
            </button>
          </div>
        </div>

        {/* Contenido en Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Columna Izquierda: Tarjetas de Pasos (2x2) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Tarjeta 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-rose-50/60 border border-rose-100 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-rose-500 bg-white/80 px-3 py-1 rounded-full border border-rose-100">Paso 1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">El volcán interior</h3>
                  <p className="text-stone-600 text-sm mt-1">Siente el calor antes de que estalle. Detecta esa lava de cosquilleo antes de reaccionar.</p>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between text-rose-600 text-sm font-semibold cursor-pointer group">
                <span className="flex items-center gap-1.5 group-hover:underline">
                  <Search className="w-4 h-4" /> EXPLORAR RETO
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-amber-50/60 border border-amber-100 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-200">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-600 bg-white/80 px-3 py-1 rounded-full border border-amber-100">Paso 2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">El semáforo del cuerpo</h3>
                  <p className="text-stone-600 text-sm mt-1">Detecta tu corazón rápido y manos tensas. La luz roja te pide un alto amistoso.</p>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between text-amber-700 text-sm font-semibold cursor-pointer group">
                <span className="flex items-center gap-1.5 group-hover:underline">
                  <Lock className="w-4 h-4" /> APRENDER SEÑALES
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-emerald-50/60 border border-emerald-100 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-white/80 px-3 py-1 rounded-full border border-emerald-100">Paso 3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">La regla de los 5 segundos</h3>
                  <p className="text-stone-600 text-sm mt-1">Pausa, respira hondo y cuenta hasta 5. Dale a tu cerebro tiempo para encender su superpoder.</p>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between text-emerald-700 text-sm font-semibold cursor-pointer group">
                <span className="flex items-center gap-1.5 group-hover:underline">
                  <Trophy className="w-4 h-4" /> PROBAR JUEGO
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-indigo-50/60 border border-indigo-100 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-200">
                    <Wand2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 bg-white/80 px-3 py-1 rounded-full border border-indigo-100">Paso 4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Consecuencias amables</h3>
                  <p className="text-stone-600 text-sm mt-1">Palabras y actos que abrazan a los demás. Elige respuestas que hagan sonreír a tu equipo.</p>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between text-indigo-700 text-sm font-semibold cursor-pointer group">
                <span className="flex items-center gap-1.5 group-hover:underline">
                  <Sparkles className="w-4 h-4" /> VER TARJETAS
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* Columna Derecha: Consejo Secreto */}
          <div data-aos="fade-left" data-aos-delay="200" className="bg-white border border-stone-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-stone-100 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200/60">
                  Consejo Secreto
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">¿Cómo aplicarla?</h3>
                <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                  Cuando sientas que tu volcán ruge o tus manos quieren saltar sin permiso, pon tu mano en el pecho y activa tu freno mágico de 5 latidos.
                </p>
              </div>

              {/* Mini tarjeta técnica */}
              <div className="bg-stone-50 border border-stone-100 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <span className="text-lg">🧸</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Técnica del Corazón</h4>
                  <p className="text-xs text-stone-500 italic mt-0.5">&quot;Respiro hondo, cuento tres, y decido después.&quot;</p>
                </div>
              </div>

              {/* Lista de pasos checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>1. Siente la alerta en tus hombros</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>2. Respira como inflando un globo</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>3. Pregúntate: ¿Esto ayuda a mi amigo?</span>
                </div>
              </div>
            </div>

            {/* Botón inferior derecho */}
            <div className="pt-6">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-2xl shadow-md shadow-indigo-100 transition-all flex items-center justify-center gap-2 text-sm">
                <span>Ver más actividades</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Pie de página con botones de navegación global */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200/60">
          <Link href={'/'}>
          <button className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold px-6 py-3 rounded-2xl transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
            </Link>
            <Link href={'/Impulsividad/page02'}>
          <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-md shadow-amber-200 transition-all">
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