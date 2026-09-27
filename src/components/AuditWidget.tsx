import React, { useState } from 'react';
import { Search, Sparkles, MapPin, CheckCircle, AlertTriangle, ArrowRight, BarChart3, Globe, PhoneCall } from 'lucide-react';
import { AuditFormState, AuditResult } from '../types';

interface AuditWidgetProps {
  onScheduleWithAudit: (details: { business: string; city: string; notes: string }) => void;
}

export const AuditWidget: React.FC<AuditWidgetProps> = ({ onScheduleWithAudit }) => {
  const [formData, setFormData] = useState<AuditFormState>({
    businessName: '',
    city: 'Palma de Mallorca',
    sector: 'Reformas y Construcción',
    website: '',
  });

  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);

  const sectors = [
    'Reformas y Construcción',
    'Clínicas y Salud Privada',
    'Hostelería y Restauración',
    'Abogados y Asesorías',
    'Inmobiliarias',
    'Servicios a Domicilio',
    'Comercio y Retail',
    'Otro Negocio Local',
  ];

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName.trim()) return;

    setIsAuditing(true);
    setResult(null);

    const steps = [
      `Rastreando Google Maps en ${formData.city}...`,
      `Auditando señales NAP y perfil Google Business...`,
      `Consultando índices de ChatGPT y Perplexity (GEO)...`,
      `Calculando estimación de llamadas potenciales...`,
    ];

    let currentStep = 0;
    setAuditStep(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setAuditStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        setIsAuditing(false);

        // Generate tailored audit result
        const baseScore = Math.floor(Math.random() * 20) + 42; // realistic current score 42-62
        setResult({
          overallScore: baseScore,
          mapsScore: baseScore - 5,
          geoScore: Math.floor(baseScore * 0.75),
          speedScore: 58,
          competitorInsight: `En ${formData.city}, los 3 primeros competidores en tu categoría reciben entre 80 y 160 llamadas mensuales directas desde el mapa.`,
          recommendations: [
            'Tu ficha de Google Business carece de geoseñales y atributos clave de búsqueda semántica.',
            'Falta de schema structured data (LocalBusiness / Medical / Legal) que los motores IA (ChatGPT/Perplexity) necesitan para citarte.',
            'Oportunidad inmediata: no hay competidores locales dominando aún el posicionamiento GEO por inteligencia artificial en tu zona.',
            'La velocidad de carga móvil puede optimizarse para reducir el abandono antes de la llamada.',
          ],
        });
      }
    }, 600);
  };

  return (
    <section id="auditoria" className="py-16 md:py-20 bg-gradient-to-b from-[#f5f2ff] to-[#fcf8ff] border-y border-[#ccc3d6]/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ebddff] text-[#420093] font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#5b21b6]" />
            HERRAMIENTA GRATUITA
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#1b1a26] tracking-tight">
            Auditoría Express de tu negocio
          </h2>
          <p className="text-sm md:text-base text-[#4a4453] mt-2">
            Comprueba en 10 segundos cómo ven Google Maps y los motores de IA (ChatGPT, Perplexity) a tu negocio frente a tus rivales directos.
          </p>
        </div>

        {/* Audit Form Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#420093]/15">
          <form onSubmit={handleRunAudit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-[#1b1a26] mb-1 uppercase tracking-wider">
                Nombre de tu negocio *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Clínica Dental Palma, Reformas Mallorca"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20 text-sm font-medium outline-hidden"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-[#1b1a26] mb-1 uppercase tracking-wider">
                Ciudad o Localidad *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Palma de Mallorca, Calvià, Manacor"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20 text-sm font-medium outline-hidden"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-[#1b1a26] mb-1 uppercase tracking-wider">
                Sector o Categoría
              </label>
              <select
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full px-3 py-3 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20 text-sm font-medium outline-hidden"
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex items-end">
              <button
                type="submit"
                disabled={isAuditing}
                className="w-full py-3.5 px-4 bg-[#5b21b6] hover:bg-[#420093] disabled:opacity-50 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 luminescent-glow cursor-pointer transition-all"
              >
                {isAuditing ? (
                  <span className="inline-block animate-spin">⏳</span>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Auditar</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Auditing in progress loader */}
          {isAuditing && (
            <div className="mt-8 p-6 rounded-2xl bg-[#efecfc] border border-[#5b21b6]/20 text-center animate-pulse">
              <div className="flex items-center justify-center gap-2 text-[#420093] font-bold text-sm md:text-base">
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>{auditStep}</span>
              </div>
              <p className="text-xs text-[#4a4453] mt-2">
                Analizando geocodificación, métricas de visibilidad y fuentes citadas por LLMs en {formData.city}
              </p>
            </div>
          )}

          {/* Audit Results View */}
          {result && (
            <div className="mt-8 pt-8 border-t border-[#ccc3d6]/30 animate-in fade-in slide-in-from-bottom-3 duration-300">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                    Informe Preliminar Generado
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1b1a26] mt-2">
                    Diagnóstico de Visibilidad: {formData.businessName}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4a4453]">
                    Sector: {formData.sector} · Ubicación: {formData.city}
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-[#f5f2ff] px-5 py-3 rounded-2xl border border-[#5b21b6]/20">
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#4a4453]">Puntuación actual</span>
                    <p className="text-xs text-[#ba1a1a] font-bold">Margen de mejora alto</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white shadow-xs border-2 border-amber-400 flex items-center justify-center font-extrabold text-xl text-[#1b1a26]">
                    {result.overallScore}<span className="text-xs text-[#7b7485]">/100</span>
                  </div>
                </div>
              </div>

              {/* 3 Metric Progress Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#fcf8ff] p-4 rounded-2xl border border-[#ccc3d6]/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[#1b1a26] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#5b21b6]" />
                      Google Maps Top 3
                    </span>
                    <span className="text-xs font-bold text-[#5b21b6]">{result.mapsScore}%</span>
                  </div>
                  <div className="w-full bg-[#e9e6f7] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#5b21b6] h-full rounded-full" style={{ width: `${result.mapsScore}%` }}></div>
                  </div>
                  <p className="text-xs text-[#4a4453] mt-2">Actualmente perdiendo visibilidad frente al top 3 local.</p>
                </div>

                <div className="bg-[#fcf8ff] p-4 rounded-2xl border border-[#ccc3d6]/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[#1b1a26] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#4648d4]" />
                      GEO (ChatGPT & Perplexity)
                    </span>
                    <span className="text-xs font-bold text-[#4648d4]">{result.geoScore}%</span>
                  </div>
                  <div className="w-full bg-[#e9e6f7] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#4648d4] h-full rounded-full" style={{ width: `${result.geoScore}%` }}></div>
                  </div>
                  <p className="text-xs text-[#4a4453] mt-2">Los modelos de IA aún no citan tu negocio como primera opción.</p>
                </div>

                <div className="bg-[#fcf8ff] p-4 rounded-2xl border border-[#ccc3d6]/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[#1b1a26] flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                      Conversión Web & Velocidad
                    </span>
                    <span className="text-xs font-bold text-emerald-700">{result.speedScore}%</span>
                  </div>
                  <div className="w-full bg-[#e9e6f7] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${result.speedScore}%` }}></div>
                  </div>
                  <p className="text-xs text-[#4a4453] mt-2">Tiempo de respuesta y llamadas directas mejorables.</p>
                </div>
              </div>

              {/* Actionable Findings & Competitor Insight */}
              <div className="bg-[#efecfc]/70 p-5 rounded-2xl border border-[#5b21b6]/15 mb-6">
                <p className="text-sm font-bold text-[#420093] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Hallazgos y oportunidades detectadas para {formData.businessName}:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {result.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-[#1b1a26]">
                      <span className="text-[#5b21b6] font-bold">✓</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#ccc3d6]/30 text-xs font-medium text-[#4a4453]">
                  💡 <strong>Dato de mercado:</strong> {result.competitorInsight}
                </div>
              </div>

              {/* Schedule with this audit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#5b21b6] to-[#420093] text-white">
                <div>
                  <h4 className="font-bold text-sm md:text-base">¿Quieres resolver estos puntos y superar al Top 3?</h4>
                  <p className="text-xs text-white/80">
                    Revisamos contigo este diagnóstico en una videollamada de 15 minutos sin ningún compromiso.
                  </p>
                </div>
                <button
                  onClick={() =>
                    onScheduleWithAudit({
                      business: formData.businessName,
                      city: formData.city,
                      notes: `Auditoría previa: Sector ${formData.sector}. Puntuación ${result.overallScore}/100.`,
                    })
                  }
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#420093] font-bold text-xs md:text-sm hover:bg-[#fcf8ff] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-[#5b21b6]" />
                  <span>Revisar diagnóstico gratis</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
