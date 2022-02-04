import React from 'react';
import { View } from 'react-native';

import { Container, Text } from './styles';

import Button from '../../../components/Button';

import Routes from '../../../routes/routes';

const Home = ({ navigation, route }) => {
  const { name } = route.params;
  console.log(name);
  return (
    <Container>
      <Text>Bem Vindo, {name}</Text>
      <Button
        width={150}
        marginTop={30}
        marginLeft={0}
        text='Sair'
        onPress={() => navigation.navigate(Routes.SIGN_OUT_ROUTE)}
      />
    </Container>
  );
};

export default Home;
