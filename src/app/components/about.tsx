import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import eye from "../../assets/about-eye.jpg";
import hand from "../../assets/about-hand.jpg";
import missionRead from "../../assets/mission-read.jpg";
import missionGrow from "../../assets/mission-grow.jpg";
import missionPlay from "../../assets/mission-play.jpg";

const checks = [
  "Herramientas de autorregulación y pausa mental 24/7",
  "Diseñado especialmente para nivel inicial (5 a 7 años)",
  "Estrategias validadas para el hogar y el aula escolar",
];

const brands = [
  { name: "Cerebrito", className: "text-lg font-bold tracking-tight" },
  { name: "AUTOCONTROL", className: "text-xs font-black uppercase tracking-[0.3em]" },
  { name: "Empatía", className: "text-base font-medium" },
  { name: "Resiliencia", className: "text-lg font-serif font-semibold italic" },
  { name: "APRENDIZAJE ACTIVO", className: "text-[11px] font-semibold uppercase tracking-[0.18em]" },
];

const mission = [
  {
    src: missionRead,
    alt: "Niña leyendo un libro",
    caption: "Historias que enseñan a pausar antes de reaccionar",
    delay: "0",
  },
  {
    src: missionGrow,
    alt: "Manos sosteniendo brotes verdes",
    caption: "Crecimiento emocional que se cultiva día a día",
    delay: "100",
  },
  {
    src: missionPlay,
    alt: "Niños pintando en un taller creativo",
    caption: "Aprendizaje socioemocional a través del juego",
    delay: "200",
  },
];

export function About() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F6F0] font-sans">
      <div className="mx-auto grid w-[88%] max-w-7xl grid-cols-1 items-center gap-14 py-16 lg:grid-cols-2 lg:gap-20 lg:py-28">

        <div className="flex flex-col">
          <div className="flex items-center gap-2.5" data-aos="fade-down">
            <svg viewBox="0 0 32 32" className="h-7 w-7 text-neutral-900" fill="currentColor" aria-hidden="true">
              <path d="M16 2.5 30.5 29H1.5L16 2.5Zm0 8.2L7.9 25.4h16.2L16 10.7Z" />
            </svg>
            <span className="font-serif text-xl font-semibold tracking-tight text-neutral-900">
              Resiliencia
            </span>
          </div>

          <h2
            className="mt-9 font-serif text-4xl font-medium leading-[1.06] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.6rem]"
            data-aos="fade-up"
          >
            Aprender a calmar la mente no debería ser tan difícil.
          </h2>

          <p
            className="mt-6 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Resiliencia reúne módulos interactivos, historias y técnicas de
            control emocional en un solo lugar tranquilo, para que niños y
            familias aprendan a tomar buenas decisiones con empatía y corazón.
          </p>

          <div className="mt-8" data-aos="fade-up" data-aos-delay="150">
            <Link
              href="/Topics"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D6FF3F] px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-[0_12px_30px_-12px_rgba(190,240,60,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-14px_rgba(190,240,60,1)] active:scale-95"
            >
              Explorar temas
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          <ul className="mt-9 space-y-4">
            {checks.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-neutral-700"
                data-aos="fade-right"
                data-aos-delay={200 + i * 100}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900">
                  <Check className="h-3.5 w-3.5 text-[#D6FF3F]" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-neutral-200 pt-7" data-aos="fade-up" data-aos-delay="400">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Pilares de nuestro aprendizaje socioemocional
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-neutral-500">
              {brands.map((b) => (
                <span
                  key={b.name}
                  className={`cursor-default transition-colors duration-200 hover:text-neutral-900 ${b.className}`}
                >
                  {b.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#D6FF3F]/30 blur-2xl" />
          <div className="relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_50px_90px_-45px_rgba(23,23,23,0.4)] ring-1 ring-black/5">
            <div className="relative h-[44%] w-full">
              <Image
                src={eye}
                alt="Mirada atenta e interactiva de un niño aprendiendo"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
            </div>

            <div className="relative h-[56%] w-full">
              <Image
                src={hand}
                alt="Manos en contacto con la naturaleza"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/55 p-4 shadow-[0_16px_40px_-18px_rgba(23,23,23,0.45)] backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Nivel de Calma
                    </p>
                    <p className="mt-1 text-2xl font-bold leading-none text-neutral-900">
                      100
                      <span className="text-sm font-medium text-neutral-400">/100</span>
                    </p>
                    <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-100/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Mente Despejada
                    </span>
                  </div>

                  <div className="relative h-24 w-24 shrink-0">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <defs>
                        <linearGradient id="aura-retention" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="55%" stopColor="#84cc16" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgba(23,23,23,0.1)"
                        strokeWidth="9"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#aura-retention)"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray="251.3"
                        strokeDashoffset="0"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-bold leading-none text-neutral-900">100%</span>
                      <span className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-neutral-500">
                        Resiliencia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto w-[88%] max-w-7xl border-t border-neutral-200 pb-16 pt-12 lg:pb-24 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5" data-aos="fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Nuestra misión
            </p>
            <h3 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Enseñar fortaleza emocional antes de que la vida lo exija.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-neutral-500">
              Resiliencia es una plataforma educativa de resiliencia y
              autorregulación para niñas y niños de 5 a 7 años, sus familias y
              sus maestros. Aquí conviven historias, retos y técnicas de control
              de impulsos —como los módulos de Impulsividad y Técnicas de
              Control— para convertir la adversidad en una oportunidad de
              aprendizaje.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Contenido práctico, acompañado y pensado para el nivel inicial:
              pequeños pasos que se vuelven grandes cambios.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-7">
            {mission.map((item) => (
              <figure key={item.caption} data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-3 bottom-3 text-xs font-medium leading-snug text-white">
                    {item.caption}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}