import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import estilos from '../style/estilo';

export default function EstRedacaoScreen() {
  return (
          <View style={estilos.containerTela}>
          <Text style={estilos.tituloSecao}>Estrutura da Redação</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>1. Introdução</Text>
            <Text style={estilos.textoCartao}>Apresente o tema e a sua tese (ponto de vista). Use repertório sociocultural logo de cara!</Text>
          </View>

          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>2. Desenvolvimento (D1 e D2)</Text>
            <Text style={estilos.textoCartao}>Argumente a favor da sua tese. Use um parágrafo para cada argumento principal. Prove o que você está dizendo.</Text>
          </View>

          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>3. Conclusão</Text>
            <Text style={estilos.textoCartao}>Retome a tese e apresente a Proposta de Intervenção (Quem vai fazer? O que vai fazer? Como? Para quê? E o detalhamento).</Text>
          </View>
        </View>
  );
}
