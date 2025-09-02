import React from 'react';
import { Heart, Shield, Users, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FamilyLaw = () => {
  const services = [
    {
      title: 'Divorcios y Separaciones',
      description: 'Procedimientos de divorcio consensuado y contencioso, separaciones matrimoniales y de parejas de hecho.',
      features: ['Divorcio express', 'Divorcio contencioso', 'Separación de bienes', 'Liquidación de gananciales']
    },
    {
      title: 'Custodia y Régimen de Visitas',
      description: 'Establecimiento y modificación de custodia, régimen de visitas y relaciones paterno-filiales.',
      features: ['Custodia compartida', 'Custodia exclusiva', 'Régimen de visitas', 'Traslado de menores']
    },
    {
      title: 'Pensiones Alimenticias',
      description: 'Cálculo, establecimiento y modificación de pensiones de alimentos y compensatorias.',
      features: ['Pensión de alimentos', 'Pensión compensatoria', 'Modificación de pensiones', 'Extinción de pensiones']
    },
    {
      title: 'Adopciones y Tutelas',
      description: 'Procedimientos de adopción nacional e internacional, tutelas y acogimiento familiar.',
      features: ['Adopción nacional', 'Adopción internacional', 'Tutela de menores', 'Acogimiento familiar']
    }
  ];

  const successCases = [
    {
      title: 'Custodia Internacional Compleja',
      description: 'Conseguimos la custodia compartida para nuestro cliente en un caso que involucraba a menores residentes en tres países diferentes.',
      result: 'Custodia compartida conseguida',
      duration: '8 meses'
    },
    {
      title: 'Divorcio de Alto Patrimonio',
      description: 'Protegimos los intereses económicos de nuestro cliente en un divorcio con patrimonio superior a 5 millones de euros.',
      result: '65% del patrimonio protegido',
      duration: '1 año'
    },
    {
      title: 'Adopción Internacional',
      description: 'Facilitamos la adopción de dos hermanos desde Colombia, gestionando toda la documentación internacional.',
      result: 'Adopción completada exitosamente',
      duration: '14 meses'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with High Quality Background Image */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-red-900 bg-opacity-70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-8 w-8 text-red-300" />
                <span className="text-red-200 font-medium">Especialistas en Derecho de Familia</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Protegemos lo más importante: su familia
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Más de 20 años de experiencia en derecho de familia. Especializados en divorcios, 
                custodia de menores, adopciones y violencia doméstica. Ofrecemos un enfoque humano 
                y profesional para proteger sus intereses y los de sus hijos.
              </p>
              
              <div className="bg-red-800 bg-opacity-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">96%</div>
                    <div className="text-red-100 text-sm">Casos ganados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">850+</div>
                    <div className="text-red-100 text-sm">Familias ayudadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">8-12</div>
                    <div className="text-red-100 text-sm">Meses promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">100%</div>
                    <div className="text-red-100 text-sm">Confidencial</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto"
                  className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
                >
                  Consulta Gratuita
                  <Phone className="h-4 w-4 ml-2" />
                </Link>
                <a 
                  href="tel:+34914567890"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all duration-200"
                >
                  Llamar: 91 456 78 90
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">¿Problemas familiares?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Máxima confidencialidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Enfoque humano y cercano</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Protección de menores</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span>Soluciones amigables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo de especialistas en derecho de familia ofrece un servicio 
              integral adaptado a las necesidades específicas de cada caso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
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

      {/* Success Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Éxito en Derecho de Familia
            </h2>
            <p className="text-xl text-gray-600">
              Algunos de nuestros logros más destacados defendiendo a familias españolas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {case_.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {case_.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-green-600">{case_.result}</span>
                    <span className="text-gray-500">Duración: {case_.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir nuestro despacho?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enfoque humano</h4>
                    <p className="text-gray-600 text-sm">Entendemos que los asuntos familiares requieren sensibilidad y comprensión.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Confidencialidad absoluta</h4>
                    <p className="text-gray-600 text-sm">Máxima discreción en todos nuestros procedimientos y comunicaciones.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Resultados probados</h4>
                    <p className="text-gray-600 text-sm">Más del 95% de nuestros casos de familia se resuelven satisfactoriamente.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5668802/pexels-photo-5668802.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Familia feliz tras resolución legal"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesita asesoramiento en derecho de familia?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            No enfrente solo los problemas familiares. Nuestro equipo está aquí para ayudarle.
          </p>
          <Link 
            to="/contacto"
            className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
          >
            Contactar Ahora
            <Phone className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FamilyLaw;