import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
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

  const handleGuardar = () => {
    if (!inputNombre.trim() || !inputCarrera.trim()) {
      Alert.alert('Atención', 'Por favor completa todos los campos.');
      return;
    }

    setNombre(inputNombre);
    setCarrera(inputCarrera);
    Alert.alert('Éxito', 'Los datos del estudiante han sido actualizados.');
  };

  return (
    <SafeAreaView style={styles.container}>
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
            onGuardar={handleGuardar}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
});
