import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const {
    tarjeta,
    cabeceraColor,
    contenedorAvatar,
    foto,
    cuerpo,
    nombreTxt,
    etiquetaCarrera,
    carreraTxt,
  } = styles;

  return (
    <View style={tarjeta}>
      <View style={cabeceraColor} />

      <View style={contenedorAvatar}>
        <Image source={{ uri: imagen }} style={foto} resizeMode="cover" />
      </View>

      <View style={cuerpo}>
        <Text style={nombreTxt}>{nombre || 'Nombre del Estudiante'}</Text>
        <View style={etiquetaCarrera}>
          <Text style={carreraTxt}>{carrera || 'Carrera no definida'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  cabeceraColor: {
    height: 64,
    backgroundColor: '#2563EB',
  },
  contenedorAvatar: {
    alignItems: 'center',
    marginTop: -42,
  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#EFF6FF',
  },
  cuerpo: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 22,
  },
  nombreTxt: {
    fontSize: 21,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
  },
  etiquetaCarrera: {
    backgroundColor: '#EFF6FF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  carreraTxt: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1D4ED8',
  },
});
