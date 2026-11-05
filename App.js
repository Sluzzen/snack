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
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FormInput from './components/FormInput';
import StudentCard from './components/StudentCard';

export default function App() {
  // Manejo de estado del formulario con useState
  const [formData, setFormData] = useState({
    nombre: '',
    carrera: '',
    imagenUrl: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Manejador genérico para actualizar campos
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
      newErrors.nombre = 'Debe tener al menos 2 caracteres';
      isValid = false;
    }

    if (!formData.carrera.trim()) {
      newErrors.carrera = 'La carrera es obligatoria';
      isValid = false;
    } else if (formData.carrera.trim().length < 3) {
      newErrors.carrera = 'Debe tener al menos 3 caracteres';
      isValid = false;
    }

    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|svg|gif)(\?.*)?)$/i;
    const isHttp = /^https?:\/\/.+/i;

    if (!formData.imagenUrl.trim()) {
      newErrors.imagenUrl = 'La URL de la imagen es obligatoria';
      isValid = false;
    } else if (!isHttp.test(formData.imagenUrl.trim())) {
      newErrors.imagenUrl = 'Debe ser una URL válida (http:// o https://)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Enviar formulario
  const handleSubmit = () => {
    if (!validateForm()) return;

    setSubmittedData({ ...formData });
    Alert.alert('¡Tarjeta Generada!', 'Los datos se han guardado en el estado.');
  };

  // Cargar datos de ejemplo rápidos
  const handleLoadDemo = () => {
    const demoData = {
      nombre: 'Elena Rodríguez',
      carrera: 'Ingeniería en Sistemas',
      imagenUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    };
    setFormData(demoData);
    setErrors({});
    setSubmittedData(demoData);
  };

  // Limpiar formulario
  const handleReset = () => {
    setFormData({
      nombre: '',
      carrera: '',
      imagenUrl: '',
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
              <Text style={styles.topBadgeText}>EXPO SNACK TEMPLATE</Text>
            </View>

            <View style={styles.iconCircle}>
              <Ionicons name="id-card" size={28} color="#4F46E5" />
            </View>

            <Text style={styles.title}>Ficha Estudiantil</Text>
            <Text style={styles.subtitle}>
              Formulario reactivo con useState: Nombre, Carrera e Imagen por URL
            </Text>
          </View>

          {/* Tarjeta del Formulario */}
          <View style={styles.formCard}>
            {/* Campo: Nombre */}
            <FormInput
              label="Nombre"
              icon="person-outline"
              placeholder="Ej. Juan Pérez"
              value={formData.nombre}
              onChangeText={(val) => handleChange('nombre', val)}
              error={errors.nombre}
            />

            {/* Campo: Carrera */}
            <FormInput
              label="Carrera"
              icon="school-outline"
              placeholder="Ej. Ingeniería de Software"
              value={formData.carrera}
              onChangeText={(val) => handleChange('carrera', val)}
              error={errors.carrera}
            />

            {/* Campo: Imagen por URL */}
            <FormInput
              label="Imagen por URL"
              icon="image-outline"
              placeholder="https://ejemplo.com/foto.jpg"
              keyboardType="url"
              autoCapitalize="none"
              value={formData.imagenUrl}
              onChangeText={(val) => handleChange('imagenUrl', val)}
              error={errors.imagenUrl}
            />

            {/* Botón de Enviar */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Ionicons name="card-outline" size={20} color="#FFFFFF" />
              <Text style={styles.submitButtonText}>Generar Tarjeta</Text>
            </TouchableOpacity>

            {/* Fila de acciones secundarias */}
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={styles.demoButton}
                onPress={handleLoadDemo}
                activeOpacity={0.7}
              >
                <Ionicons name="sparkles-outline" size={16} color="#4F46E5" />
                <Text style={styles.demoButtonText}>Cargar Ejemplo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.resetButton}
                onPress={handleReset}
                activeOpacity={0.7}
              >
                <Text style={styles.resetButtonText}>Limpiar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Tarjeta de visualización */}
          <StudentCard data={submittedData} />
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
    maxWidth: 320,
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
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingHorizontal: 4,
  },
  demoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#EEF2FF',
    borderRadius: 10,
  },
  demoButtonText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '700',
  },
  resetButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  resetButtonText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },
});
