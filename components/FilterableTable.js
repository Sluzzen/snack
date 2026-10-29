import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './seachbar';
import ProductTable from './productablet';

export default function FilterableTable({ products }) {
  // Manejo de estado con useState para el formulario de búsqueda y filtro
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <View style={styles.container}>
      {/* Formulario de búsqueda (SearchBar) */}
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />

      {/* Tabla de Productos Filtrada (ProductTable) */}
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
