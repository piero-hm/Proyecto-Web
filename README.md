# Portafolio de Proyectos Web: Panadería, Microfinanzas y Consultoría

Este repositorio contiene el código fuente de un proyecto web multifacético desarrollado con Astro. El objetivo es demostrar la capacidad de crear soluciones web rápidas, modernas y adaptadas a distintas necesidades de negocio, sirviendo como un portafolio profesional.

## 1. Objetivo y Justificación del Proyecto

### Objetivo
El objetivo principal de este proyecto es **demostrar la competencia en el desarrollo frontend moderno a través de 3 casos de uso distintos**, con la meta de atraer a un 50% más de potenciales clientes o reclutadores en los próximos 6 meses a través de un portafolio interactivo y de alto rendimiento.

### Justificación
En el mercado actual, los desarrolladores web necesitan demostrar versatilidad. Este proyecto no solo sirve como una vitrina de habilidades técnicas, sino que también aborda las necesidades de tres sectores de alta demanda:
1.  **E-commerce local (Panadería):** Muestra la capacidad de crear catálogos de productos atractivos y funcionales.
2.  **Servicios Financieros (Microfinanzas):** Demuestra la habilidad para manejar formularios complejos y herramientas interactivas de cálculo.
3.  **Servicios Profesionales (Consultora):** Prueba la competencia en la presentación clara de servicios y planes de precios.

El proyecto está justificado por la necesidad de un **desarrollador junior** de tener un portafolio robusto que hable por sí mismo ante un "usuario experto" (ej. un líder técnico o gerente de contratación).

## 2. Historias de Usuario (HU), Requisitos Funcionales (RF) y No Funcionales (RNF)

A continuación, se presentan ejemplos clave para cada subproyecto:

### Panadería "El Dulce Rincón"

*   **HU-01:** Como cliente con antojo de postres, quiero ver todos los productos disponibles con fotos y precios, para poder decidir qué comprar.
    *   **RF-01.1:** El sistema debe mostrar una galería de productos con su imagen, nombre y precio.
    *   **RF-01.2:** Debe existir un modal o vista de detalle para cada producto.
    *   **RNF-01:** Las imágenes de los productos deben cargar en menos de 2 segundos en una conexión 3G.

### Microfinanzas "Crédito Confianza"

*   **HU-02:** Como un pequeño empresario, quiero usar una calculadora de préstamos para estimar mis pagos mensuales, para evaluar si puedo permitirme un crédito.
    *   **RF-02.1:** El sistema debe proveer un formulario donde el usuario pueda ingresar el monto del préstamo y el plazo en meses.
    *   **RF-02.2:** La cuota mensual estimada debe calcularse y mostrarse automáticamente sin necesidad de recargar la página.
    *   **RNF-02:** El cálculo del préstamo debe realizarse en el lado del cliente (client-side) para una respuesta instantánea.

### Consultora "Impulso Digital"

*   **HU-03:** Como dueño de una startup, quiero comparar los diferentes planes de servicio y sus precios, para poder elegir el que mejor se ajuste a mi presupuesto y necesidades.
    *   **RF-03.1:** La página debe mostrar una sección de precios con al menos 3 planes de servicio.
    *   **RF-03.2:** Cada plan debe detallar las características que incluye y su costo.
    *   **RNF-03:** La página web debe tener una disponibilidad del 99.8% (Uptime).

## 3. Arquitectura y Tecnologías

### Arquitectura
El proyecto utiliza una **Arquitectura de Múltiples Páginas (MPA)** generada por **Astro**. Esta elección es deliberada para maximizar el rendimiento y el SEO, ya que Astro renderiza todo el HTML en el servidor y envía cero JavaScript al cliente por defecto.

La interactividad se logra a través de **"Islas de Astro" (Astro Islands)**. Componentes específicos como la `LoanCalculator` o el `ProductModal` se cargan como islas interactivas, permitiendo tener funcionalidades dinámicas sin penalizar el tiempo de carga inicial de la página.

### Tecnologías Utilizadas
*   **Framework Principal: [Astro](https://astro.build/)**
    *   **Justificación:** Se eligió por su enfoque en el rendimiento (performance-first). Es ideal para sitios ricos en contenido como este portafolio, garantizando tiempos de carga casi instantáneos y una excelente experiencia de usuario.
*   **Estilos: [Tailwind CSS](https://tailwindcss.com/)**
    *   **Justificación:** Permite un desarrollo de UI rápido y consistente mediante un sistema de clases de utilidad. Facilita la creación de diseños complejos y responsivos directamente en el HTML.
*   **Lenguaje: [TypeScript](https://www.typescriptlang.org/)**
    *   **Justificación:** Añade un sistema de tipos a JavaScript, lo que mejora la robustez del código, reduce errores en tiempo de ejecución y facilita el mantenimiento a largo plazo.

## 4. Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abre tu navegador y visita `http://localhost:4321`.

## 5. Comandos Útiles

- `npm run build`: Compila el proyecto para producción en la carpeta `dist/`.
- `npm run preview`: Previsualiza la versión de producción localmente.