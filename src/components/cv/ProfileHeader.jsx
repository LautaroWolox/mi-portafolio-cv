import React from "react";
import { Mail, Phone, MapPin, Download, Globe, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import profileImg from "../../assets/polish_save.jpg";

export default function ProfileHeader({ personalInfo }) {
  const whatsappUrl = `https://wa.me/${personalInfo.phoneRaw || ""}`;

  return (
    // bg-transparent permite ver el fondo de Java definido en App.jsx
    <div className="relative text-white pb-80 pt-12 bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* FOTO DE PERFIL */}
        <div className="mb-6 relative group">
            <div className="absolute -inset-0.5 bg-orange-500/50 rounded-full opacity-50 blur transition duration-1000 group-hover:opacity-100"></div>
            <img 
                src={profileImg} 
                alt={personalInfo.name} 
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                onError={(e) => {
                    e.target.style.display = 'none'; 
                    document.getElementById('avatar-fallback').style.display = 'flex';
                }}
            />
            <div id="avatar-fallback" className="hidden absolute top-0 left-0 w-40 h-40 bg-slate-700 rounded-full items-center justify-center border-4 border-white/10">
               <span className="text-4xl font-bold tracking-wider">LB</span>
            </div>
        </div>

        {/* Textos con sombra para leerse bien sobre cualquier fondo */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-md">{personalInfo.name}</h1>
        <h2 className="text-orange-300 text-lg md:text-xl mb-6 font-medium tracking-wide drop-shadow-md">{personalInfo.title}</h2>

        {/* Info de contacto */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-100 mb-8 bg-black/40 py-2 px-6 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-orange-400" /> {personalInfo.location}
          </div>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-orange-400" /> {personalInfo.email}
          </a>
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-orange-400" /> {personalInfo.phoneDisplay}
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-wrap justify-center gap-4 pb-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-500 border border-blue-500 font-bold shadow-lg hover:shadow-blue-500/30 transition-all">
                <Download className="w-4 h-4 mr-2" /> Descargar CV
            </Button>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black/40 text-white hover:bg-black/60 border border-white/20 backdrop-blur-md shadow-lg">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Button>
            </a>

            <a href={personalInfo.web} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black/40 text-white hover:bg-black/60 border border-white/20 backdrop-blur-md shadow-lg">
                  <Globe className="w-4 h-4 mr-2" /> Portfolio
              </Button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 text-white hover:bg-green-500 border-none font-bold shadow-lg hover:shadow-green-500/30 transition-all">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            </a>
        </div>

      </div>
    </div>
  );
}