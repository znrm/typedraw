import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import styles from '../../styles';
// prop is sent to document tools instead of DocumentFrame in the container
// go fix it
const DocumentTools = ({ navigation, selectAction, toggles, colorSelect, goCollabs }) => (
  <View style={styles.header}>
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
        onPress={() => colorSelect('black')}
      />
      {/* some action to handle erasing */}
      <Button
        title="eraser"
        onPress={() => toggles('erasing')}
      />
      <Button
        title="share"
        onPress={() => navigation.navigate('AddCollaboratorsContainer')}
      />

    </View>
  </View>
);

export default DocumentTools;
