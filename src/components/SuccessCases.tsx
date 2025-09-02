import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, DollarSign, Scale, Users } from 'lucide-react';

const SuccessCases = () => {
  const cases = [
    {
      icon: DollarSign,
      title: 'Reclamación Cláusulas Suelo',
      amount: '487.650€',
      description: 'Recuperación integral de cantidades cobradas indebidamente por cláusulas suelo en hipoteca de vivienda familiar, incluyendo intereses de demora.',
      category: 'Derecho Bancario',
      year: '2024',
      duration: '14 meses'
    },
    {
      icon: Users,
      title: 'Despido Improcedente Ejecutivo',
      amount: '312.000€',
      description: 'Indemnización por despido improcedente de directivo con 18 años de antigüedad, incluyendo salarios de tramitación y bonus pendientes.',
      category: 'Derecho Laboral',
      year: '2024',
      duration: '8 meses'
    },
    {
      icon: Trophy,
      title: 'Negligencia Médica Grave',
      amount: '1.850.000€',
      description: 'Indemnización por negligencia médica que causó incapacidad permanente absoluta, cubriendo daños presentes y futuros.',
      category: 'Responsabilidad Civil',
      year: '2023',
      duration: '24 meses'
    },
    {
      icon: Scale,
      title: 'Violación Propiedad Intelectual',
      amount: '725.000€',
      description: 'Defensa exitosa de derechos de autor de software empresarial contra competencia desleal y uso no autorizado.',
      category: 'Propiedad Intelectual',
      year: '2024',
      duration: '16 meses'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito Recientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reales obtenidos para nuestros clientes. Cada caso representa nuestro compromiso 
            con la excelencia jurídica y la defensa efectiva de sus derechos.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <Trophy className="h-4 w-4 mr-2" />
            Más de 127,5M€ recuperados para nuestros clientes
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-3 rounded-lg shadow-lg">
                  <case_.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-1 block">
                    {case_.year}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {case_.duration}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {case_.title}
              </h3>

              <div className="text-3xl font-bold text-green-600 mb-4 flex items-center">
                {case_.amount}
                <span className="text-sm text-gray-500 ml-2 font-normal">recuperados</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {case_.description}
              </p>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                  {case_.category}
                </span>
                <span className="text-xs text-gray-500">
                  Caso cerrado con éxito
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Su caso también puede ser un éxito
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Cada caso es único y merece una atención especializada. Nuestro equipo de abogados expertos 
            está preparado para defender sus derechos con la máxima dedicación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 shadow-lg"
            >
              Consulta gratuita ahora
            </Link>
            <Link 
              to="/servicios/derecho-familia"
              className="inline-flex items-center border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-200"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;