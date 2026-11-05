# Plantilla Expo Snack: Formulario y Tarjeta de Perfil

Proyecto desarrollado en **React Native** con componentes modulares con nombres descriptivos y claros, manejo de estado centralizado con `useState` y estilos limpios mediante `StyleSheet`.

```text
Project
├── components/
│   ├── InputField.js      # Input reutilizable con label, icono y manejo de errores
│   ├── StudentForm.js     # Formulario con los campos Nombre, Carrera e Imagen URL
│   ├── StudentAvatar.js   # Avatar circular que procesa y muestra la imagen remota por URL
│   ├── CareerBadge.js     # Etiqueta / Pill estilizada para la carrera
│   └── StudentCard.js     # Tarjeta credencial completa que integra avatar, datos y diseño
├── App.js                 # Vista principal con estado useState y lógica del formulario
├── package.json           # Dependencias limpias (@expo/vector-icons)
└── README.md
```

---

## 🧩 Descripción de Componentes

- **`InputField.js`**: Componente atómico de entrada de texto. Incluye iconos temáticos de `@expo/vector-icons`, estados de error y validaciones visuales.
- **`StudentForm.js`**: Ensambla los campos de entrada (**Nombre**, **Carrera** e **Imagen por URL**), botón de acción *"Generar Tarjeta"*, y accesos rápidos *"Cargar Ejemplo"* y *"Limpiar"*.
- **`StudentAvatar.js`**: Renderiza la imagen remota por URL con `ActivityIndicator` durante la carga y fallback en caso de error en el enlace.
- **`CareerBadge.js`**: Presenta la especialidad / carrera en un badge con iconos violeta.
- **`StudentCard.js`**: La tarjeta final que une el avatar, nombre y carrera en un diseño tipo credencial.
- **`App.js`**: Maneja el estado global del formulario y las validaciones correspondientes.
