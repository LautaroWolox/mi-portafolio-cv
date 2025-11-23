import React from "react";
import { ChevronRight } from "lucide-react";

// Paleta de colores mejorada
const categoryStyles = {
  "Lenguaje": "bg-blue-100 text-blue-800 border-blue-200",
  "Framework Backend": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Framework Frontend": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Framework Mobile": "bg-rose-100 text-rose-800 border-rose-200",
  "Backend Runtime": "bg-amber-100 text-amber-900 border-amber-200",
  "Seguridad": "bg-red-50 text-red-700 border-red-200",
  "Mensajería": "bg-orange-100 text-orange-800 border-orange-200",
  "Cloud/DevOps": "bg-sky-100 text-sky-800 border-sky-200",
  "Base de Datos": "bg-teal-100 text-teal-800 border-teal-200",
  "Observabilidad": "bg-violet-100 text-violet-800 border-violet-200",
  "Herramientas": "bg-slate-200 text-slate-800 border-slate-300"
};

const TechnologyRow = ({ tech, onClick }) => {
  return (
    <div 
        onClick={() => onClick(tech.name)}
        className="grid grid-cols-12 gap-4 py-4 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors cursor-pointer px-4 group"
    >
      {/* Columna Nombre y Versiones */}
      <div className="col-span-12 md:col-span-4">
        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{tech.name}</h4>
        <p className="text-xs text-slate-500 mt-1">
            {tech.versions.length > 0 ? tech.versions.join(", ") : "Todas las versiones"}
        </p>
      </div>

      {/* Columna Años */}
      <div className="col-span-6 md:col-span-2">
         <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded border border-slate-200">
            {tech.years} año{tech.years !== 1 ? 's' : ''}
         </span>
      </div>

      {/* Columna Nivel (Barra de progreso) */}
      <div className="col-span-6 md:col-span-4 flex items-center gap-3">
         <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
                className="h-full bg-slate-800 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${tech.level}%` }}
            ></div>
         </div>
         <span className="text-xs font-bold text-slate-700 w-8 text-right">{tech.level}%</span>
      </div>

      {/* Columna Proyectos y Flecha */}
      <div className="col-span-12 md:col-span-2 flex justify-end items-center text-slate-400 text-sm">
         <span className="mr-2 hidden sm:inline">{tech.projects?.length || 0} empresa{tech.projects?.length !== 1 ? 's' : ''}</span>
         <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default function TechnologyList({ technologies, onTechClick, searchTerm }) {
  const categoriesInOrder = Array.from(new Set(technologies.map(t => t.category)));

  const filteredTechs = technologies.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
        <div className="col-span-4">Tecnología</div>
        <div className="col-span-2">Experiencia</div>
        <div className="col-span-4">Nivel</div>
        <div className="col-span-2 text-right">Proyectos</div>
      </div>

      <div className="p-2">
          {categoriesInOrder.map(category => {
              const techsInCategory = filteredTechs.filter(t => t.category === category);
              
              if (techsInCategory.length === 0) return null;

              return (
                  <div key={category} className="mb-6 last:mb-0">
                      <div className="px-4 mt-5 mb-3">
                        <span className={`px-3 py-1.5 rounded-md text-xs font-bold border inline-block shadow-sm ${categoryStyles[category] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
                            {category}
                        </span>
                      </div>
                      
                      {techsInCategory.map((tech) => (
                          <TechnologyRow 
                            key={tech.name} 
                            tech={tech} 
                            onClick={onTechClick} 
                          />
                      ))}
                  </div>
              );
          })}
          
          {filteredTechs.length === 0 && (
             <div className="p-12 text-center text-slate-500">
                No se encontraron tecnologías que coincidan con tu búsqueda.
             </div>
          )}
      </div>
    </div>
  );
}