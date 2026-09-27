import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, Phone, MessageSquare, Building2, Globe, Mail, User, Sparkles } from 'lucide-react';

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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#ccc3d6]/40 relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fcf8ff] hover:bg-[#efecfc] flex items-center justify-center text-[#1b1a26] transition-colors"
        >
          <X className="w-5 h-5" />
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

            <h3 className="text-2xl font-extrabold text-[#1b1a26] mb-1">
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
                          ? 'border-[#5b21b6] bg-[#efecfc] text-[#420093] font-bold'
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
                          ? 'bg-[#5b21b6] text-white border-[#5b21b6]'
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
                  <label className="block text-[11px] font-bold text-[#1b1a26] mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-[#7b7485] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 640 00 00 00"
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
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-sm luminescent-glow flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Confirmar llamada ({selectedDate} a las {selectedTime}h)</span>
                </button>
                <p className="text-center text-[11px] text-[#7b7485] mt-2">
                  🔒 No compartimos tus datos. Te contactaremos puntualmente sin venta agresiva.
                </p>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

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
              <a
                href={`https://wa.me/34640295743?text=Hola%20Scalix,%20he%20agendado%20una%20llamada%20para%20${encodeURIComponent(formData.business || 'mi negocio')}.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Escribir por WhatsApp directo</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-3 px-5 rounded-full bg-[#efecfc] hover:bg-[#e9e6f7] text-[#420093] font-semibold text-xs transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
