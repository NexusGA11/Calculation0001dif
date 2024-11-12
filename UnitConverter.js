import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';

export default function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [unit1, setUnit1] = useState('meter');
  const [unit2, setUnit2] = useState('kilometer');

  const units = {
    meter: 1,
    kilometer: 1000,
    mile: 1609.34,
    centimeter: 0.01,
    millimeter: 0.001,
    celsius: 'celsius',
    fahrenheit: 'fahrenheit',
    kelvin: 'kelvin',
    gram: 1,
    kilogram: 1000,
    pound: 453.592,
    ounce: 28.3495,
    liter: 1,
    milliliter: 0.001,
    gallon: 3.78541,
    squareMeter: 1,
    squareKilometer: 1000000,
    squareMile: 2589988.11,
    squareCentimeter: 0.0001,
    squareMillimeter: 0.000001,
  };

  const convertUnits = (value, fromUnit, toUnit) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return ''; // Se o valor não for numérico, retorna vazio.

    // Temperature conversion
    if (fromUnit === 'celsius' || toUnit === 'celsius') {
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return (numValue * 9/5) + 32;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        return (numValue - 32) * 5/9;
      } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        return numValue + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        return numValue - 273.15;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        return (numValue - 32) * 5/9 + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        return (numValue - 273.15) * 9/5 + 32;
      }
    } else if (['meter', 'kilometer', 'mile', 'centimeter', 'millimeter'].includes(fromUnit)) {
      return (numValue * units[fromUnit]) / units[toUnit];
    } else if (['gram', 'kilogram', 'pound', 'ounce'].includes(fromUnit)) {
      return (numValue * units[fromUnit]) / units[toUnit];
    } else if (['liter', 'milliliter', 'gallon'].includes(fromUnit)) {
      return (numValue * units[fromUnit]) / units[toUnit];
    } else if (['squareMeter', 'squareKilometer', 'squareMile', 'squareCentimeter', 'squareMillimeter'].includes(fromUnit)) {
      return (numValue * units[fromUnit]) / units[toUnit];
    }
  };

  useEffect(() => {
    if (inputValue1) {
      const convertedValue = convertUnits(inputValue1, unit1, unit2);
      setInputValue2(convertedValue.toString());
    } else {
      setInputValue2('');
    }
  }, [inputValue1, unit1, unit2]);

  useEffect(() => {
    if (inputValue2) {
      const convertedValue = convertUnits(inputValue2, unit2, unit1);
      setInputValue1(convertedValue.toString());
    } else {
      setInputValue1('');
    }
  }, [inputValue2, unit1, unit2]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Unidades</Text>

      {/* Campo de Entrada 1 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChangeText={(text) => setInputValue1(text)}
          keyboardType="numeric"
          placeholder="Digite o valor"
          placeholderTextColor="#ccc"
        />
        <Picker
          selectedValue={unit1}
          style={styles.picker}
          onValueChange={(itemValue) => setUnit1(itemValue)}
        >
          <Picker.Item label="Metro" value="meter" />
          <Picker.Item label="Quilômetro" value="kilometer" />
          <Picker.Item label="Milha" value="mile" />
          <Picker.Item label="Centímetro" value="centimeter" />
          <Picker.Item label="Milímetro" value="millimeter" />
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Kelvin" value="kelvin" />
          <Picker.Item label="Grama" value="gram" />
          <Picker.Item label="Quilograma" value="kilogram" />
          <Picker.Item label="Libra" value="pound" />
          <Picker.Item label="Onça" value="ounce" />
          <Picker.Item label="Litro" value="liter" />
          <Picker.Item label="Mililitro" value="milliliter" />
          <Picker.Item label="Galão" value="gallon" />
          <Picker.Item label="Metro Quadrado" value="squareMeter" />
          <Picker.Item label="Quilômetro Quadrado" value="squareKilometer" />
          <Picker.Item label="Milha Quadrada" value="squareMile" />
          <Picker.Item label="Centímetro Quadrado" value="squareCentimeter" />
          <Picker.Item label="Milímetro Quadrado" value="squareMillimeter" />
        </Picker>
      </View>

      {/* Campo de Entrada 2 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue2}
          onChangeText={(text) => setInputValue2(text)}
          keyboardType="numeric"
          placeholder="Resultado"
          placeholderTextColor="#ccc"
          editable={false} // O campo de resultado não é editável
        />
        <Picker
          selectedValue={unit2}
          style={styles.picker}
          onValueChange={(itemValue) => setUnit2(itemValue)}
        >
          <Picker.Item label="Metro" value="meter" />
          <Picker.Item label="Quilômetro" value="kilometer" />
          <Picker.Item label="Milha" value="mile" />
          <Picker.Item label="Centímetro" value="centimeter" />
          <Picker.Item label="Milímetro" value="millimeter" />
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Kelvin" value="kelvin" />
          <Picker.Item label="Grama" value="gram" />
          <Picker.Item label="Quilograma" value="kilogram" />
          <Picker.Item label="Libra" value="pound" />
          <Picker.Item label="Onça" value="ounce" />
          <Picker.Item label="Litro" value="liter" />
          <Picker.Item label="Mililitro" value="milliliter" />
          <Picker.Item label="Galão" value="gallon" />
          <Picker.Item label="Metro Quadrado" value="squareMeter" />
          <Picker.Item label="Quilômetro Quadrado" value="squareKilometer" />
          <Picker.Item label="Milha Quadrada" value="squareMile" />
          <Picker.Item label="Centímetro Quadrado" value="squareCentimeter" />
          <Picker.Item label="Milímetro Quadrado" value="squareMillimeter" />
        </Picker>
      </View>

      {/* Botão para Limpar */}
      <TouchableOpacity style={styles.button} onPress={() => { setInputValue1(''); setInputValue2(''); }}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#222',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  input: {
    width: 150,
    height: 50,
    color: 'white',
    backgroundColor: '#333',
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 8,
    fontSize: 18,
    fontFamily: 'sans-serif', 
  },
  picker: {
    width: 150,
    height: 50,
    color: 'white',
    backgroundColor: '#333',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FF9500',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
