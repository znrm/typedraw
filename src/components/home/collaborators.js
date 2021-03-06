import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles/styles';

class Collaborators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  render() {
    const { documentId, collaborators, addCollaborator } = this.props;
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Collaborators Email"
            onChangeText={text => this.setState({ user: text })}
          />
          <Button
            style={styles.text}
            title="Add Collaborator"
            onPress={() => addCollaborator({ id: documentId }, user)}
          />
          <View style={styles.text}>
            {collaborators ? (
              collaborators.map(collaborator => <Text>{collaborator}</Text>)
            ) : (
              <Text>No Collaborators Yet</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default Collaborators;
