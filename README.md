# 🚀 Carlos Minero - Portfolio Personal

Un portafolio moderno y responsivo que muestra mi experiencia como Full Stack Developer con animaciones fluidas y soporte bilingüe.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- **Animaciones Fluidas**: Efectos de transición y animaciones CSS personalizadas
- **Fondo Animado**: Sistema de moléculas flotantes que representa el stack tecnológico
- **Bilingüe**: Soporte completo para español e inglés
- **Responsivo**: Optimizado para todos los dispositivos
- **Performance**: Carga rápida y animaciones optimizadas
- **Accesibilidad**: Navegación por teclado y elementos semánticos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de utilidades CSS + Custom CSS para móviles
- **JavaScript Vanilla**: Interacciones y funcionalidad
- **Particles.js**: Sistema de partículas animadas de fondo
- **Font Awesome**: Iconografía
- **Google Fonts (Inter)**: Tipografía profesional

## 📁 Estructura del Proyecto

```
Portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS personalizados
├── script.js           # Funcionalidad JavaScript
└── README.md          # Documentación
```

## 🚀 Inicio Rápido

1. **Clona o descarga el proyecto**
   ```bash
   git clone [repository-url]
   cd Portafolio
   ```

2. **Abre el proyecto**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local como Live Server en VS Code

3. **¡Listo!** El portafolio estará funcionando completamente

## 🌐 Secciones

### 1. **Hero Section**
- Introducción personal con animación de typing
- Elementos flotantes representando tecnologías
- Botones de llamada a la acción

### 2. **Sobre Mí**
- Descripción profesional detallada
- Estadísticas de experiencia
- Certificaciones y educación

### 3. **Stack Tecnológico**
- Barras de progreso animadas para cada tecnología
- Porcentajes de experiencia
- Descripciones detalladas de cada skill

### 4. **Experiencia Profesional**
- Timeline interactivo
- Detalles de cada posición laboral
- Tecnologías utilizadas en cada proyecto

### 5. **Contacto**
- Formulario de contacto funcional
- Enlaces directos a redes sociales
- Información de contacto completa

## 🌍 Funcionalidad Bilingüe

El sitio incluye un toggle para cambiar entre español e inglés:
- **Español**: Idioma por defecto
- **Inglés**: Para audiencia internacional
- Cambio instantáneo sin recarga de página

## 🎨 Animaciones y Efectos

### Animaciones de Entrada
- **Fade-in**: Elementos aparecen suavemente al hacer scroll
- **Progress Bars**: Las barras de skill se llenan gradualmente
- **Timeline**: Los elementos del timeline aparecen en secuencia

### Efectos Interactivos
- **Hover Effects**: Tarjetas que se elevan al pasar el mouse
- **Ripple Effect**: Feedback visual en botones
- **Parallax**: Elementos flotantes con efecto parallax suave

### Sistema de Partículas (Particles.js)
- **4+ formas diferentes**: círculos, triángulos, polígonos, estrellas
- **Interactividad**: hover y click agregan partículas
- **Conexiones dinámicas**: líneas que unen partículas cercanas
- **Colores coordenados**: paleta que refleja el branding
- **Performance optimizada**: 60fps en todos los dispositivos

## ⌨️ Navegación por Teclado

- **Ctrl/Cmd + 1**: Ir a sección "Sobre mí"
- **Ctrl/Cmd + 2**: Ir a sección "Stack"
- **Ctrl/Cmd + 3**: Ir a sección "Experiencia"
- **Ctrl/Cmd + 4**: Ir a sección "Contacto"

## 🎮 Easter Eggs

- **Código Konami**: ↑↑↓↓←→←→BA para activar modo rainbow
- **Efectos especiales**: Varios efectos ocultos para una experiencia divertida

## 📱 Responsividad

El portafolio está completamente optimizado para todos los dispositivos:
- **Desktop**: Experiencia completa con todas las animaciones y timeline alternado
- **Tablet**: Layout adaptado con grid de 2 columnas y navegación optimizada  
- **Mobile**: 
  - ✅ Timeline vertical optimizado (todas las tarjetas alineadas)
  - ✅ Grid de una columna para mejor legibilidad
  - ✅ Menú hamburguesa funcional
  - ✅ Tamaños de fuente adaptados
  - ✅ Espaciado optimizado para pantallas táctiles
  - ✅ Particles.js responsive

## 📱 Mejoras Móviles Específicas

### Timeline de Experiencia
- **Problema solucionado**: El timeline alternado izquierda/derecha se veía mal en móviles
- **Solución implementada**: 
  - Línea del timeline movida a la izquierda
  - Todas las tarjetas alineadas de forma consistente
  - Dots de timeline reposicionados correctamente
  - Texto alineado a la izquierda para mejor legibilidad

### Media Queries Implementadas
- **@media (max-width: 768px)**: Optimizaciones completas para móviles
- **@media (min-width: 769px) and (max-width: 1024px)**: Ajustes específicos para tablets
- **Selectores específicos**: Targeting preciso de elementos problemáticos

### CSS Custom para Móviles
```css
/* Timeline mobile optimizado */
#experience .relative.mb-12 .flex.items-center {
    display: block !important;
    position: relative !important;
    padding-left: 3.5rem !important;
}
```

## 🔧 Personalización

### Cambiar Información Personal
Edita las siguientes secciones en `index.html`:
- Información de contacto
- Experiencia laboral
- Skills y porcentajes
- Enlaces a redes sociales

### Modificar Estilos
- Los estilos personalizados están en el archivo `styles.css`
- Utiliza las clases de Tailwind CSS para cambios rápidos
- Modifica las variables CSS en `styles.css` para cambios de color globales

### Agregar Nuevas Animaciones
- Las animaciones están definidas en `script.js`
- Usa Intersection Observer para efectos al hacer scroll
- CSS animations para efectos continuos

## 🌟 Características Técnicas

### Performance
- **Lazy Loading**: Animaciones solo se activan cuando son visibles
- **Throttling**: Eventos de scroll optimizados
- **CSS3**: Animaciones aceleradas por hardware

### SEO y Accesibilidad
- **HTML Semántico**: Estructura accesible para screen readers
- **Meta Tags**: Optimizado para buscadores
- **Alt Text**: Imágenes con descripciones alternativas
- **Focus Management**: Navegación por teclado optimizada

## 🔍 Solución de Problemas

### Las animaciones no funcionan
- Verifica que JavaScript esté habilitado
- Asegúrate de que el archivo `script.js` se carga correctamente

### El cambio de idioma no funciona
- Revisa la consola del navegador para errores
- Verifica que todos los elementos tengan atributos `data-es` y `data-en`

### Problemas de responsividad
- Asegúrate de tener la meta tag viewport configurada
- Verifica que Tailwind CSS se esté cargando correctamente

## 📞 Contacto

- **Email**: carlosminerodubon@gmail.com
- **WhatsApp**: +503 7367 6860
- **LinkedIn**: [Carlos Minero]
- **GitHub**: [carlosminero]

## 📝 Licencia

Este proyecto es de uso personal. Si deseas usar alguna parte del código, por favor menciona la fuente.

---

**Desarrollado con ❤️ por Carlos Minero**

*Full Stack Developer | 6+ años de experiencia | Especialista en React, React Native y .NET*

