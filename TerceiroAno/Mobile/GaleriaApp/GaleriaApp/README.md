# 📷 GaleriaApp — Galeria Simples de Imagens

Projeto desenvolvido como atividade acadêmica em React Native utilizando **Expo** e **Stack Navigation**.

---

## 🗂️ Estrutura do Projeto

```
GaleriaApp/
├── App.tsx                          ← Ponto de entrada; conecta o AppNavigator
├── package.json                     ← Dependências do projeto
│
└── src/
    ├── navigation/
    │   └── AppNavigator.tsx         ← Configuração do Stack Navigator
    │
    ├── screens/
    │   ├── GaleriaScreen.tsx        ← Tela da galeria com miniaturas
    │   └── VisualizadorScreen.tsx   ← Tela de visualização em tela cheia
    │
    └── components/
        └── MiniaturaSkeleton.tsx    ← Componente de loading animado (bônus)
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go no celular (iOS ou Android) **ou** emulador configurado

### Passo a passo

```bash
# 1. Entre na pasta do projeto
cd GaleriaApp

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npx expo start

# 4. Escaneie o QR Code com o app Expo Go no celular
#    ou pressione 'a' para abrir no emulador Android
#    ou pressione 'i' para abrir no simulador iOS
```

---

## 📦 Dependências Principais

| Pacote | Finalidade |
|--------|-----------|
| `expo` | Framework base para React Native |
| `react-navigation/native` | Sistema de navegação |
| `react-navigation/native-stack` | Stack Navigator (pilha de telas) |
| `react-native-screens` | Otimização de telas nativas |
| `react-native-safe-area-context` | Suporte a notch e safe areas |

---

## 🧭 Fluxo de Navegação

```
App.tsx
  └── AppNavigator (NavigationContainer)
        └── Stack.Navigator
              ├── GaleriaScreen    [tela inicial]
              └── VisualizadorScreen
```

Ao tocar em uma miniatura na `GaleriaScreen`, a aplicação chama:

```typescript
navigation.navigate('Visualizador', {
  imageUrl: imagem.url,
  titulo: imagem.titulo,
})
```

Na `VisualizadorScreen`, esses dados são acessados via:

```typescript
const { imageUrl, titulo } = route.params;
```

---

## 🎨 Decisões de Design

- **Tema escuro** (`#0f0f23`) para valorizar as fotografias
- **Grade 2 colunas** na galeria para melhor aproveitamento do espaço
- **resizeMode="contain"** na visualização: imagem completa sem cortes
- **resizeMode="cover"** nas miniaturas: preenchimento total do card
- **Overlay escuro** nas miniaturas para legibilidade do título
- **ActivityIndicator** durante o carregamento das imagens
- **Estado de erro** tratado explicitamente

---

## 📝 Conceitos Abordados

- **Stack Navigation**: navegação em pilha com passagem de parâmetros
- **TypeScript**: tipagem das rotas (`RootStackParamList`), props e interfaces
- **React Hooks**: `useState` para controle de estado, `useEffect` e `useRef` para animações
- **StyleSheet**: estilos organizados e otimizados nativamente
- **Dimensions API**: layout responsivo baseado no tamanho real da tela
- **Animated API**: animação de skeleton com `Animated.loop` e `useNativeDriver`

---

## 👨‍💻 Autor

Atividade acadêmica — React Native com Stack Navigation
