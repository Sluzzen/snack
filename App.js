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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FilterableTable from './components/FilterableTable';

// Lista de datos iniciales
const INITIAL_PRODUCTS = [
  { category: 'Frutas', price: '$1.00', stocked: true, name: 'Manzana' },
  { category: 'Frutas', price: '$1.50', stocked: true, name: 'Fruta del Dragón' },
  { category: 'Frutas', price: '$2.00', stocked: false, name: 'Maracuyá' },
  { category: 'Verduras', price: '$2.00', stocked: true, name: 'Espinaca' },
  { category: 'Verduras', price: '$4.00', stocked: false, name: 'Calabaza' },
  { category: 'Verduras', price: '$1.00', stocked: true, name: 'Guisantes' },
];

export default function App() {
  const [products] = useState(INITIAL_PRODUCTS);

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
          {/* Cabecera con icono nativo vectorial */}
          <View style={styles.header}>
            <View style={styles.iconBadge}>
              <Ionicons name="cart" size={32} color="#4F46E5" />
            </View>
            <Text style={styles.title}>Catálogo de Productos</Text>
            <Text style={styles.subtitle}>
              Formulario de filtrado en tiempo real con React Native y useState
            </Text>
          </View>

          {/* Componente contenedor con la tabla y buscador */}
          <FilterableTable products={products} />
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
    paddingTop: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 18,
  },
});
