// src/routes/AppRoutes.tsx
// Aqui configuramos a navegação por abas (Bottom Tabs).
// Cada aba corresponde a uma tela do aplicativo.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importando as telas
import InicioScreen from '../screens/InicioScreen';
import HorariosScreen from '../screens/HorariosScreen';
import AjudaScreen from '../screens/AjudaScreen';

// Cores do CEFET-MG
const AZUL = '#003B7A';
const CINZA_CLARO = '#AAAAAA';
const BRANCO = '#FFFFFF';

// Cria o navegador de abas
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    // NavigationContainer é obrigatório — envolve toda a navegação
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // Estilo da barra de abas no rodapé
          tabBarStyle: {
            backgroundColor: AZUL, // Fundo azul institucional
          },
          tabBarShowLabel: false,       // Esconde o texto abaixo dos ícones
          tabBarActiveTintColor: BRANCO,     // Ícone ativo: branco
          tabBarInactiveTintColor: CINZA_CLARO, // Ícone inativo: cinza
          headerStyle: {
            backgroundColor: AZUL,     // Cabeçalho também azul
          },
          headerTintColor: BRANCO,     // Texto do cabeçalho branco
          headerTitleAlign: 'center',
        }}
      >
        {/* Aba 1 - Início */}
        <Tab.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'Início',
            tabBarIcon: ({ color }) => (
              // Ionicons é a biblioteca de ícones do Expo
              <Ionicons name="home" size={28} color={color} />
            ),
          }}
        />

        {/* Aba 2 - Horários */}
        <Tab.Screen
          name="Horarios"
          component={HorariosScreen}
          options={{
            title: 'Horários',
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={28} color={color} />
            ),
          }}
        />

        {/* Aba 3 - Ajuda */}
        <Tab.Screen
          name="Ajuda"
          component={AjudaScreen}
          options={{
            title: 'Ajuda',
            tabBarIcon: ({ color }) => (
              <Ionicons name="help-circle" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
