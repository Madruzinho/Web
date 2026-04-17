import React from 'react';
import { View, Button } from 'react-native';

import { styles } from './senheBotaoStyle';

export function senhaBotao() {
  return (
    <View style={styles.container}>
        <Button
            title='clique aqui!'
            accessibilityLabel='Btn de teste'
            onPress={() => console.log('Click Button')} />
    </View>
  );
}