import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CareerBadge({ carrera }) {
  return (
    <View style={styles.box}>
      <Text style={styles.label}>CARRERA</Text>
      <Text style={styles.value}>{carrera || '---'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1D4ED8',
  },
});
