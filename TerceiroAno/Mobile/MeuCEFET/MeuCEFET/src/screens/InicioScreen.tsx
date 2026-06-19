// src/screens/InicioScreen.tsx
// Tela de Início do aplicativo Meu CEFET-MG.
//
// O que essa tela faz:
//  - Mostra uma mensagem de boas-vindas ao estudante
//  - Lista algumas notícias fictícias (com ScrollView)
//  - Tem um botão que navega para a aba de Horários,
//    passando o nome do estudante como parâmetro

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking, // Permite abrir links externos (site do CEFET)
} from 'react-native';

// Cores do CEFET-MG
const AZUL = '#003B7A';
const LARANJA = '#F47920';

// Nome do estudante (em um app real, viria de um login)
const NOME_ESTUDANTE = 'Ana';

// Lista de notícias fictícias para exibir na tela
const NOTICIAS = [
  {
    id: 1,
    titulo: '📢 Matrícula 2025/2 abertas',
    texto: 'O período de renovação de matrícula para o 2º semestre de 2025 está aberto. Acesse o SIGAA e confirme sua matrícula até o dia 15/07.',
  },
  {
    id: 2,
    titulo: '🏆 CEFET-MG no ranking universitário',
    texto: 'O CEFET-MG ficou entre as melhores instituições tecnológicas do país pelo 3º ano consecutivo no ranking do MEC.',
  },
  {
    id: 3,
    titulo: '🎓 Semana Acadêmica 2025',
    texto: 'A Semana Acadêmica acontecerá nos dias 21 a 25 de julho com palestras, workshops e apresentações de projetos de alunos.',
  },
  {
    id: 4,
    titulo: '📚 Biblioteca com novo acervo',
    texto: 'A biblioteca do campus Contagem recebeu mais de 500 novos títulos nas áreas de engenharia, informática e ciências exatas.',
  },
];

// A prop "navigation" é injetada automaticamente pelo React Navigation
// e permite navegar entre as telas
export default function InicioScreen({ navigation }: any) {

  // Função chamada ao pressionar "Ver meus horários"
  // navigation.navigate leva para outra aba e pode passar parâmetros
  function irParaHorarios() {
    navigation.navigate('Horarios', { nome: NOME_ESTUDANTE });
    //                  ^nome da aba   ^parâmetro enviado
  }

  // Abre o site do CEFET-MG no navegador do celular
  function abrirSite() {
    Linking.openURL('https://www.cefetmg.br');
  }

  return (
    // ScrollView permite rolar o conteúdo quando ele não cabe na tela
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>

      {/* Cabeçalho com boas-vindas */}
      <View style={styles.cabecalho}>
        <Text style={styles.bemVindo}>Olá, {NOME_ESTUDANTE}! 👋</Text>
        <Text style={styles.subtitulo}>Bem-vindo ao Meu CEFET-MG</Text>
      </View>

      {/* Botão para ir à tela de Horários */}
      <TouchableOpacity style={styles.botao} onPress={irParaHorarios}>
        <Text style={styles.botaoTexto}>📅 Ver meus horários</Text>
      </TouchableOpacity>

      {/* Seção de notícias */}
      <Text style={styles.secaoTitulo}>Notícias</Text>

      {/* Mapeamos o array de notícias para renderizar um card para cada uma */}
      {NOTICIAS.map((noticia) => (
        <View key={noticia.id} style={styles.card}>
          <Text style={styles.cardTitulo}>{noticia.titulo}</Text>
          <Text style={styles.cardTexto}>{noticia.texto}</Text>
        </View>
      ))}

      {/* Link para o site oficial */}
      <TouchableOpacity style={styles.linkSite} onPress={abrirSite}>
        <Text style={styles.linkSiteTexto}>🌐 Acessar site do CEFET-MG</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },

  conteudo: {
    padding: 16,
    paddingBottom: 32,
  },

  // Bloco de boas-vindas no topo
  cabecalho: {
    backgroundColor: AZUL,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },

  bemVindo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#AACCFF',
    fontSize: 14,
    marginTop: 4,
  },

  // Botão de navegação para a aba de horários
  botao: {
    backgroundColor: LARANJA,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginBottom: 24,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AZUL,
    marginBottom: 12,
  },

  // Card de cada notícia
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    // Sombra para dar profundidade ao card
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  cardTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },

  cardTexto: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  // Botão de link para o site
  linkSite: {
    marginTop: 8,
    padding: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AZUL,
    alignItems: 'center',
  },

  linkSiteTexto: {
    color: AZUL,
    fontSize: 15,
    fontWeight: '600',
  },
});
