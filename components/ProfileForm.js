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
    form,
    titulo,
    grupo,
    label,
    input,
    filaUrl,
    inputUrl,
    btnUrl,
    btnUrlTxt,
    btnGuardar,
    btnGuardarTxt,
  } = styles;

  return (
    <View style={form}>
      <Text style={titulo}>Editar Perfil</Text>

      <View style={grupo}>
        <Text style={label}>NOMBRE</Text>
        <TextInput
          style={input}
          value={inputNombre}
          onChangeText={setInputNombre}
          placeholder="Ej. Juan Pérez"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <View style={grupo}>
        <Text style={label}>CARRERA</Text>
        <TextInput
          style={input}
          value={inputCarrera}
          onChangeText={setInputCarrera}
          placeholder="Ej. Ingeniería de Sistemas"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <View style={grupo}>
        <Text style={label}>URL DE LA FOTO</Text>
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
            style={btnUrl}
            onPress={onCargarImagen}
            activeOpacity={0.8}
          >
            <Text style={btnUrlTxt}>Cargar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={btnGuardar}
        onPress={onGuardar}
        activeOpacity={0.8}
      >
        <Text style={btnGuardarTxt}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 18,
  },
  grupo: {
    marginBottom: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
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
  btnUrl: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1.5,
    borderColor: '#C7D2FE',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUrlTxt: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '700',
  },
  btnGuardar: {
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  btnGuardarTxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
