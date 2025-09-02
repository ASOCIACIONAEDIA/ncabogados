import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative text-white h-[70vh] min-h-[600px] flex items-center">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/v.mp4"
      >
        Tu navegador no soporta el tag de video.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-3xl">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nicolás Carrera
              <span className="text-yellow-400"> Abogados</span>
            </h1>
            <p className="text-2xl font-light text-blue-100 mb-4">
              Despacho jurídico especializado en la defensa de sus derechos
            </p>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Con más de 25 años de experiencia, ofrecemos asesoramiento jurídico integral 
              con un enfoque personalizado y resultados garantizados. Más de 15.000 casos resueltos 
              con éxito nos avalan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/contacto" 
                className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-center"
              >
                Consulta Gratuita
              </Link>
              <Link 
                to="/servicios/derecho-familia" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 text-center"
              >
                Nuestros Servicios
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-blue-100">Primera consulta gratuita</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-blue-100">Máxima confidencialidad</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-blue-100">Atención personalizada 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-blue-100">Más de 98% casos ganados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;