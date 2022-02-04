import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignedInRoutes from './signedIn.routes';
import SignedOutRoutes from './signedOut.routes';
import Home from '../screens/LoggedIn/Home';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator initialRouteName='SignOutRoute'>
      <Stack.Screen
        name='SignOutRoute'
        component={SignedOutRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
