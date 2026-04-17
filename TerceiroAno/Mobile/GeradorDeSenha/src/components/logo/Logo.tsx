import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';

const logo = require('../../../assets/password.png');

export function Logo() {
  return (
    <View>
      <Text style={styles.titulo}>Gerador de senha</Text>
      <Image style={styles.imagem}source={logo}/>
    </View>
  );
}