import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://www.x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const linkColumns = [
  {
    title: "Plataforma",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Temas", href: "/temas" },
      { label: "Sobre nosotros", href: "/About" },
      { label: "Frases", href: "/Frases" },
      { label: "Carrito", href: "/cart" },
    ],
  },
  {
    title: "Aprende",
    links: [
      { label: "Resiliencia", href: "/resiliencia/tema1-01" },
      { label: "Factores protectores", href: "/Factores/page01" },
      { label: "Estrés", href: "/Estres/page01" },
      { label: "Tipos de estrés", href: "/TEstres/page01" },
    ],
  },
  {
    title: "Herramientas",
    links: [
      { label: "Estrategias", href: "/Estrategias/tema3-01" },
      { label: "Impulsos", href: "/Impulsos/tema4-01" },
      { label: "Impulsividad", href: "/Impulsividad/page01" },
      { label: "Técnicas de control", href: "/TecnicasControl/page01" },
    ],
  },
];

export function FooterLarge() {
  return (
    <footer className="mt-auto w-full bg-[#1D3557] text-slate-300">
      {/* Banda de llamada a la acción */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-[80%] flex-col items-center justify-between gap-5 py-10 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              ¿Listo para comenzar la aventura?
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-300/80">
              Explora los temas y acompaña a tus pequeños grandes exploradores.
            </p>
          </div>
          <Link
            href="/temas"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border-b-4 border-amber-600 bg-amber-400 px-7 py-3 font-extrabold text-[#1D3557] shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Comenzar ahora
            <ArrowRight className="h-5 w-5 stroke-[3]" />
          </Link>
        </div>
      </div>

      {/* Columnas principales */}
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        {/* Marca */}
        <div className="lg:col-span-4 lg:pr-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#A3003F] text-white shadow-sm">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Cerebrito Aventuras
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300/80">
            Plataforma educativa de aprendizaje socioemocional para pequeños grandes
            exploradores de nivel inicial (5 a 7 años). Historias, juegos y herramientas
            para crecer con calma y confianza.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-200 transition-colors hover:bg-[#A3003F] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Columnas de enlaces */}
        {linkColumns.map((column) => (
          <div key={column.title} className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300/80 transition-colors hover:text-amber-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-amber-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contacto */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3 text-sm font-medium text-slate-300/80">
            <li>
              <a
                href="mailto:hola@cerebritoaventuras.com"
                className="flex items-start gap-2.5 transition-colors hover:text-amber-300"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
                hola@cerebritoaventuras.com
              </a>
            </li>
            <li>
              <a
                href="tel:+51999999999"
                className="flex items-center gap-2.5 transition-colors hover:text-amber-300"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-amber-400" />
                +51 999 999 999
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 flex-shrink-0 text-amber-400" />
              Lima, Perú
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[80%] flex-col items-center justify-between gap-3 py-6 text-xs font-medium text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Cerebrito Aventuras. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
          </div>
          <p className="flex items-center gap-1.5 font-bold text-rose-300">
            <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />
            Con amor para pequeños grandes exploradores
          </p>
        </div>
      </div>
    </footer>
  );
}
