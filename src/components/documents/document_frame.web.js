import React from 'react';
import { View } from 'react-native';
import DocumentContainer from './document_container';
import ToolbarContainer from './toolbar_container';
import styles from '../../styles/styles';

const DocumentFrame = () => (
  <View style={styles.container}>
    <View style={styles.document}>
      <ToolbarContainer />
      <DocumentContainer />
    </View>
  </View>
);

export default DocumentFrame;
