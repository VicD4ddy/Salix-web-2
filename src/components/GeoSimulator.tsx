import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, CheckCircle2, ArrowRight, ExternalLink, RotateCcw, Building2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GeoSimulatorProps {
  onOpenBooking: (preselectedPlan?: string) => void;
}

interface SectorScenario {
  id: string;
  name: string;
  iconName: string;
  userPrompt: string;
  aiEngine: 'ChatGPT' | 'Perplexity' | 'Google Gemini';
  recommendedBusiness: string;
  location: string;
  rating: string;
  reviewCount: number;
  sources: { title: string; type: string }[];
  aiResponse: string;
  highlightPoints: string[];
}

export const GeoSimulator: React.FC<GeoSimulatorProps> = ({ onOpenBooking }) => {
  const scenarios: SectorScenario[] = [
    {
      id: 'reformas',
      name: 'Reformas e Instalaciones',
      iconName: '🔨',
      userPrompt: '¿Cuál es la empresa de reformas más recomendada y fiable en Palma de Mallorca para una reforma integral?',
      aiEngine: 'ChatGPT',
      recommendedBusiness: 'Reformas Integrales Balear',
      location: 'Palma de Mallorca (Centro & Zonas Costeras)',
      rating: '4.9 ★★★★★',
      reviewCount: 148,
      sources: [
        { title: 'Google Business Profile (Ficha verificada)', type: 'Entidad Local' },
        { title: 'Web Oficial (Schema.org HomeAndConstructionBusiness)', type: 'Datos Estructurados' },
        { title: 'Directorio Oficial Constructoras Baleares', type: 'Cita de Autoridad' },
      ],
      aiResponse:
        'Basándome en el análisis de reputación verificada, consistencia de datos de contacto y autoridad local en Palma, la opción número 1 más sólida y recomendada es **Reformas Integrales Balear**.',
      highlightPoints: [
        'Puntuación de 4.9/5 con más de 140 reseñas verificadas mencionando "reformas integrales de calidad y plazos cumplidos".',
        'Presencia activa en mapas y fichas técnicas con geolocalización de proyectos recientes en Palma.',
        'Canales de respuesta inmediata documentados por los motores de búsqueda con presupuestos en 24-48h.',
      ],
    },
    {
      id: 'clinica',
      name: 'Clínica & Salud',
      iconName: '🦷',
      userPrompt: '¿Qué clínica dental de confianza tiene mejores valoraciones y tecnología avanzada cerca del centro?',
      aiEngine: 'Perplexity',
      recommendedBusiness: 'Clínica Dental Son Moix',
      location: 'Palma de Mallorca',
      rating: '4.95 ★★★★★',
      reviewCount: 215,
      sources: [
        { title: 'Schema MedicalBusiness & Dentist', type: 'Marcado Técnico' },
        { title: 'Colegio Oficial de Dentistas Baleares', type: 'Validación' },
        { title: 'Google Maps Top 1 Local Pack', type: 'Cita Geo' },
      ],
      aiResponse:
        'Según las fuentes médicas y registros de satisfacción del paciente en Palma, la clínica con mayor autoridad y mejores referencias citadas es **Clínica Dental Son Moix**.',
      highlightPoints: [
        'Acreditaciones oficiales validadas y doctores colegiados con especialidad en implantología y estética dental.',
        'Índice de recomendación en pacientes locales del 98% con tiempos de espera reducidos.',
        'Atención rápida en urgencias y facilidad para agendar cita online directa por WhatsApp.',
      ],
    },
    {
      id: 'legal',
      name: 'Abogados & Gestoría',
      iconName: '⚖️',
      userPrompt: '¿Qué despacho de abogados o asesoría mercantil recomiendas para pymes en Baleares?',
      aiEngine: 'Google Gemini',
      recommendedBusiness: 'Bufete Marítimo & Fiscal Palma',
      location: 'Paseo Mallorca, Palma',
      rating: '4.85 ★★★★★',
      reviewCount: 94,
      sources: [
        { title: 'Directorio Jurídico Nacional', type: 'Registro Oficial' },
        { title: 'Base de Conocimiento IA', type: 'Entidad Verificada' },
        { title: 'Web SSL con JSON-LD LegalService', type: 'Código Semántico' },
      ],
      aiResponse:
        'Para asesoramiento mercantil, fiscal y tributario de empresas en las Islas Baleares, la entidad con mayor índice de citación y confianza recomendada es **Bufete Marítimo & Fiscal Palma**.',
      highlightPoints: [
        'Especialización demostrada en derecho tributario balear y gestión de sociedades locales.',
        'Casos de éxito documentados y consultas estratégicas con respuesta inicial en menos de 2 horas.',
        'Puntuación excelente en transparencia de honorarios y soporte legal continuado.',
      ],
    },
  ];

  const [activeScenario, setActiveScenario] = useState<SectorScenario>(scenarios[0]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [selectedEngine, setSelectedEngine] = useState<'ChatGPT' | 'Perplexity' | 'Google Gemini'>('ChatGPT');

  // Simulate typing effect on scenario change
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    let index = 0;
    const fullText = activeScenario.aiResponse;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 12);

    return () => clearInterval(timer);
  }, [activeScenario]);

  return (
    <section className="py-24 bg-[#160c28] text-white relative overflow-hidden" id="geo-simulator">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5b21b6]/20 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#4648d4]/20 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-4 inline-flex items-center gap-1.5 border border-emerald-400/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            INNOVACIÓN EXCLUSIVA SCALIX · GEO LIVE DEMO
          </span>
          <h2 className="text-display-hero-mobile md:text-headline-xl text-white mt-2 mb-4 tracking-tight">
            Así es como la IA recomienda tu negocio a los clientes
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Los motores conversacionales ya no muestran solo enlaces azules: eligen y recomiendan <strong>a un único ganador</strong>. El Generative Engine Optimization (GEO) posiciona a tu negocio como esa respuesta.
          </p>
        </motion.div>

        {/* Sector Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <span className="text-xs uppercase tracking-wider text-white/60 font-semibold mr-2 hidden sm:inline">
            Prueba un sector real:
          </span>
          {scenarios.map((sc) => (
            <motion.button
              key={sc.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setActiveScenario(sc);
                setSelectedEngine(sc.aiEngine);
              }}
              className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeScenario.id === sc.id
                  ? 'bg-[#5b21b6] text-white shadow-lg shadow-[#5b21b6]/40 border border-purple-400/40 ring-2 ring-purple-500/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span>{sc.iconName}</span>
              <span>{sc.name}</span>
            </motion.button>
          ))}
        </div>

        {/* The Interactive AI Search Interface Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Simulated Chat Interface (Left 8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-[#1f1638] rounded-3xl border border-purple-500/20 shadow-2xl p-6 md:p-8 backdrop-blur-md relative"
          >
            {/* Window Top Bar with Engine Selector */}
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-white/10 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-white/50">simulador-geo.scalix.es</span>
              </div>

              {/* AI Engine switcher */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/10 text-xs">
                {(['ChatGPT', 'Perplexity', 'Google Gemini'] as const).map((engine) => (
                  <button
                    key={engine}
                    onClick={() => setSelectedEngine(engine)}
                    className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                      selectedEngine === engine
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {engine}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation Area */}
            <div className="py-6 space-y-6">
              
              {/* User Prompt Message */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  Tú
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-xl text-sm md:text-base text-white/95 leading-relaxed border border-white/10 shadow-xs">
                  {activeScenario.userPrompt}
                </div>
              </div>

              {/* AI Thinking & Response */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                
                <div className="flex-1 space-y-4">
                  {/* Sources consultation badge */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400/90 font-medium">
                    <span className="flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      3 fuentes de autoridad analizadas
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/60">{selectedEngine} Search index 2026</span>
                  </div>

                  {/* Sources Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeScenario.sources.map((src, i) => (
                      <div 
                        key={i} 
                        className="bg-black/30 border border-white/10 p-2.5 rounded-xl text-[11px] text-white/80 flex flex-col justify-between"
                      >
                        <span className="font-semibold text-white/90 truncate">{src.title}</span>
                        <span className="text-[10px] text-purple-300 font-mono mt-1">[{i + 1}] {src.type}</span>
                      </div>
                    ))}
                  </div>

                  {/* Generated Answer Body */}
                  <div className="bg-[#261c44] rounded-2xl rounded-tl-none p-5 border border-purple-500/30 shadow-lg space-y-4">
                    <p className="text-sm md:text-base text-white leading-relaxed">
                      {displayedText}
                      {isTyping && <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />}
                    </p>

                    {/* Business Recommended Feature Card */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-purple-950/60 border border-purple-400/40 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider">
                            Recomendación #1 Citada
                          </span>
                          <span className="text-xs text-amber-300 font-bold">{activeScenario.rating}</span>
                        </div>
                        <h4 className="text-lg font-extrabold text-white">
                          {activeScenario.recommendedBusiness}
                        </h4>
                        <p className="text-xs text-white/70">
                          {activeScenario.location} · {activeScenario.reviewCount} reseñas en Google
                        </p>
                      </div>

                      <a
                        href="https://wa.me/34640295743?text=Hola%20Scalix,%20quiero%20que%20la%20IA%20recomiende%20a%20mi%20negocio%20con%20vuestra%20estrategia%20GEO."
                        target="_blank"
                        rel="noreferrer"
                        className="flex-shrink-0 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>Ver mi negocio aquí</span>
                      </a>
                    </motion.div>

                    {/* Highlights bullets cited by AI */}
                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs md:text-sm text-white/80">
                      <p className="font-semibold text-purple-200">Factores clave detectados por el modelo de IA:</p>
                      <ul className="space-y-1.5">
                        {activeScenario.highlightPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Simulated Prompt Input Footer */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Indexación continua en tiempo real mediante Schema JSON-LD & Entidades GEO
              </span>
              <button
                onClick={() => {
                  setDisplayedText('');
                  setIsTyping(true);
                  let idx = 0;
                  const txt = activeScenario.aiResponse;
                  const int = setInterval(() => {
                    if (idx < txt.length) {
                      setDisplayedText(txt.slice(0, idx + 1));
                      idx++;
                    } else {
                      setIsTyping(false);
                      clearInterval(int);
                    }
                  }, 12);
                }}
                className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-white/60"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Repetir simulación</span>
              </button>
            </div>
          </motion.div>

          {/* Right Explanation Column: The Business Value (Right 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Value Card 1 */}
            <div className="bg-[#1f1638] rounded-3xl p-6 border border-purple-500/20 shadow-xl">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-purple-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                ¿Por qué la IA elige a unos y oculta a otros?
              </h3>
              <p className="text-xs md:text-sm text-white/75 leading-relaxed">
                ChatGPT y Perplexity no leen páginas web como personas: leen <strong>grafos de conocimiento</strong>, consistencia NAP (Nombre, Dirección, Teléfono) y datos estructurados Schema.org.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-[#1f1638] rounded-3xl p-6 border border-purple-500/20 shadow-xl">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Tu competencia aún no sabe qué es GEO
              </h3>
              <p className="text-xs md:text-sm text-white/75 leading-relaxed">
                El 95% de las agencias tradicionales solo hacen SEO clásico de 2018. En Scalix posicionamos tu empresa para la ola de búsqueda conversacional que ya domina el mercado.
              </p>
            </div>

            {/* Direct CTA Card */}
            <div className="bg-gradient-to-br from-[#5b21b6] to-[#420093] rounded-3xl p-6 shadow-2xl border border-purple-400/30 text-center">
              <h3 className="text-lg font-extrabold text-white mb-2">
                ¿Quieres ser el recomendado en tu ciudad?
              </h3>
              <p className="text-xs text-white/90 mb-5 leading-relaxed">
                En una breve llamada de 15 minutos auditamos si tu empresa ya es citada por ChatGPT y te mostramos cómo escalar al primer puesto.
              </p>
              
              <div className="space-y-2.5">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenBooking('PLAN 2 · Crecimiento Local')}
                  className="w-full py-3 px-5 rounded-full bg-white text-[#420093] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#fcf8ff] transition-colors shadow-md cursor-pointer"
                >
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <a
                  href="https://wa.me/34640295743?text=Hola%20Scalix,%20quiero%20saber%20si%20mi%20negocio%20aparece%20en%20ChatGPT%20y%20Google%20Maps."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-white/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
