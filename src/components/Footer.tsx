import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'aviso' | 'privacidad') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="w-full bg-white border-t border-[#ccc3d6]/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col gap-8">
        
        {/* Top Row: Brand + Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#ccc3d6]/20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-1.5 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsamzKRF775_zUQljb8q3xH2XK0UD5pcSgZY4OY5PQ6vX-mvv2hlawg3DdOGZLUUNxhuFbkGNA5qNeE_Ft7Tx9k6EnJxfTF_eaTZzTZy0w0cFT8w93Eex3wJ2Qmrq3hElM12nkvRFQ4ok6atkDlwlSnwe1pAssJk1tDKKbe-G_yhS5Y6DVdq5qYt2Q_rUco-_O3ZfIxFeB0Vx9yVrLTPgDr-G1X7vX2pgDKqLHJCIf5LX5Ml9UDR-xGPMMWRzUIBhtUw"
              alt="Scalix Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:-translate-y-0.5"
            />
          </a>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-[#4a4453]">
            <a href="#servicios" className="hover:text-[#420093] transition-colors hover:underline">
              Servicios
            </a>
            <a href="#planes" className="hover:text-[#420093] transition-colors hover:underline">
              Planes
            </a>
            <a href="#comparativa" className="hover:text-[#420093] transition-colors hover:underline">
              Comparativa
            </a>
            <a href="#proceso" className="hover:text-[#420093] transition-colors hover:underline">
              Proceso
            </a>
            <a href="#faq" className="hover:text-[#420093] transition-colors hover:underline">
              FAQ
            </a>
            <button
              onClick={() => onOpenLegal('aviso')}
              className="hover:text-[#420093] transition-colors hover:underline cursor-pointer"
            >
              Aviso Legal
            </button>
            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-[#420093] transition-colors hover:underline cursor-pointer"
            >
              Política de Privacidad
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#7b7485]">
          <p>© 2025 Scalix. Todos los derechos reservados. Especialistas en SEO, GEO y Google Maps.</p>
          <p className="font-medium text-[#420093]">Palma de Mallorca · España</p>
        </div>

      </div>
    </footer>
  );
};
