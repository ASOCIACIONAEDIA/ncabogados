import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';

export function AIChatSection() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, soy su asistente legal IA. ¿En qué puedo ayudarle hoy? Por favor, describa brevemente su consulta.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Mock bot response after a delay
    setTimeout(() => {
      const botResponse = { from: 'bot', text: 'Gracias por su consulta. Estoy analizando su caso... Un abogado especialista se pondrá en contacto con usted en breve para ofrecerle una consulta gratuita y sin compromiso sobre los próximos pasos.' };
      setIsTyping(false);
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 2000);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-blue-100 text-blue-900 p-3 rounded-full mb-4">
          <Bot className="h-10 w-10" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hable con Nuestro Asistente Legal IA
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Obtenga una primera orientación sobre su caso de forma inmediata y confidencial. Nuestro asistente está disponible 24/7 para ayudarle.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-2xl p-6 text-left max-w-2xl mx-auto">
          <div className="h-80 overflow-y-auto mb-4 pr-2 space-y-5">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'bot' && (
                  <div className="bg-blue-900 text-white h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={20} />
                  </div>
                )}
                <div className={`max-w-xs md:max-w-md p-3 rounded-2xl shadow-sm ${msg.from === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                 {msg.from === 'user' && (
                  <div className="bg-gray-300 text-gray-700 h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={20} />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
                <div className="flex items-start gap-3 justify-start">
                    <div className="bg-blue-900 text-white h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={20} />
                    </div>
                    <div className="max-w-xs md:max-w-md p-3 rounded-2xl shadow-sm bg-gray-200 text-gray-800 rounded-bl-none flex items-center space-x-1">
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-0"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                    </div>
                </div>
            )}
          </div>
          <div className="flex items-center border-t border-gray-200 pt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escriba su consulta aquí..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
            />
            <button
              onClick={handleSend}
              className="ml-4 bg-blue-900 text-white p-3 rounded-full hover:bg-orange-600 transition-colors duration-200 flex-shrink-0 shadow-lg transform hover:scale-105"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}