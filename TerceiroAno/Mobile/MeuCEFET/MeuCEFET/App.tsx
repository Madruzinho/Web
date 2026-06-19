// App.tsx
// Ponto de entrada do aplicativo.
// Aqui apenas chamamos o arquivo de rotas (AppRoutes),
// que contém toda a configuração de navegação.

import React from 'react';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return <AppRoutes />;
}
