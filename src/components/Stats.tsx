import { Euro, TrendingUp, Users, Award } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que nos avalan
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Más de dos décadas defendiendo los derechos de nuestros clientes con resultados excepcionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <Euro className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">127,5M€</div>
            <div className="text-blue-100 font-medium">Recuperados para clientes</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">98,7%</div>
            <div className="text-blue-100 font-medium">Tasa de éxito</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">15.247</div>
            <div className="text-blue-100 font-medium">Clientes atendidos</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-blue-100 font-medium">Años de experiencia</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-200 text-sm">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;