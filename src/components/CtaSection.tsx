import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 relative overflow-hidden" id="contacto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-[#5b21b6] via-[#420093] to-[#4648d4] rounded-3xl p-8 md:p-14 text-white shadow-2xl overflow-hidden"
        >
          
          {/* Halftone decorative sphere with subtle organic float */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -right-16 -bottom-16 w-96 h-96 halftone-sphere opacity-25 pointer-events-none" 
            aria-hidden="true"
          />

          {/* Ambient luminous glow */}
          <div 
            className="absolute top-0 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="px-3.5 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-6 inline-flex items-center gap-1.5 backdrop-blur-xs shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              DA EL SIGUIENTE PASO
            </motion.span>

            <h2 className="text-display-hero-mobile md:text-headline-xl text-white tracking-tight mb-4">
              ¿Quieres que tu negocio tenga más visibilidad en Internet?
            </h2>

            <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed">
              Hablemos hoy mismo por WhatsApp. Evaluaremos tu situación actual en Google Maps y búsqueda orgánica de forma totalmente gratuita y sin compromiso.
            </p>

            {/* Action Buttons & Direct Contact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="inline-flex justify-center items-center gap-2 bg-white text-[#420093] hover:bg-[#fcf8ff] font-bold text-base px-8 py-4 rounded-full shadow-lg cursor-pointer transition-colors"
              >
                <Calendar className="w-5 h-5 text-[#5b21b6]" />
                <span>Agendar llamada</span>
              </motion.button>

              {/* Direct WhatsApp badges */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 211, 102, 0.25)' }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/34640295743?text=Hola%20Scalix,%20me%20gustar%C3%ADa%20consultar%20sobre%20vuestros%20servicios%20de%20visibilidad."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-[#25D366]/20 backdrop-blur-sm text-white font-semibold text-xs md:text-sm transition-colors border border-white/20"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: +34 640 29 57 43</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 211, 102, 0.25)' }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/34640243045?text=Hola%20Scalix,%20me%20gustar%C3%ADa%20consultar%20sobre%20vuestros%20servicios%20de%20visibilidad."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-[#25D366]/20 backdrop-blur-sm text-white font-semibold text-xs md:text-sm transition-colors border border-white/20"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: +34 640 24 30 45</span>
                </motion.a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <Clock className="w-3.5 h-3.5" />
              <span>
                Horario de atención: Lunes a Viernes de 9:00 a 19:00 · Respuesta media por WhatsApp en menos de 1 hora
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
