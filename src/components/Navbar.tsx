import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'Simulador GEO', href: '#geo-simulator' },
    { name: 'Antes vs Después', href: '#antes-despues' },
    { name: 'Planes', href: '#planes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fcf8ff]/95 backdrop-blur-md shadow-sm border-b border-[#ccc3d6]/40 py-2.5'
          : 'bg-[#fcf8ff]/90 backdrop-blur-sm border-b border-[#ccc3d6]/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center w-full">
        {/* Logo Scalix */}
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:outline-hidden rounded-lg p-1" 
          aria-label="Scalix - Ir al inicio"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR4ZD9P_pNv4qciO6A5Bl9FBjsnNyXZz-iihinPeg7SeBzMtR6zIyoR34vfMMU4QCCaNih_4R3UP3sJgKDlDXS_vjJAmN2A6b3MFqr2E9QWtfAQP1WkQkTlnTS61xm9HF_UchMYjIVdnx8L7A6GMHPSEySqbJcGNWuWXYZjRtR7D4UcvO0wfywLgUrc9Ib-A_PLhsohVqmOOQVy2rRSaliZN3LWMAcNRHp1EOCmZa3N-d5OaSlkG0quLOJMMkryjrdKA"
            alt="Scalix Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform"
            width="128"
            height="36"
          />
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#4a4453] hover:text-[#420093] transition-colors font-medium text-sm lg:text-[15px] focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:outline-hidden rounded-sm px-1 py-0.5 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5b21b6] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAudit}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ebddff] text-[#420093] hover:bg-[#d3bbff] transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:outline-hidden shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#5b21b6]" aria-hidden="true" />
            <span>Auditoría Express</span>
          </motion.button>
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          {/* Primary CTA button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 bg-[#5b21b6] hover:bg-[#420093] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold luminescent-glow transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:ring-offset-2 focus-visible:outline-hidden"
          >
            <span>Agendar llamada</span>
            <Zap className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
          </motion.button>

          {/* Mobile Menu Button with aria-expanded */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1b1a26] hover:bg-[#e9e6f7]/60 focus-visible:ring-2 focus-visible:ring-[#5b21b6] focus-visible:outline-hidden cursor-pointer"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#fcf8ff] border-b border-[#ccc3d6]/40 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
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
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ebddff] text-[#420093] font-bold text-sm cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Hacer Auditoría Express Gratis</span>
              </button>

              <div className="mt-4 pt-4 border-t border-[#ccc3d6]/30 flex flex-col gap-3">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#5b21b6] text-white font-bold text-sm luminescent-glow cursor-pointer"
                >
                  <span>Agendar llamada estratégica</span>
                  <Zap className="w-4 h-4 fill-current" />
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
