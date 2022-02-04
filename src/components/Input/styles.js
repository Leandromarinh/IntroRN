import styled from 'styled-components/native';

import colors from '../../constants/colors';
import { screenHeight, screenWidth } from '../../constants/dimensions';

export const Container = styled.View`
  width: ${screenWidth * 0.817}px;
  height: 72px;
  background-color: ${colors.background};
  align-self: center;
  align-items: flex-start;
  margin-top: ${props => props.marginTop}px;
  margin-left: ${props => props.marginLeft}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: rgba(250, 125, 33, 0.7);
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
  selectionColor: `${colors.fluxo}`,
})`
  width: ${screenWidth * 0.817}px;
  height: 50px;
  background-color: rgba(195, 197, 199, 0.2);
  border-radius: 5px;
  padding-left: 10px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.error};
  align-self: flex-start;
  margin-bottom: 15px;
`;
