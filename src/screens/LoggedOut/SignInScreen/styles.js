import styled from 'styled-components/native';

import colors from '../../../constants/colors';
import { screenHeight, screenWidth } from '../../../constants/dimensions';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${screenWidth * 0.9}px;
  height: 227px;
`;

export const RegisterContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`;

export const Text = styled.Text`
  font-size: 22px;
  color: ${colors.fluxo};
  text-decoration: underline;
  margin-left: 5px;
`;
