import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './seachbar';
import ProductTable from './productablet';

export default function FilterableTable() {
  // Manejo de estado del formulario con useState
  const [formData, setFormData] = useState({
    nombre: '',
    carrera: '',
    imagenUrl: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Manejador para actualizar los campos
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

  // Validaciones
  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
      isValid = false;
    }

    if (!formData.carrera.trim()) {
      newErrors.carrera = 'La carrera es obligatoria';
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

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmittedData({ ...formData });
    Alert.alert('¡Éxito!', 'Ficha generada correctamente en la tarjeta.');
  };

  const handleDemo = () => {
    const demo = {
      nombre: 'Elena Rodríguez',
      carrera: 'Ingeniería en Computación',
      imagenUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    };
    setFormData(demo);
    setErrors({});
    setSubmittedData(demo);
  };

  const handleReset = () => {
    setFormData({ nombre: '', carrera: '', imagenUrl: '' });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <View style={styles.container}>
      {/* Formulario */}
      <View style={styles.formCard}>
        <SearchBar
          nombre={formData.nombre}
          carrera={formData.carrera}
          imagenUrl={formData.imagenUrl}
          onChangeField={handleChangeField}
          errors={errors}
        />

        {/* Botón Principal */}
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.8}>
          <Ionicons name="card-outline" size={20} color="#FFFFFF" />
          <Text style={styles.submitBtnText}>Mostrar en Tarjeta</Text>
        </TouchableOpacity>

        {/* Acciones Secundarias */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.demoBtn} onPress={handleDemo} activeOpacity={0.7}>
            <Ionicons name="sparkles-outline" size={16} color="#4F46E5" />
            <Text style={styles.demoBtnText}>Cargar Ejemplo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetBtn} onPress={handleReset} activeOpacity={0.7}>
            <Text style={styles.resetBtnText}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tarjeta donde se muestra todo */}
      <ProductTable data={submittedData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  actionRow: {
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
