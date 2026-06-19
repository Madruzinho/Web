/**
 * src/navigation/AppNavigator.tsx
 * --------------------------------
 * Configuração central da navegação usando Stack Navigation.
 *
 * O Stack Navigator funciona como uma pilha de telas:
 *  - Ao navegar para uma tela, ela é "empilhada" sobre a anterior.
 *  - Ao voltar, ela é "desempilhada" e a tela anterior reaparece.
 *
 * Dependências necessárias (instale com npm ou yarn):
 *   npm install @react-navigation/native @react-navigation/native-stack
 *   npm install react-native-screens react-native-safe-area-context
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos as telas que serão registradas no navigator
import GaleriaScreen from '../screens/GaleriaScreen';
import VisualizadorScreen from '../screens/VisualizadorScreen';

/**
 * RootStackParamList
 * ------------------
 * Define os tipos dos parâmetros de cada rota do Stack.
 * Isso é um recurso do TypeScript que garante segurança de tipos
 * ao navegar e ao receber parâmetros via route.params.
 *
 * - 'Galeria': não recebe parâmetros (undefined)
 * - 'Visualizador': recebe um objeto com a URL da imagem (imageUrl: string)
 */
export type RootStackParamList = {
  Galeria: undefined;
  Visualizador: { imageUrl: string; titulo?: string };
};

// Criamos a instância do Stack Navigator tipada com nossa lista de rotas
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * AppNavigator
 * ------------
 * Componente que encapsula toda a estrutura de navegação.
 * O NavigationContainer é o contêiner obrigatório que gerencia
 * o estado da navegação e deve envolver todos os navigators.
 */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // Define a tela inicial da pilha de navegação
        initialRouteName="Galeria"
        screenOptions={{
          // Estilo padrão aplicado ao cabeçalho de todas as telas
          headerStyle: {
            backgroundColor: '#1a1a2e', // Cor de fundo do cabeçalho (azul escuro)
          },
          headerTintColor: '#e0e0e0',       // Cor do texto e ícones do cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
      >
        {/* Tela inicial: Galeria de miniaturas */}
        <Stack.Screen
          name="Galeria"
          component={GaleriaScreen}
          options={{
            title: '📷 Galeria de Fotos', // Título exibido no cabeçalho
          }}
        />

        {/* Tela de visualização em tela cheia */}
        <Stack.Screen
          name="Visualizador"
          component={VisualizadorScreen}
          options={({ route }) => ({
            // O título do cabeçalho é dinâmico: usa o parâmetro 'titulo'
            // passado na navegação, ou um valor padrão caso não exista
            title: route.params?.titulo ?? 'Visualizar Imagem',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
