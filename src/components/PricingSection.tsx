import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Plan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: Plan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans: Plan[] = [
    {
      id: 'plan-1',
      name: 'PLAN 1',
      badge: 'Esencial',
      priceMonthly: 49,
      priceAnnual: 39,
      description:
        'Ideal para negocios que necesitan una presencia web moderna, limpia y libre de preocupaciones técnicas.',
      features: [
        { included: true, text: 'Página web optimizada y responsive' },
        { included: true, text: 'Hosting de alta velocidad incluido' },
        { included: true, text: 'Dominio propio y certificado SSL' },
        { included: true, text: 'Mantenimiento técnico básico' },
        { included: false, text: 'Optimización SEO recurrente' },
        { included: false, text: 'GEO (Posicionamiento con IA)' },
      ],
    },
    {
      id: 'plan-2',
      name: 'PLAN 2',
      badge: 'Crecimiento Local',
      popular: true,
      highlightText: 'MÁS POPULAR · RECOMENDADO',
      priceMonthly: 82,
      priceAnnual: 69,
      description:
        'La combinación estratégica para empezar a captar llamadas y posicionar en mapas y motores de IA locales.',
      features: [
        { included: true, text: 'Página web profesional de alta conversión' },
        { included: true, text: 'Hosting y Dominio incluido' },
        { included: true, text: 'Mantenimiento técnico continuo' },
        { included: true, text: 'SEO básico local y keywords principales' },
        { included: true, text: 'GEO (Aparición en búsquedas con Inteligencia Artificial)' },
        { included: true, text: 'Optimización inicial Google Business Profile' },
      ],
    },
    {
      id: 'plan-3',
      name: 'PLAN 3',
      badge: 'Dominio de Sector',
      priceMonthly: 99,
      priceAnnual: 84,
      description:
        'Para empresas que buscan liderar su zona geográfica y competir activamente por el primer puesto absoluto.',
      features: [
        { included: true, text: 'Página web profesional a medida' },
        { included: true, text: 'Hosting premium ultrarrápido y Dominio' },
        { included: true, text: 'SEO técnico recurrente y arquitectura avanzada' },
        { included: true, text: 'GEO avanzado (ChatGPT, Perplexity & Gemini)' },
        { included: true, text: 'Posicionamiento avanzado en Google Maps' },
        { included: true, text: 'Reportes mensuales con métricas de conversión' },
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="planes">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-200/25 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-[#5b21b6] text-white font-bold text-xs uppercase tracking-wider mb-4 inline-block shadow-sm">
            PLANES CLAROS Y TRANSPARENTES
          </span>
          <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] mt-2 mb-4 tracking-tight">
            Inversión ajustada a tu etapa de crecimiento
          </h2>
          <p className="text-base md:text-xl text-[#4a4453] leading-relaxed">
            Sin letra pequeña, sin permanencias forzosas. Servicios reales con impacto directo en facturación.
          </p>

          {/* Billing Switch with Animated layoutId pill */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#efecfc] border border-[#ccc3d6]/50 relative">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-colors cursor-pointer ${
                billingCycle === 'monthly' ? 'text-[#420093]' : 'text-[#4a4453] hover:text-[#1b1a26]'
              }`}
            >
              {billingCycle === 'monthly' && (
                <motion.div
                  layoutId="activeBillingPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              Pago Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`relative z-10 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual' ? 'text-white' : 'text-[#4a4453] hover:text-[#1b1a26]'
              }`}
            >
              {billingCycle === 'annual' && (
                <motion.div
                  layoutId="activeBillingPill"
                  className="absolute inset-0 bg-[#5b21b6] rounded-full shadow-sm -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span>Pago Anual</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase transition-colors ${
                billingCycle === 'annual' ? 'bg-white/20 text-white' : 'bg-emerald-500 text-white'
              }`}>
                -18% dto.
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const currentPrice = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            if (plan.popular) {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="bg-white rounded-2xl p-8 border-2 border-[#5b21b6] shadow-xl flex flex-col justify-between relative lg:-my-2"
                >
                  {/* Recommendation badge with micro-pulse */}
                  <motion.div 
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#5b21b6] text-white text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {plan.highlightText}
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-center mb-4 mt-2">
                      <span className="text-xs font-bold text-[#5b21b6] uppercase tracking-wider">
                        {plan.name}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#ebddff] text-[#420093] font-semibold text-xs">
                        {plan.badge}
                      </span>
                    </div>

                    <div className="mb-6 flex items-baseline gap-1 h-16">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrice}
                          initial={{ opacity: 0, y: -12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.25 }}
                          className="text-5xl md:text-6xl font-extrabold text-[#5b21b6]"
                        >
                          {currentPrice}€
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-sm font-medium text-[#4a4453]">/ mes</span>
                      {billingCycle === 'annual' && (
                        <span className="text-xs text-emerald-600 font-bold ml-2">facturado anualmente</span>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-[#4a4453] mb-6 pb-6 border-b border-[#ccc3d6]/30 leading-relaxed">
                      {plan.description}
                    </p>

                    <ul className="space-y-3.5 text-xs md:text-sm text-[#1b1a26] mb-8">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#5b21b6] font-bold text-base leading-none">✓</span>
                          <span>{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectPlan(plan)}
                    className="w-full text-center py-4 px-6 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white transition-colors font-bold text-sm md:text-base luminescent-glow cursor-pointer"
                  >
                    Agendar llamada
                  </motion.button>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-8 border border-[#ccc3d6]/40 shadow-xs flex flex-col justify-between hover:border-[#5b21b6]/40 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#4a4453] uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#efecfc] text-[#1b1a26] text-xs font-medium">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1 h-16">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrice}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25 }}
                        className="text-5xl md:text-6xl font-extrabold text-[#1b1a26]"
                      >
                        {currentPrice}€
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm font-medium text-[#4a4453]">/ mes</span>
                    {billingCycle === 'annual' && (
                      <span className="text-xs text-emerald-600 font-bold ml-2">facturado anualmente</span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-[#4a4453] mb-6 pb-6 border-b border-[#ccc3d6]/30 leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-3.5 text-xs md:text-sm text-[#1b1a26] mb-8">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 ${
                          feat.included ? 'text-[#1b1a26]' : 'text-[#7b7485] line-through'
                        }`}
                      >
                        {feat.included ? (
                          <span className="text-[#5b21b6] font-bold text-base leading-none">✓</span>
                        ) : (
                          <span className="text-[#7b7485] font-bold text-sm leading-none">✕</span>
                        )}
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full text-center py-3.5 px-6 rounded-full font-bold text-sm md:text-base transition-colors cursor-pointer ${
                    plan.id === 'plan-1'
                      ? 'border-2 border-[#5b21b6] text-[#5b21b6] hover:bg-[#5b21b6] hover:text-white'
                      : 'bg-[#efecfc] hover:bg-[#e9e6f7] text-[#420093] border border-[#ccc3d6]/40'
                  }`}
                >
                  {plan.id === 'plan-1' ? 'Elegir Plan' : 'Agendar llamada'}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee micro banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-xs md:text-sm text-[#4a4453] flex items-center justify-center gap-2"
        >
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Sin contratos de permanencia obligatoria. Te quedas porque ves resultados reales cada mes.</span>
        </motion.div>

      </div>
    </section>
  );
};
