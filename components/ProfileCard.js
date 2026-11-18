import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const { card, foto, info, nombreTxt, carreraPill, carreraTxt } = styles;

  return (
    <View style={card}>
      <Image source={{ uri: imagen }} style={foto} />
      <View style={info}>
        <Text style={nombreTxt}>{nombre || 'Nombre del Estudiante'}</Text>
        <View style={carreraPill}>
          <Text style={carreraTxt}>{carrera || 'Carrera no definida'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#6366F1',
    backgroundColor: '#EEF2FF',
    marginBottom: 16,
  },
  info: {
    alignItems: 'center',
    width: '100%',
  },
  nombreTxt: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
  },
  carreraPill: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  carreraTxt: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },
});
