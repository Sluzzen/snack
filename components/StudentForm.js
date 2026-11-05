import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputField from './InputField';

export default function StudentForm({
  formData,
  onChangeField,
  onSubmit,
  onReset,
  onLoadDemo,
  errors = {},
}) {
  return (
    <View style={styles.formCard}>
      {/* Campo: Nombre */}
      <InputField
        label="Nombre Completo"
        icon="person-outline"
        placeholder="Ej. Juan Pérez"
        value={formData.nombre}
        onChangeText={(val) => onChangeField('nombre', val)}
        error={errors.nombre}
        autoCapitalize="words"
      />

      {/* Campo: Carrera */}
      <InputField
        label="Carrera Universitaria"
        icon="school-outline"
        placeholder="Ej. Ingeniería de Sistemas"
        value={formData.carrera}
        onChangeText={(val) => onChangeField('carrera', val)}
        error={errors.carrera}
        autoCapitalize="words"
      />

      {/* Campo: Imagen por URL */}
      <InputField
        label="Imagen por URL"
        icon="image-outline"
        placeholder="https://ejemplo.com/foto.jpg"
        value={formData.imagenUrl}
        onChangeText={(val) => onChangeField('imagenUrl', val)}
        error={errors.imagenUrl}
        keyboardType="url"
        autoCapitalize="none"
      />

      {/* Botón Principal: Generar Tarjeta */}
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={onSubmit}
        activeOpacity={0.8}
      >
        <Ionicons name="card-outline" size={20} color="#FFFFFF" />
        <Text style={styles.submitBtnText}>Generar Tarjeta</Text>
      </TouchableOpacity>

      {/* Acciones Secundarias */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.demoBtn}
          onPress={onLoadDemo}
          activeOpacity={0.7}
        >
          <Ionicons name="sparkles-outline" size={16} color="#4F46E5" />
          <Text style={styles.demoBtnText}>Cargar Ejemplo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetBtn}
          onPress={onReset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetBtnText}>Limpiar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  submitBtn: {
    flexDirection: 'row',
    backgroundColor: '#4F46E5',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingHorizontal: 4,
  },
  demoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#EEF2FF',
    borderRadius: 10,
  },
  demoBtnText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '700',
  },
  resetBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  resetBtnText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },
});
