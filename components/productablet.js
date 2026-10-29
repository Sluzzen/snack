import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductCategoryRow from './productcategoryrow';
import ProductRow from './productrow';

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // Filtrar por texto de búsqueda
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }

    // Filtrar por disponibilidad en stock
    if (inStockOnly && !product.stocked) {
      return;
    }

    // Agregar fila de categoría si cambia de grupo
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    // Agregar fila del producto
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );

    lastCategory = product.category;
  });

  return (
    <View style={styles.tableContainer}>
      {/* Cabecera de la Tabla */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={[styles.headerCell, styles.headerCellRight]}>Precio</Text>
      </View>

      {/* Filas renderizadas */}
      {rows.length > 0 ? (
        rows
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No se encontraron productos.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E2E8F0',
  },
  headerCell: {
    fontSize: 14,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
  },
  headerCellRight: {
    textAlign: 'right',
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyText: {
    color: '#94A3B8',
    fontSize: 14,
    fontStyle: 'italic',
  },
});
