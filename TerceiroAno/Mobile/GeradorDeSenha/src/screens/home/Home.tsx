import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Style'
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SenhaInput } from '../../components/senhaInput/senhaInput';
import { senhaBotao } from '../../components/senhaBotao/senhaBotao';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <SenhaInput />
      </View>

      <Menu></Menu>
      <StatusBar style="light" />
    </View>
  );
}

