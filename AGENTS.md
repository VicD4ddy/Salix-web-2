# Scalix Web - Suite de Agentes de Diseño, Experiencia de Usuario y SEO (UX/UI + SEO)

Este repositorio cuenta con un ecosistema de **7 subagentes especializados** en diseño web de alta gama, experiencia de usuario, optimización de conversión, accesibilidad, rendimiento, previsualización en WhatsApp / Redes Sociales y SEO Técnico / GEO.

---

## Catálogo de los 7 Agentes Especializados

### 1. `visual_aesthetics_agent` (Estética Visual y UI de Alta Gama)
- **Rol**: Director de Arte y Diseñador UI Senior.
- **Especialidad**: Diseño visual de máximo impacto ("WOW effect"), balance de paletas cromáticas, dark mode de lujo, bordes con degradados sutiles, glassmorphism (`backdrop-filter`), tipografía editorial moderna y micro-animaciones fluidas.
- **Cuándo invocarlo**:
  - *"Revisa el aspecto visual de la sección de precios y haz que se vea más moderna y premium."*
  - *"Mejora la armonía cromática y los efectos de iluminación del Hero."*
  - *"Añade micro-animaciones y estados hover enriquecidos a los botones y tarjetas."*

### 2. `ux_architecture_agent` (Arquitectura de Información y Flujo UX)
- **Rol**: Lead UX Architect y Diseñador de Interacción.
- **Especialidad**: Estructura de navegación, jerarquía mental, reducción de carga cognitiva (Ley de Hick), ergonomía táctil (Ley de Fitts), heurísticas de Jakob Nielsen, estados de feedback asíncrono (loading/empty states) y prevención de errores en formularios.
- **Cuándo invocarlo**:
  - *"Optimiza el flujo de reserva del BookingModal para reducir la fricción."*
  - *"Verifica si el formulario de auditoría proporciona feedback adecuado al usuario durante la consulta."*
  - *"Diseña el estado vacío para cuando no se encuentren resultados de búsqueda."*

### 3. `cro_conversion_agent` (Optimización de Conversión y Copywriting)
- **Rol**: Especialista en CRO y Estratega de Copywriting Persuasivo.
- **Especialidad**: Arquitectura de páginas de aterrizaje (Landing Pages), propuesta de valor en el Hero, jerarquía y contraste de CTAs, prueba social estratégica (testimonios, badges, métricas de éxito), tablas de precios psicológicas y eliminación de puntos de fuga en embudos.
- **Cuándo invocarlo**:
  - *"Audita los textos y CTAs del Hero para mejorar la tasa de conversión de clientes locales."*
  - *"Mejora la tabla comparativa y los planes de precios para incentivar la contratación del plan Pro."*
  - *"Añade elementos de prueba social y garantías que aumenten la confianza antes del formulario."*

### 4. `a11y_accessibility_agent` (Accesibilidad e Inclusión Web - WCAG 2.1 AA)
- **Rol**: Auditor Senior de Accesibilidad Web (CPACC/WAS).
- **Especialidad**: Cumplimiento riguroso de WCAG 2.1 / 2.2 nivel AA, navegación íntegra por teclado, contraste cromático reglamentario (4.5:1 / 3:1), semántica HTML5 pura (`main`, `nav`, `button`), atributos ARIA (`aria-label`, `aria-expanded`, `aria-live`) y compatibilidad con lectores de pantalla.
- **Cuándo invocarlo**:
  - *"Audita la accesibilidad del Navbar y el menú móvil para usuarios de teclado."*
  - *"Revisa si los contrastes de texto sobre fondos oscuros cumplen con WCAG 2.1 AA."*
  - *"Comprueba que todos los botones de icono tengan etiquetas accesibles."*

### 5. `performance_responsive_agent` (Rendimiento Web y Diseño Responsivo)
- **Rol**: Web Performance Engineer y Especialista en Responsive Design.
- **Especialidad**: Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1), diseño Mobile-First en pantallas estrechas (360px-390px), prevención de scroll horizontal involuntario, optimización de animaciones por hardware (`transform`/`opacity`) y renderizado óptimo en React 19.
- **Cuándo invocarlo**:
  - *"Verifica el comportamiento del Hero y el Widget de Auditoría en pantallas de iPhone y Android."*
  - *"Asegúrate de que las animaciones no provoquen caídas de FPS o reflows costosos."*
  - *"Optimiza el tamaño del bundle y los tiempos de carga en dispositivos móviles."*

### 6. `seo_social_metadata_agent` (SEO Social, Open Graph & WhatsApp Link Previews)
- **Rol**: Especialista en Metadatos Sociales, Open Graph & Optimización de Previsualización en WhatsApp.
- **Especialidad**: Tarjetas enriquecidas (Rich Cards) en WhatsApp, Telegram, LinkedIn, X/Twitter y Facebook. Optimización de `og:image` (< 300KB, 1200x630, proporciones seguras), títulos de alto CTR en chats privados, microcopys que aumentan la tasa de apertura, y metadatos de navegador (`theme-color`).
- **Cuándo invocarlo**:
  - *"Optimiza la web para que al compartir el enlace en WhatsApp aparezca una tarjeta grande con imagen atractiva y título persuasivo."*
  - *"Verifica que las etiquetas Open Graph y Twitter Cards cumplan con las especificaciones técnicas."*
  - *"Asegura que el peso del banner social no sobrepase el límite de 300 KB del scraper de WhatsApp."*

### 7. `seo_technical_geo_agent` (SEO Técnico, Schema.org JSON-LD & GEO)
- **Rol**: Lead Technical SEO & Generative Engine Optimization Architect.
- **Especialidad**: Datos estructurados Schema.org (`LocalBusiness`, `ProfessionalService`, `FAQPage`, `WebSite`), marcado geográfico (`geo.position`, `ICBM` para Palma de Mallorca), indexabilidad semántica para motores de Inteligencia Artificial (ChatGPT, Perplexity, Google Gemini) y canonicalización.
- **Cuándo invocarlo**:
  - *"Implementa los datos estructurados JSON-LD para que los motores de IA entiendan la entidad comercial de Scalix."*
  - *"Añade las etiquetas de geolocalización local para potenciar el ranking en Google Maps."*
  - *"Audita la semántica técnica y los encabezados para indexación en Google y Perplexity."*

---

## Habilidades y Reglas Incluidas

- **Skill `ux-audit`** ([`.agents/skills/ux-audit/SKILL.md`](./.agents/skills/ux-audit/SKILL.md)): Procedimiento estructurado de auditoría en 5 pasos que consolida los reportes con calificaciones y plan de acción priorizado.
- **Regla de Proyecto `ux-design-standards`** ([`.agents/rules/ux-design-standards.md`](./.agents/rules/ux-design-standards.md)): Guías automáticas para que cualquier código frontend generado o modificado mantenga la coherencia visual, accesible y de rendimiento.

---

## Cómo Invocar a los Agentes

Puedes solicitar la intervención de cualquiera de estos agentes en cualquier momento mediante instrucciones directas como:

> *"Pide al agente seo_social_metadata_agent que audite los metadatos de WhatsApp de index.html."*  
> *"Pide al agente seo_technical_geo_agent que genere los datos estructurados Schema.org JSON-LD."*  
> *"Ejecuta una auditoría completa con el agente a11y_accessibility_agent sobre el formulario de auditoría."*
