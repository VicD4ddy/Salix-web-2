import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: '¿Qué incluye cada plan y qué permanencia tengo?',
      answer:
        'Cada plan incluye alojamiento web ultra rápido, dominio propio, mantenimiento técnico preventivo y la capa de visibilidad correspondiente (desde web informativa hasta SEO y GEO avanzado). No exigimos permanencias abusivas; confiamos en los resultados mensuales para que decidas seguir con nosotros.',
    },
    {
      id: 'faq-2',
      question: '¿Qué diferencia real hay entre SEO y GEO?',
      answer:
        'El SEO tradicional optimiza tu presencia para la lista de enlaces azules de Google. El GEO (Generative Engine Optimization) optimiza la entidad y autoridad de tu empresa para que los motores de Inteligencia Artificial (ChatGPT, Perplexity, Gemini, Google SGE) citen tu negocio como la opción recomendada al usuario que hace una pregunta conversacional.',
    },
    {
      id: 'faq-3',
      question: '¿Trabajáis principalmente con negocios locales?',
      answer:
        'Nacimos en Palma de Mallorca con un foco prioritario en comercio local, clínicas, despachos profesionales y empresas de servicios, pero actualmente gestionamos posicionamiento y estrategias digitales para empresas en toda España y a nivel internacional.',
    },
    {
      id: 'faq-4',
      question: '¿El dominio y hosting están incluidos en el precio mensual?',
      answer:
        'Sí, totalmente. Nos encargamos de la gestión del hosting especializado, certificados SSL de seguridad y el dominio. Todo unificado en una única cuota sin sorpresas a final de año.',
    },
    {
      id: 'faq-5',
      question: '¿Qué plan necesita mi negocio exactamente?',
      answer:
        'Si solo necesitas presencia digital profesional y que te encuentren al buscar tu nombre, el Plan 1 (49€) es suficiente. Si compites en una ciudad o sector con demanda activa donde quieres ganar clientes cada mes a tus rivales directos, recomendamos el Plan 2 (82€) o el Plan 3 (99€). En una breve llamada de 10 minutos te indicamos exactamente el idóneo.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-[#e9e6f7] text-[#420093] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            DUDAS HABITUALES
          </span>
          <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] tracking-tight mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-base md:text-lg text-[#4a4453]">
            Claridad absoluta antes de dar el paso.
          </p>

          {/* Quick Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#7b7485] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar respuesta (ej. permanencia, GEO, dominio)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#ccc3d6]/60 text-xs md:text-sm focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20 outline-hidden transition-all shadow-xs"
            />
          </div>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`bg-white rounded-2xl border transition-colors shadow-xs overflow-hidden ${
                      isOpen ? 'border-[#5b21b6]/60 ring-2 ring-[#5b21b6]/10' : 'border-[#ccc3d6]/40 hover:border-[#5b21b6]/30'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? '' : faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between cursor-pointer focus:outline-hidden group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-bold text-base md:text-lg text-[#1b1a26] pr-4 group-hover:text-[#5b21b6] transition-colors">
                        {faq.question}
                      </h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#ebddff] text-[#420093]' : 'bg-[#efecfc] text-[#420093] group-hover:bg-[#ebddff]'
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-sm md:text-base text-[#4a4453] leading-relaxed border-t border-[#ccc3d6]/20 pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-8 text-[#7b7485] text-sm"
              >
                No se encontraron respuestas para "{searchQuery}".{' '}
                <a
                  href="https://wa.me/34640295743?text=Hola%20Scalix,%20tengo%20una%20duda%20que%20no%20aparece%20en%20las%20FAQ."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#25D366] font-bold hover:underline"
                >
                  Contáctanos directamente por WhatsApp aquí
                </a>.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
