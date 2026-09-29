import { ArrowRight, GraduationCap, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import brain from "../../assets/brain.jpeg";
import sol from "../../assets/sol.jpeg";
import string from "../../assets/string.jpeg";
 export function Hero(){
    return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col justify-between font-sans text-slate-700">

      

      <main className="flex-1 px-4 py-2 flex items-center justify-center">
        <div className="relative w-[80%] bg-[#FFFDF7] border-4 border-white rounded-[40px] shadow-xl p-8 md:p-12 overflow-hidden flex flex-col items-center text-center">
          

          <button className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-800 transition-colors">
           Home
          </button>

          <div className="absolute top-6 right-8 flex items-center justify-center text-xs">
            <Image src={sol} alt="Sol"
            className="w-auto h-24"
            width={177}
            height={177}/>
          </div>

          <span className="absolute top-24 left-32 text-amber-400 text-xl font-bold">★</span>
          <span className="absolute top-36 left-16 w-3 h-6 bg-amber-300 rounded-full rotate-12"></span>
          <span className="absolute top-20 right-32 text-rose-400 font-bold text-lg">✕</span>
          <span className="absolute top-44 right-20 w-2 h-2 bg-pink-300 rounded-full"></span>
          <span className="absolute bottom-40 left-36 text-rose-400 font-bold text-xl">∫</span>
          <span className="absolute bottom-28 left-56 text-emerald-500 font-bold text-xl">ψ</span>

  
          <div className="mt-8 max-w-xl z-10" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#233554] tracking-wide mb-2" data-aos="fade-down">
              La aventura de la
            </h2>
            
  
            <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-6 flex justify-center gap-1" data-aos="zoom-in" data-aos-delay="150">
              <Image src={string} alt="Resiliencia"
              className="w-auto h-16 md:h-24"
              width={732}
              height={159}/>
            </h1>

            <h3 className="text-lg md:text-xl font-bold text-[#1D3557] mb-3">
              Pequeños pasos, grandes cambios.
            </h3>
            
            <p className="text-sm md:text-base font-medium text-slate-600 leading-relaxed mb-8">
              Aquí aprenderemos a ser más fuertes,<br />
              a manejar los cambios y a seguir adelante,<br />
              ¡sin importar lo que pase!
            </p>

            <Link href="/resiliencia/tema1-01">
              <button className="bg-[#FFB703] text-[#1D3557] font-extrabold text-lg px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto border-b-4 border-amber-600 cursor-pointer" data-aos="fade-up" data-aos-delay="400">
              Comenzar
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
            </Link>
          </div>
          <div className="mt-12 relative w-full flex justify-end pr-8">
            <div className="relative flex flex-col items-center">

              <div className="w-20 h-16 relative flex items-center justify-center shadow-inner">
                    </div>
              <div className="h-20 mt-[-8px]"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full" data-aos="fade-up" data-aos-delay="250">
            <Image src={brain} alt="Paisaje"
            className="w-full h-auto"
            width={1542}
            height={411}/>
          </div>
        </div>
      </main>
      <footer className="p-4 px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2 w-[80%] mx-auto">
        <p>
          Plataforma Educativa de Aprendizaje Socioemocional • Nivel Inicial (5-7 años)
        </p>
        <p className="flex items-center gap-1 font-medium">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          Con amor para pequeños grandes exploradores
        </p>
      </footer>
    </div>
  );
  }