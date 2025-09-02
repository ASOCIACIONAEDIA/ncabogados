import React from 'react';
import { Car, AlertCircle, DollarSign, CheckCircle, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccidentLaw = () => {
  const accidentTypes = [
    {
      title: 'Accidentes de Tráfico',
      description: 'Reclamaciones por lesiones, daños materiales y secuelas permanentes en accidentes de circulación.',
      coverage: ['Atropellos', 'Colisiones múltiples', 'Accidentes mortales', 'Daños materiales']
    },
    {
      title: 'Negligencias Médicas',
      description: 'Casos de mala praxis médica, errores diagnósticos y tratamientos inadecuados.',
      coverage: ['Errores quirúrgicos', 'Diagnósticos tardíos', 'Infecciones nosocomiales', 'Medicamentos defectuosos']
    },
    {
      title: 'Accidentes Laborales',
      description: 'Indemnizaciones por accidentes en el lugar de trabajo y enfermedades profesionales.',
      coverage: ['Caídas en altura', 'Lesiones por maquinaria', 'Enfermedades profesionales', 'Accidentes in itinere']
    },
    {
      title: 'Defectos de Productos',
      description: 'Responsabilidad civil por productos defectuosos que causan daños a consumidores.',
      coverage: ['Productos alimentarios', 'Dispositivos médicos', 'Automóviles defectuosos', 'Productos farmacéuticos']
    }
  ];

  const compensationTypes = [
    { type: 'Lesiones permanentes', range: '50.000€ - 500.000€' },
    { type: 'Incapacidad temporal', range: '5.000€ - 50.000€' },
    { type: 'Daño moral', range: '10.000€ - 100.000€' },
    { type: 'Lucro cesante', range: '15.000€ - 200.000€' },
    { type: 'Gastos médicos', range: '2.000€ - 150.000€' },
    { type: 'Adaptación vivienda', range: '20.000€ - 80.000€' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white py-20 overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/v3.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-900 bg-opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Car className="h-8 w-8 text-orange-300" />
                <span className="text-orange-200 font-medium">Especialistas en Accidentes y Responsabilidad Civil</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Máxima indemnización por su accidente
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Más de 1,500 casos de accidentes resueltos con éxito. Especializados en accidentes de tráfico, 
                negligencias médicas y responsabilidad civil. Luchamos por obtener la máxima compensación 
                que le corresponde por ley.
              </p>
              
              <div className="bg-orange-800 bg-opacity-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">1.5M€</div>
                    <div className="text-orange-100 text-sm">Mayor indemnización</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">99%</div>
                    <div className="text-orange-100 text-sm">Casos ganados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-orange-100 text-sm">Atención urgente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">0€</div>
                    <div className="text-orange-100 text-sm">Hasta ganar</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto"
                  className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
                >
                  Contacto de Emergencia
                  <Phone className="h-4 w-4 ml-2" />
                </Link>
                <a 
                  href="tel:+34914567890"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-all duration-200"
                >
                  Urgencias: 91 456 78 90
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">¿Ha sufrido un accidente?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>No firme nada sin consultarnos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Evaluación gratuita inmediata</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Sin honorarios hasta ganar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Máxima indemnización</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Accidents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Accidentes que Defendemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializados en todas las modalidades de accidentes y responsabilidad civil, 
              con un historial probado de éxito en indemnizaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accidentTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {type.coverage.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Baremo de Indemnizaciones 2025
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conozca los rangos de indemnización según el tipo de lesión o daño sufrido. 
                Cada caso es único y trabajamos para conseguir la máxima compensación posible.
              </p>
              
              <div className="bg-orange-100 border border-orange-200 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-900">Importante</span>
                </div>
                <p className="text-orange-800 text-sm">
                  Las indemnizaciones varían según las circunstancias específicas de cada caso. 
                  Estos importes son orientativos basados en sentencias recientes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tipos de Compensación
              </h3>
              <div className="space-y-4">
                {compensationTypes.map((comp, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{comp.type}</span>
                    <span className="font-bold text-orange-600">{comp.range}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-900">Sin honorarios hasta ganar</span>
                </div>
                <p className="text-green-800 text-sm">
                  Solo cobramos nuestros honorarios cuando conseguimos su indemnización. 
                  Evaluación gratuita sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AlertCircle className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            ¿Acaba de Sufrir un Accidente?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Los primeros pasos son fundamentales. Actúe inmediatamente para proteger sus derechos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. No firme nada</h4>
              <p className="text-red-100 text-sm">Sin nuestro asesoramiento</p>
            </div>
            <div className="bg-red-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Documente todo</h4>
              <p className="text-red-100 text-sm">Fotos, testigos, informes</p>
            </div>
            <div className="bg-red-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Llámenos ya</h4>
              <p className="text-red-100 text-sm">Asesoramiento inmediato</p>
            </div>
          </div>
          <a 
            href="tel:+34911234567"
            className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Llamar Ahora: +34 91 123 45 67
            <Phone className="h-4 w-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccidentLaw;