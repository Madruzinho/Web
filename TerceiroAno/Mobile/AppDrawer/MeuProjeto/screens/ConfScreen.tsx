import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';

export default function ConfScreen() {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.tituloCabecalho}>Redação ENEM App</Text>
      </View>

      <ScrollView style={estilos.rolagemConteudo}>
        
        <View style={estilos.containerTela}>
          <View style={estilos.secaoDestaque}>
            <Text style={estilos.tituloDestaque}>Nota 1000!</Text>
            <Text style={estilos.subtituloDestaque}>O seu guia definitivo para a redação do ENEM.</Text>
          </View>
          
          <Text style={estilos.paragrafo}>
            A redação do ENEM exige a produção de um texto em prosa, do tipo dissertativo-argumentativo, sobre um tema de ordem social, científica, cultural ou política.
          </Text>

          <View style={estilos.containerEstatisticas}>
            <View style={estilos.caixaEstatistica}>
              <Text style={estilos.numeroEstatistica}>5</Text>
              <Text style={estilos.rotuloEstatistica}>Competências</Text>
            </View>
            <View style={estilos.caixaEstatistica}>
              <Text style={estilos.numeroEstatistica}>30</Text>
              <Text style={estilos.rotuloEstatistica}>Linhas Máx.</Text>
            </View>
          </View>
        </View>

        <View style={estilos.separador} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});