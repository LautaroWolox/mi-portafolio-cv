import React from "react";
import { Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ProjectGallery({ images }) {
  return (
    <Card className="shadow-sm border border-slate-100">
      <CardHeader className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
            <span className="text-blue-600">
               <ImageIcon className="w-6 h-6" />
            </span> 
            Galería
          </h2>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <img 
                src={img} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}