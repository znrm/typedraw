import React from 'react';
import { View, StatusBar, Button, Modal, Text } from 'react-native';
import styles from '../../styles';
// prop is sent to document tools instead of DocumentFrame in the container
// go fix it
class DocumentTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    const { selectAction, colorSelect, toggles, navigation } = this.props;
    const { showModal } = this.state;
    return (
      <View style={styles.header}>
        <StatusBar
          barStyle="dark-content"
        />
        <View style={styles.stackNavigation}>
          <Button
            title="Docs"
            onPress={() => this.setState({
              showModal: !showModal
            })}
          />
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
            title="blk"
            onPress={() => colorSelect('black')}
          />
          {/* some action to handle erasing */}
          <Button
            title="erase"
            onPress={() => toggles('erasing')}
          />
          <Button
            title="share"
            onPress={() => navigation.navigate('AddCollaboratorsContainer')}
          />
        </View>
        <Modal visible={showModal}>
          <View style={styles.modalView}>
            <View style={styles.modalText}>

              <Button
                title="Back to Document"
                onPress={() => this.setState({
                  showModal: !showModal
                })}
              />
              <View style={styles.fixPadding}>

                <Text>Your Documents: </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default DocumentTools;
