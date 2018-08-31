import React from 'react';
import { View, TextInput } from 'react-native';

const Auth = () => (
  <View>
    <TextInput placeholder="email" />
    <TextInput placeholder="password" secureTextEntry />
  </View>
);

export default Auth;
