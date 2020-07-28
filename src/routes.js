import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/inicial/index';
import Passageiro from './pages/passageiros/index';
import Motorista from './pages/motorista/index';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Passageiro" component={Passageiro} />
                <Stack.Screen name="Motorista" component={Motorista} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}