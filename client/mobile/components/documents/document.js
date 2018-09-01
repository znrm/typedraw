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
    const { documentId, receiveDocument } = this.props;
    this.socket = io('https://typedraw.herokuapp.com');

    this.socket.on('connect', () => {
      this.socket.emit('document', documentId);
    });

    this.socket.on('text', text =>
      receiveDocument({ id: documentId, textLayer: text }));
  }

  sendText(text) {
    this.socket.emit('typing', text);
  }

  render() {
    const { action, textLayer } = this.props;
    return (
      <View style={styles.container} zIndex={action === 'typing' ? 1 : -1}>
        <TextInput
          onChangeText={text => this.sendText(text)}
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
