import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Briefcase, Car, Laptop, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Derecho de Familia',
      description: 'Asesoramiento integral en procesos familiares con un enfoque humano y profesional. Protegemos sus intereses y los de sus hijos.',
      features: ['Divorcios y separaciones', 'Custodia y régimen de visitas', 'Pensiones alimenticias', 'Violencia doméstica', 'Adopciones nacionales e internacionales'],
      link: '/servicios/derecho-familia',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      successRate: '96%',
      avgTime: '8-12 meses'
    },
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Defensa de los derechos laborales con más de 15 años de experiencia. Especializados en casos complejos y de alto valor.',
      features: ['Despidos improcedentes', 'Acoso laboral y mobbing', 'Accidentes de trabajo', 'Reclamaciones salariales', 'Negociación colectiva'],
      link: '/servicios/derecho-laboral',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      successRate: '98%',
      avgTime: '6-10 meses'
    },
    {
      icon: Car,
      title: 'Accidentes y Responsabilidad Civil',
      description: 'Máxima indemnización por accidentes de tráfico, negligencias médicas y daños personales. Sin honorarios hasta ganar.',
      features: ['Accidentes de tráfico', 'Negligencias médicas', 'Daños corporales', 'Incapacidades permanentes', 'Seguros y peritajes'],
      link: '/servicios/accidentes',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      successRate: '99%',
      avgTime: '12-18 meses'
    },
    {
      icon: Laptop,
      title: 'Derecho Tecnológico y Propiedad Intelectual',
      description: 'Protección integral de activos digitales, software y propiedad intelectual. Especialistas en RGPD y contratos tecnológicos.',
      features: ['Propiedad intelectual', 'Contratos tecnológicos', 'Protección de datos RGPD', 'Licencias de software', 'Ciberdelitos'],
      link: '/servicios/derecho-software',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      successRate: '97%',
      avgTime: '4-8 meses'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Áreas de Especialización
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Despacho jurídico especializado en las principales ramas del derecho, con más de 25 años 
            de experiencia y resultados probados en cada área de práctica.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Consulta inicial gratuita en todas las especialidades
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-blue-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 ${service.bgColor} rounded-xl shadow-sm`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600 mb-1">
                      {service.successRate} éxito
                    </div>
                    <div className="text-xs text-gray-500">
                      {service.avgTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Servicios incluidos:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center justify-center w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 group-hover:shadow-lg"
                  >
                    Consulta gratuita
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;