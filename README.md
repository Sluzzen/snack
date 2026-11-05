# Formulario de Registro con Imagen (Expo Snack / React Native)

Plantilla de formulario moderno desarrollado en React Native con manejo de estado mediante `useState`, validaciones en tiempo real, carga y captura de imágenes con `expo-image-picker` y estilos mediante `StyleSheet`.

Compatible para importar directamente en **[snack.expo.dev](https://snack.expo.dev/)** desde GitHub o usar localmente.

```text
Project
├── components/
│   ├── FormInput.js
│   ├── ImagePickerField.js
│   └── SummaryCard.js
├── App.js
├── package.json
└── README.md
```

---

## 📋 Campos del Formulario

1. **Nombre**: Validación de campo requerido y longitud mínima.
2. **Apellido**: Validación de campo requerido y longitud mínima.
3. **Cédula**: Teclado numérico con validación de longitud.
4. **Carga de Imagen**:
   - Selección desde la **galería** con permisos nativos.
   - Captura directa con la **cámara**.
   - Vista previa con opciones para cambiar o eliminar la fotografía.

---

## 🧩 Componentes

- **`components/FormInput.js`**: Input estilizado y reutilizable con iconos (`Ionicons`), labels y mensajes de error reactivos.
- **`components/ImagePickerField.js`**: Selector de imágenes modular utilizando `expo-image-picker`, con zona interactiva dashed y previsualización circular tipo avatar.
- **`components/SummaryCard.js`**: Tarjeta de confirmación con los datos validados y la imagen guardada en el estado.
- **`App.js`**: Manejo centralizado del estado (`formData`, `errors`, `loading`, `submittedData`) con `useState`.
