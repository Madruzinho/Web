/**
 * src/screens/VisualizadorScreen.tsx
 * ------------------------------------
 * Tela de visualização de imagem em tela cheia.
 *
 * Responsabilidades:
 *  1. Receber a URL da imagem via route.params (passada pela GaleriaScreen)
 *  2. Exibir a imagem ocupando a maior parte da tela
 *  3. Mostrar título e descrição da imagem
 *  4. Oferecer botão para retornar à galeria
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

// Tipos para tipagem da navegação e dos parâmetros da rota
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

// Tipagem das props de navegação específicas desta tela
type VisualizadorNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Visualizador'
>;

// Tipagem dos parâmetros da rota (o que foi passado via navigation.navigate)
type VisualizadorRouteProp = RouteProp<RootStackParamList, 'Visualizador'>;

// Props do componente (injetadas automaticamente pelo Stack Navigator)
interface Props {
  navigation: VisualizadorNavigationProp;
  route: VisualizadorRouteProp;
}

// Dimensões da tela do dispositivo para layout responsivo
const { width: LARGURA_TELA, height: ALTURA_TELA } = Dimensions.get('window');

/**
 * VisualizadorScreen
 * ------------------
 * Exibe uma única imagem em tamanho ampliado com informações.
 *
 * @param navigation - Controla a navegação (voltar, etc.)
 * @param route - Contém os parâmetros passados pela tela anterior
 */
export default function VisualizadorScreen({ navigation, route }: Props) {
  /**
   * Extraímos os parâmetros da rota.
   * Esses parâmetros foram definidos em RootStackParamList e
   * passados via navigation.navigate('Visualizador', { imageUrl, titulo })
   */
  const { imageUrl, titulo } = route.params;

  /**
   * Estado para controlar o carregamento da imagem.
   * Enquanto a imagem não carrega, exibimos um indicador de atividade.
   */
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  return (
    <View style={styles.container}>
      {/* Define a barra de status como clara (texto branco) */}
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false} // Desativa o efeito "bounce" do iOS
      >
        {/* Container da imagem com tamanho bem definido */}
        <View style={styles.imagemContainer}>
          {/**
           * Indicador de carregamento exibido enquanto a imagem baixa.
           * Fica visível (via estado `carregando`) até o evento onLoad disparar.
           */}
          {carregando && !erro && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#7c83fd" />
              <Text style={styles.loadingTexto}>Carregando imagem...</Text>
            </View>
          )}

          {/* Mensagem de erro caso a imagem falhe ao carregar */}
          {erro && (
            <View style={styles.erroContainer}>
              <Text style={styles.erroIcone}>⚠️</Text>
              <Text style={styles.erroTexto}>
                Não foi possível carregar a imagem.
              </Text>
            </View>
          )}

          {/**
           * Componente Image do React Native para exibir a imagem.
           *
           * resizeMode="contain":
           *   A imagem é redimensionada para caber inteiramente dentro
           *   do espaço disponível, mantendo a proporção original.
           *   Nenhuma parte da imagem é cortada.
           *
           * onLoad: chamado quando a imagem termina de carregar com sucesso
           * onError: chamado quando ocorre um erro ao carregar a imagem
           */}
          <Image
            source={{ uri: imageUrl }}
            style={[
              styles.imagemCompleta,
              // Esconde a imagem enquanto carrega para evitar flash
              (carregando || erro) && { opacity: 0 },
            ]}
            resizeMode="contain"
            onLoad={() => setCarregando(false)}
            onError={() => {
              setCarregando(false);
              setErro(true);
            }}
          />
        </View>

        {/* Seção de informações abaixo da imagem */}
        <View style={styles.infoContainer}>
          {/* Título da imagem */}
          <Text style={styles.titulo}>{titulo}</Text>

          {/* Linha divisória decorativa */}
          <View style={styles.divisor} />

          {/* URL da imagem (útil para fins didáticos e de debug) */}
          <View style={styles.metadados}>
            <Text style={styles.metaLabel}>Fonte da imagem</Text>
            <Text style={styles.metaValor} numberOfLines={2}>
              {imageUrl}
            </Text>
          </View>
        </View>

        {/**
         * Botão para retornar à galeria.
         * navigation.goBack() desempilha a tela atual,
         * retornando para a tela anterior (GaleriaScreen).
         *
         * Obs.: o botão nativo do cabeçalho (seta "←") já faz isso,
         * mas adicionamos um botão explícito para melhor UX.
         */}
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.botaoVoltarTexto}>← Voltar para a Galeria</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },

  // Conteúdo do ScrollView — centralizado verticalmente
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },

  // Container da imagem define o espaço reservado para ela
  imagemContainer: {
    width: LARGURA_TELA,
    // A imagem ocupa 60% da altura da tela
    height: ALTURA_TELA * 0.6,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /**
   * A imagem ocupa toda a largura e altura do container.
   * Com resizeMode="contain", ela se ajusta internamente
   * mantendo a proporção original sem cortes.
   */
  imagemCompleta: {
    width: '100%',
    height: '100%',
  },

  // Loading state
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

  loadingTexto: {
    color: '#8888aa',
    fontSize: 14,
  },

  // Error state
  erroContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  erroIcone: {
    fontSize: 40,
  },

  erroTexto: {
    color: '#ff6b6b',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
  },

  // Seção de texto com informações da imagem
  infoContainer: {
    padding: 20,
    gap: 12,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
  },

  divisor: {
    height: 1,
    backgroundColor: '#2a2a4a',
    marginVertical: 4,
  },

  metadados: {
    gap: 4,
  },

  metaLabel: {
    color: '#7c83fd',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  metaValor: {
    color: '#8888aa',
    fontSize: 12,
    lineHeight: 18,
  },

  // Botão de retorno à galeria
  botaoVoltar: {
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: '#7c83fd',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoVoltarTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
