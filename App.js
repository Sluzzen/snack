import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FormInput from './components/FormInput';
import ImagePickerField from './components/ImagePickerField';
import SummaryCard from './components/SummaryCard';

export default function App() {
  // Manejo de estado del formulario con useState
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    foto: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Actualizador genérico de campos
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  // Validaciones del formulario
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
      isValid = false;
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
      isValid = false;
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es obligatorio';
      isValid = false;
    } else if (formData.apellido.trim().length < 2) {
      newErrors.apellido = 'El apellido debe tener al menos 2 caracteres';
      isValid = false;
    }

    // Validación de cédula (numérica / formato estándar)
    const cedulaLimpia = formData.cedula.trim();
    if (!cedulaLimpia) {
      newErrors.cedula = 'La cédula es obligatoria';
      isValid = false;
    } else if (cedulaLimpia.length < 5) {
      newErrors.cedula = 'La cédula debe tener al menos 5 dígitos';
      isValid = false;
    }

    if (!formData.foto) {
      newErrors.foto = 'Debes cargar o tomar una fotografía';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Envío del formulario
  const handleSubmit = () => {
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedData({ ...formData });
      Alert.alert('¡Éxito!', 'Los datos y la imagen se guardaron en el estado.');
    }, 1000);
  };

  // Restablecer formulario
  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      cedula: '',
      foto: null,
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Cabecera */}
          <View style={styles.header}>
            <View style={styles.topBadge}>
              <View style={styles.liveIndicator} />
              <Text style={styles.topBadgeText}>EXPO SNACK FORM</Text>
            </View>

            <View style={styles.iconCircle}>
              <Ionicons name="id-card-outline" size={28} color="#4F46E5" />
            </View>

            <Text style={styles.title}>Registro de Identidad</Text>
            <Text style={styles.subtitle}>
              Formulario con useState: Nombre, Apellido, Cédula y Carga de Imagen
            </Text>
          </View>

          {/* Tarjeta del Formulario */}
          <View style={styles.formCard}>
            {/* Campo: Nombre */}
            <FormInput
              label="Nombre"
              icon="person-outline"
              placeholder="Ej. Juan"
              value={formData.nombre}
              onChangeText={(val) => handleChange('nombre', val)}
              error={errors.nombre}
            />

            {/* Campo: Apellido */}
            <FormInput
              label="Apellido"
              icon="people-outline"
              placeholder="Ej. Pérez"
              value={formData.apellido}
              onChangeText={(val) => handleChange('apellido', val)}
              error={errors.apellido}
            />

            {/* Campo: Cédula */}
            <FormInput
              label="Cédula de Identidad"
              icon="card-outline"
              placeholder="Ej. 12345678"
              keyboardType="numeric"
              maxLength={15}
              autoCapitalize="none"
              value={formData.cedula}
              onChangeText={(val) => handleChange('cedula', val)}
              error={errors.cedula}
            />

            {/* Campo: Carga de Imagen */}
            <ImagePickerField
              imageUri={formData.foto}
              onImageSelected={(uri) => handleChange('foto', uri)}
              onImageRemoved={() => handleChange('foto', null)}
              error={errors.foto}
            />

            {/* Botón de Enviar */}
            <TouchableOpacity
              style={[styles.submitButton, loading ? styles.submitButtonDisabled : null]}
              onPress={handleSubmit}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <View style={styles.submitBtnContent}>
                  <Ionicons name="checkmark-sharp" size={20} color="#FFFFFF" />
                  <Text style={styles.submitButtonText}>Guardar Registro</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Botón Limpiar */}
            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleReset}
              disabled={loading}
              activeOpacity={0.7}
            >
              <Text style={styles.resetButtonText}>Limpiar Formulario</Text>
            </TouchableOpacity>
          </View>

          {/* Tarjeta con los Datos Guardados */}
          <SummaryCard data={submittedData} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E7FF',
  },
  liveIndicator: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 7,
  },
  topBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4F46E5',
    letterSpacing: 0.8,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1.5,
    borderColor: '#EEF2FF',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 310,
    lineHeight: 18,
  },
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
  submitButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitBtnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  resetButton: {
    marginTop: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },
});
