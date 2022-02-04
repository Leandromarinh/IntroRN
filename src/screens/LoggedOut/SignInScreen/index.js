import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import colors from '../../../constants/colors';

import { Container, Logo, RegisterContainer, Text } from './styles';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import LogoFluxo from '../../../assets/Logo.png';
import { screenWidth } from '../../../constants/dimensions';

import { AntDesign } from '@expo/vector-icons';

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: `${colors.background}` }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <Container>
          <Logo source={LogoFluxo} />
          <Input title={'E-mail'} marginLeft={0} marginTop={23} />
          <Input
            title={'Senha'}
            marginLeft={0}
            marginTop={23}
            secureTextEntry
          />
          <Button
            width={screenWidth * 0.353}
            marginLeft={0}
            marginTop={87}
            text='Entrar'
            onPress={() => {}}
          />
          <RegisterContainer>
            <AntDesign name='user' size={24} color={colors.fluxo} />
            <Text>Cadastre-se</Text>
          </RegisterContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
