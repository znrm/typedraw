import React from 'react';
import { TextInput } from 'react-native';

const textInputStyleMaker = zIndex => ({
  borderWidth: 0,
  padding: 25,
  paddingTop: 25,
  paddingBottom: 25,
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex
});

class TextLayer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { action } = this.props;

    return (
      <TextInput
        multiline
        style={textInputStyleMaker(action === 'typing' ? -1 : -2)}
      />
    );
  }
}

export default TextLayer;
