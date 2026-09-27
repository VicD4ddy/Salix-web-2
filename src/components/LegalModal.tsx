import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  type: 'aviso' | 'privacidad' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  return (
    <AnimatePresence>
      {type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#ccc3d6]/40 relative max-h-[85vh] overflow-y-auto z-10"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar modal legal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fcf8ff] hover:bg-[#efecfc] flex items-center justify-center text-[#1b1a26] transition-colors cursor-pointer"
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
                    <strong>3. Contacto directo:</strong> Para cualquier consulta legal o comercial, puede dirigirse directamente por WhatsApp a los números de atención oficial{' '}
                    <a href="https://wa.me/34640295743" target="_blank" rel="noreferrer" className="text-[#075e54] font-bold hover:underline">
                      (+34) 640 29 57 43
                    </a>{' '}
                    o{' '}
                    <a href="https://wa.me/34640243045" target="_blank" rel="noreferrer" className="text-[#075e54] font-bold hover:underline">
                      (+34) 640 24 30 45
                    </a>.
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
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#5b21b6] hover:bg-[#420093] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Entendido y cerrar
              </motion.button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
