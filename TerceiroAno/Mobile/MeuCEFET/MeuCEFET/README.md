# 📱 Meu CEFET-MG

Aplicativo de apoio ao estudante do CEFET-MG, desenvolvido em React Native com Expo.

---

## 📁 Onde colocar cada arquivo no projeto

```
MeuCEFET/
│
├── App.tsx                        ← Raiz do app (já existe no projeto Expo)
├── package.json                   ← Dependências (já existe, substitua o conteúdo)
│
└── src/
    ├── routes/
    │   └── AppRoutes.tsx          ← Configuração das abas (Bottom Tabs)
    │
    └── screens/
        ├── InicioScreen.tsx       ← Tela da aba "Início"
        ├── HorariosScreen.tsx     ← Tela da aba "Horários"
        └── AjudaScreen.tsx        ← Tela da aba "Ajuda"
```

A pasta `src/` deve ser criada na raiz do projeto Expo (mesmo nível do App.tsx).

---

## 🚀 Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o projeto
npx expo start

# 3. Escaneie o QR Code com o app Expo Go no celular
```

---

## 🗺️ Como a navegação funciona

```
App.tsx
  └── AppRoutes.tsx (NavigationContainer + BottomTabNavigator)
        ├── InicioScreen    ← aba inicial
        ├── HorariosScreen  ← recebe { nome } como parâmetro
        └── AjudaScreen
```

**Passagem de parâmetro (Início → Horários):**

```tsx
// Em InicioScreen.tsx — ENVIANDO o parâmetro
navigation.navigate('Horarios', { nome: 'Ana' });

// Em HorariosScreen.tsx — RECEBENDO o parâmetro
const nome = route.params?.nome;
```

---

## 🎨 Cores utilizadas (paleta CEFET-MG)

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul institucional | `#003B7A` | Cabeçalhos, barra de abas |
| Laranja complementar | `#F47920` | Botões, destaques |
| Cinza claro | `#F2F4F7` | Fundo das telas |
| Branco | `#FFFFFF` | Cards, textos em fundo escuro |

---

## 📦 Principais bibliotecas

| Pacote | Para quê serve |
|--------|---------------|
| `expo` | Base do projeto React Native |
| `@react-navigation/native` | Sistema de navegação |
| `@react-navigation/bottom-tabs` | Navegação por abas no rodapé |
| `react-native-screens` | Otimização de telas |
| `react-native-safe-area-context` | Respeita o notch do celular |
| `@expo/vector-icons` | Ícones (Ionicons) |
