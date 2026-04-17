import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './senhaStyles';

export function SenhaInput() {
  return (

    <TextInput placeholder='Senha...' style={styles.inputer}></TextInput>

  );
}