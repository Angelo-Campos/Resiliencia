'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TiposDeEstresPage04() {
  const [opcionMision, setOpcionMision] = useState<string | null>(null);

  return (
    <div className="bg-[#f7f4ea] min-h-screen p-4 sm:p-6 flex flex-col justify-between items-center text-slate-800 font-sans select-none">

      <main className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative my-auto">
                <div className="flex items-center justify-between mb-6">
          <Link href={'/TEstres/page03'}>
            <button className="w-9 h-9 bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer">
              ←
            </button>
          </Link>

          <div className="flex items-center gap-3 bg-[#f1eff8] px-4 py-1.5 rounded-full">
            <span className="font-extrabold text-xs text-slate-700">
              04 <span className="font-normal text-slate-400">/ 06</span>
            </span>
            <div className="w-24 h-2 bg-white rounded-full overflow-hidden p-0.5 shadow-inner">
              <div className="w-4/6 h-full bg-[#bd1e51] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#fce8ed] text-[#bd1e51] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                ⚠️ PASO • CUIDADO Y DETECCIÓN
              </span>
              <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                🎒 Estrés acumulado o crónico
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-1">
              09. Tipos de estrés — 3. La mochila pesada (Acumulado)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              ¡Atención! Cuando guardamos preocupaciones muchos días seguidos sin decirlas a nadie, se convierten en piedras invisibles que nos cansan la espalda y nos quitan la sonrisa.
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-2 rounded-2xl text-center flex-shrink-0 shadow-2xs">
            <span className="block text-[9px] font-bold text-rose-600">Estado actual</span>
            <span className="text-xs font-black">Muy cargada (3 piedras)</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎒</span>
                  <div>
                    <h3 className="font-black text-sm text-slate-800">La Balanza de la Mochila Emocional</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Haz clic en cada piedra para sacarla y aligerar la carga</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#7c3aed] bg-[#ede4fc] px-3 py-1 rounded-full cursor-pointer">
                  🔄 Reiniciar carga
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white rounded-2xl p-4 border border-slate-200/80 mb-4">
                <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="w-24 h-24 rounded-full bg-purple-900 text-white flex flex-col items-center justify-center shadow-inner mb-2 relative">
                    <span className="text-2xl">🎒</span>
                    <span className="text-[9px] font-bold mt-1">#3 Secreto</span>
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                    PESO EN LA ESPALDA
                  </span>
                  <span className="text-xs font-black text-[#bd1e51] mt-0.5">
                    ¡Mochila Superpesada!
                  </span>
                </div>

                <div className="sm:col-span-7 flex flex-col gap-2.5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    Piedras invisibles detectadas:
                  </span>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📚</span>
                      <div>
                        <h4 className="font-black text-xs text-slate-800">Piedra de tareas acumuladas</h4>
                        <p className="text-[9px] text-slate-500">Deberes que no entendí y dejé pasar muchos días.</p>
                      </div>
                    </div>
                    <span className="text-slate-400 font-bold text-xs">✕</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">💬</span>
                      <div>
                        <h4 className="font-black text-xs text-slate-800">Piedra de discusión sin resolver</h4>
                        <p className="text-[9px] text-slate-500">Me enojé con un amigo del recreo y no lo hablamos.</p>
                      </div>
                    </div>
                    <span className="text-slate-400 font-bold text-xs">✕</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🔒</span>
                      <div>
                        <h4 className="font-black text-xs text-slate-800">Piedra de guardar un secreto triste</h4>
                        <p className="text-[9px] text-slate-500">Algo que me asustó y me lo guardé en el pecho.</p>
                      </div>
                    </div>
                    <span className="text-slate-400 font-bold text-xs">✕</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Nivel de sobrecarga emocional:</span>
                  <span className="text-rose-600 font-black">100% — ¡Pide ayuda!</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div className="w-full h-full bg-rose-600 rounded-full"></div>
                </div>
              </div>

              <p className="text-[11px] font-bold text-slate-500 text-center">
                💡 Haz clic en una piedra para sacarla de la mochila y aprender cómo compartirla.
              </p>
            </div>
            <div className="bg-[#fbfbfe] rounded-3xl p-5 border border-[#e8e6f5] shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🌿</span>
                <div>
                  <h3 className="font-black text-sm text-slate-800">¿Cómo avisa tu cuerpo cuando la mochila pesa mucho?</h3>
                  <p className="text-[10px] text-slate-500 font-medium">Tu cuerpo es tu mejor amigo y te manda señales claras:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 text-center shadow-2xs">
                  <span className="text-2xl block mb-1">💤</span>
                  <h4 className="font-black text-xs text-slate-800 mb-1">Sueño constante o pesadillas</h4>
                  <p className="text-[10px] text-slate-500 font-medium leading-snug">
                    Te despiertas cansado aunque hayas dormido muchas horas, o tienes sueños raros.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 text-center shadow-2xs">
                  <span className="text-2xl block mb-1">🤕</span>
                  <h4 className="font-black text-xs text-slate-800 mb-1">Dolor de cabeza o pancita dura</h4>
                  <p className="text-[10px] text-slate-500 font-medium leading-snug">
                    Sientes nudos en el estómago antes de salir al colegio o una presión en la frente.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 text-center shadow-2xs">
                  <span className="text-2xl block mb-1">😢</span>
                  <h4 className="font-black text-xs text-slate-800 mb-1">Ganas de llorar o enojo fácil</h4>
                  <p className="text-[10px] text-slate-500 font-medium leading-snug">
                    Te da rabia por cosas chiquitas como no encontrar un lápiz o un juego sencillo.
                  </p>
                </div>
              </div>
              <div className="bg-[#ede4fc] border border-[#dcd2f6] rounded-2xl p-3.5 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">💜</span>
                <div>
                  <span className="text-[10px] font-black text-[#6b21a8] uppercase tracking-wider block mb-0.5">
                    ¡Recuerda siempre esta regla de oro!
                  </span>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    Los niños no tienen que cargar piedras pesadas solos. Siempre hay un adulto de confianza listo para cargarlas contigo.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#f0ece1] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#7c3aed] font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <span>🔍</span> MISIÓN DE DETECTIVE
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  Caso #03
                </span>
              </div>

              <h3 className="font-black text-base text-slate-800 mb-2">
                Detecta las piedras en el camino
              </h3>
              
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs mb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                  <span>📍</span> ¿Qué está pasando aquí?
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  &quot;Llevas 3 días sintiéndote con sueño en clase y preocupado por una prueba sin contarle a mamá ni a tu profe... ¿Qué tipo de estrés es?&quot;
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mb-4">
                <div
                  onClick={() => setOpcionMision('A')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'A'
                      ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    A
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Es la mochila pesada avisando que necesito desahogarme y hablar.</p>
                  </div>
                </div>

                <div
                  onClick={() => setOpcionMision('B')}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-2.5 ${
                    opcionMision === 'B'
                      ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    B
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Es estrés chispa normal y no tengo que hacer nada.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Medidor de alerta preventiva:</span>
                  <span className="text-slate-400 font-medium">Pendiente de responder</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div className="w-2/4 h-full bg-[#f39a1e] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#fdf2e9] border border-[#fbd5b5] rounded-2xl p-4 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🦉</span>
              <div>
                <span className="text-[10px] font-black text-[#b45309] uppercase tracking-wider block mb-0.5">
                  CONSEJO DEL BÚHO SABIO
                </span>
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &quot;¡Una piedra guardada en el bolsillo pesa el doble. Cuando la compartes con quien te cuida, ¡se vuelve de algodón suave!&quot;
                </p>
              </div>
            </div>

            <div className="bg-[#e6f4ea] border border-[#b7e4c7] rounded-2xl p-3 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#137333] text-white flex items-center justify-center text-sm">
                  🏆
                </div>
                <div>
                  <div className="text-xs font-black text-[#137333]">
                    +25 Resili-Puntos ganados
                  </div>
                  <div className="text-[10px] font-bold text-slate-600">
                    Insignia conseguida: Ojo Avizor
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <Link href={'/TEstres/page03'}>
            <button className="bg-[#e4e7f5] hover:bg-[#d5daf0] text-[#3b4878] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition cursor-pointer">
              ← Atrás
            </button>
          </Link>

          <Link href={'/TEstres/page05'}>
            <button className="bg-[#f39a1e] hover:bg-[#e08b12] text-white font-extrabold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer">
              Continuar →
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}