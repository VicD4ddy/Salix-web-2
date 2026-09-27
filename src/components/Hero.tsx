import React, { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: 1,
      title: 'Estrategia personalizada',
      desc: 'No usamos plantillas. Cada cliente tiene su propio plan basado en su sector y objetivos.',
      detail: 'Análisis minucioso del mapa de calor de tu competencia local en Palma o ámbito nacional.',
      icon: TrendingUp,
    },
    {
      num: 2,
      title: 'Resultados medibles',
      desc: 'Reportes claros cada mes. Sabes exactamente qué está funcionando y qué no.',
      detail: 'Dashboard en tiempo real de llamadas recibidas, clics en web y solicitudes de presupuesto.',
      icon: CheckCircle2,
    },
    {
      num: 3,
      title: 'Trato directo, sin intermediarios',
      desc: 'Hablas con quien hace el trabajo. Respuesta rápida y comunicación real.',
      detail: 'Canal directo de WhatsApp con tu consultor técnico asignado, sin tickets eternos.',
      icon: MessageSquare,
    },
  ];

  return (
    <section className="relative pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
      {/* Ambient Tech Hexagon Background from public/fondo.png */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-50 pointer-events-none z-0 mix-blend-multiply"
        style={{ 
          backgroundImage: "url('/fondo.png')",
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, transparent 100%)'
        }}
        aria-hidden="true" 
      />

      {/* Background Halftone & Floating Luxury Gradient Glows */}
      <motion.div 
        animate={{ 
          y: [0, -18, 0],
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.45, 0.35]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -right-20 -top-12 w-96 h-96 halftone-sphere pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 11, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 halftone-sphere pointer-events-none" 
        aria-hidden="true" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 14, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-[#5b21b6]/25 to-emerald-400/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column with Staggered Entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            

            {/* Massive High-Conversion Editorial Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-hero-mobile md:text-display-hero text-[#1b1a26] tracking-tight"
            >
              Domina <span className="text-[#5b21b6] inline-block">Google Maps.</span><br />
              Atrae clientes con <span className="text-[#5b21b6] inline-block">IA & SEO</span><br />
              en tu ciudad.
            </motion.h1>

            {/* Focused Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#4a4453] max-w-2xl leading-relaxed"
            >
              Posicionamos tu negocio en el <strong className="text-[#1b1a26] font-semibold">Top 3 de Google Maps</strong> y motores de Inteligencia Artificial (ChatGPT, Perplexity y Gemini) para multiplicar tus llamadas y presupuestos cada semana.
            </motion.p>

            {/* CTAs with Dynamic Hover and Tap Reactions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 16px 36px -6px rgba(91, 33, 182, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenBooking}
                  className="inline-flex justify-center items-center gap-2.5 bg-[#5b21b6] hover:bg-[#420093] text-white px-7 md:px-8 py-4 rounded-full font-bold text-base md:text-lg luminescent-glow cursor-pointer focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:ring-offset-2 focus-visible:outline-none transition-colors"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Agendar llamada estratégica</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: '#e9e6f7' }}
                  whileTap={{ scale: 0.98 }}
                  href="#planes"
                  className="inline-flex justify-center items-center gap-2 px-6 md:px-7 py-4 rounded-full bg-[#efecfc] text-[#420093] font-bold text-base md:text-lg transition-colors border border-[#ccc3d6]/30 group focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span>Ver planes y precios</span>
                  <span className="text-[#420093] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </motion.a>
              </div>

              {/* Friction-reducing micro-copy & quick audit link */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#4a4453] pl-1">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  15 min por videollamada • Sin compromiso
                </span>
                <span className="text-[#ccc3d6]" aria-hidden="true">•</span>
                <button
                  onClick={onOpenAudit}
                  className="text-[#5b21b6] hover:text-[#420093] font-semibold underline underline-offset-2 cursor-pointer flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:outline-none rounded-xs transition-colors hover:scale-[1.02]"
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>O haz una Auditoría Express gratuita en 30s</span>
                </button>
              </div>
            </motion.div>

            {/* Social Proof Indicator with Floating Avatars */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 flex flex-wrap items-center gap-6 border-t border-[#ccc3d6]/30 max-w-xl"
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf8ff] object-cover transition-transform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxJE05IsQxDGAO0Jr_DoIsoagRrzONeDamrnPe2lX4QWjTFH_RmE4nNjft4FDPfSFtM8_6alpLqDBmnqNQfAaiiKByA-_82NCO9XiVJXAiPtg4TGw1DIJU564CGF6gVwHaZYvfSSiROfPhSlqASSWi1tMtHvyFhHYXNd5wMi3nt130AMm_AHmA5UJ5n1M0-8F8IxqWUpRvr6P7gVsLfPlZkexym9Xv7pT0WcU0-ZXrNCdomLeXYuo4"
                  alt="Cliente Scalix de reformas"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <motion.img
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf8ff] object-cover transition-transform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJcRyOmDr5o-U_CMYIV8IFZjQJutmLAceho7YE4d8dUtbpzKqfAvsMFlYuys4a7T4hTllQwSnpmYo6ACy1wxZDAn0CUr-qnplovplyqu8zebN-ynW42CFL4dUzcJEuyTBwGKRA-dsVLLoZS8tkng9JD3zRK1dg9wzo_uIRm0x8VlaltE42iv4OV3IRx1pFs91Ei2YC9WpoaOkR9aPBDdpT0KaoHKiKGkST7JepXkjeEXgOEgwo78I"
                  alt="Cliente Scalix de clínica"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <motion.img
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf8ff] object-cover transition-transform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVEYrXgSoJCU7K1eWD-TofAOn9fy4Jfaf_VRwzpFnKuJOgrFQhTkqjAD7M27qQF8rk-F0bSMTsHfsTVvzeoNanFscpw_Ufs8BJ0g0REAXupDC-puEKrFwljhEIs0Ga4_pikxOYsGSmiwPbEGyaGxzBDpHACkmFhSreNGQBPCw4yOx0NYrVDiVt5o029vGtcY9SLdbYE-BeFHJMD_VkvphnCIRcDgDxrwqjFpFzrze4veBWB6u6Byoo"
                  alt="Cliente Scalix de asesoría"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#5b21b6] text-white text-xs font-bold ring-2 ring-[#fcf8ff]">
                  +50
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1b1a26] uppercase tracking-wide flex items-center gap-1.5">
                  <span>+50 Negocios Locales</span>
                  <span className="text-amber-500 font-extrabold" aria-label="5 estrellas">★★★★★</span>
                </p>
                <p className="text-xs text-[#4a4453]">
                  97% de retención y +140% de incremento medio en llamadas en Google Maps
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Visual Column: Interactive Animated Scalix Method Card */}
          <motion.div 
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative"
          >
            <motion.div 
              whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgba(66, 0, 147, 0.18)' }}
              role="region" 
              aria-label="Metodología Scalix" 
              className="relative rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-xl border border-[#420093]/15 transition-all duration-300"
            >
              
              {/* Badge pill top corner */}
              <div className="flex justify-between items-center mb-6">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#420093] text-white shadow-xs">
                  SCALIX METHOD
                </span>
                <span className="text-[#420093] text-xs font-bold flex items-center gap-1">
                  3 Pilares Clave <span className="text-sm" aria-hidden="true">⚡</span>
                </span>
              </div>

              {/* List of differentiators with Smooth Animated Transitions */}
              <div className="space-y-3" role="tablist" aria-label="Pilares del método Scalix">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <motion.div
                      key={pillar.num}
                      layout
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      aria-label={`Pilar ${pillar.num}: ${pillar.title}`}
                      onClick={() => setActivePillar(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActivePillar(idx);
                        }
                      }}
                      whileHover={{ scale: isActive ? 1 : 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`p-3.5 rounded-2xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:ring-offset-2 focus-visible:outline-none relative overflow-hidden ${
                        isActive
                          ? 'bg-[#f5f2ff] border border-[#5b21b6]/35 shadow-xs'
                          : 'hover:bg-slate-50/80 border border-transparent'
                      }`}
                    >
                      <div className="flex gap-3.5 relative z-10">
                        <div
                          className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs transition-colors ${
                            isActive
                              ? 'bg-[#5b21b6] text-white shadow-xs'
                              : 'bg-[#ebddff] text-[#420093]'
                          }`}
                        >
                          {pillar.num}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#5b21b6] text-sm md:text-base mb-0.5">
                            {pillar.title}
                          </h4>
                          <p className="text-xs md:text-sm text-[#4a4453] leading-relaxed">
                            {pillar.desc}
                          </p>
                          
                          <AnimatePresence>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, height: 0, y: -6 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -6 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-2.5 text-xs text-[#5b21b6] font-medium bg-white/95 p-2.5 rounded-xl border border-[#5b21b6]/15 shadow-2xs overflow-hidden"
                              >
                                💡 {pillar.detail}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom decorative tag */}
              <div className="mt-6 pt-4 border-t border-[#ccc3d6]/30 flex items-center justify-between text-xs text-[#4a4453]">
                <span className="font-semibold text-[#420093] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
                  Palma de Mallorca & España
                </span>
                <span className="font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                  ✓ Resultados verificados
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

