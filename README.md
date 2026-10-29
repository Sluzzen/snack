# Catálogo de Productos Filtrable en React Native (Expo Snack)

Proyecto compatible para importar directamente en **[snack.expo.dev](https://snack.expo.dev/)** desde GitHub o clonar localmente.

```text
Project
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

1. **`components/seachbar.js`**: Formulario de búsqueda con `TextInput` y filtro de disponibilidad con `Switch`.
2. **`components/productcategoryrow.js`**: Cabecera para separar por categorías de productos.
3. **`components/productrow.js`**: Fila con el nombre, precio e indicador de stock.
4. **`components/productablet.js`**: Contenedor de la tabla que organiza y renderiza las filas según los filtros aplicados.
5. **`components/FilterableTable.js`**: Componente que controla el estado con `useState` (`filterText`, `inStockOnly`).
6. **`App.js`**: Entrada principal de la aplicación.
