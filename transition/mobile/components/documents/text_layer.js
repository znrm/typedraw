import React from 'react';
import { TextInput } from 'react-native';
import io from 'socket.io-client';
import DiffMatchPatch from 'diff-match-patch';

class TextLayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.dmp = new DiffMatchPatch();
  }

  componentDidMount() {
    const { documentId } = this.props;
    this.socket = io('https://typedraw.herokuapp.com');

    this.socket.on('connect', () => {
      this.socket.emit('document', documentId);
    });

    this.socket.on('text', diff => this.receiveTextDiff(diff));
  }

  componentWillUnmount() {
    const { updateText, documentId, textLayer } = this.props;
    updateText(documentId, textLayer);
  }

  sendTextDiff(text) {
    const { textLayer, receiveDocument, documentId } = this.props;
    receiveDocument({ id: documentId, textLayer: text });
    const diff = this.dmp.diff_main(textLayer, text);

    this.socket.emit('typing', diff);
  }

  receiveTextDiff(diff) {
    const { textLayer, receiveDocument, documentId } = this.props;
    const patch = this.dmp.patch_make(textLayer, diff);
    const patchedText = this.dmp.patch_apply(patch, textLayer)[0];

    receiveDocument({ id: documentId, textLayer: patchedText });
  }

  render() {
    const { textLayer, action } = this.props;
    return (
      <TextInput
        onChangeText={text => this.sendTextDiff(text)}
        placeholder="Enter text here"
        value={textLayer}
        multiline
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: action === 'typing' ? 1 : -1
        }}
      />
    );
  }
}

export default TextLayer;
