import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ProfileForm({
  inputNombre,
  setInputNombre,
  inputCarrera,
  setInputCarrera,
  onGuardar,
}) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.titulo}>Actualizar Datos</Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={inputNombre}
        onChangeText={setInputNombre}
        placeholder="Ingresa el nombre"
        placeholderTextColor="#94A3B8"
      />

      <Text style={styles.label}>Carrera:</Text>
      <TextInput
        style={styles.input}
        value={inputCarrera}
        onChangeText={setInputCarrera}
        placeholder="Ingresa la carrera"
        placeholderTextColor="#94A3B8"
      />

      <TouchableOpacity style={styles.boton} onPress={onGuardar}>
        <Text style={styles.textoBoton}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#0F172A',
    marginBottom: 16,
  },
  boton: {
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
