
import { GraduationCap, ShoppingBag, User } from "lucide-react"
import Link from "next/link"



 
  export function Header(){ 

    

    return(
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2EB]/90 backdrop-blur-sm border-b border-white">
          <div className="w-[80%] mx-auto p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <Link href={'/'} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#A3003F] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-[#A3003F] tracking-tight">
                Cerebrito Aventuras
              </span>
            </Link>

            <div className="flex items-center gap-3">
          

               <Link href={'/cart'}>
               <button
                type="button"
                aria-label="Carrito"
                className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-sm flex items-center justify-center transition-colors"
              >
                <ShoppingBag size={33} color="#A3003F" />
              </button>
               </Link>
            </div>
          </div>
          </div>
        </header>

    )
  }