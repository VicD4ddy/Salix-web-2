import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  PhoneOff, 
  PhoneCall, 
  Bot, 
  MapPin, 
  Gauge, 
  ShieldAlert, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  const comparisons = [
    {
      label: 'Posicionamiento Google Maps',
      icon: MapPin,
      before: {
        status: 'Posición #18 (Invisible)',
        description: 'Fuera del Top 3 local. Más del 90% de los usuarios nunca hace scroll más allá de los primeros 3 resultados.',
        tag: 'Pérdida de clientes diarios',
      },
      after: {
        status: 'Top 1 – #3 Garantizado',
        description: 'Aparición destacada con ficha optimizada, fotos geolocalizadas, categorías exactas y reseñas continuas.',
        tag: 'Máxima visibilidad local',
      },
    },
    {
      label: 'Presencia en Motores de IA (GEO)',
      icon: Bot,
      before: {
        status: 'Completamente Invisible',
        description: 'Al preguntar a ChatGPT o Perplexity por tu servicio, la IA cita y recomienda directamente a tu competidor.',
        tag: 'Cero datos estructurados',
      },
      after: {
        status: 'Recomendación #1 Citada',
        description: 'Modelado de entidad Schema.org JSON-LD para que los LLM elijan y citen a tu empresa como la opción líder.',
        tag: 'Autoridad en IA 2026',
      },
    },
    {
      label: 'Velocidad Web y Rendimiento',
      icon: Gauge,
      before: {
        status: 'Lenta: Carga en > 4.2 segundos',
        description: 'Plantillas pesadas y hosting descuidado. El 53% de los visitantes abandona antes de que la página termine de abrir.',
        tag: 'Fuga masiva de visitas',
      },
      after: {
        status: 'Ultrarrápida: Carga en < 0.9 segundos',
        description: 'Código limpio, servidores NVMe en España y Core Web Vitals al 100%. Experiencia instantánea en móviles.',
        tag: 'Conversión multiplicada',
      },
    },
    {
      label: 'Captación de Llamadas y Ventas',
      icon: TrendingUp,
      before: {
        status: '2 a 5 llamadas frías al mes',
        description: 'Dependencia del boca a boca o gasto descontrolado en anuncios de Google Ads sin retorno sostenible.',
        tag: 'Facturación estancada',
      },
      after: {
        status: '+60 a +140 contactos al mes',
        description: 'Flujo constante de llamadas y mensajes directos por WhatsApp de clientes cercanos con alta intención de compra.',
        tag: 'Retorno directo demostrable',
      },
    },
    {
      label: 'Gestión y Mantenimiento Técnico',
      icon: ShieldCheck,
      before: {
        status: 'Estrés y problemas continuos',
        description: 'Dominio a punto de caducar, plugins desactualizados, errores SSL y miedo constante a que la web se caiga.',
        tag: 'Tiempo del dueño desperdiciado',
      },
      after: {
        status: 'Cero Preocupaciones Técnicas',
        description: 'Nosotros nos encargamos de todo: hosting, copias de seguridad diarias, seguridad HTTPS y soporte directo.',
        tag: 'Tranquilidad absoluta',
      },
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-[#ccc3d6]/30 relative overflow-hidden" id="antes-despues">
      {/* Decorative background glow */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-rose-200/20 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200/25 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-[#efecfc] text-[#420093] font-bold text-xs uppercase tracking-wider mb-4 inline-flex items-center gap-1.5 border border-[#ccc3d6]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#5b21b6]" />
            TRANSFORMACIÓN REAL · MÉTODO SCALIX
          </span>
          <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] mt-2 mb-4 tracking-tight">
            De la invisibilidad comercial al dominio de tu zona
          </h2>
          <p className="text-base md:text-xl text-[#4a4453] leading-relaxed">
            Compara la realidad de un negocio local antes y después de implementar nuestra estrategia integral de Google Maps, SEO y visibilidad con IA.
          </p>

          {/* Interactive View Controller Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#efecfc] border border-[#ccc3d6]/50">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-white text-[#420093] shadow-xs'
                  : 'text-[#4a4453] hover:text-[#1b1a26]'
              }`}
            >
              Comparativa Completa
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-[#4a4453] hover:text-rose-600'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>Antes de Scalix</span>
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-[#5b21b6] text-white shadow-xs'
                  : 'text-[#4a4453] hover:text-[#5b21b6]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Con Método Scalix</span>
            </button>
          </div>
        </motion.div>

        {/* Dual Card / Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* THE BEFORE CARD (Pain Point) */}
          {(activeTab === 'both' || activeTab === 'before') && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl p-6 md:p-8 bg-gradient-to-b from-rose-50/50 to-white border-2 border-rose-200/80 shadow-md flex flex-col justify-between relative ${
                activeTab === 'before' ? 'lg:col-span-2 max-w-3xl mx-auto w-full' : ''
              }`}
            >
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5" />
                <span>Situación Inicial</span>
              </div>

              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">
                    EL DOLOR DE LA MAYORÍA
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1b1a26]">
                    Antes de trabajar con Scalix
                  </h3>
                  <p className="text-xs md:text-sm text-[#7b7485] mt-1">
                    Tu negocio existe, pero tus clientes potenciales terminan contratando a la competencia.
                  </p>
                </div>

                {/* List of pain items */}
                <div className="space-y-4 pt-2 border-t border-rose-100">
                  {comparisons.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-white/80 border border-rose-100 shadow-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-[#1b1a26] flex items-center gap-1.5">
                            <Icon className="w-4 h-4 text-rose-500" />
                            {item.label}
                          </span>
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                            {item.before.tag}
                          </span>
                        </div>
                        <div className="text-sm font-extrabold text-rose-700 mb-1">
                          ✕ {item.before.status}
                        </div>
                        <p className="text-xs text-[#7b7485] leading-relaxed">
                          {item.before.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-rose-600 font-medium">
                <span>Resultado: Pérdida mensual estimada de 2.000€ a 8.000€ en ventas directas.</span>
              </div>
            </motion.div>
          )}

          {/* THE AFTER CARD (The Solution & Winning State) */}
          {(activeTab === 'both' || activeTab === 'after') && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl p-6 md:p-8 bg-gradient-to-b from-purple-50/70 to-white border-2 border-[#5b21b6] shadow-xl flex flex-col justify-between relative ${
                activeTab === 'after' ? 'lg:col-span-2 max-w-3xl mx-auto w-full' : ''
              }`}
            >
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#5b21b6] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Resultado Verificado</span>
              </div>

              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#5b21b6] uppercase tracking-wider block mb-1">
                    EL LIDERAZGO DE TU SECTOR
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1b1a26]">
                    Con el Método Scalix
                  </h3>
                  <p className="text-xs md:text-sm text-[#4a4453] mt-1">
                    Apareces en el Top 3 local, la IA te recomienda y captas llamadas de compra continuas.
                  </p>
                </div>

                {/* List of win items */}
                <div className="space-y-4 pt-2 border-t border-purple-100">
                  {comparisons.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-[#ccc3d6]/30 shadow-xs hover:border-[#5b21b6]/40 transition-colors">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-[#1b1a26] flex items-center gap-1.5">
                            <Icon className="w-4 h-4 text-[#5b21b6]" />
                            {item.label}
                          </span>
                          <span className="text-[10px] font-bold text-[#420093] bg-[#ebddff] px-2 py-0.5 rounded-full">
                            {item.after.tag}
                          </span>
                        </div>
                        <div className="text-sm font-extrabold text-emerald-700 mb-1 flex items-center gap-1.5">
                          <span>✓</span>
                          <span>{item.after.status}</span>
                        </div>
                        <p className="text-xs text-[#4a4453] leading-relaxed">
                          {item.after.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-emerald-700 font-bold">
                  ✓ Amortización media en las primeras 3 semanas de activación.
                </span>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 luminescent-glow cursor-pointer transition-colors shadow-sm"
                >
                  <span>Activar para mi negocio</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Bottom Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#efecfc] rounded-2xl p-6 border border-[#ccc3d6]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div>
            <h4 className="font-extrabold text-[#1b1a26] text-base md:text-lg">
              ¿No sabes en qué posición exacta se encuentra tu negocio hoy?
            </h4>
            <p className="text-xs md:text-sm text-[#4a4453] mt-0.5">
              Te entregamos un informe visual de tus posiciones actuales en Google Maps y búsqueda con IA sin coste alguno.
            </p>
          </div>

          <a
            href="https://wa.me/34640295743?text=Hola%20Scalix,%20quiero%20conocer%20la%20posici%C3%B3n%20actual%20de%20mi%20negocio%20en%20Google%20Maps%20y%20ChatGPT."
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pedir Diagnóstico por WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
