import React, { useState, useEffect } from 'react';
import { Phone, Zap, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preselectedPlan?: string) => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Comparativa', href: '#comparativa' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#fcf8ff]/95 backdrop-blur-md shadow-sm border-b border-[#ccc3d6]/40 py-2.5'
          : 'bg-[#fcf8ff]/90 backdrop-blur-sm border-b border-[#ccc3d6]/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center w-full">
        {/* Logo Scalix */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR4ZD9P_pNv4qciO6A5Bl9FBjsnNyXZz-iihinPeg7SeBzMtR6zIyoR34vfMMU4QCCaNih_4R3UP3sJgKDlDXS_vjJAmN2A6b3MFqr2E9QWtfAQP1WkQkTlnTS61xm9HF_UchMYjIVdnx8L7A6GMHPSEySqbJcGNWuWXYZjRtR7D4UcvO0wfywLgUrc9Ib-A_PLhsohVqmOOQVy2rRSaliZN3LWMAcNRHp1EOCmZa3N-d5OaSlkG0quLOJMMkryjrdKA"
            alt="Scalix Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:-translate-y-0.5"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#4a4453] hover:text-[#420093] transition-colors font-medium text-sm lg:text-[15px]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenAudit}
            className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#ebddff] text-[#420093] hover:bg-[#d3bbff] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Auditoría Express</span>
          </button>
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          {/* Direct Phone Link */}
          <a
            href="tel:640295743"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9e6f7]/70 hover:bg-[#e9e6f7] text-[#4a4453] hover:text-[#420093] transition-colors text-xs font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#420093]" />
            <span>640 29 57 43</span>
          </a>

          {/* Primary CTA button */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 bg-[#5b21b6] hover:bg-[#420093] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold luminescent-glow active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <span>Agendar llamada</span>
            <Zap className="w-3.5 h-3.5 fill-current" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1b1a26] hover:bg-[#e9e6f7]/60"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcf8ff] border-b border-[#ccc3d6]/40 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#1b1a26] hover:text-[#420093] py-2 border-b border-[#ccc3d6]/20 flex justify-between items-center"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#7b7485]" />
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ebddff] text-[#420093] font-bold text-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Hacer Auditoría Express Gratis</span>
            </button>

            <div className="mt-4 pt-4 border-t border-[#ccc3d6]/30 flex flex-col gap-3">
              <a
                href="tel:640295743"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#efecfc] text-[#1b1a26] font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#420093]" />
                <span>Llamar ahora: 640 29 57 43</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#5b21b6] text-white font-bold text-sm luminescent-glow"
              >
                <span>Agendar llamada estratégica</span>
                <Zap className="w-4 h-4 fill-current" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
