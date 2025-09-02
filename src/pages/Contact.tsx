import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contacte con Nosotros
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarle. Solicite su consulta gratuita y nuestro equipo 
            de abogados especializados analizará su caso sin compromiso.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+34 91 123 45 67</p>
                    <p className="text-sm text-gray-500">Línea directa 24/7 para urgencias</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@nicolascarrera.es</p>
                    <p className="text-sm text-gray-500">Respuesta en menos de 2 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">
                      Calle Serrano 45, 3º<br />
                      28001 Madrid<br />
                      España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 - 19:00<br />
                      Sábados: 9:00 - 14:00<br />
                      Domingos: Solo urgencias
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Urgencia Legal?</h3>
              <p className="text-red-100 mb-4">
                Para casos que requieran atención inmediata, contáctenos las 24 horas.
              </p>
              <a 
                href="tel:+34911234567"
                className="inline-flex items-center bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Llamar Ahora
                <Phone className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Consulta Gratuita</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Sus apellidos"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="su.email@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+34 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Área de consulta *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Seleccione un área</option>
                    <option value="familia">Derecho de Familia</option>
                    <option value="laboral">Derecho Laboral</option>
                    <option value="accidentes">Accidentes y Responsabilidad Civil</option>
                    <option value="software">Derecho de Software</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgencia del caso
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="normal">Normal (respuesta en 24-48h)</option>
                    <option value="urgente">Urgente (respuesta en 4-8h)</option>
                    <option value="inmediata">Inmediata (respuesta en 1-2h)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del caso *
                  </label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describa su situación legal con el mayor detalle posible. Esta información nos ayudará a preparar mejor la consulta inicial..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Acepto la <Link to="#" className="text-blue-600 hover:underline">política de privacidad</Link> y 
                    el tratamiento de mis datos personales para el asesoramiento jurídico solicitado. *
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Enviar Consulta</span>
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Llamada Directa</h3>
                <p className="text-blue-100 text-sm mb-4">Hable directamente con un abogado</p>
                <a 
                  href="tel:+34911234567"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  +34 91 123 45 67
                </a>
              </div>

              <div className="bg-green-600 text-white rounded-xl p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Cita Presencial</h3>
                <p className="text-green-100 text-sm mb-4">Reserve una cita en nuestras oficinas</p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Agendar Cita
                </button>
              </div>

              <div className="bg-purple-600 text-white rounded-xl p-6 text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Videollamada</h3>
                <p className="text-purple-100 text-sm mb-4">Consulta online por videoconferencia</p>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Videoconsulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-gray-600">
              Estamos ubicados en el corazón de Madrid, con fácil acceso en transporte público.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">
                Mapa interactivo de ubicación<br />
                Calle Serrano 45, 3º - 28001 Madrid
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Metro</h4>
              <p className="text-gray-600">Línea 4 - Serrano (2 min)</p>
            </div>
            <div className="text-center p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Autobús</h4>
              <p className="text-gray-600">Líneas 1, 9, 19, 51, 74</p>
            </div>
            <div className="text-center p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
              <p className="text-gray-600">Parking Serrano (50m)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;