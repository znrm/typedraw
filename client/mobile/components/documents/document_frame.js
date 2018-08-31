import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import Document from './document';
import styles from '../../styles';

const DocumentTools = () => (
  <View>
    <StatusBar
      barStyle="dark-content"
    />
    <View style={styles.stackNavigation}>
      <Button
        title="Type"
        onPress={() => console.log('type')}
      />
      <Button
        title="Draw"
        onPress={() => console.log('draw')}
      />
      <Button
        title="black"
        onPress={() => console.log('black')}
      />
      <Button
        title="eraser"
        onPress={() => console.log('eraseme')}
      />
    </View>
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
