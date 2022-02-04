import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/LoggedIn/Home';

const Stack = createStackNavigator();

export default function SignedIntRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
