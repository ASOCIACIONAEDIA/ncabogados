import React from 'react';
import { Briefcase, Shield, AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaborLaw = () => {
  const services = [
    {
      title: 'Despidos y Extinción de Contratos',
      description: 'Defensa en despidos disciplinarios, objetivos, colectivos y extinción voluntaria de contratos.',
      features: ['Despidos improcedentes', 'Despidos nulos', 'Despidos colectivos', 'Extinción voluntaria']
    },
    {
      title: 'Acoso Laboral y Mobbing',
      description: 'Protección legal ante situaciones de acoso laboral, mobbing y discriminación en el trabajo.',
      features: ['Acoso psicológico', 'Discriminación', 'Mobbing directivo', 'Ambiente hostil']
    },
    {
      title: 'Accidentes de Trabajo',
      description: 'Reclamaciones por accidentes laborales, enfermedades profesionales e incapacidades.',
      features: ['Accidentes in itinere', 'Enfermedades profesionales', 'Incapacidades temporales', 'Incapacidades permanentes']
    },
    {
      title: 'Negociación Colectiva',
      description: 'Asesoramiento en convenios colectivos, representación sindical y conflictos colectivos.',
      features: ['Convenios colectivos', 'Elecciones sindicales', 'Huelgas legales', 'Conflictos colectivos']
    }
  ];

  const laborStats = [
    { value: '98%', label: 'Despidos ganados' },
    { value: '650+', label: 'Casos laborales' },
    { value: '15M€', label: 'En indemnizaciones' },
    { value: '24h', label: 'Respuesta máxima' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/v2.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="h-8 w-8 text-blue-300" />
                <span className="text-blue-200 font-medium">Especialistas en Derecho Laboral</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Defendemos sus derechos laborales con excelencia
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Más de 15 años de experiencia defendiendo trabajadores en toda España. 
                Especializados en despidos improcedentes, acoso laboral y accidentes de trabajo. 
                Sin honorarios hasta conseguir su indemnización.
              </p>
              
              <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  {laborStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto"
                  className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
                >
                  Consulta de Urgencia
                  <Phone className="h-4 w-4 ml-2" />
                </Link>
                <a 
                  href="tel:+34914567890"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200"
                >
                  Llamar: 91 456 78 90
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">¿Le han despedido?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Evaluación gratuita en 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>98% de casos ganados</span>
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios de Derecho Laboral
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protegemos sus derechos laborales con estrategias jurídicas probadas 
              y un enfoque personalizado para cada situación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600">
              Un enfoque metódico y transparente para maximizar las posibilidades de éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta Inicial', desc: 'Análisis gratuito de su caso laboral' },
              { step: '02', title: 'Estrategia Legal', desc: 'Diseñamos la mejor estrategia procesal' },
              { step: '03', title: 'Ejecución', desc: 'Llevamos a cabo todas las acciones legales' },
              { step: '04', title: 'Resultado', desc: 'Conseguimos la mejor resolución posible' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            ¿Urgencia Laboral? Contacte Inmediatamente
          </h2>
          <p className="text-xl text-red-100 mb-8">
            En casos de despido inmediato o situaciones laborales urgentes, 
            actúe rápido. Los plazos legales son muy estrictos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+34911234567"
              className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
            >
              Llamar Ahora: +34 91 123 45 67
              <Phone className="h-4 w-4 ml-2" />
            </a>
            <Link 
              to="/contacto"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all duration-200"
            >
              Formulario de Urgencia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaborLaw;