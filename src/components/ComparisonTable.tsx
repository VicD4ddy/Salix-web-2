import React from 'react';

interface ComparisonTableProps {
  onSelectPlanName: (planName: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectPlanName }) => {
  const rows = [
    {
      feature: 'Página web profesional y responsive',
      plan1: '✓',
      plan2: '✓',
      plan3: '✓ (Avanzada)',
      tooltip: 'Diseño a medida optimizado para móviles y velocidad',
    },
    {
      feature: 'Hosting de alta velocidad',
      plan1: '✓',
      plan2: '✓',
      plan3: '✓ (Pro)',
      tooltip: 'Servidores NVMe en España con 99.9% de uptime',
    },
    {
      feature: 'Dominio y certificado SSL propio',
      plan1: '✓',
      plan2: '✓',
      plan3: '✓',
      tooltip: 'Cifrado seguro HTTPS y gestión integral',
    },
    {
      feature: 'Mantenimiento técnico continuo',
      plan1: '✓ (Básico)',
      plan2: '✓',
      plan3: '✓ (Prioritario)',
      tooltip: 'Copias de seguridad, actualizaciones y soporte técnico directo',
    },
    {
      feature: 'SEO Básico (Palabras clave comerciales)',
      plan1: '—',
      plan2: '✓',
      plan3: '✓',
      tooltip: 'Optimización de términos de búsqueda en Google con intención de compra',
    },
    {
      feature: 'GEO (Optimización motores IA: ChatGPT, Perplexity)',
      plan1: '—',
      plan2: '✓',
      plan3: '✓ (Avanzado)',
      tooltip: 'Modelado de entidad y datos estructurados para citas en respuestas IA',
    },
    {
      feature: 'Posicionamiento Avanzado en Google Maps',
      plan1: '—',
      plan2: '—',
      plan3: '✓',
      tooltip: 'Estrategia integral para dominar el Top 3 local en radio geográfico extendido',
    },
    {
      feature: 'Reporte mensual de rendimiento y llamadas',
      plan1: '—',
      plan2: '✓',
      plan3: '✓',
      tooltip: 'Informe claro de visitas, llamadas generadas y posiciones ganadas',
    },
  ];

  return (
    <section className="py-20 bg-[#f5f2ff]/40 border-t border-[#ccc3d6]/30" id="comparativa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-display-hero-mobile md:text-headline-xl text-[#1b1a26] tracking-tight mb-3">
            Comparativa detallada de servicios
          </h2>
          <p className="text-base text-[#4a4453]">
            Todo lo que incluye cada nivel de servicio desglosado elemento por elemento.
          </p>
        </div>

        {/* Comparative Table Container */}
        <div className="overflow-x-auto rounded-2xl bg-white shadow-sm border border-[#ccc3d6]/30">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#ccc3d6]/30 bg-[#e9e6f7]/40">
                <th className="py-5 px-6 font-bold text-sm md:text-base text-[#1b1a26] w-2/5">
                  Característica
                </th>
                <th className="py-5 px-6 font-bold text-sm md:text-base text-center text-[#1b1a26] w-1/5">
                  Plan 1 · 49€
                </th>
                <th className="py-5 px-6 font-bold text-sm md:text-base text-center text-[#420093] bg-[#ebddff]/40 w-1/5 border-x border-[#ccc3d6]/30">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#5b21b6]">Recomendado</span>
                    <span>Plan 2 · 82€</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-bold text-sm md:text-base text-center text-[#1b1a26] w-1/5">
                  Plan 3 · 99€
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ccc3d6]/20 text-xs md:text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#f5f2ff]/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-[#1b1a26]">
                    <div>{row.feature}</div>
                    <span className="text-[11px] text-[#7b7485] font-normal">{row.tooltip}</span>
                  </td>
                  <td className={`py-4 px-6 text-center font-bold ${row.plan1 === '—' ? 'text-[#ccc3d6]' : 'text-[#420093]'}`}>
                    {row.plan1}
                  </td>
                  <td className={`py-4 px-6 text-center font-bold bg-[#ebddff]/15 border-x border-[#ccc3d6]/20 ${row.plan2 === '—' ? 'text-[#ccc3d6]' : 'text-[#5b21b6]'}`}>
                    {row.plan2}
                  </td>
                  <td className={`py-4 px-6 text-center font-bold ${row.plan3 === '—' ? 'text-[#ccc3d6]' : 'text-[#420093]'}`}>
                    {row.plan3}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#fcf8ff]">
                <td className="py-5 px-6 font-bold text-xs text-[#4a4453]">¿Listo para empezar?</td>
                <td className="py-5 px-6 text-center">
                  <button
                    onClick={() => onSelectPlanName('PLAN 1')}
                    className="text-xs font-bold px-3 py-1.5 rounded-full border border-[#420093] text-[#420093] hover:bg-[#420093] hover:text-white transition-colors cursor-pointer"
                  >
                    Elegir 49€
                  </button>
                </td>
                <td className="py-5 px-6 text-center bg-[#ebddff]/25 border-x border-[#ccc3d6]/30">
                  <button
                    onClick={() => onSelectPlanName('PLAN 2')}
                    className="text-xs font-bold px-4 py-2 rounded-full bg-[#5b21b6] text-white hover:bg-[#420093] transition-colors luminescent-glow cursor-pointer"
                  >
                    Elegir 82€
                  </button>
                </td>
                <td className="py-5 px-6 text-center">
                  <button
                    onClick={() => onSelectPlanName('PLAN 3')}
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#efecfc] text-[#420093] hover:bg-[#e9e6f7] transition-colors cursor-pointer"
                  >
                    Elegir 99€
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
