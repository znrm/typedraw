import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../styles/styles';

export default ({ history }) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>TypeDraw</Text>
    <Text style={styles.text}>The live demo is no longer available</Text>
    <View style={styles.btn}>
      <Button
        title="try solo whiteboard"
        onPress={() => history.push('document')}
      />
    </View>
  </View>
);
