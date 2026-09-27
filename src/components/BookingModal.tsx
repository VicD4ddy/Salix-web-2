import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle, Phone, MessageSquare, Building2, Globe, Mail, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
  initialDetails?: { business: string; city: string; notes: string };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan = 'PLAN 2 · Crecimiento Local',
  initialDetails,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('Mañana');
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const [planChoice, setPlanChoice] = useState<string>(preselectedPlan || 'PLAN 2 · Crecimiento Local');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: initialDetails?.business || '',
    city: initialDetails?.city || 'Palma de Mallorca',
    website: '',
    message: initialDetails?.notes || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // UX Heuristic #3: User Freedom - Escape key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const dates = [
    { label: 'Hoy', desc: 'Urgente' },
    { label: 'Mañana', desc: 'Recomendado' },
    { label: 'En 2 días', desc: 'Próximo hueco' },
  ];

  const timeSlots = ['10:00', '11:00', '12:30', '16:00', '17:30', '18:30'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          role="presentation"
        >
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Container with spring bounce entrance */}
          <motion.div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#ccc3d6]/40 relative my-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close button with accessible label & focus ring */}
            <button
              onClick={onClose}
              aria-label="Cerrar ventana de reserva"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#fcf8ff] hover:bg-[#efecfc] flex items-center justify-center text-[#1b1a26] transition-colors focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:outline-hidden cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#ebddff] text-[#420093] text-xs font-bold uppercase tracking-wider">
                    Llamada Estratégica 15 min
                  </span>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    100% Gratuita
                  </span>
                </div>

                <h3 id="booking-modal-title" className="text-2xl font-extrabold text-[#1b1a26] mb-1">
                  Agendar llamada con el equipo Scalix
                </h3>
                <p className="text-xs md:text-sm text-[#4a4453] mb-6">
                  Analizaremos tu posición actual en Google Maps y búsqueda con IA, y definiremos el plan idóneo para tu negocio.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Plan Choice Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#1b1a26] mb-1 uppercase tracking-wider">
                      Plan o interés principal
                    </label>
                    <select
                      value={planChoice}
                      onChange={(e) => setPlanChoice(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] text-xs md:text-sm font-medium focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20 outline-hidden"
                    >
                      <option value="PLAN 2 · Crecimiento Local">PLAN 2 (82€/mes) · Web + SEO + GEO</option>
                      <option value="PLAN 1 · Esencial">PLAN 1 (49€/mes) · Web + Hosting + Mantenimiento</option>
                      <option value="PLAN 3 · Dominio de Sector">PLAN 3 (99€/mes) · Máxima Visibilidad Google Maps & IA</option>
                      <option value="Diagnóstico Gratuito">Solo quiero una auditoría previa sin compromiso</option>
                    </select>
                  </div>

                  {/* Date & Time selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#1b1a26] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#5b21b6]" />
                      Selecciona disponibilidad
                    </label>
                    
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {dates.map((d) => (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setSelectedDate(d.label)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDate === d.label
                              ? 'border-[#5b21b6] bg-[#efecfc] text-[#420093] font-bold shadow-xs'
                              : 'border-[#ccc3d6]/50 bg-white text-[#4a4453] hover:bg-slate-50'
                          }`}
                        >
                          <div className="text-xs md:text-sm font-bold">{d.label}</div>
                          <div className="text-[10px] text-[#7b7485]">{d.desc}</div>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-6 gap-1.5">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            selectedTime === time
                              ? 'bg-[#5b21b6] text-white border-[#5b21b6] shadow-xs'
                              : 'bg-[#fcf8ff] text-[#4a4453] border-[#ccc3d6]/40 hover:bg-[#efecfc]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* User details inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1b1a26] mb-1">
                        Tu nombre *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-[#7b7485] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Ej. Carlos Ramos"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] text-xs font-medium focus:border-[#5b21b6] outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1b1a26] mb-1 flex items-center justify-between">
                        <span>Teléfono / WhatsApp *</span>
                        <span className="text-[10px] text-[#5b21b6] font-semibold">🇪🇸 España (+34)</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-[#7b7485] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+34 640 00 00 00"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] text-xs font-medium focus:border-[#5b21b6] outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1b1a26] mb-1">
                        Nombre del negocio *
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-[#7b7485] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Ej. Restaurante Es Born"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] text-xs font-medium focus:border-[#5b21b6] outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1b1a26] mb-1">
                        Email de contacto *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#7b7485] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="carlos@empresa.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] text-xs font-medium focus:border-[#5b21b6] outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1b1a26] mb-1">
                      Página web actual o perfil de Google Maps (si tienes)
                    </label>
                    <div className="relative">
                      <Globe className="w-3.5 h-3.5 text-[#7b7485] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="https://minegocio.com o enlace a Google"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#fcf8ff] border border-[#ccc3d6] text-xs font-medium focus:border-[#5b21b6] outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-sm luminescent-glow flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-300" />
                      <span>Confirmar llamada ({selectedDate} a las {selectedTime}h)</span>
                    </motion.button>
                    <p className="text-center text-[11px] text-[#7b7485] mt-2">
                      🔒 No compartimos tus datos. Te contactaremos puntualmente sin venta agresiva.
                    </p>
                  </div>

                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4 shadow-sm"
                >
                  <CheckCircle className="w-8 h-8" />
                </motion.div>

                <h3 className="text-2xl font-extrabold text-[#1b1a26] mb-2">
                  ¡Llamada confirmada con éxito!
                </h3>
                
                <p className="text-sm text-[#4a4453] max-w-md mx-auto mb-6">
                  Hemos reservado tu sesión para el <strong>{selectedDate} a las {selectedTime}h</strong>. Te hemos enviado un resumen y confirmación a <strong>{formData.email}</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-[#efecfc] border border-[#5b21b6]/20 text-left text-xs mb-6 space-y-1.5">
                  <div><strong>Negocio:</strong> {formData.business || 'Tu Negocio'} ({formData.city})</div>
                  <div><strong>Interés:</strong> {planChoice}</div>
                  <div><strong>Teléfono:</strong> {formData.phone}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/34640295743?text=Hola%20Scalix,%20he%20agendado%20una%20llamada%20para%20${encodeURIComponent(formData.business || 'mi negocio')}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Escribir por WhatsApp directo</span>
                  </motion.a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="py-3 px-5 rounded-full bg-[#efecfc] hover:bg-[#e9e6f7] text-[#420093] font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
