---
name: ux-audit
description: "Ejecuta una auditoría integral de diseño y experiencia de usuario (UX/UI) sobre cualquier componente o página del proyecto, evaluando los 5 pilares: Estética Visual, Arquitectura UX, Conversión (CRO), Accesibilidad (a11y) y Rendimiento Responsivo."
---

# Skill: Auditoría Integral de Diseño y Experiencia de Usuario (UX/UI)

Esta habilidad coordina la evaluación sistemática del código frontend utilizando las 5 perspectivas especializadas de diseño y experiencia de usuario del proyecto.

## Cuándo Utilizar Esta Skill

Utiliza esta skill cuando:
- El usuario solicite revisar, auditar o mejorar la interfaz visual o UX de una sección, componente o página completa.
- Se agregue una nueva página o componente clave (Hero, Checkout, Formularios, Modales, Tablas de Precios).
- Se preparen cambios antes de un lanzamiento o despliegue a producción.

## Procedimiento de Auditoría en 5 Pasos

### Paso 1: Inspección de Estética Visual (`visual_aesthetics_agent`)
1. Evaluar si la composición genera un impacto visual moderno y premium (*WOW effect*).
2. Revisar la paleta de colores: verificar gradientes suaves, fondos oscuros balanceados, bordes luminosos y sombras ambientales.
3. Comprobar la tipografía: jerarquía de títulos, legibilidad de textos y *letter-spacing*.
4. Evaluar micro-animaciones y estados `hover` / `active` en botones y tarjetas.

### Paso 2: Evaluación de Arquitectura y Flujos UX (`ux_architecture_agent`)
1. Revisar la carga cognitiva (Ley de Hick): ¿hay demasiadas opciones simultáneas?
2. Verificar la visibilidad del estado del sistema: estados de carga (`loading spinners`), confirmaciones y estados vacíos (*empty states*).
3. Evaluar la ergonomía de interacción (Ley de Fitts): botones principales accesibles con suficiente área de interacción.
4. Comprobar salidas de emergencia: modales cerrables con tecla `Esc` y clic exterior.

### Paso 3: Optimización de Conversión (`cro_conversion_agent`)
1. Validar la regla de los 5 segundos: ¿se comprende la propuesta de valor inmediatamente?
2. Evaluar el Hero Section: presencia de Eyebrow, H1 claro, subtítulo de beneficio y prueba social visible.
3. Verificar los botones de llamada a la acción (CTAs): textos con verbos de valor, alto contraste visual y micro-copys reductores de fricción.
4. Revisar formularios: número mínimo de campos y eliminación de pasos innecesarios.

### Paso 4: Verificación de Accesibilidad e Inclusión (`a11y_accessibility_agent`)
1. Comprobar navegación completa por teclado y anillos de foco visibles (`focus-visible:ring-2`).
2. Validar ratios de contraste de color (WCAG 2.1 AA: 4.5:1 para texto normal, 3:1 para texto grande y elementos de UI).
3. Verificar semántica HTML5: uso correcto de `<main>`, `<section>`, `<nav>`, `<button>` y jerarquía sin saltos en `<h1>`-`<h6>`.
4. Asegurar atributos `aria-label` en iconos o botones sin texto legible.

### Paso 5: Rendimiento y Adaptabilidad Móvil (`performance_responsive_agent`)
1. Validar el diseño en breakpoints móviles pequeños (375px) sin desbordamiento horizontal (`overflow-x`).
2. Verificar Core Web Vitals: estabilidad visual (CLS = 0) y velocidad de renderizado de elementos críticos (LCP).
3. Asegurar que las animaciones solo utilicen propiedades aceleradas por GPU (`transform`, `opacity`).
4. Comprobar dimensiones explícitas o aspect-ratios en imágenes e iconos.

## Formato del Reporte de Auditoría

Al finalizar la auditoría, genera un informe estructurado:

```markdown
# Reporte de Auditoría UX/UI: [Nombre del Componente o Página]

### Resumen Ejecutivo
[Calificación general de 1 a 10 y diagnóstico en 2-3 líneas]

### 1. Estética Visual y UI
- ✅ **Fortalezas**: [Puntos positivos]
- ⚠️ **Oportunidades de mejora**: [Detalles concretos con clases o código sugerido]

### 2. Arquitectura de Información y UX
- ✅ **Fortalezas**: [Puntos positivos]
- ⚠️ **Fricciones detectadas**: [Problemas de flujo o estados faltantes]

### 3. Conversión y Copywriting (CRO)
- 🎯 **Claridad de propuesta de valor**: [Evaluación]
- 💡 **Recomendaciones de CTA y prueba social**: [Mejoras sugeridas]

### 4. Accesibilidad (WCAG 2.1 AA)
- ♿ **Hallazgos a11y**: [Contraste, foco de teclado, etiquetas ARIA]

### 5. Rendimiento y Mobile-First
- 📱 **Comportamiento responsivo**: [Revisión en móvil vs desktop]
- ⚡ **Optimización de renderizado**: [Aspect-ratios, animaciones GPU]

### Plan de Acción Priorizado
1. **[Crítico / Alto]**: [Acción 1 con código sugerido]
2. **[Medio]**: [Acción 2]
3. **[Mejora estética / Polish]**: [Acción 3]
```
