import React from 'react';
import { StatusBar } from 'expo-status-bar';

import SignInScreen from './src/screens/LoggedOut/SignInScreen';

export default function App() {
  return (
    <>
      <SignInScreen />
      <StatusBar style='auto' />
    </>
  );
}
