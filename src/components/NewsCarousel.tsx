"use client";
 
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
 
export function NewsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
 
  return (
    <div className="w-full h-full py-20 bg-gray-50">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 font-sans">
        Noticias y Actualidad Jurídica
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
 
const DummyContent = ({ content }) => {
  return (
    <div className="bg-white p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {content}
        </p>
        <img
            src="https://plus.unsplash.com/premium_photo-1681487814185-61e5cf639f88?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Abogados trabajando"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
        />
    </div>
  );
};
 
const data = [
  {
    category: "Derecho Laboral",
    title: "Nueva Ley de Teletrabajo: Claves y Obligaciones para Empresas",
    src: "https://images.unsplash.com/photo-1586953208448-b95a898d9b89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="El gobierno aprueba la nueva normativa que regula el trabajo a distancia, estableciendo nuevos derechos para los trabajadores y obligaciones claras para las empresas en materia de costes y desconexión digital." />,
  },
  {
    category: "Derecho de Familia",
    title: "El Tribunal Supremo Unifica Criterios sobre la Custodia Compartida",
    src: "https://images.unsplash.com/photo-1541887714243-53d81b374b88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Una reciente sentencia del Tribunal Supremo establece directrices claras para la concesión de la custodia compartida, priorizando siempre el interés superior del menor y analizando cada caso de forma individualizada." />,
  },
  {
    category: "Responsabilidad Civil",
    title: "Aumentan las Indemnizaciones por Accidentes de Tráfico en 2024",
    src: "https://images.unsplash.com/photo-1511895426328-dc6219df6b79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="Se ha publicado la actualización del baremo de indemnizaciones por accidentes de tráfico, que contempla un incremento significativo en las cuantías por lesiones y secuelas, adaptándose al coste de vida actual." />,
  },
  {
    category: "Derecho Tecnológico",
    title: "La Nueva Normativa Europea de IA y su Impacto en las Empresas",
    src: "https://images.unsplash.com/photo-1526628953301-3e589e6a8b74?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="La Unión Europea avanza en la 'AI Act', una regulación pionera que establecerá marcos éticos y legales para el desarrollo y uso de la inteligencia artificial, afectando a múltiples sectores empresariales." />,
  },
  {
    category: "Derecho Bancario",
    title: "Sentencia Clave sobre Tarjetas Revolving y la Usura",
    src: "https://images.unsplash.com/photo-1616077168079-7e0696772780?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent content="El Tribunal de Justicia de la UE se pronuncia sobre la transparencia en los contratos de tarjetas revolving, abriendo la puerta a miles de nuevas reclamaciones por parte de los consumidores afectados por intereses abusivos." />,
  },
];