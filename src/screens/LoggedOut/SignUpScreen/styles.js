import styled from 'styled-components/native';

import colors from '../../../constants/colors';
import { screenHeight, screenWidth } from '../../../constants/dimensions';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 150px;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-weight: 500;
  color: ${colors.fluxo};
  margin-top: 15px;
`;

export const EnterContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 31px;
  padding-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${props => (props.enter ? `${colors.fluxo}` : '#000')};
  text-decoration: ${props => (props.enter ? 'underline' : 'none')};
  margin-left: ${props => (props.enter ? 5 : 0)}px;
`;
