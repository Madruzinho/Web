import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function App() {
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMelhorOpcao = () => {
    // Validar campos em branco
    if (!precoGasolina.trim() || !precoAlcool.trim()) {
      Alert.alert(
        'Atenção',
        'Por favor, preencha todos os campos!',
        [{ text: 'OK' }]
      );
      return;
    }

    // Converter para números
    const valorGasolina = parseFloat(precoGasolina.replace(',', '.'));
    const valorAlcool = parseFloat(precoAlcool.replace(',', '.'));

    // Validar valores inválidos
    if (isNaN(valorGasolina) || isNaN(valorAlcool)) {
      Alert.alert(
        'Erro',
        'Por favor, insira valores numéricos válidos!',
        [{ text: 'OK' }]
      );
      return;
    }

    // Validar valores negativos ou zero
    if (valorGasolina <= 0 || valorAlcool <= 0) {
      Alert.alert(
        'Erro',
        'Os preços devem ser maiores que zero!',
        [{ text: 'OK' }]
      );
      return;
    }

    // Realizar o cálculo
    const razao = valorAlcool / valorGasolina;

    // Determinar o resultado
    if (razao < 0.7) {
      setResultado('🟢 Abasteça com Álcool!');
    } else {
      setResultado('🔵 Abasteça com Gasolina!');
    }
  };

  const limparCampos = () => {
    setPrecoGasolina('');
    setPrecoAlcool('');
    setResultado('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoEmoji}>⛽</Text>
            <Text style={styles.logoText}>Álcool ou Gasolina?</Text>
          </View>

          {/* Descrição */}
          <Text style={styles.descricao}>
            Descubra qual combustível é mais vantajoso para você!
          </Text>

          {/* Campos de Entrada */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Preço da Gasolina (R$/litro)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 5.89"
              placeholderTextColor="#999"
              keyboardType="decimal-pad"
              value={precoGasolina}
              onChangeText={setPrecoGasolina}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Preço do Álcool (R$/litro)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 3.99"
              placeholderTextColor="#999"
              keyboardType="decimal-pad"
              value={precoAlcool}
              onChangeText={setPrecoAlcool}
            />
          </View>

          {/* Botões */}
          <TouchableOpacity
            style={styles.botaoCalcular}
            onPress={calcularMelhorOpcao}
          >
            <Text style={styles.textoBotaoCalcular}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoLimpar}
            onPress={limparCampos}
          >
            <Text style={styles.textoBotaoLimpar}>Limpar</Text>
          </TouchableOpacity>

          {/* Resultado */}
          {resultado ? (
            <View style={styles.resultadoContainer}>
              <Text style={styles.resultadoTexto}>{resultado}</Text>
            </View>
          ) : null}

          {/* Informação adicional */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoTexto}>
              💡 Se o álcool custar menos de 70% do preço da gasolina, ele é
              mais vantajoso!
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logoEmoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    color: '#333',
  },
  botaoCalcular: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotaoCalcular: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  textoBotaoLimpar: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  resultadoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resultadoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  infoTexto: {
    fontSize: 14,
    color: '#1976d2',
    textAlign: 'center',
    lineHeight: 20,
  },
});