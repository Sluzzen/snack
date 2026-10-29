import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Buscar Productos</Text>

      {/* Input de Búsqueda */}
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={20} color="#64748B" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Buscar producto..."
          placeholderTextColor="#94A3B8"
          value={filterText}
          onChangeText={onFilterTextChange}
          autoCapitalize="none"
        />
        {filterText.length > 0 && (
          <Ionicons
            name="close-circle"
            size={18}
            color="#94A3B8"
            onPress={() => onFilterTextChange('')}
          />
        )}
      </View>

      {/* Switch de Filtro de Stock */}
      <View style={styles.switchRow}>
        <Switch
          value={inStockOnly}
          onValueChange={onInStockOnlyChange}
          thumbColor={inStockOnly ? '#4F46E5' : '#CBD5E1'}
          trackColor={{ false: '#E2E8F0', true: '#C7D2FE' }}
        />
        <Text style={styles.switchLabel}>
          Mostrar sólo productos en stock
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#0F172A',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#334155',
    fontWeight: '500',
  },
});
