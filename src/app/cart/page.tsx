'use client'
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { zustandCart } from "@/Stores/zustandCart"
import { formatear } from "@/lib/formato"



  export default function Cart(){ 

      const array = zustandCart((s)=>s.array)
      const eliminar = zustandCart((s)=>s.eliminar)
      const aumentar = zustandCart((s)=>s.aumentar)
      const decrementar = zustandCart((s)=>s.decrementar)
      const vaciar = zustandCart((s)=>s.vaciar)

      const totalLibros = array.reduce((acc,item)=>acc + item.quantity, 0)
      const total = array.reduce((acc,item)=>acc + item.price * item.quantity, 0)

    return(
        <section data-aos="fade-in" className="w-full h-auto py-8 bg-[#F5F2EB]">
            <div className="container-section w-[90%] mx-auto">

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-amber-400 border-b-4 border-amber-600 text-slate-900 flex items-center justify-center shadow-md">
                            <ShoppingBag className="w-7 h-7 stroke-[2.5]" />
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl sm:text-5xl font-black text-[#1D3557] tracking-tight">
                                Mi carrito
                            </h1>
                            <span className="bg-white text-[#1D3557] font-black text-sm w-9 h-9 rounded-full border-2 border-amber-300 flex items-center justify-center">
                                {totalLibros}
                            </span>
                        </div>
                    </div>

                    {array.length > 0 && (
                        <button
                            type="button"
                            onClick={()=>vaciar()}
                            className="bg-white hover:bg-rose-50 text-rose-600 font-bold text-sm px-5 py-2.5 rounded-full shadow-sm border-2 border-rose-200 flex items-center gap-2 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            Vaciar carrito
                        </button>
                    )}
                </div>

                {array.length === 0 ? (
                    <div className="bg-[#FFFDF7] border-4 border-white rounded-[32px] shadow-xl px-6 py-20 flex flex-col items-center gap-4 text-center">
                        <div className="w-20 h-20 rounded-full bg-[#F5F2EB] text-slate-300 flex items-center justify-center border-2 border-dashed border-slate-200">
                            <ShoppingBag className="w-9 h-9" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-[#1D3557]">
                            Tu carrito está vacío
                        </h2>
                        <p className="text-sm font-medium text-slate-600 max-w-sm">
                            Agregá los libros que más te gusten y seguí construyendo tu biblioteca.
                        </p>
                        <Link
                            href="/"
                            className="mt-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-6 py-3 rounded-full shadow-lg border-b-4 border-amber-600 transition-all hover:scale-105 active:scale-95"
                        >
                            Ver libros
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

                        <div className="lg:col-span-2 flex flex-col gap-4">
                            {array.map((book,index)=>(
                                <article
                                    key={book.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="bg-[#FFFDF7] border-4 border-white rounded-[28px] shadow-xl p-4 sm:p-5 flex gap-4 sm:gap-6"
                                >
                                    <div className="relative w-24 h-32 sm:w-32 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                        <Image
                                            src={book.image_url}
                                            alt={`Portada de ${book.title}`}
                                            fill
                                            sizes="128px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col">
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-200">
                                                {book.category}
                                            </span>
                                            <p className="text-xl font-black text-[#1D3557] whitespace-nowrap">
                                                {formatear(book.price * book.quantity)}
                                            </p>
                                        </div>

                                        <h2 className="text-base sm:text-lg font-extrabold text-[#1D3557] leading-snug mt-2">
                                            {book.title}
                                        </h2>

                                        <p className="text-sm font-bold text-rose-600">
                                            {book.author}
                                        </p>

                                        <p className="text-xs font-semibold text-slate-400 mt-0.5">
                                            {formatear(book.price)} c/u
                                        </p>

                                        <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                                            <div className="flex items-center gap-2 bg-[#F5F2EB] rounded-full p-1">
                                                <button
                                                    type="button"
                                                    aria-label={`Quitar una unidad de ${book.title}`}
                                                    onClick={()=>decrementar(book)}
                                                    className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-sm border-2 border-slate-200 hover:border-amber-400 hover:text-amber-600 flex items-center justify-center transition-colors"
                                                >
                                                    <Minus className="w-4 h-4 stroke-[3]" />
                                                </button>

                                                <span className="w-7 text-center text-base font-black text-[#1D3557]">
                                                    {book.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    aria-label={`Agregar una unidad de ${book.title}`}
                                                    onClick={()=>aumentar(book)}
                                                    className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-sm border-2 border-slate-200 hover:border-amber-400 hover:text-amber-600 flex items-center justify-center transition-colors"
                                                >
                                                    <Plus className="w-4 h-4 stroke-[3]" />
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={()=>eliminar(book)}
                                                className="text-xs font-bold text-rose-500 hover:text-rose-700 flex items-center gap-1.5 transition-colors"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <aside className="lg:sticky lg:top-6 bg-[#FFFDF7] border-4 border-white rounded-[32px] shadow-xl p-5 sm:p-6 flex flex-col gap-5">
                            <h2 className="text-xl font-black text-[#1D3557] tracking-tight">
                                Resumen
                            </h2>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold text-slate-600">
                                        Libros
                                    </span>
                                    <span className="font-black text-[#1D3557]">
                                        {totalLibros}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold text-slate-600">
                                        Títulos distintos
                                    </span>
                                    <span className="font-black text-[#1D3557]">
                                        {array.length}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-[#1D3557] rounded-3xl px-5 py-4 flex flex-col gap-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                                    Total
                                </p>
                                <p className="text-4xl font-black text-white">
                                    {formatear(total)}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-base px-6 py-3.5 rounded-full shadow-lg border-b-4 border-amber-600 transition-all hover:scale-105 active:scale-95"
                            >
                                Finalizar compra
                            </button>

                            <Link
                                href="/"
                                className="text-center text-sm font-bold text-slate-500 hover:text-[#1D3557] transition-colors"
                            >
                                Seguir comprando
                            </Link>
                        </aside>
                    </div>
                )}

            </div>
        </section>
    )
  }
