import React, {useState} from "react";
import { View, Button, Pressable, Text } from "react-native";

import { styles } from "./senhaBotaoStyle";
import { SenhaInput } from "../senhaInput/senhaInput";
import gerarSenha from "../../services/senhaService";
import * as Clipboard from 'expo-clipboard';

export function SenhaBotao() {

  function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

  const [senhaGerada, setSenhaGerada] = useState('');

  const texto = [
    "Gerando senha.",
    "Gerando senha..",
    "Gerando senha...",
    "Gerando senha.",
    "Gerando senha..",
    "Gerando senha...",
  ];

  async function gerarSenhaAleatoria(){
    for(let i = 0; i < 6; i++) {
      setSenhaGerada(texto[i])
      await sleep(150);
    }
    let aux = gerarSenha();
    setSenhaGerada(aux);
  }

  function copiarSenha(){
    Clipboard.setStringAsync(senhaGerada);
  }

  return (
    <>
      <SenhaInput senha={senhaGerada}/>
      <Pressable
        onPress={gerarSenhaAleatoria}
        style={styles.Button}
      >
        <Text style={styles.Text}>Gerar Senha</Text>
      </Pressable>

      <Pressable
        onPress={copiarSenha}
        style={styles.Button}
      >
        <Text style={styles.Text}>Copiar</Text>
      </Pressable>
    </>
  );
}
