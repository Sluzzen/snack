import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <View style={styles.container}>
      {/* Input de Búsqueda con diseño premium */}
      <View style={styles.inputCard}>
        <View style={styles.inputInner}>
          <Ionicons name="search" size={20} color="#6366F1" style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Buscar por nombre (ej. Manzana)..."
            placeholderTextColor="#94A3B8"
            value={filterText}
            onChangeText={onFilterTextChange}
            autoCapitalize="none"
          />
          {filterText.length > 0 && (
            <TouchableOpacity
              onPress={() => onFilterTextChange('')}
              style={styles.clearButton}
              activeOpacity={0.7}
            >
              <Ionicons name="close-circle" size={19} color="#94A3B8" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Control del Switch con tarjeta interactiva */}
      <TouchableOpacity
        style={[styles.switchCard, inStockOnly && styles.switchCardActive]}
        activeOpacity={0.8}
        onPress={() => onInStockOnlyChange(!inStockOnly)}
      >
        <View style={styles.switchInfo}>
          <View style={[styles.switchIconBox, inStockOnly && styles.switchIconBoxActive]}>
            <Ionicons
              name={inStockOnly ? "checkmark-circle" : "layers-outline"}
              size={18}
              color={inStockOnly ? "#4F46E5" : "#64748B"}
            />
          </View>
          <View style={styles.switchTexts}>
            <Text style={[styles.switchTitle, inStockOnly && styles.switchTitleActive]}>
              Sólo productos en stock
            </Text>
            <Text style={styles.switchSubtitle}>
              {inStockOnly ? "Ocultando agotados" : "Mostrando todo el catálogo"}
            </Text>
          </View>
        </View>
        <Switch
          value={inStockOnly}
          onValueChange={onInStockOnlyChange}
          thumbColor={inStockOnly ? '#4F46E5' : '#FFFFFF'}
          trackColor={{ false: '#CBD5E1', true: '#C7D2FE' }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    gap: 12,
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  inputInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '500',
  },
  clearButton: {
    padding: 4,
  },
  switchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#F1F5F9',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  switchCardActive: {
    borderColor: '#C7D2FE',
    backgroundColor: '#F8FAFF',
  },
  switchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  switchIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  switchIconBoxActive: {
    backgroundColor: '#EEF2FF',
  },
  switchTexts: {
    flex: 1,
  },
  switchTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  switchTitleActive: {
    color: '#4F46E5',
  },
  switchSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
});
