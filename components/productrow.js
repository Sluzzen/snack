import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductRow({ product }) {
  const isStocked = product.stocked;

  return (
    <View style={[styles.row, !isStocked && styles.rowOutOfStock]}>
      {/* Indicador de estado con icono */}
      <View style={styles.leftSection}>
        <View style={[styles.statusDot, isStocked ? styles.dotGreen : styles.dotRed]}>
          <Ionicons
            name={isStocked ? "checkmark" : "close"}
            size={12}
            color="#FFFFFF"
          />
        </View>

        <View style={styles.nameWrapper}>
          <Text style={[styles.name, !isStocked && styles.nameOutOfStock]}>
            {product.name}
          </Text>
          <Text style={styles.categorySub}>{product.category}</Text>
        </View>
      </View>

      {/* Precio e indicador de stock */}
      <View style={styles.rightSection}>
        <View style={[styles.priceTag, !isStocked && styles.priceTagDisabled]}>
          <Text style={[styles.priceText, !isStocked && styles.priceTextDisabled]}>
            {product.price}
          </Text>
        </View>
        <Text style={[styles.stockLabel, isStocked ? styles.stockIn : styles.stockOut]}>
          {isStocked ? 'Disponible' : 'Agotado'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  rowOutOfStock: {
    backgroundColor: '#FAFAFA',
    borderColor: '#F3F4F6',
    opacity: 0.85,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statusDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dotGreen: {
    backgroundColor: '#10B981',
  },
  dotRed: {
    backgroundColor: '#EF4444',
  },
  nameWrapper: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  nameOutOfStock: {
    color: '#64748B',
    textDecorationLine: 'line-through',
  },
  categorySub: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 1,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  priceTag: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E7FF',
  },
  priceTagDisabled: {
    backgroundColor: '#F1F5F9',
    borderColor: '#E2E8F0',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4F46E5',
  },
  priceTextDisabled: {
    color: '#94A3B8',
  },
  stockLabel: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
  },
  stockIn: {
    color: '#059669',
  },
  stockOut: {
    color: '#DC2626',
  },
});
