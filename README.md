# Pinazo Decoraciones Web

Sitio web corporativo de alta gama para la empresa de decoración e infraestructura de eventos Pinazo Decoraciones, ubicada en Valencia. El proyecto está implementado como una Aplicación de una Sola Página (SPA) moderna, enfocada en la velocidad y el diseño visual.

***

## Tecnologías Empleadas

El proyecto utiliza un stack de desarrollo *frontend* moderno y ligero:

| Componente | Tecnología | Versión | Propósito |
| :--- | :--- | :--- | :--- |
| **Framework UI** | **React** | `^19.2.1` | Biblioteca principal para construir la interfaz de usuario. |
| **Tooling** | **Vite** | `^6.2.0` | Empaquetador y servidor de desarrollo rápido. |
| **Lenguaje** | **TypeScript** | `~5.8.2` | Añade tipado estático para mejorar la robustez y mantenibilidad del código. |
| **Estilos** | **Tailwind CSS** | (CDN) | Framework CSS de utilidad para un diseño rápido y responsivo. |
| **Iconografía** | **Lucide React** | `^0.555.0` | Conjunto de iconos modulares utilizados en la UI. |
| **Fuentes** | **Playfair Display & Lato** | (Google Fonts) | Usadas para estilos `serif` y `sans` respectivamente, definidas en `tailwind.config`. |

## Características Clave

* **SPA con Enrutamiento Lógico:** La navegación se gestiona internamente mediante el estado `currentView` en `App.tsx` (State-based Routing), cambiando el componente de página renderizado sin recargar la página.
* **Tema Oscuro (Dark Mode):** Implementado con clases de Tailwind CSS a nivel del elemento `<html>` y gestionado con un *state* en `App.tsx` para una transición de color fluida.
* **Componentes Modulares:** Estructura limpia con componentes reutilizables (como `Button` y `SectionHeading`) en la carpeta `ui`.

---