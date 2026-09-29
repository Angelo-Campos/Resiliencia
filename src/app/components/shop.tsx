'use client'
import Image from "next/image";
import { BookOpen, Feather, ShoppingCart } from "lucide-react";
import { zustandApi } from "@/Stores/zustandApi"
import { zustandCart } from "@/Stores/zustandCart";
import { formatear } from "@/lib/formato";

 
 export function Shop(){

     const array = zustandApi((s)=>s.array)
     
     const agregar = zustandCart((s)=>s.agregar)

    return(
        <section className="w-full h-auto py-14 sm:py-16 bg-[#F5F2EB]">
            <div className="container-section w-[80%] mx-auto">
                <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1D3557] tracking-tight">
                        Nuestros <span className="text-rose-500">Libros</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-medium mt-2">
                        Historias y guías para acompañar cada aventura.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">

                    {array?.map((book,index)=>(
                        <article
                            key={book.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                            className="w-full max-w-[400px] min-h-[560px] bg-[#FFFDF7] border-4 border-white rounded-[32px] shadow-xl overflow-hidden flex flex-col"
                        >
                            <div className="relative w-full h-64 sm:h-72 shrink-0 overflow-hidden">
                                <Image
                                    src={book.image_url}
                                    alt={`Portada de ${book.title}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 400px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-200">
                                        {book.category}
                                    </span>
                                    <BookOpen className="w-5 h-5 text-rose-500 flex-shrink-0" />
                                </div>

                                <h3 className="text-lg font-extrabold text-[#1D3557] leading-snug">
                                    {book.title}
                                </h3>

                                <div className="flex items-end justify-between gap-3">
                                    <p className="flex items-center gap-1.5 text-sm font-bold text-rose-600">
                                        <Feather className="w-3.5 h-3.5 flex-shrink-0" />
                                        {book.author}
                                    </p>
                                    <p className="text-xl font-black text-[#1D3557] whitespace-nowrap">
                                        {formatear(book.price)}
                                    </p>
                                </div>

                                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                                    {book.description}
                                </p>

                                <button
                                    type="button"
                                    onClick={()=>agregar(book)}
                                    className="mt-auto w-full bg-amber-400 text-slate-900 font-black text-base px-6 py-3 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 border-b-4 border-amber-600"
                                >
                                    Agregar
                                    <ShoppingCart className="w-5 h-5 stroke-[3]" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
  }
