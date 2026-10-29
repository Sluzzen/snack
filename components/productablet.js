import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCategoryRow from './productcategoryrow';
import ProductRow from './productrow';

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;
  let matchCount = 0;

  products.forEach((product) => {
    // Filtrar por texto de búsqueda
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }

    // Filtrar por stock
    if (inStockOnly && !product.stocked) {
      return;
    }

    matchCount += 1;

    // Agregar categoría si cambia
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
    <View style={styles.cardContainer}>
      {/* Cabecera superior de la tabla */}
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Ionicons name="list" size={18} color="#4F46E5" />
          <Text style={styles.headerTitle}>Resultados</Text>
        </View>
        <View style={styles.badgeCount}>
          <Text style={styles.badgeCountText}>
            {matchCount} {matchCount === 1 ? 'producto' : 'productos'}
          </Text>
        </View>
      </View>

      {/* Columnas */}
      <View style={styles.columnsHeader}>
        <Text style={styles.colLabel}>Producto / Estado</Text>
        <Text style={[styles.colLabel, styles.colRight]}>Precio</Text>
      </View>

      {/* Contenido de filas */}
      {rows.length > 0 ? (
        <View style={styles.rowsList}>{rows}</View>
      ) : (
        <View style={styles.emptyBox}>
          <View style={styles.emptyIconCircle}>
            <Ionicons name="search-outline" size={32} color="#94A3B8" />
          </View>
          <Text style={styles.emptyTitle}>Sin coincidencias</Text>
          <Text style={styles.emptySubtitle}>
            Prueba ajustando el término de búsqueda o desactivando el filtro de stock.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  badgeCount: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  badgeCountText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '700',
  },
  columnsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  colLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  colRight: {
    textAlign: 'right',
  },
  rowsList: {
    marginTop: 4,
  },
  emptyBox: {
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
  },
  emptyIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 18,
  },
});
