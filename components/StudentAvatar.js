import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentAvatar({ imagenUrl, nombre }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        {imagenUrl && !imageError ? (
          <>
            <Image
              source={{ uri: imagenUrl }}
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
          </>
        ) : (
          <View style={styles.avatarFallback}>
            <Ionicons
              name={imageError ? 'alert-circle-outline' : 'person'}
              size={42}
              color={imageError ? '#EF4444' : '#818CF8'}
            />
          </View>
        )}
      </View>

      {imageError && (
        <Text style={styles.errorImgText}>No se pudo cargar la imagen desde la URL</Text>
      )}

      <Text style={styles.nameText}>{nombre || 'Nombre del Estudiante'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -45,
    marginBottom: 6,
  },
  imageBox: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#F1F5F9',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    height: '100%',
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
  nameText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginTop: 10,
  },
});
