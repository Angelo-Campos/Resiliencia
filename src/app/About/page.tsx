import { ArrowLeft, ArrowRight, Brain, CheckCircle2, Heart, Shield, Sparkles, Star, Users } from "lucide-react";
import Link from "next/link";

export default function AboutResiliencia() {
  const stats = [
    { label: "Módulos de resiliencia y autocontrol guiado", checked: true },
    { label: "Disponibilidad 24/7 sin listas de espera ni límites", checked: true },
    { label: "Plataforma 100% adaptada para nivel inicial (5-7 años)", checked: true },
  ];

  const teamMembers = [
    {
      name: "Valeria Estefany Toledo Colunga",
      role: "Equipo de Desarrollo & Diseño Socioemocional",
      avatar: "👩‍💻",
      bg: "bg-rose-50/80",
      border: "border-rose-200/80",
      badgeColor: "bg-rose-100 text-rose-800"
    },
    {
      name: "Carlo Andre Peña Torres",
      role: "Equipo de Desarrollo & Diseño Socioemocional",
      avatar: "👨‍💻",
      bg: "bg-amber-50/80",
      border: "border-amber-200/80",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      name: "Lorena Abigail Cóndor Urrutia",
      role: "Equipo de Desarrollo & Diseño Socioemocional",
      avatar: "👩‍🎨",
      bg: "bg-purple-50/80",
      border: "border-purple-200/80",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      name: "Angelo Steven Campos Sulca",
      role: "Equipo de Desarrollo & Arquitectura Web",
      avatar: "👨‍💻",
      bg: "bg-emerald-50/80",
      border: "border-emerald-200/80",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      name: "Junior Michaell Barrutia Castro",
      role: "Equipo de Desarrollo & Diseño Socioemocional",
      avatar: "👨‍🚀",
      bg: "bg-indigo-50/80",
      border: "border-indigo-200/80",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      name: "Sabrina Fernanda Aguilar Diaz",
      role: "Equipo de Desarrollo & Diseño Socioemocional",
      avatar: "👩‍🏫",
      bg: "bg-pink-50/80",
      border: "border-pink-200/80",
      badgeColor: "bg-pink-100 text-pink-800"
    }
  ];

  return (
    
       
    <div>
   
      <section className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-100 text-purple-800 rounded-xl text-xs font-black tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5" />
            EDUCACIÓN SOCIOEMOCIONAL • NIVEL INICIAL (5-7 AÑOS)
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Aprender a calmar la mente no debería ser tan difícil.
          </h1>

          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
            Somos una plataforma interactiva creada para niños, familias y educadores que buscan transformar momentos de enojo o frustración en superpoderes de autocontrol y resiliencia.
          </p>

          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <Link
              href="/Topics"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-black rounded-2xl transition-all shadow-md hover:shadow-lg text-sm border-b-4 border-amber-700 active:border-b-0 active:translate-y-1"
            >
              Explorar Temas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
            {stats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Image Block + Floating Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col gap-5 text-center relative overflow-hidden">
            
            <div className="relative bg-gradient-to-br from-amber-100 via-purple-50 to-rose-100 rounded-[28px] p-8 border border-amber-200/60 shadow-inner flex flex-col items-center justify-center min-h-[260px]">
              <div className="w-24 h-24 rounded-full bg-amber-400 border-4 border-white shadow-xl flex items-center justify-center text-5xl mb-3">
                🦊
              </div>
              <span className="bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-black text-purple-900 border border-purple-100">
                Tobi el Mapache
              </span>
              <p className="text-xs text-slate-600 font-bold mt-2">
                ¡Tu tutor de resiliencia y autocontrol!
              </p>
            </div>

            <div className="bg-amber-400 text-amber-950 rounded-2xl p-4 flex items-center justify-between shadow-sm border-b-4 border-amber-600">
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-wider block text-amber-950/80">Experiencia Guiada</span>
                <h4 className="font-black text-lg sm:text-xl">100% Didáctico</h4>
              </div>
              <span className="bg-amber-300 text-amber-950 text-xs font-black px-3 py-1.5 rounded-xl">
                Cerebrito Aventuras
              </span>
            </div>

          </div>
        </div>

      </section>


      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs">Cerebrito</h4>
              <p className="text-[10px] text-slate-500 font-medium">Aprender jugando</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-black shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs">Empatía</h4>
              <p className="text-[10px] text-slate-500 font-medium">LENGUAJE AMABLE</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs">Resiliencia</h4>
              <p className="text-[10px] text-slate-500 font-medium">Superpoderes</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs">Autocontrol</h4>
              <p className="text-[10px] text-slate-500 font-medium">Calma activa</p>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-[36px] p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-black text-amber-700 uppercase tracking-wider block">
                NUESTRA MOTIVACIÓN
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                ¿Por qué creamos Resiliencia?
              </h2>
            </div>

            <div className="md:col-span-8 space-y-4 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              <p>
                Notamos que los niños pequeños enfrentan frecuentemente episodios de frustración o enojo sin contar con herramientas didácticas y amables para comprender sus emociones antes de reaccionar.
              </p>
              <p>
                Por eso nació este proyecto: un mapa de aprendizaje interactivo lleno de dinamismo, pausas de respiración, dinámicas visuales y acompañamiento cercano.
              </p>

              <blockquote className="bg-purple-50/70 border-l-4 border-purple-500 rounded-r-2xl p-4 text-purple-950 italic font-semibold text-xs sm:text-sm mt-4">
                "No buscábamos crear contenido teórico aburrido. Queríamos construir el camino interactivo para que cada niño descubra su fuerza interior con alegría y confianza."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-black text-purple-600 uppercase tracking-wider block">EQUIPO CREADOR</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
              Integrantes del Proyecto
            </h2>
          </div>
          <span className="bg-purple-100 text-purple-800 text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <Users className="w-4 h-4" /> 6 Creadores
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`${member.bg} border ${member.border} rounded-[28px] p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-2xl shrink-0 shadow-xs">
                {member.avatar}
              </div>
              <div className="space-y-1">
                <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${member.badgeColor}`}>
                  Desarrollador/a
                </span>
                <h3 className="font-extrabold text-slate-800 text-sm leading-snug">
                  {member.name}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[32px] p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
              <Brain className="w-3.5 h-3.5" />
              ¡Listos para explorar!
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Comienza hoy a entrenar tu mente
            </h3>
            <p className="text-xs sm:text-sm text-purple-100 font-medium max-w-md">
              Acompaña a nuestros exploradores en el módulo de autocontrol y desbloquea tus primeras medallas.
            </p>
          </div>

          <Link
            href="/Topics"
            className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-2xl transition-all shadow-md text-sm border-b-4 border-amber-600 active:border-b-0 active:translate-y-1 shrink-0"
          >
            Ver Mapa de Temas
          </Link>
        </div>
      </section>

    </div>
  );
}