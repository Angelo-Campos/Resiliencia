import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

 

  export default function Tema2(){
    return(
       <section data-aos="fade-in" className="w-full h-auto">
      <div className="container-section w-[90%] mx-auto items-center flex min-h-[calc(100vh-100px)] justify-center py-6">
        <div className="relative w-full max-w-5xl bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-10 border-4 border-white flex flex-col justify-between">
          
          <div className="flex items-center justify-between mb-4">
            <Link href={'/resiliencia/tema1-01'} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-3 bg-indigo-50/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 border border-indigo-100">
              <span>02 / 06</span>
              <div className="w-16 h-2 bg-indigo-200 rounded-full overflow-hidden">
                <div className="w-2/6 h-full bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
              Cuando algo no sale como esperamos
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              Es totalmente normal sentirnos{' '}
              <span className="text-rose-500 font-bold">tristes</span>,{' '}
              <span className="text-amber-600 font-bold">enojados</span> o{' '}
              <span className="text-emerald-600 font-bold">preocupados</span> cuando algo difícil ocurre.
            </p>
          </div>

          <div className="bg-[#F3F0FF]/70 rounded-3xl p-6 sm:p-8 mb-6 flex flex-col md:flex-row items-center justify-center gap-6 border border-indigo-100/50">
            <div className="relative w-40 h-32 flex items-center justify-center flex-shrink-0">
              <div className="w-28 h-24 bg-pink-300 rounded-full flex items-center justify-center shadow-inner relative">
                <span className="text-sm font-bold text-slate-700">:(</span>
                <span className="absolute top-2 right-4 text-xs text-blue-400">💧</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white text-xs font-bold rotate-[-12deg]">
                A
              </div>
              <div className="absolute -bottom-2 left-6 w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center text-slate-800 text-xs font-bold">
                ★
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xs font-bold rotate-[12deg]">
                7
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 max-w-md shadow-sm border border-indigo-50 relative">
              <h3 className="text-rose-600 font-extrabold text-sm sm:text-base mb-1 flex items-center gap-1.5">
                <span>💔</span> ¡Oh, no! La torre cayó
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Cerebrito puso mucho esfuerzo en su castillo de cubos. Cuando todo se vino abajo, sintió que su corazón latía rápido y un nudo en la pancita.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#EEF2FF] border-2 border-indigo-100 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">😢</span>
                  <span className="text-[10px] font-extrabold uppercase bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                    Emoción 1
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-1">
                  Tristeza
                </h4>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Ganas de llorar, desánimo o desear estar en un rinconcito tranquilo un momento.
                </p>
              </div>
            </div>

            <div className="bg-[#FFF1F2] border-2 border-rose-100 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">😤</span>
                  <span className="text-[10px] font-extrabold uppercase bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
                    Emoción 2
                  </span>
                </div>
                <h4 className="font-extrabold text-rose-700 text-base mb-1">
                  Enojo
                </h4>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Sentir frustración, calorcito en la cara y ganas de decir: "¡No es justo!".
                </p>
              </div>
            </div>

            <div className="bg-[#FFFBEB] border-2 border-amber-200 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">😟</span>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    Emoción 3
                  </span>
                </div>
                <h4 className="font-extrabold text-amber-800 text-base mb-1">
                  Preocupación
                </h4>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Pensar: "¿Y qué pasará ahora?" o dudar si podremos volver a intentarlo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <Link href={'/resiliencia/tema1-01'}>
              <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 transition-all active:scale-95">
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
            </Link>
            <div className="bg-amber-100/80 text-amber-900 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-2xl flex items-center gap-2 border border-amber-200/80">
              <Heart className="w-4 h-4 text-amber-600 fill-amber-500" />
              ¡Sentir estas emociones está bien! Todos las sentimos alguna vez.
            </div>

           <Link href={'/resiliencia/tema1-03'} className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-8 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-b-4 border-amber-600">
              Continuar
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
    )
  }