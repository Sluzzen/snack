import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StudentAvatar from './StudentAvatar';
import CareerBadge from './CareerBadge';

export default function StudentCard({ data }) {
  if (!data) {
    return (
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <Ionicons name="card-outline" size={28} color="#94A3B8" />
        </View>
        <Text style={styles.emptyTitle}>Tarjeta no generada</Text>
        <Text style={styles.emptySubtitle}>
          Ingresa tus datos abajo y presiona "Generar Tarjeta" para visualizarla aquí.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.topBadgeRow}>
        <View style={styles.badge}>
          <Ionicons name="checkmark-circle" size={16} color="#10B981" />
          <Text style={styles.badgeText}>Credencial Activa</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.decorativeBanner}>
          <Ionicons name="school" size={24} color="rgba(255,255,255,0.7)" />
        </View>

        <StudentAvatar nombre={data.nombre} imagenUrl={data.imagenUrl} />

        <CareerBadge carrera={data.carrera} />

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
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#CBD5E1',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  emptyIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 17,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  topBadgeRow: {
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#DCFCE7',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#15803D',
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
