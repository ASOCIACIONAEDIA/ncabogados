import { CardSpotlight } from "./ui/card-spotlight";
import React from "react";
import { Scale, Search, FileText, Trophy } from 'lucide-react';

export function ProcessSection() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Un Proceso Claro y Eficaz
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Le guiamos en cada paso del camino, desde la primera consulta hasta la resolución exitosa de su caso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            icon={<Scale className="h-10 w-10 text-orange-400 mb-4" />}
            title="1. Consulta Inicial Gratuita"
            description="Evaluamos su caso, resolvemos sus dudas y le ofrecemos una visión clara de las posibilidades legales sin ningún compromiso."
          />
          <StepCard
            icon={<Search className="h-10 w-10 text-orange-400 mb-4" />}
            title="2. Análisis y Estrategia"
            description="Nuestro equipo de expertos analiza en profundidad toda la documentación y diseña una estrategia legal a medida para maximizar sus opciones de éxito."
          />
          <StepCard
            icon={<FileText className="h-10 w-10 text-orange-400 mb-4" />}
            title="3. Gestión del Proceso"
            description="Nos encargamos de toda la burocracia, negociaciones y procedimientos judiciales, manteniéndole informado en todo momento a través de su Área Cliente."
          />
          <StepCard
            icon={<Trophy className="h-10 w-10 text-orange-400 mb-4" />}
            title="4. Resolución y Éxito"
            description="Luchamos por sus intereses hasta el final, buscando siempre la resolución más favorable, ya sea a través de un acuerdo o en los tribunales."
          />
        </div>
      </div>
    </div>
  );
}

const StepCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <CardSpotlight className="h-full w-full flex flex-col items-center text-center p-6">
      {icon}
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        {title}
      </p>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        {description}
      </p>
    </CardSpotlight>
  );
};