import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ProfileForm({
  inputNombre,
  setInputNombre,
  inputCarrera,
  setInputCarrera,
  inputImagen,
  setInputImagen,
  onGuardar,
  onCargarImagen,
}) {
  const {
    formulario,
    cabeceraForm,
    indicador,
    tituloForm,
    bloqueCampo,
    etiqueta,
    cajaInput,
    filaUrl,
    inputUrl,
    btnCargar,
    btnCargarTxt,
    btnGuardar,
    btnGuardarTxt,
  } = styles;

  return (
    <View style={formulario}>
      <View style={cabeceraForm}>
        <View style={indicador} />
        <Text style={tituloForm}>MODIFICAR INFORMACIÓN</Text>
      </View>

      <View style={bloqueCampo}>
        <Text style={etiqueta}>NOMBRE COMPLETO</Text>
        <TextInput
          style={cajaInput}
          value={inputNombre}
          onChangeText={setInputNombre}
          placeholder="Ej. Juan Pérez"
          placeholderTextColor="#475569"
        />
      </View>

      <View style={bloqueCampo}>
        <Text style={etiqueta}>CARRERA UNIVERSITARIA</Text>
        <TextInput
          style={cajaInput}
          value={inputCarrera}
          onChangeText={setInputCarrera}
          placeholder="Ej. Ingeniería de Software"
          placeholderTextColor="#475569"
        />
      </View>

      <View style={bloqueCampo}>
        <Text style={etiqueta}>ENLACE DE FOTOGRAFÍA (URL)</Text>
        <View style={filaUrl}>
          <TextInput
            style={[cajaInput, inputUrl]}
            value={inputImagen}
            onChangeText={setInputImagen}
            placeholder="https://ejemplo.com/foto.jpg"
            placeholderTextColor="#475569"
            autoCapitalize="none"
            keyboardType="url"
          />
          <TouchableOpacity
            style={btnCargar}
            onPress={onCargarImagen}
            activeOpacity={0.8}
          >
            <Text style={btnCargarTxt}>CARGAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={btnGuardar}
        onPress={onGuardar}
        activeOpacity={0.85}
      >
        <Text style={btnGuardarTxt}>ACTUALIZAR CREDENCIAL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 6,
  },
  cabeceraForm: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  indicador: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  tituloForm: {
    fontSize: 11,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1.5,
  },
  bloqueCampo: {
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 10,
    fontWeight: '800',
    color: '#818CF8',
    letterSpacing: 1,
    marginBottom: 8,
  },
  cajaInput: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 50,
    fontSize: 14,
    fontWeight: '600',
    color: '#F8FAFC',
  },
  filaUrl: {
    flexDirection: 'row',
    gap: 10,
  },
  inputUrl: {
    flex: 1,
  },
  btnCargar: {
    backgroundColor: '#312E81',
    borderWidth: 1,
    borderColor: '#4F46E5',
    borderRadius: 14,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCargarTxt: {
    color: '#A5B4FC',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  btnGuardar: {
    backgroundColor: '#4F46E5',
    borderRadius: 14,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 4,
  },
  btnGuardarTxt: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
});
