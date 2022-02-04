import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignedInRoutes from './signedIn.routes';
import SignedOutRoutes from './signedOut.routes';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator initialRouteName='SignInRoute'>
      <Stack.Screen
        name='SignInRoute'
        component={SignedInRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignOutRoute'
        component={SignedOutRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
