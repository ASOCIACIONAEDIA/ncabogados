import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Nueva Ley de Trabajo a Distancia: Implicaciones para Empresas y Trabajadores',
      excerpt: 'Analizamos los cambios más importantes de la nueva regulación del teletrabajo y sus efectos en las relaciones laborales.',
      date: '15 de Enero, 2025',
      author: 'Nicolas Carrera',
      readTime: '5 min',
      category: 'Derecho Laboral',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Reforma del Código Civil: Nuevos Procedimientos de Divorcio Express',
      excerpt: 'Las modificaciones legislativas permiten acelerar los procesos de divorcio consensuado reduciendo los plazos a la mitad.',
      date: '10 de Enero, 2025',
      author: 'María García',
      readTime: '7 min',
      category: 'Derecho de Familia',
      image: 'https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'RGPD 2025: Nuevas Sanciones por Mal Uso de Datos en Software',
      excerpt: 'La Agencia de Protección de Datos endurece las multas para empresas tecnológicas que no cumplan con la normativa.',
      date: '8 de Enero, 2025',
      author: 'Carlos Mendoza',
      readTime: '6 min',
      category: 'Derecho de Software',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Sentencias Recientes en Accidentes de Tráfico: Criterios de Indemnización',
      excerpt: 'El Tribunal Supremo establece nuevos baremos para el cálculo de indemnizaciones por lesiones permanentes.',
      date: '5 de Enero, 2025',
      author: 'Ana Rodríguez',
      readTime: '8 min',
      category: 'Responsabilidad Civil',
      image: 'https://images.pexels.com/photos/5668391/pexels-photo-5668391.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Despidos Colectivos Post-COVID: Nuevas Regulaciones y Protecciones',
      excerpt: 'Las empresas deben cumplir requisitos más estrictos para justificar despidos colectivos tras la pandemia.',
      date: '2 de Enero, 2025',
      author: 'Nicolas Carrera',
      readTime: '9 min',
      category: 'Derecho Laboral',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Mediación Familiar: Alternativa Eficaz a los Procesos Judiciales',
      excerpt: 'La mediación se consolida como la opción preferida para resolver conflictos familiares de forma amistosa y económica.',
      date: '28 de Diciembre, 2024',
      author: 'Isabel López',
      readTime: '4 min',
      category: 'Derecho de Familia',
      image: 'https://images.pexels.com/photos/5668802/pexels-photo-5668802.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Derecho Laboral': 'bg-blue-100 text-blue-800',
      'Derecho de Familia': 'bg-red-100 text-red-800',
      'Derecho de Software': 'bg-green-100 text-green-800',
      'Responsabilidad Civil': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Noticias Jurídicas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manténgase informado sobre las últimas novedades legislativas, 
            jurisprudencia y análisis legal de nuestros especialistas.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(news[0].category)}`}>
                    {news[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {news[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{news[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{news[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{news[0].readTime}</span>
                  </div>
                </div>
                <Link 
                  to="#"
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors duration-200"
                >
                  Leer artículo completo
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="#"
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors duration-200 text-sm"
                >
                  Leer más
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-900 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Suscríbase a Nuestro Boletín Jurídico</h3>
          <p className="text-blue-100 mb-6">
            Reciba las últimas novedades legislativas y análisis jurídicos directamente en su bandeja de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Su dirección de email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;