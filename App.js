import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
} from 'react-native';
import ProfileCard from './components/ProfileCard';
import ProfileForm from './components/ProfileForm';

export default function App() {
  const [nombre, setNombre] = useState('Juan Pérez');
  const [carrera, setCarrera] = useState('Ingeniería de Sistemas');
  const [imagen, setImagen] = useState(
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400'
  );

  const [inputNombre, setInputNombre] = useState(nombre);
  const [inputCarrera, setInputCarrera] = useState(carrera);
  const [inputImagen, setInputImagen] = useState(imagen);

  const handleCargarImagen = () => {
    const url = inputImagen.trim();
    if (!url) {
      Alert.alert('ATENCIÓN', 'Ingresa una URL de imagen válida.');
      return;
    }

    if (!/^https?:\/\/.+/i.test(url)) {
      Alert.alert('ATENCIÓN', 'La URL debe comenzar con http:// o https://');
      return;
    }

    setImagen(url);
    Alert.alert('IMAGEN CARGADA', 'La fotografía se ha actualizado correctamente.');
  };

  const handleGuardar = () => {
    if (!inputNombre.trim() || !inputCarrera.trim()) {
      Alert.alert('ATENCIÓN', 'Por favor completa el nombre y la carrera.');
      return;
    }

    setNombre(inputNombre);
    setCarrera(inputCarrera);

    if (inputImagen.trim() && /^https?:\/\/.+/i.test(inputImagen.trim())) {
      setImagen(inputImagen.trim());
    }

    Alert.alert('ÉXITO', 'Datos del estudiante actualizados.');
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
          <ProfileCard
            nombre={nombre}
            carrera={carrera}
            imagen={imagen}
          />

          <ProfileForm
            inputNombre={inputNombre}
            setInputNombre={setInputNombre}
            inputCarrera={inputCarrera}
            setInputCarrera={setInputCarrera}
            inputImagen={inputImagen}
            setInputImagen={setInputImagen}
            onGuardar={handleGuardar}
            onCargarImagen={handleCargarImagen}
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
});
