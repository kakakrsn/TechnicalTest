import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderInput, OrderList } from '../page';

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator
            screenOptions={Platform.OS === 'android' ? {
                headerShown: false, 
                animation: 'slide_from_right',
            }:{
                headerShown: false,
                animation: 'slide_from_right',
                gestureEnabled: false
            }}
            initialRouteName='OrderInput'
        >
            <Stack.Screen name="OrderInput" component={OrderInput} />
            <Stack.Screen name="OrderList" component={OrderList} />
        </Stack.Navigator>
    )
}

export default Router
