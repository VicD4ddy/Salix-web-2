import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuditWidget } from './components/AuditWidget';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { ComparisonTable } from './components/ComparisonTable';
import { MetricsSection } from './components/MetricsSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { Plan } from './types';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string>('PLAN 2 · Crecimiento Local');
  const [auditDetails, setAuditDetails] = useState<{ business: string; city: string; notes: string } | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'aviso' | 'privacidad' | null>(null);

  const handleOpenBooking = (planName?: string) => {
    if (planName) {
      setPreselectedPlan(planName);
    }
    setBookingOpen(true);
  };

  const handlePlanSelect = (plan: Plan) => {
    setPreselectedPlan(`${plan.name} · ${plan.badge} (${plan.priceMonthly}€/mes)`);
    setBookingOpen(true);
  };

  const handleAuditSchedule = (details: { business: string; city: string; notes: string }) => {
    setAuditDetails(details);
    setPreselectedPlan(`Diagnóstico Auditoría Express: ${details.business}`);
    setBookingOpen(true);
  };

  const handleScrollToAudit = () => {
    const auditElement = document.getElementById('auditoria');
    if (auditElement) {
      auditElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-paper-texture text-[#1b1a26] min-h-screen flex flex-col font-sans selection:bg-[#ebddff] selection:text-[#420093]">
      
      {/* 1. Header Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking('PLAN 2 · Crecimiento Local')}
        onOpenAudit={handleScrollToAudit}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking('PLAN 2 · Crecimiento Local')}
          onOpenAudit={handleScrollToAudit}
        />

        {/* 3. Interactive Express Audit Tool */}
        <AuditWidget onScheduleWithAudit={handleAuditSchedule} />

        {/* 4. Soluciones de Crecimiento (Servicios) */}
        <ServicesSection
          onSelectService={(serviceName) =>
            handleOpenBooking(`Consulta sobre: ${serviceName}`)
          }
        />

        {/* 5. Planes y Precios */}
        <PricingSection onSelectPlan={handlePlanSelect} />

        {/* 6. Tabla Comparativa */}
        <ComparisonTable onSelectPlanName={(name) => handleOpenBooking(name)} />

        {/* 7. Confianza y Métricas (Casos verificados) */}
        <MetricsSection />

        {/* 8. Cómo trabajamos (Proceso en 4 pasos) */}
        <ProcessSection />

        {/* 9. Preguntas Frecuentes (FAQ) */}
        <FaqSection />

        {/* 10. CTA Final */}
        <CtaSection onOpenBooking={() => handleOpenBooking('Llamada Estratégica')} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Booking Consultation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedPlan={preselectedPlan}
        initialDetails={auditDetails}
      />

      {/* Legal & Privacy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Quick Action Contacts */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/34640295743?text=Hola%20Scalix,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20planes."
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Scalix</span>
        </a>

        <a
          href="tel:640295743"
          aria-label="Llamar directamente"
          className="w-12 h-12 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95 luminescent-glow"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
