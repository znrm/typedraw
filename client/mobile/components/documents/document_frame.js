import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Document from './document';

const DocumentFrame = () => (
  <View>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <View>
      <Text>Welcome to Document Frame</Text>
    </View>
    <View>
      <Document />
    </View>
  </View>
);

export default DocumentFrame;
