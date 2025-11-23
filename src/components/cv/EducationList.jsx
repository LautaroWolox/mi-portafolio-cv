import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function EducationList({ education }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {education.map((edu, index) => (
        <Card key={index} className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-full shrink-0">
                {edu.type === "certification" ? (
                  <Award className="w-6 h-6 text-blue-600" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">
                  {edu.institution}
                </h3>
                <h4 className="text-blue-600 font-medium text-sm mb-2">
                  {edu.degree}
                </h4>
                
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}