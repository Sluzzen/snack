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
import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    carrera: '',
    imagenUrl: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChangeField = (field, value) => {
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

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
      isValid = false;
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'Mínimo 2 caracteres';
      isValid = false;
    }

    if (!formData.carrera.trim()) {
      newErrors.carrera = 'La carrera es obligatoria';
      isValid = false;
    } else if (formData.carrera.trim().length < 3) {
      newErrors.carrera = 'Mínimo 3 caracteres';
      isValid = false;
    }

    const isHttp = /^https?:\/\/.+/i;
    if (!formData.imagenUrl.trim()) {
      newErrors.imagenUrl = 'La URL de la imagen es obligatoria';
      isValid = false;
    } else if (!isHttp.test(formData.imagenUrl.trim())) {
      newErrors.imagenUrl = 'URL no válida (http:// o https://)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    setSubmittedData({ ...formData });
    Alert.alert('ÉXITO', 'Tarjeta generada correctamente.');
  };

  const handleReset = () => {
    setFormData({ nombre: '', carrera: '', imagenUrl: '' });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerBox}>
            <Text style={styles.headerTitle}>SISTEMA DE CREDENCIALES</Text>
            <Text style={styles.headerSubtitle}>
              FICHA DE REGISTRO Y VISTA PREVIA
            </Text>
          </View>

          <StudentCard data={submittedData} />

          <StudentForm
            formData={formData}
            onChangeField={handleChangeField}
            onSubmit={handleSubmit}
            onReset={handleReset}
            errors={errors}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  headerBox: {
    borderWidth: 2,
    borderColor: '#1F2937',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111827',
    letterSpacing: 1,
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
  },
});
