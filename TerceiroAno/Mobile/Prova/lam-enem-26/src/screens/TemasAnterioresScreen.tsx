import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import estilos from '../style/estilo';

const temasAnteriores = [
    { ano: 2025, tema: "Desafios da inteligência artificial na educação básica" },
    { ano: 2024, tema: "Caminhos para combater a desigualdade digital no Brasil" },
    { ano: 2023, tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil" },
    { ano: 2022, tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil" },
  ];

export default function TemasAnterioresScreen() {
  return (
    <View style={estilos.containerTela}>
              <Text style={estilos.tituloSecao}>Temas das Edições Anteriores</Text>
              <Text style={estilos.paragrafo}>Estudar os temas passados ajuda a entender o padrão de cobrança do INEP.</Text>
              
              {temasAnteriores.map((item, index) => (
                <View key={index} style={estilos.itemTema}>
                  <Text style={estilos.anoTema}>ENEM {item.ano}</Text>
                  <Text style={estilos.textoTema}>{item.tema}</Text>
                </View>
              ))}
            </View>
  );
}
