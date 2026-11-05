import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function seachbar({
  nombre,
  carrera,
  imagenUrl,
  onChangeField,
  errors = {},
}) {
  return (
    <View style={styles.container}>
      {/* Campo: Nombre */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre Completo</Text>
        <View style={[styles.inputWrapper, errors.nombre ? styles.inputWrapperError : null]}>
          <Ionicons
            name="person-outline"
            size={20}
            color={errors.nombre ? '#EF4444' : '#6366F1'}
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ej. Juan Pérez"
            placeholderTextColor="#94A3B8"
            value={nombre}
            onChangeText={(text) => onChangeField('nombre', text)}
            autoCapitalize="words"
          />
        </View>
        {errors.nombre ? <Text style={styles.errorText}>{errors.nombre}</Text> : null}
      </View>

      {/* Campo: Carrera */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Carrera Universitaria</Text>
        <View style={[styles.inputWrapper, errors.carrera ? styles.inputWrapperError : null]}>
          <Ionicons
            name="school-outline"
            size={20}
            color={errors.carrera ? '#EF4444' : '#6366F1'}
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ej. Ingeniería de Software"
            placeholderTextColor="#94A3B8"
            value={carrera}
            onChangeText={(text) => onChangeField('carrera', text)}
            autoCapitalize="words"
          />
        </View>
        {errors.carrera ? <Text style={styles.errorText}>{errors.carrera}</Text> : null}
      </View>

      {/* Campo: Imagen por URL */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Imagen por URL</Text>
        <View style={[styles.inputWrapper, errors.imagenUrl ? styles.inputWrapperError : null]}>
          <Ionicons
            name="image-outline"
            size={20}
            color={errors.imagenUrl ? '#EF4444' : '#6366F1'}
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="https://ejemplo.com/foto.jpg"
            placeholderTextColor="#94A3B8"
            value={imagenUrl}
            onChangeText={(text) => onChangeField('imagenUrl', text)}
            keyboardType="url"
            autoCapitalize="none"
          />
        </View>
        {errors.imagenUrl ? <Text style={styles.errorText}>{errors.imagenUrl}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
  },
  inputWrapperError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '500',
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 4,
    fontWeight: '500',
  },
});
