import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './senhaStyles';

interface SenhaInputProps {
  senha: string
}

export function SenhaInput(props : SenhaInputProps) {
  return (

    <TextInput 
      placeholder='Senha...' 
      style={styles.inputer}
      value={props.senha}></TextInput>

  );
}