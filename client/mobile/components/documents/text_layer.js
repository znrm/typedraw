import React from 'react';
import io from 'socket.io-client';

class TextLayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { documentId, receiveDocument } = this.props;
    this.socket = io('https://typedraw.herokuapp.com');

    this.socket.on('text', text =>
      receiveDocument({ id: documentId, textLayer: text }));
  }
}

export default TextLayer;
