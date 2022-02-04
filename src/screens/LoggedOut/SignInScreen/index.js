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

import Routes from '../../../routes/routes';

const SignInScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Entre com um endereço de e-mail válido')
      .required('Endereço de e-mail obrigatório'),
    password: yup
      .string()
      .min(8, ({ min }) => 'A senha deve ter no mínimo ${min} caracteres')
      .required('Senha obrigatória'),
  });

  const initialValues = { email: '', password: '' };

  function Submit(values) {
    Keyboard.dismiss();
    console.log(values.email, values.password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: `${colors.background}` }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
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
            isValid,
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
              />
              <Input
                title={'Senha'}
                marginLeft={0}
                marginTop={23}
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                touched={touched.password}
                onBlur={handleBlur('password')}
                onSubmitEditing={handleSubmit}
                error={errors.password}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
