import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const {
    tarjeta,
    franjaSuperior,
    puntoEstado,
    etiquetaSuperior,
    cuerpo,
    anilloFoto,
    foto,
    nombreTxt,
    pillCarrera,
    carreraTxt,
  } = styles;

  return (
    <View style={tarjeta}>
      <View style={franjaSuperior}>
        <View style={puntoEstado} />
        <Text style={etiquetaSuperior}>CREDENCIAL DIGITAL</Text>
      </View>

      <View style={cuerpo}>
        <View style={anilloFoto}>
          <Image source={{ uri: imagen }} style={foto} resizeMode="cover" />
        </View>

        <Text style={nombreTxt}>{nombre || 'Nombre del Estudiante'}</Text>

        <View style={pillCarrera}>
          <Text style={carreraTxt}>{carrera || 'Carrera no definida'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#0F172A',
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: 'rgba(99, 102, 241, 0.3)',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 8,
  },
  franjaSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: 'rgba(99, 102, 241, 0.12)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  puntoEstado: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  etiquetaSuperior: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A5B4FC',
    letterSpacing: 1.5,
  },
  cuerpo: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  anilloFoto: {
    width: 106,
    height: 106,
    borderRadius: 53,
    padding: 3,
    backgroundColor: '#6366F1',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 16,
  },
  foto: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#1E293B',
  },
  nombreTxt: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F8FAFC',
    textAlign: 'center',
    letterSpacing: -0.3,
    marginBottom: 10,
  },
  pillCarrera: {
    backgroundColor: 'rgba(99, 102, 241, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.45)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  carreraTxt: {
    fontSize: 13,
    fontWeight: '700',
    color: '#C7D2FE',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});
