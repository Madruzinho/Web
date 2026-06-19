/**
 * src/screens/GaleriaScreen.tsx
 * ------------------------------
 * Tela principal da galeria de imagens.
 *
 * Responsabilidades:
 *  1. Exibir um array de imagens como miniaturas em grade
 *  2. Permitir rolagem vertical via ScrollView
 *  3. Ao tocar em uma miniatura, navegar para o VisualizadorScreen
 *     passando a URL da imagem como parâmetro
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

// Importamos o tipo de navegação tipado com nossa lista de rotas
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// Tipo que representa as props de navegação desta tela específica
type GaleriaNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Galeria'>;

// Props recebidas pelo componente (injetadas automaticamente pelo Navigator)
interface Props {
  navigation: GaleriaNavigationProp;
}

/**
 * Interface que descreve a estrutura de cada item no array de imagens.
 * Ter uma interface clara facilita a manutenção e evita erros de digitação.
 */
interface ImagemItem {
  id: number;
  url: string;
  titulo: string;
  descricao: string;
}

/**
 * Array de imagens da galeria.
 * Usamos URLs públicas do Unsplash (serviço gratuito de fotos).
 * Em um projeto real, essas URLs poderiam vir de uma API ou banco de dados.
 *
 * O parâmetro ?w=800 define a largura da imagem baixada,
 * reduzindo o consumo de dados.
 */
const IMAGENS: ImagemItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    titulo: 'Montanhas ao Amanhecer',
    descricao: 'Vista deslumbrante de picos cobertos de neve',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
    titulo: 'Floresta Nórdica',
    descricao: 'Paisagem serena de uma floresta de pinheiros',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800',
    titulo: 'Cachorro Feliz',
    descricao: 'Um golden retriever curtindo o dia ensolarado',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800',
    titulo: 'Pôr do Sol no Mar',
    descricao: 'Horizonte pintado de laranja e dourado',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    titulo: 'Cidade à Noite',
    descricao: 'Luzes da cidade refletidas no rio',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    titulo: 'Trilha na Mata',
    descricao: 'Caminho sombreado entre árvores centenárias',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
    titulo: 'Praia Paradisíaca',
    descricao: 'Águas cristalinas e areia branca',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    titulo: 'Retrato Urbano',
    descricao: 'Expressão e personalidade no ambiente urbano',
  },
];

// Calculamos a largura da tela para definir o tamanho das miniaturas dinamicamente
const { width: LARGURA_TELA } = Dimensions.get('window');

// Cada miniatura ocupa metade da tela menos as margens
const LARGURA_MINIATURA = (LARGURA_TELA - 48) / 2; // 48 = margens laterais + gap

/**
 * GaleriaScreen
 * -------------
 * Componente funcional que renderiza a tela da galeria.
 *
 * @param navigation - Objeto de navegação injetado pelo Stack Navigator
 */
export default function GaleriaScreen({ navigation }: Props) {
  /**
   * Função chamada ao pressionar uma miniatura.
   * Navega para a tela de Visualizador passando:
   *  - imageUrl: a URL completa da imagem selecionada
   *  - titulo: o título da imagem (usado no cabeçalho da próxima tela)
   */
  const handleImagemPress = (imagem: ImagemItem) => {
    navigation.navigate('Visualizador', {
      imageUrl: imagem.url,
      titulo: imagem.titulo,
    });
  };

  return (
    <View style={styles.container}>
      {/* StatusBar define o estilo da barra de status do dispositivo */}
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Cabeçalho descritivo logo abaixo da navegação */}
      <View style={styles.cabecalho}>
        <Text style={styles.subtitulo}>
          {IMAGENS.length} fotos · Toque para ampliar
        </Text>
      </View>

      {/**
       * ScrollView permite a rolagem vertical do conteúdo.
       * contentContainerStyle aplica estilo ao conteúdo interno
       * (não ao ScrollView em si).
       */}
      <ScrollView
        contentContainerStyle={styles.grade}
        showsVerticalScrollIndicator={false} // Oculta a barra de rolagem
      >
        {/**
         * Mapeamos o array de imagens para renderizar cada miniatura.
         * Cada item precisa de uma prop `key` única para o React
         * gerenciar a lista de forma eficiente.
         */}
        {IMAGENS.map((imagem) => (
          /**
           * TouchableOpacity torna o elemento clicável e fornece
           * feedback visual de "opacidade" ao ser pressionado.
           * activeOpacity define o quanto o elemento esmaece ao toque.
           */
          <TouchableOpacity
            key={imagem.id}
            style={styles.cartao}
            onPress={() => handleImagemPress(imagem)}
            activeOpacity={0.75}
          >
            {/**
             * Image do React Native para exibir a miniatura.
             * resizeMode="cover" garante que a imagem preencha
             * todo o espaço sem distorcer, cortando as bordas se necessário.
             */}
            <Image
              source={{ uri: imagem.url }}
              style={styles.miniatura}
              resizeMode="cover"
            />

            {/* Overlay com gradiente escuro para legibilidade do texto */}
            <View style={styles.overlay}>
              <Text style={styles.tituloImagem} numberOfLines={2}>
                {imagem.titulo}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

/**
 * StyleSheet.create
 * -----------------
 * Centralizamos todos os estilos aqui, separados da lógica do componente.
 * O StyleSheet.create otimiza os estilos no React Native
 * (são processados nativamente em vez de recriar objetos JS a cada render).
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Ocupa todo o espaço disponível
    backgroundColor: '#0f0f23', // Fundo escuro para contraste com as fotos
  },

  cabecalho: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4a',
  },

  subtitulo: {
    color: '#8888aa',
    fontSize: 13,
    letterSpacing: 0.5,
  },

  // Container do ScrollView — define o layout em grade (2 colunas)
  grade: {
    flexDirection: 'row',   // Elementos lado a lado
    flexWrap: 'wrap',       // Quebra para próxima linha quando necessário
    padding: 12,
    gap: 12,                // Espaçamento entre os itens da grade
  },

  // Card de cada imagem na grade
  cartao: {
    width: LARGURA_MINIATURA,
    height: LARGURA_MINIATURA * 1.2, // Proporção ligeiramente retangular
    borderRadius: 12,
    overflow: 'hidden',     // Garante que a imagem respeite o borderRadius
    backgroundColor: '#1a1a2e', // Cor de fundo enquanto a imagem carrega
    // Sombra (funciona no iOS; no Android usa elevation)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  // Imagem em miniatura que preenche o card
  miniatura: {
    width: '100%',
    height: '100%',
  },

  // Overlay escuro na parte inferior do card para legibilidade do título
  overlay: {
    position: 'absolute', // Sobreposto sobre a imagem
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  tituloImagem: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
});
