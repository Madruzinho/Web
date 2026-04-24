import { StatusBar } from 'expo-status-bar';
import { use, useState } from "react";
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

  const [distancia, setDistancia] = useState ('');
  const [consumo, setConsumo] = useState('');
  const [resultado, setResultado] = useState('');

  const [emissaoCarro, setEmissaoCarro] = useState(0);
  const [emissaoOnibus, setEmissaoOnibus] = useState(0);

  const economia = emissaoCarro - emissaoOnibus; 

  const calcularImpacto = () => {

    //Transformar string para float, e no caso de virgula trocar para ponto
    const Distancia = parseFloat(distancia.replace(',', '.'));
    const Consumo = parseFloat(consumo.replace(',', '.'));

    //Validar se oque foi inserido nos campos sao numeros e enviando um alerta
    if (isNaN(Distancia) || isNaN(Consumo)) {
      Alert.alert(
        'Erro',
        'Por favor, insira valores numéricos válidos!',
        [{ text: 'OK' }]
      );
      return;
    }

    // Validar valores negativos ou zero
    if (Distancia <= 0 || Consumo <= 0) {
      Alert.alert(
        'Erro',
        'Os valores devem ser maiores que zero!',
        [{ text: 'OK' }]
      );
      return;
    }


    // calculo com a logica descrita pelo enunciado
    setEmissaoCarro((Distancia / Consumo) * 0.82)
    setEmissaoOnibus(Distancia * 0.03)


    // if else basico para alterar o Resultado
    if (emissaoCarro > emissaoOnibus) {
      setResultado(`O onibus é mais sustentavel! Voce economiza ${economia} kg de CO2`)
    } else {
      setResultado(`Neste caso, as emissoes são equivalentes ou o carro é viável`)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoEmoji}>♻️</Text>
            <Text style={styles.logoText}>Carro ou onibus</Text>
          </View>

          {/* Campos de Entrada */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Distancia que vai ser percorrida (em Km)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 130"
              placeholderTextColor="#999"
              keyboardType="decimal-pad"
              value={distancia}
              onChangeText={setDistancia}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Consumo que o carro faz (em Km/L)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 7"
              placeholderTextColor="#999"
              keyboardType="decimal-pad"
              value={consumo}
              onChangeText={setConsumo}
            />
          </View>

          {/* Botões */}
          <TouchableOpacity
            style={styles.botaoCalcular}
            onPress={calcularImpacto}
          >
            <Text style={styles.textoBotaoCalcular}>Calcular</Text>
          </TouchableOpacity>

          {/* Resultado */}
          {resultado ? (
            <View style={styles.resultadoContainer}>
              <Text style={styles.resultadoTexto}>{resultado}</Text>
            </View>
          ) : null}

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
});
