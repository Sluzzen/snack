import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function productcategoryrow({ carrera }) {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Ionicons name="ribbon-outline" size={16} color="#6D28D9" />
        <Text style={styles.text}>{carrera || 'Sin carrera asignada'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F5F3FF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD6FE',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6D28D9',
  },
});
