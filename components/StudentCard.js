import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StudentAvatar from './StudentAvatar';
import CareerBadge from './CareerBadge';

export default function StudentCard({ data }) {
  if (!data) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.headerBar}>
          <Text style={styles.headerBarText}>VISTA PREVIA</Text>
        </View>
        <View style={styles.emptyBody}>
          <Text style={styles.emptyTitle}>SIN DATOS</Text>
          <Text style={styles.emptySubtitle}>
            Completa el formulario inferior y pulsa GENERAR TARJETA.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerBarActive}>
        <Text style={styles.headerBarTextActive}>CREDENCIAL REGISTRADA</Text>
      </View>

      <View style={styles.cardBody}>
        <StudentAvatar nombre={data.nombre} imagenUrl={data.imagenUrl} />
        <CareerBadge carrera={data.carrera} />

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>ESTADO: ACTIVO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    borderWidth: 2,
    borderColor: '#9CA3AF',
    borderStyle: 'dashed',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    overflow: 'hidden',
  },
  headerBar: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: '#D1D5DB',
    alignItems: 'center',
  },
  headerBarText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#4B5563',
    letterSpacing: 1,
  },
  emptyBody: {
    padding: 24,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#6B7280',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    fontWeight: '500',
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: '#1F2937',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    overflow: 'hidden',
  },
  headerBarActive: {
    backgroundColor: '#1F2937',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  headerBarTextActive: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  cardBody: {
    padding: 16,
  },
  statusBox: {
    borderWidth: 1.5,
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 0.5,
  },
});
