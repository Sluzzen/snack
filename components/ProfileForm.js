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
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <Text style={styles.formHeaderText}>FORMULARIO DE REGISTRO</Text>
      </View>

      <View style={styles.formBody}>
        <View style={styles.fieldBox}>
          <Text style={styles.label}>NOMBRE COMPLETO</Text>
          <TextInput
            style={styles.input}
            value={inputNombre}
            onChangeText={setInputNombre}
            placeholder="Ej. Juan Pérez"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.fieldBox}>
          <Text style={styles.label}>CARRERA UNIVERSITARIA</Text>
          <TextInput
            style={styles.input}
            value={inputCarrera}
            onChangeText={setInputCarrera}
            placeholder="Ej. Ingeniería de Sistemas"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.fieldBox}>
          <Text style={styles.label}>IMAGEN POR URL</Text>
          <View style={styles.urlRow}>
            <TextInput
              style={[styles.input, styles.inputUrl]}
              value={inputImagen}
              onChangeText={setInputImagen}
              placeholder="https://ejemplo.com/foto.jpg"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="none"
              keyboardType="url"
            />
            <TouchableOpacity
              style={styles.botonUrl}
              onPress={onCargarImagen}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotonUrl}>CARGAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={onGuardar}
          activeOpacity={0.8}
        >
          <Text style={styles.submitBtnText}>GUARDAR CAMBIOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 2,
    borderColor: '#1F2937',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  formHeader: {
    backgroundColor: '#1F2937',
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  formHeaderText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  formBody: {
    padding: 16,
  },
  fieldBox: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 46,
    fontSize: 15,
    color: '#111827',
  },
  urlRow: {
    flexDirection: 'row',
    gap: 10,
  },
  inputUrl: {
    flex: 1,
  },
  botonUrl: {
    backgroundColor: '#1F2937',
    borderWidth: 1.5,
    borderColor: '#111827',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotonUrl: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  submitBtn: {
    backgroundColor: '#2563EB',
    borderWidth: 1.5,
    borderColor: '#1D4ED8',
    borderRadius: 8,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
