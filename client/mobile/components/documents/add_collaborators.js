import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';


class AddCollaborators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCollaborator: ''
    };
  }

  render() {
    const { collaborators, addCollaborator, removeCollaborator } = this.props;
    const { newCollaborator } = this.state;
    return (
      <View style={styles.container}>
        <Text>Add Colloborators</Text>
        <View style={{ alignItems: 'flex-start' }}>
          <Text>Email</Text>
          <TextInput
            placeholder="Collaborators email"
            onChangeText={(text) => this.setState({ newCollaborator: text })}
          />
          <Button
            title="Add Collaborator"
            onPress={() => addCollaborator(newCollaborator)}
          />
          <Button
            title="remove collaborator"
            onPress={() => removeCollaborator()}
          />
        </View>
      </View>
    );
  }
}

export default AddCollaborators;
