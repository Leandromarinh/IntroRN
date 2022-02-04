import React, { useState } from 'react';
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

import * as yup from 'yup';
import { Formik } from 'formik';

import Routes from '../../../routes/routes';

import { showMessage } from 'react-native-flash-message';

const SignUpScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const signUpvalidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, 'Entre com seu nome completo')
      .required('Nome completo é obrigatório'),
    email: yup
      .string()
      .email('Entre com um endereço de e-mail válido')
      .required('Endereço de e-mail é obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `Senha deve ter no mínimo ${min} caracteres`)
      .required('Senha é obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas não são compatíveis')
      .required('Confirmar a senha é obrigatório'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const NavigateToSignIn = () => navigation.navigate(Routes.SIGN_IN);

  async function Submit(values) {
    try {
      Keyboard.dismiss();
      setLoading(true);
      const { data } = await api.post('/signup', {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      showMessage({
        message: 'Cadastro efetuado com sucesso',
        description: `Faça seu login`,
        type: 'success',
        icon: 'success',
        duration: 4000,
      });
      setLoading(false);
      NavigateToSignIn();
    } catch {
      showMessage({
        message: 'Erro ao fazer Cadastro',
        description: `Endereço de email incorreto`,
        type: 'danger',
        icon: 'danger',
      });
      setLoading(false);
    }
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
          validationSchema={signUpvalidationSchema}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            handleSubmit,
            isvalid,
            handleBlur,
          }) => (
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
                value={values.name}
                onChangeText={handleChange('name')}
                touched={touched.name}
                onBlur={handleBlur('name')}
                onSubmitEditing={handleSubmit}
                error={errors.name}
                autoCapitalize='sentences'
              />
              <Input
                marginTop={25}
                marginLeft={0}
                title='E-mail'
                placeholder='Digite seu e-mail'
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
                marginTop={25}
                marginLeft={0}
                title='Senha'
                secureTextEntry
                placeholder='Digite sua senha'
                value={values.password}
                onChangeText={handleChange('password')}
                touched={touched.password}
                onBlur={handleBlur('password')}
                onSubmitEditing={handleSubmit}
                error={errors.password}
              />
              <Input
                marginTop={25}
                marginLeft={0}
                title='Repetir senha'
                secureTextEntry
                placeholder='Repita sua senha'
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                touched={touched.confirmPassword}
                onBlur={handleBlur('confirmPassword')}
                onSubmitEditing={handleSubmit}
                error={errors.confirmPassword}
              />
              <Button
                width={screenWidth * 0.4}
                marginTop={45}
                marginLeft={0}
                text='Cadastrar'
                onPress={handleSubmit}
                disabled={
                  values.name === '' ||
                  values.email === '' ||
                  values.password === '' ||
                  values.confirmPassword === '' ||
                  Boolean(errors.name) ||
                  Boolean(errors.email) ||
                  Boolean(errors.password) ||
                  Boolean(errors.confirmPassword)
                }
                loading={loading}
              />
              <EnterContainer
                onPress={() => navigation.navigate(Routes.SIGN_IN)}
              >
                <Text>Já possui cadastro?</Text>
                <Text enter>Entrar</Text>
              </EnterContainer>
            </Container>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
