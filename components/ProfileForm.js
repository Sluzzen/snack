import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ProfileForm({
  inputNombre,
  setInputNombre,
  inputCarrera,
  setInputCarrera,
  inputImagen,
  setInputImagen,
  onGuardar,
  onCargarImagen,
}) {
  const {
    formulario,
    cabecera,
    tagSeccion,
    titulo,
    subtitulo,
    campo,
    labelRow,
    etiqueta,
    etiquetaReq,
    cajaInput,
    filaUrl,
    inputUrl,
    btnCargar,
    btnCargarTxt,
    btnGuardar,
    btnGuardarTxt,
  } = styles;

  return (
    <View style={formulario}>
      <View style={cabecera}>
        <Text style={tagSeccion}>FORMULARIO DE EDICIÓN</Text>
        <Text style={titulo}>Actualizar Datos</Text>
        <Text style={subtitulo}>Ingresa la información para sincronizar la tarjeta</Text>
      </View>

      <View style={campo}>
        <View style={labelRow}>
          <Text style={etiqueta}>NOMBRE COMPLETO</Text>
          <Text style={etiquetaReq}>REQUERIDO</Text>
        </View>
        <TextInput
          style={cajaInput}
          value={inputNombre}
          onChangeText={setInputNombre}
          placeholder="Ej. Juan Pérez"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <View style={campo}>
        <View style={labelRow}>
          <Text style={etiqueta}>CARRERA UNIVERSITARIA</Text>
          <Text style={etiquetaReq}>REQUERIDO</Text>
        </View>
        <TextInput
          style={cajaInput}
          value={inputCarrera}
          onChangeText={setInputCarrera}
          placeholder="Ej. Ingeniería de Sistemas"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <View style={campo}>
        <View style={labelRow}>
          <Text style={etiqueta}>URL DE LA FOTOGRAFÍA</Text>
        </View>
        <View style={filaUrl}>
          <TextInput
            style={[cajaInput, inputUrl]}
            value={inputImagen}
            onChangeText={setInputImagen}
            placeholder="https://ejemplo.com/foto.jpg"
            placeholderTextColor="#94A3B8"
            autoCapitalize="none"
            keyboardType="url"
          />
          <TouchableOpacity
            style={btnCargar}
            onPress={onCargarImagen}
            activeOpacity={0.8}
          >
            <Text style={btnCargarTxt}>CARGAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={btnGuardar}
        onPress={onGuardar}
        activeOpacity={0.85}
      >
        <Text style={btnGuardarTxt}>GUARDAR CAMBIOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
  },
  cabecera: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  tagSeccion: {
    fontSize: 10,
    fontWeight: '800',
    color: '#2563EB',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748B',
  },
  campo: {
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: '800',
    color: '#334155',
    letterSpacing: 0.5,
  },
  etiquetaReq: {
    fontSize: 9,
    fontWeight: '800',
    color: '#2563EB',
    letterSpacing: 0.5,
  },
  cajaInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 50,
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  filaUrl: {
    flexDirection: 'row',
    gap: 10,
  },
  inputUrl: {
    flex: 1,
  },
  btnCargar: {
    backgroundColor: '#1E40AF',
    borderRadius: 14,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCargarTxt: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  btnGuardar: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  btnGuardarTxt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
