import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

import { Container, Title, EnterContainer, Text, Image } from './styles';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import TeamWork from '../../../assets/teamwork.png';

import { screenWidth } from '../../../constants/dimensions';
import colors from '../../../constants/colors';

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: `${colors.background}` }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <Container
          contentContainerStyle={{
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image source={TeamWork} />
          <Title>Cadastrar</Title>
          <Input
            marginTop={28}
            marginLeft={0}
            title='Nome'
            placeholder='Digite seu nome completo'
          />
          <Input
            marginTop={12}
            marginLeft={0}
            title='E-mail'
            placeholder='Digite seu e-mail'
          />
          <Input
            marginTop={12}
            marginLeft={0}
            title='Senha'
            secureTextEntry
            placeholder='Digite sua senha'
          />
          <Input
            marginTop={12}
            marginLeft={0}
            title='Repetir senha'
            secureTextEntry
            placeholder='Repita sua senha'
          />
          <Button
            width={screenWidth * 0.4}
            marginTop={45}
            marginLeft={0}
            text='Cadastrar'
          />
          <EnterContainer>
            <Text>Já possui cadastro?</Text>
            <Text enter>Entrar</Text>
          </EnterContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
