// src/screens/AjudaScreen.tsx
// Tela de Ajuda do aplicativo Meu CEFET-MG.
//
// O que essa tela faz:
//  - Mostra uma lista de perguntas frequentes (FAQ)
//  - Tem um botão "Fale conosco" que exibe um Alert
//    com o e-mail de suporte

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,    // Alert exibe um pop-up nativo do sistema operacional
  StyleSheet,
} from 'react-native';

const AZUL = '#003B7A';
const LARANJA = '#F47920';

// Lista de perguntas frequentes
// Em um app real, isso poderia vir de uma API
const PERGUNTAS = [
  {
    id: 1,
    pergunta: 'Como acessar o SIGAA?',
    resposta: 'Acesse sig.cefetmg.br e faça login com seu CPF e senha cadastrada pela instituição. Em caso de dúvidas, procure a secretaria.',
  },
  {
    id: 2,
    pergunta: 'Como solicitar declaração de matrícula?',
    resposta: 'No SIGAA, vá em "Ensino" → "Documentos" → "Declaração de Matrícula". O documento é gerado em PDF automaticamente.',
  },
  {
    id: 3,
    pergunta: 'Onde consultar minhas notas?',
    resposta: 'No SIGAA, acesse "Ensino" → "Consultar Minhas Notas". As notas são lançadas pelos professores ao longo do semestre.',
  },
];

export default function AjudaScreen() {

  // Função chamada ao pressionar "Fale conosco"
  // Alert.alert() exibe um pop-up nativo com título, mensagem e botões
  function mostrarContato() {
    Alert.alert(
      'Fale Conosco',                          // Título do pop-up
      'Entre em contato pelo e-mail:\nsuporte@cefetmg.br', // Mensagem
      [{ text: 'OK' }]                         // Botão para fechar
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>

      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Central de Ajuda 💬</Text>
        <Text style={styles.subtitulo}>Perguntas frequentes dos estudantes</Text>
      </View>

      {/* Lista de perguntas frequentes */}
      {PERGUNTAS.map((item) => (
        <View key={item.id} style={styles.card}>
          {/* Pergunta */}
          <Text style={styles.pergunta}>❓ {item.pergunta}</Text>
          {/* Resposta */}
          <Text style={styles.resposta}>{item.resposta}</Text>
        </View>
      ))}

      {/* Botão de contato — exibe um Alert ao ser pressionado */}
      <TouchableOpacity style={styles.botao} onPress={mostrarContato}>
        <Text style={styles.botaoTexto}>📧 Fale conosco</Text>
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

  cabecalho: {
    backgroundColor: AZUL,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#AACCFF',
    fontSize: 14,
    marginTop: 4,
  },

  // Card de cada pergunta/resposta
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  pergunta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AZUL,
    marginBottom: 8,
  },

  resposta: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  // Botão laranja de contato
  botao: {
    backgroundColor: LARANJA,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
