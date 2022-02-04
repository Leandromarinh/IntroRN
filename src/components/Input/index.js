import React from 'react';
import { View } from 'react-native';

import { Container, Title, InputText } from './styles';

const Input = ({
  title,
  marginTop,
  marginLeft,
  placeholder,
  secureTextEntry,
  keyboardType,
  error,
  touched,
  onChangeText,
  value,
  onSubmitEditing,
  onBlur,
}) => (
  <Container marginTop={marginTop} marginLeft={marginLeft}>
    <Title>{title}</Title>
    <InputText
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      error={error}
      touched={touched}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
    />
  </Container>
);

export default Input;
