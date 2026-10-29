# Catálogo de Productos Filtrable (Thinking in React) en React Native

Este proyecto implementa la clásica arquitectura **"Thinking in React"** (Tabla de productos con formulario de búsqueda y filtro de stock) en **React Native / Expo Snack**, utilizando `useState` para el manejo del estado del formulario y `StyleSheet` para los estilos.

---

## 📁 Estructura del Proyecto

```text
Project
├── assets/
│   └── snack-icon.png
├── components/
│   ├── FilterableTable.js
│   ├── productablet.js
│   ├── productcategoryrow.js
│   ├── productrow.js
│   └── seachbar.js
├── App.js
├── package.json
└── README.md
```

---

## 🧩 Descripción de Componentes

1. **`components/seachbar.js`**:
   - Representa el **formulario** de búsqueda y filtrado.
   - Contiene un `TextInput` para el texto de filtro y un `Switch` para filtrar sólo productos disponibles en stock.
   - Envía los cambios al componente padre mediante callbacks.

2. **`components/productcategoryrow.js`**:
   - Fila destacada con estilo de categoría (por ejemplo: *FRUTAS*, *VERDURAS*).

3. **`components/productrow.js`**:
   - Renderiza el nombre del producto y su precio. Si no hay stock (`stocked: false`), tacha el nombre y añade una etiqueta visual *"Agotado"*.

4. **`components/productablet.js`**:
   - Recibe la lista de productos y los estados de filtro. Agrupa los productos por categoría y renderiza la cabecera junto con las filas correspondientes.

5. **`components/FilterableTable.js`**:
   - Componente contenedor que gestiona los dos estados clave con `useState`:
     - `filterText`: Cadena con el texto escrito en el buscador.
     - `inStockOnly`: Booleano que determina si se filtran productos sin stock.
   - Sincroniza `seachbar.js` con `productablet.js`.

6. **`App.js`**:
   - Vista principal con diseño responsive, `SafeAreaView`, `KeyboardAvoidingView` y los datos iniciales de productos.
