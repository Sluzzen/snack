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
          {/* Cabecera Estilizada */}
          <View style={styles.header}>
            <View style={styles.topBadge}>
              <View style={styles.liveIndicator} />
              <Text style={styles.topBadgeText}>EXPO SNACK TEMPLATE</Text>
            </View>

            <View style={styles.iconCircle}>
              <Ionicons name="storefront" size={28} color="#4F46E5" />
            </View>

            <Text style={styles.title}>Catálogo de Productos</Text>
            <Text style={styles.subtitle}>
              Filtro y búsqueda reactiva en tiempo real con useState y StyleSheet
            </Text>
          </View>

          {/* Componente Contenedor */}
          <FilterableTable products={products} />

          {/* Pie de Página */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Diseñado para React Native & Expo Snack
            </Text>
          </View>
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
    marginBottom: 24,
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 14,
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
    marginBottom: 12,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1.5,
    borderColor: '#EEF2FF',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 290,
    lineHeight: 19,
  },
  footer: {
    marginTop: 28,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
});
