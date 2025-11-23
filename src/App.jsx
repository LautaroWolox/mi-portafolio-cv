import React from "react";
import Home from "./pages/Home";
// Importamos tu imagen de Java
import bgJava from "./assets/1.jpg"; 

export default function App() {
  return (
    <div 
      className="min-h-screen font-sans text-slate-900"
      style={{
        // Configuración para que la imagen se vea perfecta
        backgroundImage: `url(${bgJava})`,
        backgroundSize: "cover",       // Cubre toda la pantalla
        backgroundPosition: "center",  // Centra la imagen (para ver el logo)
        backgroundAttachment: "fixed", // La imagen se queda quieta al hacer scroll
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* CAPA OSCURA (Overlay): 
         Usamos bg-slate-900/80 (80% de opacidad) para oscurecer la imagen 
         y que tus textos blancos resalten perfectamente sin pixelarse el fondo.
      */}
      <div className="min-h-screen bg-slate-900/80 w-full">
         <Home />
      </div>
    </div>
  );
}