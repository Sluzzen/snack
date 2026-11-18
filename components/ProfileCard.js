import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const { tarjeta, foto, nombreTxt, carreraTxt } = styles;

  return (
    <View style={tarjeta}>
      <Image source={{ uri: imagen }} style={foto} />
      <Text style={nombreTxt}>{nombre || 'Nombre del Estudiante'}</Text>
      <Text style={carreraTxt}>{carrera || 'Carrera no definida'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#007bff',
    marginBottom: 12,
  },
  nombreTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  carreraTxt: {
    fontSize: 15,
    color: '#666666',
  },
});
