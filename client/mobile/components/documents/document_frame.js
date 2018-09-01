import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import Document from './document';
import styles from '../../styles';
import { selectDocumentAction } from '../../../shared/actions/ui_actions';


// prop is sent to document tools instead of DocumentFrame in the container
// go fix it
const DocumentTools = ({ selectAction }) => (
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
        onPress={() => console.log('black')}
      />
      {/* some action to handle erasing */}
      <Button
        title="eraser"
        onPress={() => console.log('eraseme')}
      />
    </View>
  </View>
);

const mapProps = dispatch => ({
  selectAction: (action) => dispatch(selectDocumentAction(action))
});

const DocumentToolsContainer = connect(null, mapProps)(DocumentTools);

class DocumentFrame extends React.Component {
  static get navigationOptions() {
    return {
      headerTitle: DocumentToolsContainer,
    };
  }

  render() {
    return <Document />;
  }
}

export default DocumentFrame;

// make some new actions, make a reducer for the actions
// add to container
