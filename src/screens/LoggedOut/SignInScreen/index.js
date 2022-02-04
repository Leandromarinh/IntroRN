import React, { useState } from 'react';
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

import * as yup from 'yup';
import { Formik } from 'formik';

import api from '../../../services/api';

import { showMessage } from 'react-native-flash-message';

import Routes from '../../../routes/routes';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Entre com um endereço de e-mail válido')
      .required('Endereço de e-mail obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve ter no mínimo ${min} caracteres`)
      .required('Senha obrigatória'),
  });

  const initialValues = { email: '', password: '' };

  const NavigateToHome = data =>
    navigation.navigate(Routes.HOME, {
      name: `${data.User.name}`,
    });

  async function Submit(values) {
    try {
      Keyboard.dismiss();
      setLoading(true);
      const { data } = await api.post('/login', {
        email: values.email,
        password: values.password,
      });
      await AsyncStorage.setItem('@token', data.token);
      showMessage({
        message: 'Login efetuado com sucesso',
        description: `Bem Vindo, ${data.User.name}`,
        type: 'success',
        icon: 'success',
        duration: 4000,
      });
      setLoading(false);
      NavigateToHome(data);
    } catch {
      showMessage({
        message: 'Erro ao fazer Login',
        description: `Endereço de email ou senha incorretos`,
        type: 'danger',
        icon: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, backgroundColor: `${colors.background}` }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={Submit}
          validationSchema={loginValidationSchema}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            handleSubmit,
            handleBlur,
          }) => (
            <Container>
              <Logo source={LogoFluxo} />
              <Input
                title={'E-mail'}
                marginLeft={0}
                marginTop={23}
                keyboardType='email-address'
                value={values.email}
                onChangeText={handleChange('email')}
                touched={touched.email}
                onBlur={handleBlur('email')}
                onSubmitEditing={handleSubmit}
                error={errors.email}
                autoComplete='email'
                placeholder='Digite seu e-mail'
              />
              <Input
                title={'Senha'}
                marginLeft={0}
                marginTop={25}
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                touched={touched.password}
                onBlur={handleBlur('password')}
                onSubmitEditing={handleSubmit}
                error={errors.password}
                placeholder='Digite sua senha'
              />
              <Button
                width={screenWidth * 0.353}
                marginLeft={0}
                marginTop={87}
                text='Entrar'
                onPress={handleSubmit}
                disabled={
                  values.email === '' ||
                  values.password === '' ||
                  Boolean(errors.email) ||
                  Boolean(errors.password)
                }
                loading={loading}
              />
              <RegisterContainer
                onPress={() => navigation.navigate(Routes.SIGN_UP)}
              >
                <AntDesign name='user' size={24} color={colors.fluxo} />
                <Text>Cadastre-se</Text>
              </RegisterContainer>
            </Container>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
