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
    titulo,
    subtitulo,
    divisor,
    campo,
    label,
    input,
    filaUrl,
    inputUrl,
    btnCargar,
    btnCargarTxt,
    btnGuardar,
    btnGuardarTxt,
  } = styles;

  return (
    <View style={formulario}>
      <Text style={titulo}>Editar Perfil</Text>
      <Text style={subtitulo}>Actualiza los datos del estudiante en tiempo real</Text>

      <View style={divisor} />

      <View style={campo}>
        <Text style={label}>NOMBRE COMPLETO</Text>
        <TextInput
          style={input}
          value={inputNombre}
          onChangeText={setInputNombre}
          placeholder="Ej. Juan Pérez"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <View style={campo}>
        <Text style={label}>CARRERA UNIVERSITARIA</Text>
        <TextInput
          style={input}
          value={inputCarrera}
          onChangeText={setInputCarrera}
          placeholder="Ej. Ingeniería de Sistemas"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <View style={campo}>
        <Text style={label}>ENLACE DE IMAGEN (URL)</Text>
        <View style={filaUrl}>
          <TextInput
            style={[input, inputUrl]}
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
            <Text style={btnCargarTxt}>Cargar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={btnGuardar}
        onPress={onGuardar}
        activeOpacity={0.85}
      >
        <Text style={btnGuardarTxt}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 16,
  },
  divisor: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 16,
  },
  campo: {
    marginBottom: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 14,
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
    backgroundColor: '#EFF6FF',
    borderWidth: 1.5,
    borderColor: '#BFDBFE',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCargarTxt: {
    color: '#1D4ED8',
    fontSize: 13,
    fontWeight: '700',
  },
  btnGuardar: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  btnGuardarTxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
