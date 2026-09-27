import React from 'react';
import { Calendar, Phone, Clock, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 relative" id="contacto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative bg-gradient-to-br from-[#5b21b6] via-[#420093] to-[#4648d4] rounded-3xl p-8 md:p-14 text-white shadow-2xl overflow-hidden">
          
          {/* Halftone decorative sphere */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 halftone-sphere opacity-25 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              DA EL SIGUIENTE PASO
            </span>

            <h2 className="text-display-hero-mobile md:text-headline-xl text-white tracking-tight mb-4">
              ¿Quieres que tu negocio tenga más visibilidad en Internet?
            </h2>

            <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed">
              Hablemos hoy mismo. Evaluaremos tu situación actual en Google Maps y búsqueda orgánica de forma totalmente gratuita y sin compromiso.
            </p>

            {/* Action Buttons & Direct Contact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenBooking}
                className="inline-flex justify-center items-center gap-2 bg-white text-[#420093] hover:bg-[#fcf8ff] font-bold text-base px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#5b21b6]" />
                <span>Agendar llamada</span>
              </button>

              {/* Direct phone calling badges */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:640295743"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-xs md:text-sm transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>640 29 57 43</span>
                </a>

                <a
                  href="tel:640243045"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-xs md:text-sm transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>640 24 30 45</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <Clock className="w-3.5 h-3.5" />
              <span>
                Horario de atención: Lunes a Viernes de 9:00 a 19:00 · Respuesta media en menos de 1 hora
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
