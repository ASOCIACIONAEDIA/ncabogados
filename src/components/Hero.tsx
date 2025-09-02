import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/v.mp4"
      >
        Tu navegador no soporta el tag de video.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-20">
        <div className="max-w-4xl">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Nicolás Carrera
              <br className="sm:hidden" />
              <span className="text-yellow-400"> Abogados</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-100 mb-3 sm:mb-4">
              Despacho jurídico especializado en la defensa de sus derechos
            </p>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Con más de 25 años de experiencia, ofrecemos asesoramiento jurídico integral 
              con un enfoque personalizado y resultados garantizados. Más de 15.000 casos resueltos 
              con éxito nos avalan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <Link 
                to="/contacto" 
                className="bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-center text-sm sm:text-base shadow-lg"
              >
                Consulta Gratuita
              </Link>
              <Link 
                to="/servicios/derecho-familia" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 text-center text-sm sm:text-base"
              >
                Nuestros Servicios
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-0">
              <div className="flex items-center space-x-3 bg-black bg-opacity-20 rounded-lg p-3 sm:bg-transparent sm:p-0">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-blue-100 font-medium">Primera consulta gratuita</span>
              </div>
              <div className="flex items-center space-x-3 bg-black bg-opacity-20 rounded-lg p-3 sm:bg-transparent sm:p-0">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-blue-100 font-medium">Máxima confidencialidad</span>
              </div>
              <div className="flex items-center space-x-3 bg-black bg-opacity-20 rounded-lg p-3 sm:bg-transparent sm:p-0">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-blue-100 font-medium">Atención personalizada 24/7</span>
              </div>
              <div className="flex items-center space-x-3 bg-black bg-opacity-20 rounded-lg p-3 sm:bg-transparent sm:p-0">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-blue-100 font-medium">Más de 98% casos ganados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;