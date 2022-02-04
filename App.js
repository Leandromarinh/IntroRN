import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import FlashMessage from 'react-native-flash-message';

import MainRoutes from './src/routes/main.routes';

export default function App() {
  return (
    <NavigationContainer>
      <MainRoutes />
      <StatusBar style='auto' />
      <FlashMessage
        floating={true}
        style={{ alignItems: 'center', marginTop: 25 }}
        titleStyle={{ fontWeight: 'bold' }}
      />
    </NavigationContainer>
  );
}
