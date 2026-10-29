import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCategoryRow({ category }) {
  // Asignar icono dinámico según categoría
  const getCategoryIcon = () => {
    const cat = category.toLowerCase();
    if (cat.includes('fruta')) return 'nutrition-outline';
    if (cat.includes('verdura') || cat.includes('vegetal')) return 'leaf-outline';
    return 'pricetag-outline';
  };

  return (
    <View style={styles.categoryRow}>
      <View style={styles.categoryBadge}>
        <Ionicons name={getCategoryIcon()} size={16} color="#4F46E5" />
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      <View style={styles.dividerLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EEF2FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4F46E5',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
    marginLeft: 10,
  },
});
