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
      type: 'locked',
      color: 'bg-rose-500 text-white border-b-4 border-rose-700',
      icon: <Smile className="w-5 h-5" />,
      link: '/resiliencia/tema1-01'
    },
    {
      id: '02',
      title: 'Factores que Promueven la Resiliencia',
      type: 'completed',
      color: 'bg-amber-500 text-white border-b-4 border-amber-700',
      icon: <Sun className="w-5 h-5" />,
      link: '/Factores/page01'
    },
    {
      id: '03',
      title: 'Estrategias Para el tema de Resiliencia',
      type: 'completed',
      color: 'bg-emerald-500 text-white border-b-4 border-emerald-700',
      icon: <Feather className="w-5 h-5" />,
      link: '/Estrategias/tema3-01'
    },
    {
      id: '04',
      title: 'Impulsos',
      type: 'completed',
      color: 'bg-purple-500 text-white border-b-4 border-purple-700',
      icon: <Zap className="w-5 h-5" />,
      link: '/Impulsos/tema4-01'
    },
    {
      id: '05',
      title: 'Impulsos',
      type: 'completed',
      color: 'bg-purple-500 text-white border-b-4 border-purple-700',
      icon: <Zap className="w-5 h-5" />,
      link: '/Impulsividad/page01'
    },{
      id: '06',
      title: 'Tecnicas de Control.1',
      type: 'completed',
      color: 'bg-purple-500 text-white border-b-4 border-purple-700',
      icon: <Zap className="w-5 h-5" />,
      link: '/TecnicasControl/page01'
    },
    {
      id: '07',
      title: 'Tecnicas de Control.2',
      type: 'completed',
      color: 'bg-purple-500 text-white border-b-4 border-purple-700',
      icon: <Zap className="w-5 h-5" />,
      link: '/TecnicasControl2/tema7-01'
    },
    { id: '08', type: 'locked' , link:null},
    { id: '09', type: 'locked',  link:null},
    { id: '10', type: 'locked' , link:null},
    { id: '11', type: 'locked',  link:null},
    { id: '12', type: 'locked' , link:null},
    { id: '13', type: 'locked' , link:null},
    { id: '14', type: 'locked' , link:null},
  ];

  return ( 
    <section className="w-full h-auto py-8 bg-[#F5F2EB] min-h-screen">
      <div className="container-section w-[80%] mx-auto">
        <div className="relative bg-[#FFFDF7] rounded-[36px] shadow-xl p-6 sm:p-10 border-4 border-white">
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
            {topicsData.map((topic) => {
              const isLocked = topic.type === 'locked' && !topic.title;

              if (isLocked) {
                return (
                  <div
                    key={topic.id}
                    data-aos="zoom-in"
                    data-aos-delay={(Number(topic.id) - 1) * 60}
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
                    data-aos="fade-up"
                    data-aos-delay={(Number(topic.id) - 1) * 60}
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
                  data-aos="fade-up"
                  data-aos-delay={(Number(topic.id) - 1) * 60}
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
   