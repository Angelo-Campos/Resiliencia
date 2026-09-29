export function About() {
  const title = "¿Quiénes somos?";
  const colors = [
    "text-rose-500",
    "text-amber-500",
    "text-emerald-500",
    "text-sky-500",
    "text-indigo-500",
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] py-12 lg:py-0 bg-[#F5F2EB] flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-amber-200/60 shadow-sm text-slate-700 text-xs font-semibold w-fit tracking-wide"
            data-aos="fade-down"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            Nuestra Historia
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] flex flex-wrap"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {title.split("").map((char, index) => (
              <span
                key={index}
                className={char === " " ? "mr-3" : colors[index % colors.length]}
              >
                {char}
              </span>
            ))}
          </h2>

          <p
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Desarrollamos recursos pedagógicos y lecturas enfocadas en la fortaleza mental y el crecimiento personal. Nos dedicamos a guiar a lectores y educadores con contenido práctico que transforma la adversidad en una oportunidad de aprendizaje.
          </p>

          <div
            className="grid grid-cols-3 gap-4 pt-2 border-y border-slate-200/60 py-4 max-w-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D3557]">50+</p>
              <p className="text-xs text-slate-500 font-medium">Proyectos</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D3557]">99%</p>
              <p className="text-xs text-slate-500 font-medium">Satisfacción</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1D3557]">5+</p>
              <p className="text-xs text-slate-500 font-medium">Años exp.</p>
            </div>
          </div>

          <div
            className="pt-2 flex flex-wrap gap-4 items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="px-7 py-3.5 rounded-2xl bg-[linear-gradient(90deg,#ef4444,#f97316,#facc15,#22c55e,#3b82f6,#8b5cf6)] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.98]">
              Conoce el equipo
            </button>
            <button className="px-7 py-3.5 rounded-2xl bg-[linear-gradient(90deg,#8b5cf6,#3b82f6,#22c55e,#facc15,#f97316,#ef4444)] border border-slate-200/80 text-white font-semibold text-sm transition-all duration-200 shadow-sm">
              Ver trabajos
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full group">
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-amber-400/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-rose-400/20 rounded-full blur-xl" />

            <div
              className="relative w-full bg-[#FFFDF7] p-6 rounded-[32px] border border-amber-100/80 shadow-2xl shadow-stone-300/40"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-indigo-50/60 to-rose-50/60 p-4 sm:p-6 flex items-center justify-center overflow-hidden border border-indigo-100/50">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-amber-200 via-rose-200 to-indigo-200 flex items-center justify-center p-3 shadow-inner transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-white/90 rounded-full flex items-center justify-center shadow-md p-4">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      className="w-full h-full text-rose-500 drop-shadow-sm"
                    >
                      <path
                        d="M32 52C32 52 12 36 12 23.5C12 17.5 16.5 13 22.5 13C26.5 13 30 15 32 18.5C34 15 37.5 13 41.5 13C47.5 13 52 17.5 52 23.5C52 36 32 52 32 52Z"
                        className="fill-rose-100 stroke-rose-400"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32 38V22"
                        className="stroke-emerald-500"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 28C32 28 26 25 24 20"
                        className="stroke-emerald-500"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 25C32 25 38 22 40 17"
                        className="stroke-emerald-500"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}