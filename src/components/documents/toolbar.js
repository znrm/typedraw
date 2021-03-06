import React from 'react';
import {
  View,
  StatusBar,
  Button,
  Modal,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/styles';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleDocSwitch = this.handleDocSwitch.bind(this);
  }

  handleDocSwitch(docId) {
    const { selectDoc } = this.props;
    const { showModal } = this.state;
    selectDoc(docId);
    this.setState({
      showModal: !showModal
    });
  }

  render() {
    const { selectAction, navigation, documents } = this.props;
    const { showModal } = this.state;
    return (
      <View style={styles.header}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.stackNavigation}>
          <Button
            title="Docs"
            onPress={() =>
              this.setState({
                showModal: !showModal
              })
            }
          />
          <Button title="Type" onPress={() => selectAction('typing')} />
          <Button title="Draw" onPress={() => selectAction('drawing')} />
          {/* some action to handle color change */}
          {/* some action to handle erasing */}
          <Button
            title="Share"
            onPress={() => navigation.navigate('CollaboratorsContainer')}
          />
        </View>
        <Modal visible={showModal}>
          <View style={styles.modalView}>
            <View style={styles.modalText}>
              <Button
                title="Back to Document"
                onPress={() =>
                  this.setState({
                    showModal: !showModal
                  })
                }
              />
              <View style={styles.fixPadding}>
                <Text>Your Documents: </Text>
                <ScrollView>
                  {documents ? (
                    Object.values(documents).map(document => (
                      <TouchableOpacity
                        style={styles.modalContent}
                        key={document.id}
                        onPress={() => this.handleDocSwitch(document.id)}
                      >
                        <Text>{document.title}</Text>
                      </TouchableOpacity>
                    ))
                  ) : (
                    <Text>No documents Yet</Text>
                  )}
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNavigation(Toolbar);
