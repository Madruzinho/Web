import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} // tive que pedir ajuda pra IA

export default function App() {
  function numeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [dado, setDado] = useState(0);

  function numeroDado() {
    let novo;

    do {
      novo = numeroAleatorio(0, 5);
    } while (novo === dado);

    setDado(novo);
  }

  const [resposta, setResposta] = useState(0);

  async function SortearDado() {
    for (let intervalo = 0; intervalo < 10; intervalo++) {
      numeroDado();
      await sleep(100);
      }
    }

  const imagens = [
    require("./assets/1.png"),
    require("./assets/2.png"),
    require("./assets/3.png"),
    require("./assets/4.png"),
    require("./assets/5.png"),
    require("./assets/6.png"),
  ];

  const cores = [
    "#E8F5E9",
    "#A5D6A7",
    "#66BB6A",
    "#43A047",
    "#2E7D32",
    "#1B5E20",
  ];

  return (
    <View style={[styles.container, { backgroundColor: cores[dado] }]}>
      <Pressable onPress={SortearDado}>
        <Image style={styles.Imagem} source={imagens[dado]} />
      </Pressable>
      <Text style={styles.Texto}>Numero sorteado: {dado + 1} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Imagem: {
    height: 100,
    width: 100,
  },

  Texto: {
    fontSize: 26,
    marginTop: 60,
  },
});
