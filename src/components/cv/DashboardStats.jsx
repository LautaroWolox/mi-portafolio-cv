import React from "react";
import { Card, CardContent } from "../ui/card";
import { Award, Code2, Building2, Briefcase } from "lucide-react";

export default function DashboardStats({ yearsExperience, totalTechnologies, totalCompanies, currentRole }) {
  const stats = [
    {
      label: "Años de Experiencia",
      value: "13+", 
      icon: Award,
      bgIcon: "bg-blue-100",
      textIcon: "text-blue-600",
    },
    {
      label: "Tecnologías",
      value: totalTechnologies,
      icon: Code2,
      bgIcon: "bg-purple-100",
      textIcon: "text-purple-600",
    },
    {
      label: "Empresas",
      value: totalCompanies,
      icon: Building2,
      bgIcon: "bg-green-100",
      textIcon: "text-green-600",
    },
    {
      label: "Rol Actual",
      value: currentRole,
      icon: Briefcase,
      bgIcon: "bg-orange-100",
      textIcon: "text-orange-600",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="border-none shadow-md overflow-hidden">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <div className={`w-10 h-10 rounded-lg ${stat.bgIcon} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${stat.textIcon}`} />
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}