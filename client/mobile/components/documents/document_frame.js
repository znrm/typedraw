import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import DocumentContainer from './document_container';
import styles from '../../styles';
import { selectDocumentAction, toggle, selectColor } from '../../../shared/actions/ui_actions';
import AddCollaborators from './add_collaborators';


// prop is sent to document tools instead of DocumentFrame in the container
// go fix it
const DocumentTools = ({ navigation, selectAction }) => (
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
        onPress={() => toggle('eraseme')}
      />

    </View>
  </View>
);

const mapProps = dispatch => ({
  selectAction: (action) => dispatch(selectDocumentAction(action)),
  toggle: (uiElement) => dispatch(toggle(uiElement)),
  selectColor: (color) => dispatch(selectColor(color))
});

const DocumentToolsContainer = connect(null, mapProps)(DocumentTools);

class DocumentFrame extends React.Component {
  static get navigationOptions() {
    return {
      headerTitle: DocumentToolsContainer,
    };
  }

  render() {
    return <DocumentContainer />;
  }
}

export default DocumentFrame;

// make some new actions, make a reducer for the actions
// add to container
