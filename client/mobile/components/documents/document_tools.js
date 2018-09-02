import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import styles from '../../styles';
// prop is sent to document tools instead of DocumentFrame in the container
// go fix it
const DocumentTools = ({ selectAction, toggle, selectColor, goCollabs }) => (
  <View>
    <StatusBar
      barStyle="dark-content"
    />
    <View style={styles.stackNavigation}>
      <Button
        title="Type"
        onPress={() => selectAction('typing')}
      />
      <Button
        title="Draw"
        onPress={() => selectAction('drawing')}
      />
      {/* some action to handle color change */}
      <Button
        title="black"
        onPress={() => selectColor('black')}
      />
      {/* some action to handle erasing */}
      <Button
        title="eraser"
        onPress={() => toggle('eraser')}
      />
      <Button
        title="addCollabs"
        onPress={() => goCollabs()}
      />
    </View>
  </View>
);

export default DocumentTools;
