import { Scale, Phone, Mail, MapPin, Clock, Award, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Nicolas Carrera</h3>
                <p className="text-sm text-gray-400">Abogados</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Despacho jurídico de referencia con más de 25 años de experiencia. 
              Especializados en la defensa de sus derechos con resultados garantizados.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-400">Colegio de Abogados de Madrid</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-400">15.247+ clientes atendidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-400">98,7% casos ganados</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Áreas de Práctica</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios/derecho-familia" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Derecho de Familia</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios/derecho-laboral" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Derecho Laboral</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios/accidentes" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Accidentes y Responsabilidad</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios/derecho-software" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Derecho Tecnológico</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium">
                  → Consulta gratuita
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <span className="text-gray-300 text-sm font-medium">+34 91 456 78 90</span>
                  <p className="text-gray-400 text-xs">Línea directa 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <span className="text-gray-300 text-sm font-medium">info@nicolascarrera.es</span>
                  <p className="text-gray-400 text-xs">Respuesta en 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <span className="text-gray-300 text-sm font-medium">
                    Paseo de la Castellana 95, 15º<br />
                    28046 Madrid
                  </span>
                  <p className="text-gray-400 text-xs mt-1">Metro: Santiago Bernabéu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Emergency */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios y Urgencias</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium mb-2">Horario de oficina:</div>
                  <p>Lunes - Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                  <div className="mt-3 p-2 bg-red-900/30 rounded border border-red-800">
                    <p className="text-red-300 font-medium text-xs">🚨 URGENCIAS 24/7</p>
                    <p className="text-red-200 text-xs">+34 600 123 456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 Nicolás Carrera Abogados S.L. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs">
                Colegio de Abogados de Madrid nº 45.789 | NIF: B-12345678<br />
                Registro Mercantil de Madrid, Tomo 25.123, Folio 89, Hoja M-456789
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Aviso Legal
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Cookies
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Mapa del Sitio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;