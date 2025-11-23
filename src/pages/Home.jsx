import React, { useState } from "react";
import { Search, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardContent } from "../components/ui/card";

import ProfileHeader from "../components/cv/ProfileHeader";
import DashboardStats from "../components/cv/DashboardStats";
import TechnologyList from "../components/cv/TechnologyList";
import ExperienceTimeline from "../components/cv/ExperienceTimeline";
import EducationList from "../components/cv/EducationList";

export default function Home() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  const personalInfo = {
    name: "Lautaro Buson",
    title: "Tech Lead | Software Engineer",
    subtitle: "Java | Angular | React | React Native | Vue",
    location: "La Plata, Provincia de Buenos Aires",
    email: "busonlautaro@gmail.com",
    phoneDisplay: "+54 9 11 3296-7779",
    phoneRaw: "5491132967779",
    linkedin: "https://www.linkedin.com/in/laubuson/",
    web: "https://mlbuson.github.io/Llautaro-Cv/",
    yearsExperience: 13,
    totalProjects: 25,
  };

  const education = [
    {
      institution: "ISTEA",
      degree: "Tecnicatura superior en desarrollo de software",
      period: "28/11/2025 - Actualidad",
      type: "degree",
      description: "Formación superior especializada en análisis, diseño y desarrollo de software con tecnologías modernas."
    },
    {
      institution: "Pontificia Universidad Católica Argentina (UCA)",
      degree: "Licenciatura en Sistemas",
      period: "2019 - 2025 (en curso)",
      type: "degree",
      description: "Formación universitaria en desarrollo de sistemas de información y tecnologías de la información."
    },
    {
      institution: "Platzi / Red Hat",
      degree: "Spring Cloud, OpenShift (OCP4) y DevOps CI/CD",
      period: "2021 - 2024 (en curso)",
      type: "certification",
      description: "Despliegue de microservicios cloud-native en entornos empresariales."
    },
    {
      institution: "Platzi / Udemy",
      degree: "Arquitectura de Microservicios",
      period: "2019 - 2021",
      type: "certification",
      description: "Spring Boot 2.x, Docker, Kubernetes y Kafka. Construcción y despliegue de sistemas distribuidos."
    },
    {
      institution: "EducacionIT",
      degree: "Java EE, Hibernate y Spring Framework",
      period: "2016 - 2018",
      type: "certification",
      description: "Desarrollo de backend empresarial y manejo de persistencia."
    },
    {
      institution: "Universidad Siglo 21",
      degree: "Hacking Ético",
      period: "2016 - 2017",
      type: "degree",
      description: "Especialización en seguridad informática, técnicas de hacking ético y protección de sistemas."
    },
    {
      institution: "Oracle University",
      degree: "OCPJP 7 – Programador Profesional Java SE",
      period: "2015",
      type: "certification",
      description: "Certificación oficial Oracle Certified Professional Java Programmer."
    },
    {
      institution: "EducacionIT",
      degree: "Java Developer & SQL Server",
      period: "2014 - 2015",
      type: "certification",
      description: "Formación en Java SE 7, JDBC, JSP y patrones de diseño."
    },
    {
      institution: "Universitas",
      degree: "Formación en programación y sistemas",
      period: "2012 - 2014",
      type: "degree",
      description: "Fundamentos de desarrollo de software y tecnologías de la información."
    },
    {
      institution: "BS Informática",
      degree: "Windows Server 2008",
      period: "2009 - 2011",
      type: "certification",
      description: "Nota: 9 – Administración, DNS físico y virtual. Infraestructura de servidores."
    },
    {
      institution: "Instituto Tecnológico Argentino",
      degree: "Analista Programador",
      period: "2007 - 2010",
      type: "degree",
      description: "Formación técnica en análisis y desarrollo de sistemas. Base para la carrera profesional."
    }
  ];

  const technologies = [
    { name: "Java", versions: ["8", "11", "17", "21"], years: 9, category: "Lenguaje", level: 100, projects: [{n:1}] },
    { name: "ZK 8", versions: [], years: 1, category: "Lenguaje", level: 90, projects: [{n:1}] },
    { name: "Spring Boot", versions: ["2.x", "3.x"], years: 8, category: "Framework Backend", level: 95, projects: [{n:1}] },
    { name: "Spring Security", versions: [], years: 6, category: "Framework Backend", level: 90, projects: [{n:1}] },
    { name: "Spring Batch", versions: [], years: 5, category: "Framework Backend", level: 85, projects: [{n:1}] },
    { name: "Spring Remoting", versions: [], years: 5, category: "Framework Backend", level: 85, projects: [{n:1}] },
    { name: "Hibernate", versions: [], years: 7, category: "Framework Backend", level: 90, projects: [{n:1}] },
    { name: "jBPM4", versions: [], years: 3, category: "Framework Backend", level: 80, projects: [{n:1}] },
    { name: ".NET Core", versions: ["3.9"], years: 2, category: "Framework Backend", level: 70, projects: [{n:1}] },
    { name: "Node.js", versions: ["14", "16", "18"], years: 3, category: "Backend Runtime", level: 75, projects: [{n:1}] },
    { name: "Angular", versions: ["1.5", "2-10", "11"], years: 6, category: "Framework Frontend", level: 90, projects: [{n:1}] },
    { name: "React", versions: ["16", "17", "18"], years: 4, category: "Framework Frontend", level: 85, projects: [{n:1}] },
    { name: "Vue.js", versions: ["2.x", "3.x"], years: 3, category: "Framework Frontend", level: 80, projects: [{n:1}] },
    { name: "ADF Faces", versions: [], years: 3, category: "Framework Frontend", level: 80, projects: [{n:1}] },
    { name: "jQuery", versions: [], years: 6, category: "Framework Frontend", level: 90, projects: [{n:1}] },
    { name: "React Native", versions: ["0.6x"], years: 4, category: "Framework Mobile", level: 85, projects: [{n:1}] },
    { name: "Kafka", versions: [], years: 4, category: "Mensajería", level: 85, projects: [{n:1}] },
    { name: "RabbitMQ", versions: [], years: 4, category: "Mensajería", level: 80, projects: [{n:1}] },
    { name: "ActiveMQ", versions: [], years: 5, category: "Mensajería", level: 85, projects: [{n:1}] },
    { name: "SOAP", versions: [], years: 8, category: "Mensajería", level: 95, projects: [{n:1}] },
    { name: "API REST", versions: [], years: 8, category: "Mensajería", level: 100, projects: [{n:1}] },
    { name: "Kong", versions: [], years: 2, category: "Mensajería", level: 80, projects: [{n:1}] },
    { name: "OAuth2", versions: [], years: 5, category: "Seguridad", level: 90, projects: [{n:1}] },
    { name: "JWT", versions: [], years: 5, category: "Seguridad", level: 90, projects: [{n:1}] },
    { name: "CAS SSO", versions: [], years: 4, category: "Seguridad", level: 85, projects: [{n:1}] },
    { name: "OpenLDAP", versions: [], years: 4, category: "Seguridad", level: 80, projects: [{n:1}] },
    { name: "Oracle SQL", versions: ["13g"], years: 8, category: "Base de Datos", level: 95, projects: [{n:1}] },
    { name: "SQL Server", versions: [], years: 8, category: "Base de Datos", level: 90, projects: [{n:1}] },
    { name: "MongoDB", versions: [], years: 5, category: "Base de Datos", level: 80, projects: [{n:1}] },
    { name: "Redis", versions: [], years: 3, category: "Base de Datos", level: 85, projects: [{n:1}] },
    { name: "OpenShift", versions: ["4"], years: 5, category: "Cloud/DevOps", level: 90, projects: [{n:1}] },
    { name: "AWS", versions: [], years: 5, category: "Cloud/DevOps", level: 80, projects: [{n:1}] },
    { name: "Tomcat", versions: [], years: 8, category: "Cloud/DevOps", level: 90, projects: [{n:1}] },
    { name: "iText", versions: [], years: 4, category: "Herramientas", level: 90, projects: [{n:1}] },
    { name: "Apache Solr", versions: [], years: 3, category: "Herramientas", level: 80, projects: [{n:1}] },
    { name: "Livecycle", versions: [], years: 3, category: "Herramientas", level: 80, projects: [{n:1}] },
    { name: "JUnit", versions: [], years: 8, category: "Herramientas", level: 95, projects: [{n:1}] },
    { name: "OpenOffice", versions: [], years: 5, category: "Herramientas", level: 80, projects: [{n:1}] },
    { name: "Dynatrace", versions: [], years: 3, category: "Observabilidad", level: 75, projects: [{n:1}] },
    { name: "Kibana", versions: [], years: 3, category: "Observabilidad", level: 75, projects: [{n:1}] },
    { name: "Grafana", versions: [], years: 3, category: "Observabilidad", level: 75, projects: [{n:1}] },
  ];

  const experience = [
    {
      company: "Proguide",
      role: "Tech Lead | Software Engineer",
      period: "10/11/2025 – Actualidad",
      duration: "Actualidad",
      location: "Buenos Aires",
      technologies: [
        "ZK 8", "Oracle SQL", "Spring Security", "Spring Remoting", "Spring Batch", 
        "jBPM4", "ActiveMQ", "iText", "SOAP", "Apache Solr", "Hibernate", "API REST", 
        "Angular", "Livecycle", "Redis", "JUnit", "OpenLDAP", "ADF Faces", "Kong", 
        "OpenOffice", "jQuery", "CAS SSO", "Tomcat", "OpenShift 4"
      ],
      highlights: [
        "Actualización de GDE y TAD para Gobierno de la Nación.",
        "A cargo de un equipo para refactorización de los módulos TAD y mejoras de código.",
        "Evolución a arquitectura de Microservicios.",
        "Migración de APIs SOAP legacy a REST.",
        "Implementación en OpenShift 4 (OCP4).",
        "Implementación de estrategias de trazabilidad y monitoreo avanzado."
      ],
    },
    {
      company: "Telecom Argentina",
      role: "Tech Lead",
      period: "Feb. 2022 – Actualidad",
      duration: "3 años",
      location: "Buenos Aires",
      technologies: [
        "Java 11", "Java 17", "Java 21", "Spring Boot 3", "OAuth2", "JWT",
        "CyberArk", "LDAP", "OpenShift 4", "Dynatrace", "Kafka",
      ],
      highlights: [
        "Liderazgo del equipo Field Manager, evolución de plataforma on-premise modular en Java 11",
        "Migración de 5 módulos internos a microservicios Java 21 con Spring Boot 3",
        "Desarrollo de microservicios Java 17 y 21 con OAuth2 + JWT + Dynatrace",
        "Integración de api-sfs-mule para consultas seguras vía OAuth2",
        "Creación del microservicio identity para autenticación federada CyberArk",
        "Trabajo con DevOps para CI/CD, control de scripts y despliegues productivos",
      ],
    },
    {
      company: "CaleGroup",
      role: "Tech Lead",
      period: "Jun. 2021 – Sept. 2022",
      duration: "1 año 3 meses",
      location: "Buenos Aires",
      technologies: [".NET Core 3.9", "Vue.js", "OpenVidu"],
      highlights: [
        "Migración a .NET Core 3.9 y frontend con Vue.js",
        "Videollamadas médicas con OpenVidu",
        "Integración con red de farmacias y receta digital",
        "Refactor completo de fichas clínicas y mejoras en UX",
        "Optimización de infraestructura y soporte 24/7",
      ],
    },
    {
      company: "IBM (Banco ICBC – Proyecto YOY)",
      role: "Tech Lead Development",
      period: "Mar. 2020 – Ene. 2021",
      duration: "11 meses",
      location: "Buenos Aires",
      technologies: ["Node.js v14", "Angular 11", "Ionic 5"],
      highlights: [
        "Login social con Node.js v14, Angular v11 e Ionic 5",
        "Migración de servicios heredados a arquitectura de microservicios",
        "Coordinación funcional y técnica con células dependientes",
        "Diseño inicial de arquitectura basada en microfrontends",
      ],
    },
    {
      company: "BBVA Argentina",
      role: "Tech Lead",
      period: "Mar. 2015 – Feb. 2020",
      duration: "5 años",
      location: "Buenos Aires",
      technologies: [
        "Java 11", "Spring Boot", "React", "React Native", "Oracle",
        "MongoDB", "Jenkins", "OpenShift", "Terraform",
      ],
      highlights: [
        "Validación biométrica para desbloqueo de cuentas (React web + React Native)",
        "Integración con RENAPER (DNI/DNE, OCR, MRZ, firma digital)",
        "Backend Java 11 + Oracle/MongoDB + Spring Boot",
        "Migración de GO y Homebanking a arquitectura de microservicios",
        "CI/CD con Jenkins, OpenShift y Terraform",
      ],
    },
    {
      company: "Banco Hipotecario",
      role: "Dev – Tech Lead",
      period: "Abr. 2013 – Feb. 2015",
      duration: "2 años",
      location: "Buenos Aires",
      technologies: [
        "Java 8", "Spring MVC", "Spring Security", "PrimeFaces", "Angular 1.5",
      ],
      highlights: [
        "Aplicaciones internas con Java 8, Spring MVC/Security, JDBC",
        "Frontend mixto: PrimeFaces + Angular 1.5",
        "Diseño de arquitectura futura basada en microservicios",
        "Implementación de eCheq para pymes",
      ],
    },
    {
      company: "Accenture (Cliente MetroGas)",
      role: "Desarrollador",
      period: "Mar. 2010 – Mar. 2013",
      duration: "3 años",
      location: "Buenos Aires",
      technologies: [
        "Java 6", "JSP", "Struts 1.x", "Oracle DB", "AES/3DES", "SHA-256",
      ],
      highlights: [
        "Migración de Java 2 (JDK 1.4) a Java 6 (JDK 1.6)",
        "Login con DNI o número de cliente",
        "Facturación histórica, reclamos y pagos online",
        "Seguridad: AES/3DES, SHA-1/SHA-256, anonimización, CSRF",
      ],
    },
  ];

  const filteredTechnologies = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExperience = selectedTech
    ? experience.filter((exp) =>
        exp.technologies.some((t) =>
          t.toLowerCase().includes(selectedTech.toLowerCase())
        )
      )
    : experience;

  const handleTechClick = (techName) => {
    setSelectedTech(techName);
    setTimeout(() => {
      document.getElementById("experience-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const clearFilter = () => {
    setSelectedTech(null);
  };

  return (
    // Fondo transparente para que se vea la imagen de App.jsx
    <div className="min-h-screen bg-transparent font-sans pb-20">
      
      {/* Header */}
      <ProfileHeader personalInfo={personalInfo} />

      {/* Main Container - con margen negativo para solapar el header */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-8">
        
        {/* Stats Cards Flotantes */}
        <DashboardStats
          yearsExperience={personalInfo.yearsExperience}
          totalTechnologies={technologies.length}
          totalCompanies={experience.length}
          currentRole={experience[0].role}
        />

        {/* Sección Buscador y Lista Stack (Desplegable) */}
        <Card className="shadow-sm border border-slate-100">
            <CardHeader className="border-b border-slate-100 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Título y Flecha para desplegar */}
                    <div 
                        className="flex items-center gap-2 cursor-pointer group select-none"
                        onClick={() => setIsStackExpanded(!isStackExpanded)}
                    >
                        <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 group-hover:text-blue-700 transition-colors">
                            <span className="text-blue-600">&lt;&gt;</span> Stack Tecnológico
                        </h2>
                        {isStackExpanded ? (
                            <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        )}
                    </div>
                    
                    {/* Buscador (siempre visible) */}
                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        placeholder="Buscar tecnología..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-slate-50 border-slate-200"
                        onClick={(e) => e.stopPropagation()} 
                      />
                    </div>
                </div>
            </CardHeader>
            
            {/* Contenido desplegable */}
            {isStackExpanded && (
                <CardContent className="p-6 pt-0">
                    <TechnologyList
                        technologies={filteredTechnologies}
                        onTechClick={handleTechClick}
                        searchTerm={searchTerm}
                    />
                </CardContent>
            )}
        </Card>

        {/* Sección Experiencia */}
        <div id="experience-section" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                    <span className="text-blue-600">
                       <BriefcaseIcon />
                    </span> 
                    Experiencia Profesional
                </h2>

                {selectedTech && (
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 animate-in fade-in">
                     <span className="text-xs font-semibold text-blue-700">Filtrando por: {selectedTech}</span>
                     <button 
                        onClick={clearFilter} 
                        className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded hover:bg-slate-50 text-slate-600 transition-colors"
                     >
                        Limpiar
                     </button>
                  </div>
                )}
            </div>

            <ExperienceTimeline
                experience={filteredExperience}
                selectedTech={selectedTech}
            />
        </div>

        {/* Sección Educación */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
           <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">Educación y Certificaciones</h2>
           </div>
           
           <EducationList education={education} />
        </div>

      </div>
    </div>
  );
}

function BriefcaseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
}