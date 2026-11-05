import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StudentAvatar from './StudentAvatar';
import CareerBadge from './CareerBadge';

export default function StudentCard({ data }) {
  if (!data) return null;

  return (
    <View style={styles.cardWrapper}>
      {/* Etiqueta superior */}
      <View style={styles.topBadgeRow}>
        <View style={styles.badge}>
          <Ionicons name="card" size={16} color="#4F46E5" />
          <Text style={styles.badgeText}>Credencial Estudiantil</Text>
        </View>
      </View>

      <View style={styles.card}>
        {/* Banner superior decorativo */}
        <View style={styles.decorativeBanner}>
          <Ionicons name="school" size={24} color="rgba(255,255,255,0.7)" />
        </View>

        {/* Avatar por URL y Nombre */}
        <StudentAvatar nombre={data.nombre} imagenUrl={data.imagenUrl} />

        {/* Badge con la Carrera */}
        <CareerBadge carrera={data.carrera} />

        {/* Pie de la tarjeta */}
        <View style={styles.divider} />
        <View style={styles.footerRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Datos almacenados en el estado</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 24,
    marginBottom: 20,
  },
  topBadgeRow: {
    alignItems: 'center',
    marginBottom: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EEF2FF',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4F46E5',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
    paddingBottom: 16,
  },
  decorativeBanner: {
    height: 70,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 14,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
});
