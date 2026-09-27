import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuditWidget } from './components/AuditWidget';
import { ServicesSection } from './components/ServicesSection';
import { GeoSimulator } from './components/GeoSimulator';
import { BeforeAfterSection } from './components/BeforeAfterSection';
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
    <div className="bg-paper-texture text-[#1b1a26] min-h-screen flex flex-col font-sans selection:bg-[#ebddff] selection:text-[#420093] relative">
      {/* Global Ambient Tech Hexagon Backdrop from public/fondo.png */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-cover bg-top bg-no-repeat mix-blend-multiply"
        style={{ backgroundImage: "url('/fondo.png')" }}
        aria-hidden="true"
      />
      
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

        {/* 4.5. Simulador Interactivo GEO con IA (Demo Exclusiva) */}
        <GeoSimulator onOpenBooking={(plan) => handleOpenBooking(plan || 'PLAN 2 · Crecimiento Local')} />

        {/* 4.8. Comparativa Antes vs Después (Transformación Real) */}
        <BeforeAfterSection onOpenBooking={() => handleOpenBooking('PLAN 2 · Crecimiento Local')} />

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

      {/* Floating Quick Action Contacts - Direct WhatsApp */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/34640295743?text=Hola%20Scalix,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20planes."
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp (+34 640 29 57 43)"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-2xl transition-transform hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp Scalix</span>
        </a>
      </div>

    </div>
  );
}
