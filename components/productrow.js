import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductRow({ product }) {
  const nameStyle = product.stocked ? styles.inStock : styles.outOfStock;

  return (
    <View style={styles.row}>
      <View style={styles.nameContainer}>
        <Text style={[styles.name, nameStyle]}>{product.name}</Text>
        {!product.stocked && (
          <View style={styles.outBadge}>
            <Text style={styles.outBadgeText}>Agotado</Text>
          </View>
        )}
      </View>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 15,
  },
  inStock: {
    color: '#0F172A',
    fontWeight: '500',
  },
  outOfStock: {
    color: '#EF4444',
    textDecorationLine: 'line-through',
  },
  outBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  outBadgeText: {
    color: '#DC2626',
    fontSize: 10,
    fontWeight: '700',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
  },
});
