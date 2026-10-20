

import { User } from 'lucide-react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ANGELO STEVEN CAMPOS SULCA",
    role: "Líder de Proyecto",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: ""
  },
  {
    id: 2,
    name: "CARLO ANDRE PEÑA TORRES",
    role: "Desarrollador Frontend",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: ""
  },
  {
    id: 3,
    name: "VALERIA ESTEFANY TOLEDO COLUNGA",
    role: "Diseñadora UX/UI",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    imageUrl: ""
  },
  {
    id: 4,
    name: "LORENA ABIGAIL CÓNDOR URRUTIA",
    role: "Diseñadora UX/UI",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
    imageUrl: ""
  },
  {
    id: 5,
    name: "JUNIOR MICHAELL BARRUTIA CASTRO ",
    role: "Especialista QA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    imageUrl: ""
  },
  {
    id: 6,
    name: "SABRINA FERNANDA AGUILAR DIAZ",
    role: "DevOps Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    imageUrl: ""
  }
];

export function Members() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col items-center justify-center p-6 font-sans text-slate-800">
      <div className="w-[90%] md:min-h-[1200px] bg-[#FFFDF7] rounded-[36px] border-4 border-white shadow-2xl shadow-stone-200/50 p-6 sm:p-10 flex flex-col justify-between">
        
        <header className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 font-black text-xs px-3.5 py-1 rounded-full border border-amber-200/80 shadow-sm mb-2">
            👥 Nuestro Equipo
          </span>
          <h1 className="text-3xl font-black text-[#1D3557] tracking-tight">
            Integrantes del Grupo
          </h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 flex-1">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-rose-50/60 border border-rose-100/80 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-4 transition-all hover:scale-[1.02] hover:shadow-md"
            >
              <div className="w-28 h-28 rounded-full bg-rose-100/80 border-2 border-rose-200/60 overflow-hidden flex items-center justify-center flex-shrink-0 shadow-inner">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-rose-400" />
                )}
              </div>

              <div className="space-y-1.5">
                <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-0.5 rounded-full border border-amber-200/80 inline-block">
                  {member.role}
                </span>
                <h1 className="text-xl font-black text-[#1D3557] leading-tight">
                  {member.name}
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xs">
                {member.bio}
              </p>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}