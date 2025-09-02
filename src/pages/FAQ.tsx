import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-blue-900"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-6 w-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: '¿Cuál es el coste de la primera consulta?',
      answer: 'La primera consulta en nuestro despacho es completamente gratuita y sin compromiso. Nos permite evaluar la viabilidad de su caso, explicarle el procedimiento legal y ofrecerle un presupuesto cerrado y detallado.',
    },
    {
      question: '¿Qué tipo de casos manejan principalmente?',
      answer: 'Estamos especializados en Derecho de Familia, Derecho Laboral, Accidentes y Responsabilidad Civil, y Derecho Tecnológico. Dentro de estas áreas, manejamos desde divorcios y custodias hasta despidos, reclamaciones por accidentes y protección de software.',
    },
    {
      question: '¿Cómo se mantienen los clientes informados sobre su caso?',
      answer: 'La comunicación es clave. Asignamos un abogado personal a su caso que le mantendrá informado proactivamente. Además, tiene acceso a nuestra "Área Cliente" online 24/7 para ver el estado de su expediente, documentos y próximos pasos.',
    },
    {
      question: '¿Qué significa "sin honorarios hasta ganar"?',
      answer: 'En casos de reclamaciones por indemnización (como accidentes o negligencias), trabajamos a porcentaje de éxito. Esto significa que usted no paga nuestros honorarios si no ganamos el caso. Solo cobramos un porcentaje del monto que usted recupere.',
    },
    {
      question: '¿Cuánto tiempo puede durar mi proceso judicial?',
      answer: 'La duración varía mucho según la complejidad del caso y la carga de trabajo de los juzgados. Sin embargo, gracias a nuestra experiencia y optimización de procesos, buscamos siempre la resolución más rápida posible. En la primera consulta, le daremos una estimación de plazos basada en casos similares.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4 text-orange-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold">Preguntas Frecuentes</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Resolvemos sus dudas más comunes sobre nuestros servicios y los procedimientos legales.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿No encuentra su pregunta?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Nuestro equipo de expertos está listo para responder cualquier otra duda que tenga. 
                Contáctenos directamente para una atención personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contacto" className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Enviar una consulta
                </Link>
                <a href="tel:+34914567890" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar ahora
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;