import React from 'react';
import { StatusBar } from 'expo-status-bar';

import SignInScreen from './src/screens/LoggedOut/SignInScreen';
import SignUpScreen from './src/screens/LoggedOut/SignUpScreen';

export default function App() {
  return (
    <>
      <SignUpScreen />
      <StatusBar style='auto' />
    </>
  );
}
