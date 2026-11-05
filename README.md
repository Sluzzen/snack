# Formulario con Tarjeta de Perfil en Expo Snack

Este proyecto respeta la estructura modular de componentes para **Expo Snack**:

```text
Project
├── components/
│   ├── FilterableTable.js      # Componente contenedor que maneja el useState y la lógica
│   ├── productablet.js         # Tarjeta de perfil completa que renderiza toda la información
│   ├── productcategoryrow.js   # Fila/Badge que presenta la Carrera
│   ├── productrow.js           # Fila con el Avatar (Imagen por URL) y el Nombre
│   └── seachbar.js             # Formulario con los inputs de Nombre, Carrera e Imagen URL
├── App.js                      # Entrada principal con SafeAreaView y diseño responsive
├── package.json                # Dependencias (@expo/vector-icons)
└── README.md
```

---

## 📋 Campos del Formulario

1. **Nombre**: Nombre completo del usuario o estudiante.
2. **Carrera**: Especialidad o carrera cursada.
3. **Imagen por URL**: URL pública directa (`http://` o `https://`).
4. **Tarjeta de visualización**:
   - Avatar circular con carga remota por URL.
   - Indicador de carga (`ActivityIndicator`) y fallback si falla la imagen.
   - Nombre destacado y badge de la carrera.
