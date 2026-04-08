import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function App() {
  function numeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const [dado, setDado] = useState(0);

function SortearDado() {
  setDado(numeroAleatorio(0, 5));
}

const imagens = [
  require('./assets/1.png'),
  require('./assets/2.png'),
  require('./assets/3.png'),
  require('./assets/4.png'),
  require('./assets/5.png'),
  require('./assets/6.png'),
];

  return (
    <View style={styles.container}>
      <Pressable onPress={SortearDado}>
        <Image style={styles.Imagem} source={imagens[dado]}/>
      </Pressable>
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
});