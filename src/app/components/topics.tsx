import { CheckCircle2, Feather, Home, Lock, Smile, Sun, Zap } from "lucide-react";
import Link from "next/link";
 

 interface TopicItem {
  id: string;
  title?: string;
  type: 'active' | 'completed' | 'locked';
  color?: string;
  icon?: React.ReactNode;
  link:string | null
}

  
   export function Topics(){
     
     const topicsData: TopicItem[] = [
    {
    id: '01',
    title: 'Resiliencia',
    type: 'completed',
    color: 'bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 text-white rounded-3xl shadow-[0_10px_25px_rgba(244,63,94,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-rose-800',
    icon: <Smile className="w-5 h-5" />,
    link: '/resiliencia/tema1-01'
  },
  {
    id: '02',
    title: 'Factores que Promueven la Resiliencia',
    type: 'completed',
    color: 'bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 text-white rounded-3xl shadow-[0_10px_25px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-amber-700',
    icon: <Sun className="w-5 h-5" />,
    link: '/Factores/page01'
  },
  {
    id: '03',
    title: 'Estrategias Para el tema de Resiliencia',
    type: 'completed',
    color: 'bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-3xl shadow-[0_10px_25px_rgba(16,185,129,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-emerald-800',
    icon: <Feather className="w-5 h-5" />,
    link: '/Estrategias/tema3-01'
  },
  {
    id: '04',
    title: 'Impulsos',
    type: 'completed',
    color: 'bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 text-white rounded-3xl shadow-[0_10px_25px_rgba(168,85,247,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-purple-800',
    icon: <Zap className="w-5 h-5" />,
    link: '/Impulsos/tema4-01'
  },
  {
    id: '05',
    title: 'Impulsividad',
    type: 'completed',
    color: 'bg-gradient-to-b from-fuchsia-400 via-fuchsia-500 to-purple-700 text-white rounded-3xl shadow-[0_10px_25px_rgba(217,70,239,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-purple-900',
    icon: <Zap className="w-5 h-5" />,
    link: '/Impulsividad/page01'
  },
  {
    id: '06',
    title: 'Tecnicas de Control.1',
    type: 'completed',
    color: 'bg-gradient-to-b from-cyan-300 via-cyan-400 to-teal-500 text-white rounded-3xl shadow-[0_10px_25px_rgba(6,182,212,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-teal-700',
    icon: <Zap className="w-5 h-5" />,
    link: '/TecnicasControl/page01'
  },
  {
    id: '07',
    title: 'Estrategias control',
    type: 'completed',
    color: 'bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-700 text-white rounded-3xl shadow-[0_10px_25px_rgba(99,102,241,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-indigo-900',
    icon: <Zap className="w-5 h-5" />,
    link: '/TecnicasControl2/tema7-01'
  },
  {
    id: '08',
    title: 'Estrés',
    type: 'completed',
    color: 'bg-gradient-to-b from-amber-400 via-orange-400 to-orange-600 text-white rounded-3xl shadow-[0_10px_25px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-orange-800',
    icon: <Zap className="w-5 h-5" />,
    link: '/Estres/page01'
  },
  {
    id: '09',
    title: 'Tipos Estrés',
    type: 'completed',
    color: 'bg-gradient-to-b from-indigo-400 via-indigo-500 to-purple-700 text-white rounded-3xl shadow-[0_10px_25px_rgba(99,102,241,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] border-b-8 border-purple-900',
    icon: <Zap className="w-5 h-5" />,
    link: '/TEstres/page01'
  },
    { id: '10', type: 'locked' , link:null},
    { id: '11', type: 'locked',  link:null},
    { id: '12', type: 'locked' , link:null},
    { id: '13', type: 'locked' , link:null},
    { id: '14', type: 'locked' , link:null},
  ];

  // Piezas de rompecabezas: las de los extremos entran desde los lados,
  // las del centro caen desde arriba. El patrón se repite por fila.
  const puzzlePieces = ['puzzle-left', 'puzzle-up', 'puzzle-up', 'puzzle-right'];
  const puzzleFor = (index: number) => puzzlePieces[index % puzzlePieces.length];
  const puzzleDelay = (index: number) => index * 160;

  return ( 
    <section className="w-full h-auto py-8 bg-[#F5F2EB] min-h-screen">
      <div className="container-section w-[80%] mx-auto">
        <div className="topics-fade-in relative bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-10 border-4 border-white">
          <div className="flex items-center gap-4 mb-8">
            <Link href={'/'} className="w-12 h-12 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center transition-colors shadow-sm">
              <Home className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Temas que Descubriremos
              </h1>
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                Exploraremos cada tema y construiremos tu resiliencia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {topicsData.map((topic, index) => {
              const isLocked = topic.type === 'locked' && !topic.title;

              if (isLocked) {
                return (
                  <div
                    key={topic.id}
                    data-aos={puzzleFor(index)}
                    data-aos-delay={puzzleDelay(index)}
                    data-aos-duration="900"
                    className="bg-[#E9EDF0] border-2 border-slate-200/60 rounded-2xl p-5 flex items-center justify-between min-h-[100px] shadow-inner"
                  >
                    <span className="text-2xl font-black text-slate-500">
                      {topic.id}
                    </span>
                    <Lock className="w-6 h-6 text-slate-400" />
                  </div>
                );
              }

              const cardClass = `rounded-2xl p-5 flex flex-col justify-between min-h-[120px] shadow-md ${
                topic.link ? 'cursor-pointer' : ''
              } ${topic.color || 'bg-slate-200 text-slate-700'}`;

              const cardContent = (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black tracking-wider">
                      {topic.id}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {topic.icon}
                      {topic.type === 'completed' && (
                        <CheckCircle2 className="w-5 h-5 text-white/90" />
                      )}
                      {topic.type === 'locked' && (
                        <Lock className="w-4 h-4 text-white/90" />
                      )}
                    </div>
                  </div>

                  {topic.title && (
                    <h3 className="text-base sm:text-lg font-bold leading-snug mt-3">
                      {topic.title}
                    </h3>
                  )}
                </>
              );

              if (topic.link) {
                return (
                  <Link
                    key={topic.id}
                    href={topic.link}
                    className={cardClass}
                    data-aos={puzzleFor(index)}
                    data-aos-delay={puzzleDelay(index)}
                    data-aos-duration="900"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={topic.id}
                  className={cardClass}
                  aria-disabled="true"
                  data-aos={puzzleFor(index)}
                  data-aos-delay={puzzleDelay(index)}
                  data-aos-duration="900"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end items-center gap-2">
            <div className="bg-[#FFE380] border-2 border-amber-400 text-amber-900 font-extrabold px-5 py-2.5 rounded-2xl shadow-sm text-sm sm:text-base">
              ¡Vas muy bien!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
   