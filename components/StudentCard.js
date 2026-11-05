import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentCard({ data }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!data) return null;

  return (
    <View style={styles.cardWrapper}>
      {/* Etiqueta superior */}
      <View style={styles.topBadgeRow}>
        <View style={styles.badge}>
          <Ionicons name="card" size={16} color="#4F46E5" />
          <Text style={styles.badgeText}>Credencial de Estudiante</Text>
        </View>
      </View>

      <View style={styles.card}>
        {/* Franja decorativa superior */}
        <View style={styles.decorativeBanner}>
          <Ionicons name="school" size={24} color="rgba(255,255,255,0.7)" />
        </View>

        {/* Sección de la Imagen por URL */}
        <View style={styles.avatarContainer}>
          {data.imagenUrl && !imageError ? (
            <View style={styles.imageBox}>
              <Image
                source={{ uri: data.imagenUrl }}
                style={styles.avatar}
                resizeMode="cover"
                onLoadStart={() => setImageLoading(true)}
                onLoadEnd={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
              />
              {imageLoading && (
                <View style={styles.loadingOverlay}>
                  <ActivityIndicator size="small" color="#4F46E5" />
                </View>
              )}
            </View>
          ) : (
            <View style={styles.avatarFallback}>
              <Ionicons
                name={imageError ? 'alert-circle-outline' : 'person'}
                size={40}
                color={imageError ? '#EF4444' : '#818CF8'}
              />
            </View>
          )}

          {imageError && (
            <Text style={styles.errorImgText}>No se pudo cargar la imagen desde la URL</Text>
          )}
        </View>

        {/* Información del Estudiante */}
        <View style={styles.infoSection}>
          <Text style={styles.nameText}>{data.nombre}</Text>

          <View style={styles.careerPill}>
            <Ionicons name="ribbon-outline" size={16} color="#4F46E5" />
            <Text style={styles.careerText}>{data.carrera}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.footerRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Perfil Activo en Estado</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 26,
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
  },
  decorativeBanner: {
    height: 70,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -45,
  },
  imageBox: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#F1F5F9',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarFallback: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImgText: {
    fontSize: 11,
    color: '#EF4444',
    marginTop: 6,
    fontWeight: '500',
  },
  infoSection: {
    padding: 20,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 8,
  },
  careerPill: {
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
  careerText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6D28D9',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    width: '100%',
    marginVertical: 16,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
