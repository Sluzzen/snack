# Formulario con Tarjeta Estudiantil (Expo Snack / React Native)

Plantilla de formulario moderno desarrollado en React Native con manejo de estado mediante `useState`, validaciones y presentación en tarjeta credencial con imagen remota por URL.

Compatible para importar directamente en **[snack.expo.dev](https://snack.expo.dev/)** desde GitHub o usar localmente.

```text
Project
├── components/
│   ├── FormInput.js       # Input reutilizable con validación, iconos y estilos
│   └── StudentCard.js     # Tarjeta credencial que renderiza la imagen por URL y los datos
├── App.js                 # Manejo centralizado del estado con useState
├── package.json           # Dependencias (@expo/vector-icons)
└── README.md
```

---

## 📋 Campos del Formulario

1. **Nombre**: Nombre completo del estudiante o usuario.
2. **Carrera**: Carrera o especialidad cursada.
3. **Imagen por URL**: Enlace directo a la imagen (`http://` o `https://`).
4. **Tarjeta de Presentación (`StudentCard`)**:
   - Foto circular con sombra y borde decorativo.
   - Indicador de carga (`ActivityIndicator`) mientras se descarga la imagen.
   - Manejo de fallback si la URL es inválida o no carga.
   - Nombre destacado y pill con la carrera.
