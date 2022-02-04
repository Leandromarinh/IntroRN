import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

import colors from '../../constants/colors';

const Button = ({
  width,
  marginLeft,
  marginTop,
  disabled,
  loading,
  text,
  onPress,
}) => {
  return (
    <Container
      width={width}
      marginTop={marginTop}
      marginLeft={marginLeft}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.background} size={'small'} />
      ) : (
        <Text> {text}</Text>
      )}
    </Container>
  );
};

export default Button;
