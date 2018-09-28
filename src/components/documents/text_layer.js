import React from 'react';
import { TextInput } from 'react-native';
import io from 'socket.io-client';
import DiffMatchPatch from 'diff-match-patch';
import { textInputStyleMaker } from '../../styles/document_styles';

class TextLayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.dmp = new DiffMatchPatch();
  }

  componentDidMount() {
    const { documentId } = this.props;
    this.socket = io('https://www.typedraw.app');

    this.socket.on('connect', () => {
      this.socket.emit('document', documentId);
    });

    this.socket.on('text', diff => this.receiveTextDiff(diff));
  }

  componentWillUnmount() {
    const { updateText, documentId, textLayer } = this.props;
    updateText(documentId, textLayer);
    this.socket.close();
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
        value={textLayer}
        multiline
        style={textInputStyleMaker((action === 'typing' ? 1 : -1)).textInput}
      />
    );
  }
}

export default TextLayer;
