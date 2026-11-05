import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StudentForm from './components/StudentForm';
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

  // Manejador dinámico para actualizar campos del formulario
  const handleChangeField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Limpia el error del campo al escribir
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

    if (!formData.carrera.trim()) {
      newErrors.carrera = 'La carrera es obligatoria';
      isValid = false;
    } else if (formData.carrera.trim().length < 3) {
      newErrors.carrera = 'La carrera debe tener al menos 3 caracteres';
      isValid = false;
    }

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

  // Generar y mostrar la tarjeta con los datos ingresados
  const handleSubmit = () => {
    if (!validateForm()) return;
    setSubmittedData({ ...formData });
    Alert.alert('¡Tarjeta Generada!', 'La credencial se ha creado con éxito.');
  };

  // Cargar datos de prueba
  const handleLoadDemo = () => {
    const demo = {
      nombre: 'Elena Rodríguez',
      carrera: 'Ingeniería en Computación',
      imagenUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    };
    setFormData(demo);
    setErrors({});
    setSubmittedData(demo);
  };

  // Limpiar formulario y tarjeta
  const handleReset = () => {
    setFormData({ nombre: '', carrera: '', imagenUrl: '' });
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
          {/* Encabezado */}
          <View style={styles.header}>
            <View style={styles.topBadge}>
              <View style={styles.liveIndicator} />
              <Text style={styles.topBadgeText}>EXPO SNACK TEMPLATE</Text>
            </View>

            <View style={styles.iconCircle}>
              <Ionicons name="id-card" size={28} color="#4F46E5" />
            </View>

            <Text style={styles.title}>Credencial Estudiantil</Text>
            <Text style={styles.subtitle}>
              Formulario con useState: Nombre, Carrera, Imagen por URL y Tarjeta
            </Text>
          </View>

          {/* Formulario modular */}
          <StudentForm
            formData={formData}
            onChangeField={handleChangeField}
            onSubmit={handleSubmit}
            onReset={handleReset}
            onLoadDemo={handleLoadDemo}
            errors={errors}
          />

          {/* Tarjeta donde se muestra toda la información */}
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
});
