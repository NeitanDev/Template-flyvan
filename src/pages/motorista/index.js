import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Page1 from './Page1';
import Page2 from './Page2';

const Tab = createBottomTabNavigator();




export default function RoutesPassageiro() {
    return (
        
        <Tab.Navigator
        keyboardHidesTabBar={true}
            tabBarOptions={{
                activeTintColor: '#d9f2ed',
                inactiveTintColor: '#2e8473',
                activeBackgroundColor: '#55c3ad',
                inactiveBackgroundColor: '#55c3ad',
                style: {
                    borderTopWidth: 0,
                    shadowColor: '#2bbf54',
                    shadowOpacity: 0,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    elevation: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Page1') {
                        iconName = 'face-profile';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Page2') {
                        iconName = 'google-maps';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Page1" component={Page1}  />
            <Tab.Screen name="Page2" component={Page2} />
            
        </Tab.Navigator>
    );
}