import React from 'react';
import { Shield, Code, FileText, CheckCircle, Phone, ArrowRight, BookOpen, Scale, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareLaw = () => {
  const keyServices = [
    {
      icon: <Shield size={32} className="text-orange-500" />,
      title: 'Propiedad Intelectual de Software',
      description: 'Protección integral de su código fuente, algoritmos y bases de datos mediante derechos de autor y patentes de software.'
    },
    {
      icon: <FileText size={32} className="text-orange-500" />,
      title: 'Contratos Tecnológicos y SaaS',
      description: 'Redacción y negociación de contratos de licencia (EULA), desarrollo, SaaS, y acuerdos de nivel de servicio (SLA).'
    },
    {
      icon: <Code size={32} className="text-orange-500" />,
      title: 'Cumplimiento RGPD y LOPD',
      description: 'Auditorías de cumplimiento, servicio de DPO externo y defensa ante la AEPD para garantizar su adecuación normativa.'
    },
    {
      icon: <Scale size={32} className="text-orange-500" />,
      title: 'Litigios Tecnológicos',
      description: 'Representación legal en disputas sobre propiedad intelectual, competencia desleal y ciberdelitos.'
    }
  ];
  
  const faqs = [
    {
      question: '¿Puedo patentar mi software en España?',
      answer: 'Aunque el software como tal no es patentable, sí lo son las invenciones implementadas por ordenador que resuelven un problema técnico. Analizamos su caso para encontrar la mejor vía de protección.'
    },
    {
      question: '¿Qué es un contrato de Escrow de código fuente?',
      answer: 'Es un acuerdo de depósito notarial del código fuente que garantiza al cliente el acceso al mismo si el desarrollador desaparece, asegurando la continuidad de su negocio.'
    },
    {
      question: '¿Mi startup necesita un Delegado de Protección de Datos (DPO)?',
      answer: 'Depende del volumen y tipo de datos que maneje. Realizamos un análisis de viabilidad para determinar si su empresa está obligada a designar un DPO y le ofrecemos soluciones flexibles.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Derecho Tecnológico y Propiedad Intelectual</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Asesoramiento legal de vanguardia para proteger la innovación en el ecosistema digital.
          </p>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Servicios Especializados</h2>
            <p className="mt-4 text-lg text-gray-600">Ofrecemos una cobertura legal completa para empresas tecnológicas, startups y desarrolladores.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Confiar en NC Abogados?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Entendemos el lenguaje de los desarrolladores y la velocidad del sector tecnológico. No solo somos abogados, somos sus aliados estratégicos en el mundo digital.</p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-800">Experiencia Pionera</h4>
                            <p className="text-gray-600">Más de 15 años de experiencia y 300+ empresas tecnológicas asesoradas con éxito.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-800">Enfoque Preventivo</h4>
                            <p className="text-gray-600">Nos anticipamos a los riesgos legales para que usted pueda centrarse en innovar.</p>
                        </div>
                    </li>
                     <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-800">Respuesta Rápida en Ciberincidentes</h4>
                            <p className="text-gray-600">Protocolos de actuación legal en menos de 48 horas ante brechas de seguridad.</p>
                        </div>
                    </li>
                </ul>
            </div>
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Análisis de datos" className="rounded-xl shadow-lg w-full h-full object-cover"/>
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contrato tecnológico" className="rounded-xl shadow-lg w-full h-full object-cover"/>
             </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <BookOpen className="h-10 w-10 mx-auto text-blue-900 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900">Preguntas Clave</h2>
            </div>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-semibold text-gray-800 text-lg mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Proteja su Innovación Hoy
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            No deje su activo más importante al descubierto. Agende una consulta gratuita con nuestros especialistas.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-blue-900 bg-orange-500 hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-lg"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Solicitar Consulta Especializada
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareLaw;