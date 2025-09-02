import { Building, Scale, Users, Award } from 'lucide-react';
import React from 'react';

const FirmSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                alt="Equipo de abogados en reunión"
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1600880292210-859b922265de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Abogado sonriendo"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
              alt="Detalle de firma de documentos"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conozca Nuestro Despacho: <span className="text-blue-900">Pasión por la Justicia</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundado en 1998 por Nicolás Carrera, nuestro despacho nació con la misión de ofrecer un servicio jurídico 
              cercano, honesto y excepcionalmente eficaz. Nos hemos consolidado como un referente en la defensa 
              de los derechos de particulares y empresas, combinando la tradición legal con una visión innovadora.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg flex-shrink-0">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Nuestros Valores</h4>
                  <p className="text-gray-600 text-sm">Integridad, confidencialidad y un compromiso inquebrantable con los intereses de nuestros clientes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">El Equipo</h4>
                  <p className="text-gray-600 text-sm">Un equipo multidisciplinar de abogados expertos, en constante formación para ofrecer las estrategias más avanzadas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Resultados Probados</h4>
                  <p className="text-gray-600 text-sm">Más de 15.000 casos de éxito y 127 millones de euros recuperados nos consolidan como un despacho de confianza.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmSection;