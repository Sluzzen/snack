import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileCard({ nombre, carrera, imagen }) {
  const {
    tarjeta,
    portada,
    portadaAcento,
    portadaTexto,
    cuerpo,
    marcoAvatar,
    foto,
    badgeRol,
    badgeRolTxt,
    nombreTxt,
    carreraTxt,
    divisor,
    filaMetricas,
    colMetrica,
    numMetrica,
    labelMetrica,
    colSeparador,
  } = styles;

  return (
    <View style={tarjeta}>
      <View style={portada}>
        <View style={portadaAcento} />
        <Text style={portadaTexto}>ESTUDIANTE ACTIVO</Text>
      </View>

      <View style={cuerpo}>
        <View style={marcoAvatar}>
          <Image source={{ uri: imagen }} style={foto} resizeMode="cover" />
        </View>

        <View style={badgeRol}>
          <Text style={badgeRolTxt}>PERFIL UNIVERSITARIO</Text>
        </View>

        <Text style={nombreTxt}>{nombre || 'Nombre del Estudiante'}</Text>
        <Text style={carreraTxt}>{carrera || 'Carrera no definida'}</Text>

        <View style={divisor} />

        <View style={filaMetricas}>
          <View style={colMetrica}>
            <Text style={numMetrica}>2026</Text>
            <Text style={labelMetrica}>PERIODO</Text>
          </View>
          <View style={colSeparador} />
          <View style={colMetrica}>
            <Text style={numMetrica}>REG</Text>
            <Text style={labelMetrica}>MODALIDAD</Text>
          </View>
          <View style={colSeparador} />
          <View style={colMetrica}>
            <Text style={numMetrica}>V-1</Text>
            <Text style={labelMetrica}>SEDE</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  portada: {
    height: 70,
    backgroundColor: '#1E1B4B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(99, 102, 241, 0.2)',
  },
  portadaAcento: {
    width: 32,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6366F1',
  },
  portadaTexto: {
    fontSize: 10,
    fontWeight: '800',
    color: '#818CF8',
    letterSpacing: 1.5,
  },
  cuerpo: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 22,
  },
  marcoAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -40,
    padding: 3,
    backgroundColor: '#6366F1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  foto: {
    width: '100%',
    height: '100%',
    borderRadius: 47,
    backgroundColor: '#1E293B',
  },
  badgeRol: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.4)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 12,
    marginBottom: 8,
  },
  badgeRolTxt: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A5B4FC',
    letterSpacing: 1,
  },
  nombreTxt: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F8FAFC',
    textAlign: 'center',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  carreraTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#94A3B8',
    textAlign: 'center',
  },
  divisor: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    width: '100%',
    marginVertical: 18,
  },
  filaMetricas: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  colMetrica: {
    alignItems: 'center',
    flex: 1,
  },
  numMetrica: {
    fontSize: 15,
    fontWeight: '800',
    color: '#E2E8F0',
    letterSpacing: 0.5,
  },
  labelMetrica: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 1,
    marginTop: 2,
  },
  colSeparador: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
});
