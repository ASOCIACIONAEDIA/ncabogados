import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, User, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'Derecho de Familia', path: '/servicios/derecho-familia' },
    { name: 'Derecho Laboral', path: '/servicios/derecho-laboral' },
    { name: 'Accidentes y Responsabilidad Civil', path: '/servicios/accidentes' },
    { name: 'Derecho de Software', path: '/servicios/derecho-software' },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gray-100 text-gray-700 text-xs border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex items-center space-x-6">
            <a href="tel:+34914567890" className="flex items-center space-x-2 hover:text-blue-900">
              <Phone className="h-4 w-4" />
              <span>91 456 78 90</span>
            </a>
            <a href="mailto:info@nicolascarrera.es" className="hidden sm:flex items-center space-x-2 hover:text-blue-900">
              <Mail className="h-4 w-4" />
              <span>info@nicolascarrera.es</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" className="font-medium hover:text-blue-900">Trabaja con nosotros</Link>
            <span className="text-gray-300">|</span>
            <Link to="#" className="flex items-center space-x-2 font-semibold text-blue-900 hover:text-blue-700">
              <User className="h-4 w-4" />
              <span>Área Cliente</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="bg-blue-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl group-hover:bg-orange-600 transition-colors duration-300">
              NC
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900 tracking-wide">NC ABOGADOS</h1>
              <p className="text-xs text-gray-500 -mt-1 tracking-wider">Por Nicolás Carrera</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Inicio
            </Link>
            
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
              >
                <span>Servicios</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/noticias" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/noticias') ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Noticias
            </Link>
            <Link 
              to="/preguntas-frecuentes" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/preguntas-frecuentes') ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Preguntas Frecuentes
            </Link>
            <Link 
              to="/contacto" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/contacto') ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Contacto
            </Link>
            
            <Link 
              to="/contacto" 
              className="bg-orange-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Calendar className="h-5 w-5" />
              <span>Agendar Cita</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <div className="space-y-2">
                <span className="font-medium text-gray-700">Servicios</span>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-600 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/noticias" 
                className="font-medium text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Noticias
              </Link>
              
              <Link 
                to="/preguntas-frecuentes" 
                className="font-medium text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Preguntas Frecuentes
              </Link>

              <Link 
                to="/contacto" 
                className="font-medium text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              
              <Link 
                to="/contacto" 
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 inline-flex text-center items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;