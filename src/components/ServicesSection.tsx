import React, { useState } from 'react';
import { MapPin, Search, Bot, Globe, Server, MessageSquare, Check, ArrowRight, X } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const services: (ServiceItem & { icon: any; fullDetail: string })[] = [
    {
      id: 'maps',
      number: '01',
      tag: 'Google Maps Local',
      title: 'Posicionamiento en Google Maps',
      icon: MapPin,
      description:
        'Aparece en el Top 3 local cuando los clientes cercanos buscan tus servicios en el móvil. Optimizamos fichas, citas locales y reputación continua.',
      deliverables: [
        'Auditoría del perfil de Google Business',
        'Estrategia de reseñas y geoseñalización',
        'Visibilidad en mapas y llamadas directas',
      ],
      fullDetail:
        'El 84% de las búsquedas comerciales de servicios en smartphone terminan en una llamada al Top 3 del mapa de Google. Estructuramos la ficha con categorías primarias/secundarias precisas, consistencia NAP en directorios de alta autoridad, geolocalización de fotografías y protocolos sistemáticos de obtención y respuesta a reseñas con palabras clave.',
    },
    {
      id: 'seo',
      number: '02',
      tag: 'Tráfico Cualificado',
      title: 'SEO Técnico & Contenidos',
      icon: Search,
      description:
        'Arquitectura web optimizada para escalar palabras clave con intención comercial. Sin trucos pasajeros: código limpio, velocidad y autoridad temática.',
      deliverables: [
        'Keyword research de alta conversión',
        'Optimización on-page y velocidad de carga',
        'Enlazado interno y arquitectura semántica',
      ],
      fullDetail:
        'Identificamos los términos exactos con intención de compra de tu localidad y sector, descartando tráfico basura. Desarrollamos la estructura semántica de URLs, encabezados H1-H3, metadatos y arquitectura de clusters temáticos que colocan a tu web en las primeras posiciones orgánicas de Google.',
    },
    {
      id: 'geo',
      number: '03',
      tag: 'GEO con IA',
      title: 'GEO (Búsquedas con IA)',
      icon: Bot,
      isDark: true,
      description:
        'La nueva frontera de la visibilidad. Preparamos y estructuramos tu empresa para ser la fuente recomendada por motores conversacionales como ChatGPT, Perplexity y Google Gemini.',
      deliverables: [
        'Optimización para respuestas generativas (LLM)',
        'Datos estructurados Schema avanzados',
        'Autoridad citada por modelos de inteligencia artificial',
      ],
      fullDetail:
        'Los clientes ya no solo usan Google tradicional; preguntan a ChatGPT o Perplexity "¿cuál es el mejor especialista en mi ciudad?". El Generative Engine Optimization (GEO) modela la reputación de tu entidad comercial, alimenta bases de conocimiento públicas y estructura datos JSON-LD enriquecidos para que los LLM elijan a tu empresa como su recomendación número uno.',
    },
    {
      id: 'web',
      number: '04',
      tag: 'Embudos de venta',
      title: 'Creación Web Optimizada',
      icon: Globe,
      description:
        'Páginas web rápidas, limpias y diseñadas con un solo objetivo: convertir visitas frías en llamadas y formularios de clientes cualificados.',
      deliverables: [
        'Diseño responsive de alta fidelidad',
        'Copywriting persuasivo orientado al valor',
        'Conexión con WhatsApp y herramientas CRM',
      ],
      fullDetail:
        'Una web que tarda más de 2 segundos en cargar pierde la mitad de sus visitantes. Desarrollamos sitios ultrarrápidos, optimizados para móviles, con tipografías impecables, microcopys persuasivos y llamadas a la acción directas al teléfono o WhatsApp para maximizar la tasa de conversión.',
    },
    {
      id: 'hosting',
      number: '05',
      tag: 'Infraestructura Pro',
      title: 'Hosting, Dominio & Mantenimiento',
      icon: Server,
      description:
        'Nos encargamos de toda la complejidad técnica. Tu web siempre online, segura, actualizada y con servidores ultrarrápidos de última generación.',
      deliverables: [
        'Dominio profesional y certificados SSL incluidos',
        'Copias de seguridad automáticas diarias',
        'Mantenimiento reactivo ante incidencias',
      ],
      fullDetail:
        'Cero preocupaciones técnicas para ti. Nos encargamos del registro y renovación de tu dominio, certificados de cifrado SSL/TLS, servidores con almacenamiento NVMe de máxima velocidad y soporte técnico continuo ante cualquier duda o actualización.',
    },
    {
      id: 'automation',
      number: '06',
      tag: 'Automatizaciones',
      title: 'Sistemas de Captación Ágiles',
      icon: MessageSquare,
      description:
        'Enrutamiento de leads directo a tu teléfono móvil, recordatorios automáticos de citas y alertas inmediatas para no perder ninguna oportunidad de venta.',
      deliverables: [
        'Notificaciones directas a WhatsApp',
        'Formularios calificados con preguntas filtro',
        'Reducción de tiempo de respuesta a < 5 min',
      ],
      fullDetail:
        'La probabilidad de cerrar una venta se multiplica por 7 si contactas al lead en los primeros 5 minutos. Conectamos tu web a sistemas automatizados que te avisan al instante por WhatsApp o Telegram cuando un nuevo cliente potencial solicita presupuesto.',
    },
  ];

  return (
    <section className="py-20 bg-[#f5f2ff]/60 border-y border-[#ccc3d6]/30 relative" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#e9e6f7] text-[#420093] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            SOLUCIONES DE CRECIMIENTO
          </span>
          <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] mt-2 mb-4 tracking-tight">
            Diseñado para dominar la búsqueda moderna.
          </h2>
          <p className="text-base md:text-xl text-[#4a4453] leading-relaxed">
            Desde los primeros puestos en mapas locales hasta la indexación para las nuevas respuestas generativas por Inteligencia Artificial.
          </p>
        </div>

        {/* Bento-style Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            if (service.isDark) {
              return (
                <div
                  key={service.id}
                  className="bg-[#5b21b6] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-10 h-10 rounded-full bg-white text-[#420093] font-extrabold flex items-center justify-center text-sm shadow-xs">
                        {service.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <IconComponent className="w-6 h-6 text-white" />
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/85 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2 border-t border-white/20 pt-4 text-xs md:text-sm text-white relative z-10 mb-6">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-white font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setActiveModalService(service)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white text-[#420093] hover:bg-[#fcf8ff] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Ver metodología GEO</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-[#420093]/10 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#420093]/20 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-[#5b21b6] text-white flex items-center justify-center font-bold text-sm">
                      {service.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ebddff] text-[#250059] text-xs font-semibold">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1b1a26] mb-3 flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-[#5b21b6]" />
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#4a4453] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 border-t border-[#ccc3d6]/30 pt-4 text-xs md:text-sm text-[#1b1a26] mb-6">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#420093] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#efecfc] hover:bg-[#e9e6f7] text-[#420093] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Detalles del servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#ccc3d6]/50 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fcf8ff] hover:bg-[#efecfc] flex items-center justify-center text-[#1b1a26] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#ebddff] text-[#420093] text-xs font-bold uppercase">
                {activeModalService.tag}
              </span>
              <span className="text-xs text-[#7b7485]">Servicio {activeModalService.number}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#1b1a26] mb-4">
              {activeModalService.title}
            </h3>

            <p className="text-sm md:text-base text-[#4a4453] leading-relaxed mb-6">
              {activeModalService.fullDetail}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1a26] mb-3">
              Entregables y acciones incluidas:
            </h4>
            <ul className="space-y-2.5 mb-8">
              {activeModalService.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-[#1b1a26]">
                  <span className="w-5 h-5 rounded-full bg-[#ebddff] text-[#420093] flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(serviceName);
                }}
                className="flex-1 py-3 px-6 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-sm luminescent-glow cursor-pointer transition-colors"
              >
                Solicitar para mi negocio
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-5 rounded-full bg-[#efecfc] hover:bg-[#e9e6f7] text-[#420093] font-semibold text-sm transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
