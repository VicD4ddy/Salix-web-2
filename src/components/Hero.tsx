import React, { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, MessageSquare } from 'lucide-react';

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
      {/* Background Halftone Accent Spheres */}
      <div className="absolute -right-20 -top-12 w-96 h-96 halftone-sphere opacity-40 pointer-events-none hidden md:block"></div>
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 halftone-sphere opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Eyebrow Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5b21b6] text-white text-xs font-extrabold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                POR QUÉ SCALIX
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#e9e6f7] text-[#420093] font-semibold text-xs md:text-sm">
                Palma de Mallorca & Global
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Optimizado para Google AI Overviews & ChatGPT
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="text-display-hero-mobile md:text-display-hero text-[#1b1a26] tracking-tight">
              Tu negocio.<br />
              Su <span className="text-[#5b21b6]">próximo</span><br />
              <span className="text-[#5b21b6]">nivel.</span>
            </h1>

            {/* Focused Subtitle */}
            <p className="text-lg md:text-xl text-[#4a4453] max-w-2xl leading-relaxed">
              Agencia de marketing digital especializada en posicionamiento en Google Maps, SEO, GEO (búsqueda con Inteligencia Artificial) y embudos de venta optimizados para convertir.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex justify-center items-center gap-2.5 bg-[#5b21b6] hover:bg-[#420093] text-white px-7 md:px-8 py-4 rounded-full font-bold text-base md:text-lg luminescent-glow active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar llamada</span>
              </button>

              <a
                href="#planes"
                className="inline-flex justify-center items-center gap-2 px-6 md:px-7 py-4 rounded-full bg-[#efecfc] hover:bg-[#e9e6f7] text-[#420093] font-bold text-base md:text-lg transition-colors border border-[#ccc3d6]/30 group"
              >
                <span>Ver planes y precios</span>
                <span className="text-[#420093] transition-transform group-hover:translate-x-1">→</span>
              </a>

              <button
                onClick={onOpenAudit}
                className="inline-flex justify-center items-center gap-2 px-5 py-4 rounded-full bg-white hover:bg-slate-50 text-[#1b1a26] font-semibold text-sm border border-[#ccc3d6]/50 shadow-xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#5b21b6]" />
                <span>Auditoría Express</span>
              </button>
            </div>

            {/* Social Proof Indicator / Micro trust bar */}
            <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-[#ccc3d6]/30 max-w-xl">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf8ff] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxJE05IsQxDGAO0Jr_DoIsoagRrzONeDamrnPe2lX4QWjTFH_RmE4nNjft4FDPfSFtM8_6alpLqDBmnqNQfAaiiKByA-_82NCO9XiVJXAiPtg4TGw1DIJU564CGF6gVwHaZYvfSSiROfPhSlqASSWi1tMtHvyFhHYXNd5wMi3nt130AMm_AHmA5UJ5n1M0-8F8IxqWUpRvr6P7gVsLfPlZkexym9Xv7pT0WcU0-ZXrNCdomLeXYuo4"
                  alt="Cliente Scalix"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf8ff] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJcRyOmDr5o-U_CMYIV8IFZjQJutmLAceho7YE4d8dUtbpzKqfAvsMFlYuys4a7T4hTllQwSnpmYo6ACy1wxZDAn0CUr-qnplovplyqu8zebN-ynW42CFL4dUzcJEuyTBwGKRA-dsVLLoZS8tkng9JD3zRK1dg9wzo_uIRm0x8VlaltE42iv4OV3IRx1pFs91Ei2YC9WpoaOkR9aPBDdpT0KaoHKiKGkST7JepXkjeEXgOEgwo78I"
                  alt="Cliente Scalix"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fcf8ff] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVEYrXgSoJCU7K1eWD-TofAOn9fy4Jfaf_VRwzpFnKuJOgrFQhTkqjAD7M27qQF8rk-F0bSMTsHfsTVvzeoNanFscpw_Ufs8BJ0g0REAXupDC-puEKrFwljhEIs0Ga4_pikxOYsGSmiwPbEGyaGxzBDpHACkmFhSreNGQBPCw4yOx0NYrVDiVt5o029vGtcY9SLdbYE-BeFHJMD_VkvphnCIRcDgDxrwqjFpFzrze4veBWB6u6Byoo"
                  alt="Cliente Scalix"
                />
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#5b21b6] text-white text-xs font-bold ring-2 ring-[#fcf8ff]">
                  +50
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1b1a26] uppercase tracking-wide">
                  +50 CLIENTES RECURRENTES
                </p>
                <p className="text-xs text-[#4a4453]">
                  97% de retención y crecimiento sostenido en Google Maps & Orgánico
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Column: Scalix Method Card */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl bg-white p-6 md:p-8 shadow-xl border border-[#420093]/10 transition-transform hover:-translate-y-1 duration-300">
              
              {/* Badge pill top corner */}
              <div className="flex justify-between items-center mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#420093] text-white">
                  SCALIX METHOD
                </span>
                <span className="text-[#420093] text-xs font-bold flex items-center gap-1">
                  3 Pilares Clave <span className="text-sm">⚡</span>
                </span>
              </div>

              {/* List of differentiators */}
              <div className="space-y-5">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <div
                      key={pillar.num}
                      onClick={() => setActivePillar(idx)}
                      className={`p-3 rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#f5f2ff] border border-[#5b21b6]/30 shadow-xs'
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="flex gap-3.5">
                        <div
                          className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs transition-colors ${
                            isActive
                              ? 'bg-[#5b21b6] text-white'
                              : 'bg-[#ebddff] text-[#420093]'
                          }`}
                        >
                          {pillar.num}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#5b21b6] text-sm md:text-base mb-0.5">
                            {pillar.title}
                          </h4>
                          <p className="text-xs md:text-sm text-[#4a4453] leading-relaxed">
                            {pillar.desc}
                          </p>
                          {isActive && (
                            <p className="mt-2 text-xs text-[#5b21b6] font-medium bg-white/80 p-2 rounded-lg border border-[#5b21b6]/15 animate-in fade-in duration-200">
                              💡 {pillar.detail}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom decorative tag */}
              <div className="mt-6 pt-4 border-t border-[#ccc3d6]/30 flex items-center justify-between text-xs text-[#4a4453]">
                <span className="font-semibold text-[#420093] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#420093]"></span>
                  Palma de Mallorca
                </span>
                <span className="font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ✓ Resultados verificados
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
