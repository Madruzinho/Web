/**
 * src/components/MiniaturaSkeleton.tsx
 * --------------------------------------
 * Componente de "skeleton" (esqueleto) para o estado de carregamento
 * das miniaturas na galeria.
 *
 * Um skeleton é um placeholder visual que simula a estrutura do conteúdo
 * enquanto ele ainda está sendo carregado. Isso melhora muito a UX
 * em comparação a uma tela em branco ou um spinner genérico.
 *
 * Uso:
 *   import MiniaturaSkeleton from '../components/MiniaturaSkeleton';
 *   <MiniaturaSkeleton largura={160} altura={192} />
 */

import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  largura: number;
  altura: number;
  borderRadius?: number;
  style?: ViewStyle;
}

/**
 * MiniaturaSkeleton
 * -----------------
 * Renderiza um retângulo animado que pulsa suavemente para indicar
 * que o conteúdo está sendo carregado.
 *
 * A animação usa `Animated.loop` com `Animated.sequence` para criar
 * um efeito de fade-in e fade-out contínuo.
 */
export default function MiniaturaSkeleton({
  largura,
  altura,
  borderRadius = 12,
  style,
}: Props) {
  // Valor animado que controla a opacidade (entre 0.3 e 0.7)
  const opacidade = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    /**
     * Criamos uma animação em loop:
     * 1. Aumenta a opacidade de 0.3 para 0.7 em 700ms
     * 2. Diminui a opacidade de 0.7 para 0.3 em 700ms
     * 3. Repete indefinidamente
     */
    const animacao = Animated.loop(
      Animated.sequence([
        Animated.timing(opacidade, {
          toValue: 0.7,
          duration: 700,
          useNativeDriver: true, // Melhor performance: usa o driver nativo
        }),
        Animated.timing(opacidade, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );

    animacao.start();

    // Cleanup: para a animação quando o componente é desmontado
    return () => animacao.stop();
  }, [opacidade]);

  return (
    <Animated.View
      style={[
        styles.skeleton,
        { width: largura, height: altura, borderRadius, opacity: opacidade },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#2a2a4a', // Cor base do skeleton
  },
});
