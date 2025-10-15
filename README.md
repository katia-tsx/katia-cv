# Portfolio - Katia Nathaly Pujols Almanzar

Un portfolio moderno y responsive recreado fielmente basado en el diseño original de Shourya Khanna, adaptado para mostrar el trabajo y experiencia de Katia Nathaly Pujols Almanzar.

## 🚀 Características

- **Diseño Fiel**: Recreación exacta del diseño original con adaptaciones personalizadas
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Performance**: Optimización de imágenes y carga rápida
- **Accesibilidad**: HTML semántico y mejores prácticas de accesibilidad

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Radix UI + Custom Components
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Temas**: next-themes

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd katia-cv

# Instalar dependencias
npm install
# o
pnpm install
# o
yarn install

# Ejecutar en desarrollo
npm run dev
# o
pnpm dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🎨 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── portfolio/         # Componentes del portfolio
│   │   ├── header.tsx     # Sección hero con título estilizado
│   │   ├── about.tsx      # Sección sobre mí con tarjeta ID
│   │   ├── experience.tsx # Experiencia profesional y académica
│   │   ├── contact-software.tsx # Contacto e iconos de software
│   │   └── projects.tsx   # Showcase de proyectos con tarjetas coloreadas
│   └── ui/                # Componentes UI reutilizables
└── lib/
    └── utils.ts           # Funciones utilitarias
```

## 🎯 Secciones del Portfolio

### 1. Header/Hero
- Título "Portfolio" con letras rotadas estilizadas
- Ilustración del diseñador (tu foto)
- Indicador de año ('25)

### 2. About Me
- Introducción personal
- Tarjeta ID con efecto glassmorphism
- Descripción profesional

### 3. GitHub Streak
- Racha actual de GitHub (15 días)
- Contribuciones totales
- Gráfico de actividad reciente
- Enlace directo al perfil de GitHub

### 4. Tech Stack
- Stack tecnológico completo con iconos
- Categorías: Frontend, Backend, Database, DevOps, Tools
- Niveles de habilidad con barras de progreso
- Estadísticas resumidas

### 5. Experience
- Experiencia profesional (2 columnas)
- Experiencia académica y voluntariado
- Timeline limpio y organizado

### 6. Contact & Software
- Enlaces de contacto con iconos de marca
- Showcase de software Adobe
- Interacciones hover

### 7. Projects
- 5 proyectos con tarjetas coloreadas
- Mockups de dispositivos
- Texto de fondo "CONTENT"
- Números de proyecto superpuestos

## 📱 Diseño Responsive

El portfolio está optimizado para:
- **Móvil**: < 768px (1 columna)
- **Tablet**: 768px - 1024px (2-3 columnas)
- **Desktop**: > 1024px (5 columnas completas)

### Características Responsive:
- Tipografía fluida usando `clamp()`
- Grid adaptativo basado en tamaño de pantalla
- Imágenes responsivas con Next.js Image
- Espaciado consistente en todos los breakpoints

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
portfolio: {
  blue: '#E3F2FD',      /* Proyectos 1 & 5 */
  beige: '#F5F5DC',     /* Proyecto 2 */
  green: '#E8F5E8',     /* Proyecto 3 */
  red: '#FFEBEE',       /* Proyecto 4 */
  lightBlue: '#E1F5FE'  /* Azul alternativo */
}
```

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Manuscrita**: Brush Script MT (para texto "free font")
- **Título Estilizado**: Letras rotadas con transformaciones CSS

## 🔧 Personalización

### Para cambiar contenido:
1. **Experiencia**: Editar arrays en `experience.tsx`
2. **Proyectos**: Modificar datos en `projects.tsx`
3. **Contacto**: Actualizar enlaces en `contact-software.tsx`
4. **Sobre mí**: Cambiar texto en `about.tsx`

### Para cambiar diseño:
1. **Colores**: Actualizar `tailwind.config.ts`
2. **Tipografía**: Modificar `globals.css`
3. **Layout**: Ajustar sistemas de grid
4. **Imágenes**: Reemplazar assets en `/public`

## 📁 Assets Requeridos

```
public/
├── illustration.png          # Ilustración hero
├── id-card-photo.png         # Foto sección about
├── project1-mockup1.png      # Mockups proyecto 1
├── project1-mockup2.png
├── project2-tablet.png       # Mockups proyecto 2
├── project2-phone.png
├── project3-phone1.png       # Mockups proyecto 3
├── project3-phone2.png
├── project4-laptop.png       # Mockup proyecto 4
├── project5-phone1.png       # Mockups proyecto 5
└── project5-phone2.png
```

## 🚀 Despliegue

```bash
# Build de producción
npm run build

# Servidor de producción
npm run start
```

### Desplegar en Vercel:
1. Conecta tu repositorio a Vercel
2. Configura variables de entorno si es necesario
3. Despliega automáticamente

## 📚 Documentación

Para documentación detallada de desarrollo, consulta [DEVELOPMENT.md](./DEVELOPMENT.md).

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ por el equipo de desarrollo**
