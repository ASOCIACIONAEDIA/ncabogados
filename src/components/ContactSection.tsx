import { Phone, Mail, MapPin, Clock, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Primera consulta <span className="text-yellow-400">gratuita</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Analizamos su caso sin compromiso. Más de 25 años de experiencia nos avalan 
              para ofrecerle el mejor asesoramiento jurídico personalizado.
            </p>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Confidencial</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">98,7% Éxito</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">15.247+ Casos</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="h-6 w-6 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-white">Teléfono directo</h4>
                  <p className="text-yellow-200 font-medium">+34 91 456 78 90</p>
                  <p className="text-gray-400 text-sm">Disponible 24/7 para urgencias</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Mail className="h-6 w-6 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-white">Email profesional</h4>
                  <p className="text-yellow-200 font-medium">info@nicolascarrera.es</p>
                  <p className="text-gray-400 text-sm">Respuesta garantizada en 24h</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-white">Oficina principal</h4>
                  <p className="text-yellow-200 font-medium">Paseo de la Castellana 95, 15º</p>
                  <p className="text-gray-400 text-sm">28046 Madrid | Metro: Santiago Bernabéu</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Clock className="h-6 w-6 text-yellow-400" />
                <div>
                  <h4 className="font-semibold text-white">Horario de atención</h4>
                  <p className="text-yellow-200 font-medium">Lun-Vie: 9:00-19:00 | Sáb: 9:00-14:00</p>
                  <p className="text-red-300 text-sm">🚨 Urgencias: +34 600 123 456 (24/7)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Consulta Gratuita</h3>
              <p className="text-gray-600">Complete el formulario y nos pondremos en contacto en menos de 24 horas</p>
              <div className="mt-3 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ✓ Sin compromiso • ✓ Confidencial • ✓ Respuesta rápida
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Apellidos</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Sus apellidos"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="su.email@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Área de consulta *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Seleccione el área de su consulta</option>
                  <option>Derecho de Familia - Divorcios, custodia, pensiones</option>
                  <option>Derecho Laboral - Despidos, acoso, indemnizaciones</option>
                  <option>Accidentes - Tráfico, negligencias médicas, daños</option>
                  <option>Derecho Tecnológico - Software, RGPD, propiedad intelectual</option>
                  <option>Derecho Bancario - Cláusulas abusivas, hipotecas</option>
                  <option>Otros - Especificar en la descripción</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Descripción del caso</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describa brevemente su situación legal..."
                ></textarea>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center mb-4">
                  <input 
                    type="checkbox" 
                    id="privacy-check"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy-check" className="ml-2 text-sm text-gray-600">
                    Acepto la <Link to="#" className="text-blue-600 hover:underline">política de privacidad</Link> y 
                    el tratamiento de mis datos para el asesoramiento jurídico solicitado. *
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Solicitar Consulta Gratuita
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  * Campos obligatorios. Sus datos están protegidos según la LOPD y RGPD
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;