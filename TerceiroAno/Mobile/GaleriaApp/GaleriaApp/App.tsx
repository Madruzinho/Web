/**
 * App.tsx
 * -------
 * Ponto de entrada da aplicação React Native.
 *
 * Aqui apenas conectamos o AppNavigator como componente raiz.
 * Todo o controle de navegação e telas fica encapsulado dentro
 * do AppNavigator, mantendo o App.tsx simples e limpo.
 */

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  // O AppNavigator já inclui o NavigationContainer e todas as telas.
  // Basta renderizá-lo aqui como componente raiz.
  return <AppNavigator />;
}
