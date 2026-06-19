// src/screens/HorariosScreen.tsx
// Tela de Horários do aplicativo Meu CEFET-MG.
//
// O que essa tela faz:
//  - Recebe o nome do estudante como parâmetro de navegação
//  - Se recebeu o nome, exibe "Olá, Ana! Aqui estão seus horários:"
//  - Se não recebeu, exibe uma mensagem genérica
//  - Mostra uma lista fictícia de horários semanais

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const AZUL = '#003B7A';
const LARANJA = '#F47920';

// Lista de horários fictícios da semana
const HORARIOS = [
  { dia: 'Segunda-feira', materia: 'Matemática',    horario: '08h00 às 09h40' },
  { dia: 'Terça-feira',   materia: 'Física',         horario: '10h00 às 11h40' },
  { dia: 'Quarta-feira',  materia: 'Programação',    horario: '13h00 às 14h40' },
  { dia: 'Quinta-feira',  materia: 'Português',      horario: '08h00 às 09h40' },
  { dia: 'Sexta-feira',   materia: 'Química',        horario: '10h00 às 11h40' },
];

// "route" é injetado pelo React Navigation e contém os parâmetros recebidos
export default function HorariosScreen({ route }: any) {

  // Tentamos ler o parâmetro "nome" enviado pela tela de Início.
  // Se não foi enviado, nome será undefined.
  const nome = route.params?.nome;
  //                       ^ o "?." evita erro caso params seja undefined

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>

      {/* Mensagem personalizada ou genérica dependendo se o nome foi recebido */}
      <View style={styles.cabecalho}>
        {nome ? (
          // Nome foi recebido: mensagem personalizada
          <>
            <Text style={styles.saudacao}>Olá, {nome}! 👋</Text>
            <Text style={styles.subtitulo}>Aqui estão seus horários:</Text>
          </>
        ) : (
          // Nome NÃO foi recebido: mensagem genérica
          <Text style={styles.saudacao}>Horários de aula não personalizados.</Text>
        )}
      </View>

      {/* Listagem dos horários */}
      {HORARIOS.map((item, index) => (
        // Cada item da lista recebe uma "key" única — obrigatório no React
        <View key={index} style={styles.card}>

          {/* Dia da semana em destaque */}
          <View style={styles.diaContainer}>
            <Text style={styles.dia}>{item.dia}</Text>
          </View>

          {/* Matéria e horário */}
          <View style={styles.info}>
            <Text style={styles.materia}>{item.materia}</Text>
            <Text style={styles.horario}>🕐 {item.horario}</Text>
          </View>

        </View>
      ))}

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

  saudacao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#AACCFF',
    fontSize: 14,
    marginTop: 4,
  },

  // Card de cada horário
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  // Faixa laranja com o nome do dia
  diaContainer: {
    backgroundColor: LARANJA,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  dia: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },

  // Área com matéria e horário
  info: {
    padding: 14,
  },

  materia: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },

  horario: {
    fontSize: 14,
    color: '#555',
  },
});
