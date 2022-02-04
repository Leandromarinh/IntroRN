import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Home = ({ navigation, route }) => {
  const { name } = route.params;
  console.log(name);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ola</Text>
    </View>
  );
};

export default Home;
