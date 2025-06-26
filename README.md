💰 Calculadora de Propinas y Consumo

Este proyecto es una calculadora de propinas interactiva que también permite gestionar los productos consumidos en un establecimiento, calculando el subtotal, la propina y el total final.

⚙️ Tecnologías Utilizadas
Desarrollada con React, TypeScript y Tailwind CSS.

🚀 ¡Explora el Proyecto!

👉 https://glowing-bavarois-e86f6c.netlify.app/ 👈

✨ Características Principales
En esta primera versión, me he enfocado en la lógica central de la calculadora y la gestión de ítems del menú, haciendo uso eficiente de las herramientas de React:

📝 Gestión Dinámica del Menú: El menú de productos se carga dinámicamente desde un archivo db local, facilitando la adición o modificación de ítems.

➕➖ Añadir/Eliminar Consumos: Agrega productos del menú al "consumo" y elimínalos fácilmente.

💡 Cálculo de Propinas Inteligente:
Selecciona un porcentaje de propina (10%, 20%, 50%) para calcularla automáticamente.
Muestra el subtotal, el monto de la propina y el total final a pagar.

🔄 Manejo del Estado con React Hooks:
useState: Para gestionar el estado local de los ítems del menú, el consumo actual, el porcentaje de propina seleccionado y los cálculos.
useMemo: Utilizado para optimizar el rendimiento de los cálculos (subtotal, propina, total) memoizando los valores y evitando recálculos innecesarios.

🛠️ useReducer: La lógica central de la aplicación, incluyendo la gestión del consumo y los cálculos, está encapsulada en useReducer.

🛡️ Tipado Estricto con TypeScript: Todo el proyecto está completamente tipado con TypeScript, lo que asegura la robustez del código, mejora la experiencia del desarrollador y previene errores comunes en tiempo de desarrollo.

💰 Formateo de Cantidades: Utilización de Intl.NumberFormat dentro de una función helper para asegurar un formato de moneda consistente y legible en toda la aplicación.

🎨 Estilizado con Tailwind CSS: Interfaz de usuario construida con el framework de CSS de utilidad, lo que permite un desarrollo rápido y un diseño adaptable.

💻 Cómo Ejecutar el Proyecto Localmente

npm install
npm run dev

El proyecto se abrirá automáticamente en tu navegador en http://localhost:5173 (o un puerto similar).

💡 Próximas Funcionalidades
Este proyecto está en constante evolución. En futuras versiones, planeo agregar funcionalidades para mejorar la experiencia del usuario y expandir sus capacidades

🧑‍💻 Conéctate Conmigo
¡Gracias por visitar mi proyecto! Estoy activamente buscando oportunidad en el mundo del desarrollo web y me entusiasma aprender y contribuir. Si tienes alguna pregunta, comentario o una oportunidad interesante, no dudes en contactarme:

GitHub: https://github.com/luisgoweb
LinkedIn: https://www.linkedin.com/in/luis-gonzalez-dev-full-stack/
Correo Electrónico: luisgocodev@gmail.com
