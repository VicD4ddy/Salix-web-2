# Estándares de Diseño y Experiencia de Usuario (UX/UI) del Proyecto

Cualquier cambio, adición o refactorización de código en la interfaz de usuario de este proyecto debe adherirse a los siguientes estándares coordinados por la suite de agentes de UX/UI:

## 1. Estética Visual y UI
- **Efecto Visual**: Mantener una estética moderna, limpia y de alto impacto visual (*dark mode sleek* con acentos esmeralda/azules y efectos de luz difusa).
- **Consistencia de Color**: Usar las clases semánticas y de acento del proyecto (ej. tonos `slate-900`, `slate-950`, acentos `emerald-500`, `teal-400`, `indigo-500` con bordes suaves `border-white/10`).
- **Profundidad y Textura**: Emplear glassmorphism (`backdrop-blur-md` con fondos translúcidos) para tarjetas flotantes, modales y barras de navegación.
- **Iconografía**: Usar `lucide-react` con tamaño armónico (`w-4 h-4` o `w-5 h-5`), asegurando alineación visual centrada con los textos.

## 2. Experiencia de Usuario (UX)
- **Feedback Inmediato**: Toda acción asíncrona o botón que detone procesos debe mostrar un estado visual de carga (`loading state`), deshabilitarse temporalmente para evitar doble clic y mostrar confirmación clara al finalizar.
- **Modales y Diálogos**: Deben incluir salida intuitiva (botón de cierre claro, clic fuera del modal y cierre con la tecla `Escape`).
- **Estados Vacíos**: Las listas o búsquedas sin resultados deben presentar un mensaje amigable con una sugerencia de acción para recuperar el flujo.

## 3. Conversión (CRO)
- **Botones de Acción (CTAs)**: Un CTA principal dominante por sección con texto de acción claro y orientado al beneficio del usuario (evitar verbos genéricos como "Enviar" o "Aceptar").
- **Reducción de Fricción**: Agregar micro-textos explicativos o garantías debajo de botones de conversión importantes (ej. *"Sin tarjeta requerida"*, *"Respuesta en < 2 horas"*).

## 4. Accesibilidad (a11y - WCAG 2.1 AA)
- **Elementos Semánticos**: Usar siempre etiquetas HTML nativas (`<button>`, `<a>`, `<input>`, `<label>`). No utilizar `<div onClick>` salvo que sea estrictamente necesario y cuente con `role`, `tabIndex` y manejador de teclado.
- **Foco Visible**: Mantener anillos de foco visibles y nítidos (`focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none`).
- **Etiquetas y Descripciones**: Todo botón con icono exclusivo (sin texto legible) debe incluir un atributo `aria-label` descriptivo.

## 5. Rendimiento y Mobile-First
- **Animaciones Aceleradas**: Animar exclusivamente `transform` y `opacity` utilizando `motion` o transiciones CSS fluidas (150ms - 300ms). Evitar animar `height`, `width` o `top`.
- **Diseño Mobile-First**: Garantizar que todos los componentes se adapten perfectamente a pantallas móviles estrechas (360px - 390px) sin desbordamientos horizontales ni textos cortados.
