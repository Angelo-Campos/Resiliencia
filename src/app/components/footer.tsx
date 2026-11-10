"use client";

import { usePathname } from "next/navigation";
import { FooterLarge } from "./footer-large";
import { FooterSmall } from "./footer-small";

export function Footer() {
  const pathname = usePathname();

  // El footer grande es exclusivo de la página principal; en el resto de
  // rutas se mantiene el footer compacto.
  return pathname === "/" ? <FooterLarge /> : <FooterSmall />;
}
