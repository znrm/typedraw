import React from 'react';
import { TextInput } from 'react-native';
import io from 'socket.io-client';
import { diff_match_patch as DiffMatchPatch } from 'diff-match-patch';
import { textInputStyleMaker } from '../../styles/document_styles';
import HOST from '../../util/host';

class TextLayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.dmp = new DiffMatchPatch();

    this.state = {
      selection: {
        start: props.textLayer.length,
        end: props.textLayer.length
      }
    };
  }

  componentDidMount() {
    const { documentId } = this.props;
    this.socket = io(HOST);

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

  recalculateSelectionState(startLocationOfChange, changeLength, selfInput) {
    const { selection } = this.state;
    const { start, end } = selection;

    let [newStart, newEnd] = [start, end];

    newStart = startLocationOfChange <= start ? start + changeLength : start;

    if (selfInput) {
      newStart += end - start;
      newEnd = newStart;
    } else {
      newEnd += newStart - start;
    }

    this.setState({ selection: { start: newStart, end: newEnd } });
  }

  sendTextDiff(text) {
    const { textLayer, receiveDocument, documentId } = this.props;
    const {
      selection: { start }
    } = this.state;

    this.recalculateSelectionState(start, text.length - textLayer.length, true);

    receiveDocument({ id: documentId, textLayer: text });

    const diff = this.dmp.diff_main(textLayer, text);
    this.socket.emit('typing', { diff, start });
  }

  receiveTextDiff({ diff, start }) {
    const { textLayer, receiveDocument, documentId } = this.props;
    const patch = this.dmp.patch_make(textLayer, diff);
    const patchedText = this.dmp.patch_apply(patch, textLayer)[0];

    this.recalculateSelectionState(
      start,
      patchedText.length - textLayer.length,
      false
    );

    receiveDocument({ id: documentId, textLayer: patchedText });
  }

  render() {
    const { textLayer, action } = this.props;
    const { selection } = this.state;

    return (
      <TextInput
        onChangeText={text => this.sendTextDiff(text)}
        onSelectionChange={({ nativeEvent }) => {
          this.setState({ selection: nativeEvent.selection });
        }}
        value={textLayer}
        multiline
        style={textInputStyleMaker(action === 'typing' ? 1 : -1).textInput}
        selection={selection}
      />
    );
  }
}

export default TextLayer;
