import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function StudentAvatar({ imagenUrl, nombre }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageFrame}>
        {imagenUrl && !imageError ? (
          <>
            <Image
              source={{ uri: imagenUrl }}
              style={styles.image}
              resizeMode="cover"
              onLoadStart={() => setImageLoading(true)}
              onLoadEnd={() => setImageLoading(false)}
              onError={() => {
                setImageLoading(false);
                setImageError(true);
              }}
            />
            {imageLoading && (
              <View style={styles.loadingBox}>
                <ActivityIndicator size="small" color="#2563EB" />
              </View>
            )}
          </>
        ) : (
          <View style={styles.placeholderBox}>
            <Text style={styles.placeholderText}>
              {imageError ? 'ERROR URL' : 'FOTO'}
            </Text>
          </View>
        )}
      </View>

      {imageError ? (
        <Text style={styles.errorText}>No se pudo cargar la imagen</Text>
      ) : null}

      <View style={styles.nameBox}>
        <Text style={styles.nameLabel}>NOMBRE</Text>
        <Text style={styles.nameValue}>{nombre || '---'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 12,
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
    marginTop: 4,
    fontWeight: '700',
  },
  nameBox: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 12,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },
  nameLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  nameValue: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },
});
