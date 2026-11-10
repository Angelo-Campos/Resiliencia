import { Heart } from "lucide-react";

export function FooterSmall() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200/60 bg-[#F5F2EB]">
      <div className="mx-auto flex w-[80%] flex-col items-center justify-between gap-2 py-5 text-[11px] font-semibold text-slate-500 sm:flex-row sm:text-xs">
        <span>
          Plataforma Educativa de Aprendizaje Socioemocional • Nivel Inicial (5-7 años)
        </span>
        <span className="flex items-center gap-1 font-bold text-[#bd1e51]">
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          Con amor para pequeños grandes exploradores
        </span>
      </div>
    </footer>
  );
}
