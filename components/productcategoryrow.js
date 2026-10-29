import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductCategoryRow({ category }) {
  return (
    <View style={styles.categoryRow}>
      <Text style={styles.categoryText}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4F46E5',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
