import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'aviso' | 'privacidad' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#ccc3d6]/40 relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fcf8ff] hover:bg-[#efecfc] flex items-center justify-center text-[#1b1a26] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-[#5b21b6]" />
          <span className="text-xs font-bold text-[#5b21b6] uppercase tracking-wider">
            {type === 'aviso' ? 'Información Legal' : 'Protección de Datos'}
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-[#1b1a26] mb-4">
          {type === 'aviso' ? 'Aviso Legal' : 'Política de Privacidad y Cookies'}
        </h3>

        <div className="text-xs md:text-sm text-[#4a4453] space-y-4 leading-relaxed">
          {type === 'aviso' ? (
            <>
              <p>
                <strong>1. Datos Identificativos:</strong> En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que este sitio web es operado por <strong>Scalix Digital</strong>, con sede en Palma de Mallorca, Islas Baleares, España.
              </p>
              <p>
                <strong>2. Propiedad Intelectual:</strong> Todos los contenidos de este sitio web, incluyendo textos, diseños gráficos, códigos fuente, logotipos y marcas son propiedad exclusiva de Scalix o de terceros que han autorizado su uso, quedando expresamente prohibida su reproducción o distribución sin consentimiento previo.
              </p>
              <p>
                <strong>3. Contacto directo:</strong> Para cualquier consulta legal o comercial, puede dirigirse por vía telefónica a los números de atención oficial 640 29 57 43 o 640 24 30 45.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Responsable del Tratamiento:</strong> Scalix Digital, con domicilio en Palma de Mallorca (España), garantiza la confidencialidad y el debido tratamiento de los datos personales facilitados a través de los formularios de contacto y solicitud de auditoría.
              </p>
              <p>
                <strong>2. Finalidad del Tratamiento:</strong> Los datos personales recogidos (nombre, teléfono, correo electrónico y datos del negocio) se utilizarán exclusivamente para responder a las consultas, agendar citas de diagnóstico estratégico y remitir informes de visibilidad solicitados.
              </p>
              <p>
                <strong>3. Derechos del Usuario:</strong> El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación y oposición en cualquier momento contactando con nuestro equipo. No cedemos datos a terceros con fines publicitarios.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#ccc3d6]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Entendido y cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
