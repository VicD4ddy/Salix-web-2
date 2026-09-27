import React, { useState } from 'react';
import { MapPin, Bot, CheckCircle2, TrendingUp, Phone, ArrowUpRight, X } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<{
    title: string;
    category: string;
    metric: string;
    summary: string;
    details: string[];
    image: string;
  } | null>(null);

  const cases = [
    {
      id: 'reformas',
      type: 'maps',
      badge: 'Google Maps Top 3',
      icon: MapPin,
      badgeColor: 'text-[#420093]',
      title: 'Sector Reformas & Servicios',
      metric: '+142 llamadas/mes',
      status: 'Verificado',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCjNRJgVMAmj0n0SRLebEHjutbX2YxuT36DVYAC5QOB-quBuS2Unwi8U86if7gaxmZB_GOHM9CavjeqMb-0HXVHTANnKJkmVyVXNgEx4-lXvMuTpzGi4fISCxI2w9leGrLBTZuUhfbfkK_vtWLI2PLpV1ahKxr4e-GNJq-ov0-a7JR0z8LP29XLdvDPvJNLkbcjCMMSV3heDOZR6mefqqQwMSYFKD6KiURlQ5YjOfXHhYY68GM8YiGX',
      summary: 'De posición #14 a posición #1 local en Palma en 65 días.',
      details: [
        'Estandarización de datos NAP en más de 25 directorios sectoriales españoles.',
        'Geolocalización EXIF de imágenes de obras reales en Palma de Mallorca y alrededores.',
        'Protocolo de reseñas con palabras clave secundarias ("reformas de baños", "reformas integrales").',
        'Incremento de llamadas registradas en Google Business de 18 a 160 al mes.',
      ],
    },
    {
      id: 'clinica',
      type: 'geo',
      badge: 'GEO Search Citations',
      icon: Bot,
      badgeColor: 'text-[#4648d4]',
      title: 'Clínica & Salud Privada',
      metric: 'Tráfico de alta intención',
      status: 'Verificado',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcQ-t820knk9jJHbZn3LJVoTN_i5CawcfAqfa4Zr0VNVloBvR9GBEdDt7B3AR179h9gbv7b5YBgcVoX3Wd1BWBA_P8eBfErqp7_PNln7NEX1LKWuvUaSnhQkeUdWnovu0I2LfHxqIsFXRqbhihoTLgSf5YyWteTzq2PvEFXsp-n8WUg3WdFUiUqwYF5h3yHT1zV7pBmrkYGaIiZjtn44XGekGmC1Jq62mFlD2iXMHSOQjK8pYPNt0q',
      summary: 'Recomendación número 1 citada directamente por Perplexity y ChatGPT.',
      details: [
        'Implementación de Schema.org MedicalClinic y Physician con relaciones estructuradas.',
        'Generación de contenido de preguntas frecuentes con lenguaje natural coincidente con prompts de usuarios.',
        'Menciones de autoridad y coherencia de entidad en bases de conocimiento indexadas por modelos LLM.',
        'El 34% de las nuevas citas de primera visita ahora declaran haber conocido la clínica vía ChatGPT o Gemini.',
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Metrics and Title */}
          <div className="lg:col-span-5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#5b21b6] text-white font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              CONFIANZA Y MÉTRICAS
            </span>
            <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] tracking-tight mb-6">
              Más de 50 negocios escalando en Google.
            </h2>
            <p className="text-base md:text-lg text-[#4a4453] leading-relaxed mb-8">
              Nuestros clientes no solo obtienen una web estética: consiguen llamadas directas, visitas a su establecimiento y solicitudes de presupuesto semanales.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 rounded-2xl bg-[#e9e6f7]/40 border border-[#ccc3d6]/30">
                <div className="text-3xl md:text-4xl text-[#420093] font-extrabold tracking-tight">
                  +310%
                </div>
                <div className="text-xs md:text-sm text-[#4a4453] mt-2 font-medium">
                  Aumento medio en llamadas de Google Maps
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-[#e9e6f7]/40 border border-[#ccc3d6]/30">
                <div className="text-3xl md:text-4xl text-[#420093] font-extrabold tracking-tight">
                  &lt; 1.2s
                </div>
                <div className="text-xs md:text-sm text-[#4a4453] mt-2 font-medium">
                  Tiempo de carga promedio web
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Proof Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.id}
                  onClick={() =>
                    setSelectedCase({
                      title: c.title,
                      category: c.badge,
                      metric: c.metric,
                      summary: c.summary,
                      details: c.details,
                      image: c.image,
                    })
                  }
                  className="bg-white rounded-2xl p-6 border border-[#ccc3d6]/30 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#5b21b6]/30 transition-all cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <IconComp className={`w-4 h-4 ${c.badgeColor}`} />
                        <span className={`text-xs font-bold ${c.badgeColor}`}>{c.badge}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#7b7485] group-hover:text-[#5b21b6] transition-colors" />
                    </div>

                    <div className="relative overflow-hidden rounded-xl mb-4 border border-[#ccc3d6]/20 bg-[#efecfc]">
                      <img
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                        src={c.image}
                        alt={c.title}
                      />
                    </div>

                    <h4 className="font-bold text-base md:text-lg text-[#1b1a26]">
                      {c.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#4a4453] mt-1.5 leading-relaxed">
                      {c.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#ccc3d6]/20 flex justify-between items-center text-xs text-[#4a4453]">
                    <span className="font-semibold">{c.metric}</span>
                    <span className={`font-bold ${c.badgeColor}`}>✓ {c.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#ccc3d6]/50 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fcf8ff] hover:bg-[#efecfc] flex items-center justify-center text-[#1b1a26] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#5b21b6] uppercase tracking-wider">
              Caso de Éxito · {selectedCase.category}
            </span>
            <h3 className="text-2xl font-extrabold text-[#1b1a26] mt-1 mb-2">
              {selectedCase.title}
            </h3>
            <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg inline-block mb-4">
              Resultado: {selectedCase.metric}
            </p>

            <img
              src={selectedCase.image}
              alt={selectedCase.title}
              className="w-full h-48 rounded-xl object-cover border border-[#ccc3d6]/30 mb-4"
            />

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1a26] mb-2">
              Estrategia y acciones ejecutadas:
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedCase.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-[#4a4453]">
                  <span className="text-[#5b21b6] font-bold">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedCase(null)}
              className="w-full py-3 px-6 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-sm luminescent-glow cursor-pointer transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
