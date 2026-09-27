import React from 'react';
import { Search, Wrench, Rocket, RefreshCw } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Analizamos',
      icon: Search,
      desc: 'Auditamos tu negocio, tus competidores en el área y las palabras clave exactas que tus clientes potenciales utilizan para comprar.',
      timeline: 'Semana 1',
    },
    {
      num: '02',
      title: 'Optimizamos',
      icon: Wrench,
      desc: 'Diseñamos o perfeccionamos tu web para carga ultra rápida y adecuamos tu ficha de Google Business con datos técnicos y consistencia NAP.',
      timeline: 'Semana 2 - 3',
    },
    {
      num: '03',
      title: 'Posicionamos',
      icon: Rocket,
      desc: 'Aplicamos estrategias GEO y SEO local continuo para escalar al Top 3 y que la Inteligencia Artificial recomiende tu negocio como solución.',
      timeline: 'Semana 4 en adelante',
    },
    {
      num: '04',
      title: 'Mejoramos',
      icon: RefreshCw,
      desc: 'Revisamos datos mensuales, ajustamos la estrategia ante cambios de algoritmo y optimizamos la conversión de llamadas en ventas reales.',
      timeline: 'Recurrente cada mes',
    },
  ];

  return (
    <section className="py-20 bg-[#f5f2ff]/50 border-y border-[#ccc3d6]/30" id="proceso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#e9e6f7] text-[#420093] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            CÓMO TRABAJAMOS
          </span>
          <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] tracking-tight mb-3">
            Un proceso claro en 4 fases
          </h2>
          <p className="text-base md:text-lg text-[#4a4453]">
            Sin rodeos ni pérdidas de tiempo. Nos integramos como tu partner técnico directo.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white p-7 rounded-2xl border border-[#ccc3d6]/30 shadow-xs relative flex flex-col justify-between hover:shadow-md hover:border-[#5b21b6]/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#5b21b6] text-white flex items-center justify-center font-extrabold text-base shadow-xs">
                      {step.num}
                    </div>
                    <span className="text-[11px] font-bold text-[#5b21b6] bg-[#ebddff] px-2.5 py-1 rounded-full uppercase">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#5b21b6] mb-2 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#5b21b6]" />
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4a4453] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#ccc3d6]/20 flex items-center justify-between text-xs text-[#7b7485]">
                  <span>Fase {step.num}</span>
                  <span className="text-[#420093] font-bold">Scalix Method →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
