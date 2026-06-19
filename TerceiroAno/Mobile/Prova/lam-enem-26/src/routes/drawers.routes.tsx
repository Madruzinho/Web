import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import EstRedacaoScreen from '../screens/EstRedacaoScreen';
import TemasAnterioresScreen from '../screens/TemasAnterioresScreen';
import RascunhoRedacaoScreen from '../screens/RascunhoRedacaoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicio">
                <Drawer.Screen name="Inicio" component={HomeScreen} />
                <Drawer.Screen name="Estrutura da Redação" component={EstRedacaoScreen} />
                <Drawer.Screen name="Temas Anteriores" component={TemasAnterioresScreen} />
                <Drawer.Screen name="Rascunho da Redação" component={RascunhoRedacaoScreen} />
            </Drawer.Navigator> 
        </NavigationContainer> 
    )
}