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
    titulo,
    campo,
    label,
    input,
    filaUrl,
    inputUrl,
    btnCargar,
    btnCargarTxt,
    btnGuardar,
    btnGuardarTxt,
  } = styles;

  return (
    <View style={formulario}>
      <Text style={titulo}>Actualizar Datos</Text>

      <View style={campo}>
        <Text style={label}>Nombre:</Text>
        <TextInput
          style={input}
          value={inputNombre}
          onChangeText={setInputNombre}
          placeholder="Ingresa el nombre"
        />
      </View>

      <View style={campo}>
        <Text style={label}>Carrera:</Text>
        <TextInput
          style={input}
          value={inputCarrera}
          onChangeText={setInputCarrera}
          placeholder="Ingresa la carrera"
        />
      </View>

      <View style={campo}>
        <Text style={label}>URL de la Imagen:</Text>
        <View style={filaUrl}>
          <TextInput
            style={[input, inputUrl]}
            value={inputImagen}
            onChangeText={setInputImagen}
            placeholder="https://ejemplo.com/foto.jpg"
            autoCapitalize="none"
          />
          <TouchableOpacity style={btnCargar} onPress={onCargarImagen}>
            <Text style={btnCargarTxt}>Cargar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={btnGuardar} onPress={onGuardar}>
        <Text style={btnGuardarTxt}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  campo: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 14,
    color: '#333333',
  },
  filaUrl: {
    flexDirection: 'row',
    gap: 8,
  },
  inputUrl: {
    flex: 1,
  },
  btnCargar: {
    backgroundColor: '#17a2b8',
    borderRadius: 6,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCargarTxt: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnGuardar: {
    backgroundColor: '#28a745',
    borderRadius: 6,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  btnGuardarTxt: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
