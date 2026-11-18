import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const {
    tarjeta,
    banner,
    badgeStatus,
    puntoStatus,
    txtStatus,
    marcoAvatar,
    foto,
    contenido,
    nombreTxt,
    carreraPill,
    carreraTxt,
  } = styles;

  return (
    <View style={tarjeta}>
      <View style={banner}>
        <View style={badgeStatus}>
          <View style={puntoStatus} />
          <Text style={txtStatus}>ESTUDIANTE REGISTRADO</Text>
        </View>
      </View>

      <View style={marcoAvatar}>
        <Image source={{ uri: imagen }} style={foto} resizeMode="cover" />
      </View>

      <View style={contenido}>
        <Text style={nombreTxt}>{nombre || 'Nombre del Estudiante'}</Text>
        <View style={carreraPill}>
          <Text style={carreraTxt}>{carrera || 'Carrera no definida'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 6,
  },
  banner: {
    height: 78,
    backgroundColor: '#1E40AF',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 14,
    paddingRight: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#60A5FA',
  },
  badgeStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  puntoStatus: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4ADE80',
  },
  txtStatus: {
    fontSize: 9,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  marcoAvatar: {
    alignSelf: 'center',
    marginTop: -48,
    width: 96,
    height: 96,
    borderRadius: 48,
    padding: 3,
    backgroundColor: '#FFFFFF',
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 7,
  },
  foto: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    backgroundColor: '#EFF6FF',
  },
  contenido: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  nombreTxt: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: -0.4,
    marginBottom: 8,
  },
  carreraPill: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1.5,
    borderColor: '#93C5FD',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  carreraTxt: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1D4ED8',
    letterSpacing: 0.2,
  },
});
