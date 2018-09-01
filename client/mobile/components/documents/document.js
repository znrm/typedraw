import React from 'react';
import { View, TextInput, WebView } from 'react-native';
import io from 'socket.io-client';
import styles from '../../styles';


class Document extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { documentId } = this.props;
    this.socket = io();

    this.socket.on('connect', () => {
      this.socket.emit('document', documentId);
    });
  }

  sendText(text) {
    this.socket.emit('typing', text);
  }

  render() {
    const { action, textLayer } = this.props;
    return (
      <View style={styles.container} zIndex={action === 'typing' ? 1 : -1}>
        <TextInput
          onChangeText={() => this.sendText()}
          placeholder="enter text here"
          value={textLayer}
          multiline
          height="100%"
          width="100%"
        />
        <View style={{ flex: 1 }} zIndex={action === 'typing' ? -1 : 1}>
          <WebView source={{ url: 'https://google.com' }} />
        </View>
      </View>
    );
  }
}

export default Document;
