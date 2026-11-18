import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerBar}>
        <Text style={styles.headerBarText}>CREDENCIAL REGISTRADA</Text>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.imageFrame}>
          {imagen && !error ? (
            <>
              <Image
                source={{ uri: imagen }}
                style={styles.image}
                resizeMode="cover"
                onLoadStart={() => {
                  setLoading(true);
                  setError(false);
                }}
                onLoadEnd={() => setLoading(false)}
                onError={() => {
                  setLoading(false);
                  setError(true);
                }}
              />
              {loading && (
                <View style={styles.loadingBox}>
                  <ActivityIndicator size="small" color="#2563EB" />
                </View>
              )}
            </>
          ) : (
            <View style={styles.placeholderBox}>
              <Text style={styles.placeholderText}>
                {error ? 'ERROR URL' : 'FOTO'}
              </Text>
            </View>
          )}
        </View>

        {error && (
          <Text style={styles.errorText}>No se pudo cargar la imagen</Text>
        )}

        <View style={styles.fieldBox}>
          <Text style={styles.fieldLabel}>NOMBRE</Text>
          <Text style={styles.fieldValue}>{nombre || '---'}</Text>
        </View>

        <View style={styles.fieldBox}>
          <Text style={styles.fieldLabel}>CARRERA</Text>
          <Text style={[styles.fieldValue, styles.carreraValue]}>
            {carrera || '---'}
          </Text>
        </View>

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>ESTADO: ACTIVO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    borderColor: '#1F2937',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    overflow: 'hidden',
  },
  headerBar: {
    backgroundColor: '#1F2937',
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  headerBarText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  cardBody: {
    padding: 16,
    alignItems: 'center',
  },
  imageFrame: {
    width: 110,
    height: 110,
    borderWidth: 2,
    borderColor: '#1F2937',
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingBox: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
  },
  placeholderText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 1,
  },
  errorText: {
    fontSize: 11,
    color: '#DC2626',
    marginBottom: 8,
    fontWeight: '700',
  },
  fieldBox: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  fieldValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  carreraValue: {
    color: '#1D4ED8',
  },
  statusBox: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: 'center',
    marginTop: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 0.5,
  },
});
