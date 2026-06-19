import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import InicioScreen from '../screens/InicioScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ConfScreen from '../screens/ConfScreen';
import SobreScreen from '../screens/SobreScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicio">
                <Drawer.Screen name="Inicio" component={InicioScreen} />
                <Drawer.Screen name="Perfil" component={PerfilScreen} />
                <Drawer.Screen name="Configurações" component={ConfScreen} />
                <Drawer.Screen name="Sobre" component={SobreScreen} />
            </Drawer.Navigator> 
        </NavigationContainer> 
    )
}