import React from 'react';
import { View, TextInput } from 'react-native';
import io from 'socket.io-client';
import ImageLayer from './image_layer';

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
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <TextInput
          onChangeText={text => this.sendText(text)}
          multiline
          value={textLayer}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: action === 'typing' ? 1 : -1
          }}
        />
        <View
          style={{
            flex: 1,
            zIndex: action === 'typing' ? -1 : 1,
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        >
          <ImageLayer />
        </View>
      </View>
    );
  }
}

export default Document;
