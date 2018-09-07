import React from 'react';
import { View, Button } from 'react-native';
import { withRouter } from 'react-router-dom';
import styles from '../../styles/styles';

const Toolbar = ({ selectAction, history }) => (
  <View style={styles.row}>
    <Button title="Docs" onPress={() => history.push('/')} />
    <Button title="Type" onPress={() => selectAction('typing')} />
    <Button title="Draw" onPress={() => selectAction('drawing')} />
    {/* some action to handle color change */}
    {/* some action to handle erasing */}
    <Button title="share" onPress={() => history.push('/share')} />
  </View>
);

export default withRouter(Toolbar);
