import styled from 'styled-components/native';

import colors from '../../constants/colors';
import { screenHeight, screenWidth } from '../../constants/dimensions';

export const Container = styled.TouchableOpacity`
  width: ${props => props.width}px;
  height: 55px;
  margin-top: ${props => props.marginTop}px;
  margin-left: ${props => props.marginLeft}px;
  border-radius: 10px;
  background-color: ${colors.fluxo};
  align-self: center;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Text = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  align-self: center;
`;
