import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InputField from './InputField';

export default function StudentForm({
  formData,
  onChangeField,
  onSubmit,
  onReset,
  errors = {},
}) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <Text style={styles.formHeaderText}>FORMULARIO DE REGISTRO</Text>
      </View>

      <View style={styles.formBody}>
        <InputField
          label="Nombre Completo"
          placeholder="Ej. Juan Pérez"
          value={formData.nombre}
          onChangeText={(val) => onChangeField('nombre', val)}
          error={errors.nombre}
          autoCapitalize="words"
        />

        <InputField
          label="Carrera Universitaria"
          placeholder="Ej. Ingeniería de Sistemas"
          value={formData.carrera}
          onChangeText={(val) => onChangeField('carrera', val)}
          error={errors.carrera}
          autoCapitalize="words"
        />

        <InputField
          label="Imagen por URL"
          placeholder="https://ejemplo.com/foto.jpg"
          value={formData.imagenUrl}
          onChangeText={(val) => onChangeField('imagenUrl', val)}
          error={errors.imagenUrl}
          keyboardType="url"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={onSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitBtnText}>GENERAR TARJETA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetBtn}
          onPress={onReset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetBtnText}>LIMPIAR FORMULARIO</Text>
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
  submitBtn: {
    backgroundColor: '#2563EB',
    borderWidth: 1.5,
    borderColor: '#1D4ED8',
    borderRadius: 6,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  resetBtn: {
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    borderRadius: 6,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F3F4F6',
  },
  resetBtnText: {
    color: '#4B5563',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
