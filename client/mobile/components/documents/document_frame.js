import React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import Document from './document';

const DocumentTools = () => (
  <View>
    <StatusBar
      barStyle="dark-content"
    />
    <View>
      <Text>Welcome to Document Frame</Text>
      <Button
        title="clickme"
        onPress={() => console.log('im clicked')}
      />
    </View>
    <View />
  </View>
);

class DocumentFrame extends React.Component {
  static get navigationOptions() {
    return ({
      headerTitle: DocumentTools
    });
  }

  render() {
    return <Document />;
  }
}

export default DocumentFrame;
