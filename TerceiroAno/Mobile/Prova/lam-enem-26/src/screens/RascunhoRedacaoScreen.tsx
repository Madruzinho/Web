import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../style/estilo';

export default function RascunhoRedacaoScreen() {

    const [textoRedacao, setTextoRedacao] = useState('');

  return (
    <View style={estilos.containerTela}>
          <Text style={estilos.tituloSecao}>Rascunho da Redação</Text>
          <Text style={estilos.paragrafo}>Digite seu texto abaixo para treinar.</Text>
          
          <TextInput
            style={estilos.areaTexto}
            multiline={true}
            numberOfLines={10}
            placeholder="Comece sua introdução aqui..."
            value={textoRedacao}
            onChangeText={setTextoRedacao}
            textAlignVertical="top"
          />
          
          <Text style={estilos.contagemCaracteres}>Caracteres: {textoRedacao.length}</Text>

          <TouchableOpacity 
            style={[estilos.botaoAcao, { backgroundColor: '#4CAF50', marginBottom: 40 }]} 
            onPress={() => alert('Redação salva (simulação)!')}
          >
            <Text style={estilos.textoBotaoAcao}>Salvar Rascunho</Text>
          </TouchableOpacity>
        </View>
  );
}
