import React from "react";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function ExperienceTimeline({ experience, selectedTech }) {
  if (experience.length === 0) {
    return <div className="text-center py-10 text-slate-500">No hay experiencias para mostrar.</div>;
  }

  return (
    <div className="relative pl-6 md:pl-8 border-l-2 border-blue-500 space-y-8 py-2">
      {experience.map((job, index) => (
        <div key={index} className="relative">
          {/* Punto azul en la línea de tiempo */}
          <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50"></div>

          {/* Tarjeta de Trabajo */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            
            {/* Header Tarjeta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg hidden sm:block">
                     <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                    <div className="flex items-center gap-2 mt-1">
                         <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                             {job.role}
                         </span>
                    </div>
                  </div>
               </div>
               
               <div className="text-xs text-slate-500 flex flex-col md:items-end gap-1">
                  <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{job.period}</span>
                      <span className="text-slate-300">|</span>
                      <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                  </div>
               </div>
            </div>

            {/* Stack Tecnológico */}
            <div className="mb-4">
                <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Stack Tecnológico:</p>
                <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                        <Badge 
                            key={tech} 
                            className={`
                                border px-2 py-0.5 text-[10px] 
                                ${selectedTech && tech.toLowerCase().includes(selectedTech.toLowerCase()) 
                                    ? 'bg-blue-50 border-blue-200 text-blue-700 font-bold' 
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}
                            `}
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Logros */}
            <div>
                 <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Logros destacados:</p>
                 <ul className="space-y-2">
                    {job.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                             <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                             <span>{item}</span>
                        </li>
                    ))}
                 </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}