import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.carrera}>{carrera}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#4F46E5',
    marginBottom: 14,
  },
  infoContainer: {
    alignItems: 'center',
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  carrera: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '600',
  },
});
