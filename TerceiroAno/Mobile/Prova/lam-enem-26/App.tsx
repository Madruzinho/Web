import DrawerNavigation from './src/routes/drawers.routes';
import { View, Text } from 'react-native';

export default function App() {

  // A mais adequada para o tipo de projeto proposto, é o drawer, 
  // pois ele permite uma navegação lateral, ideal para acessar 
  // diferentes seções do aplicativo de forma rápida e intuitiva. 
  // O drawer é útil em aplicativos com várias telas ou funcionalidades
  // como o nosso, que inclui temas anteriores, estrutura da redação e rascunho. 
  // Ele oferece uma experiência de usuário mais fluida e organizada, 
  // facilitando a navegação entre as diferentes partes do aplicativo sem sobrecarregar a interface principal.

  return (
    <DrawerNavigation />
  );
}

