import React from 'react';
import { View } from 'react-native';
import DocumentContainer from './document_container';
import DocumentToolsContainer from './document_tools_container';
// import DocumentTools from './document_tools';

class DocumentFrame extends React.Component {
  static get navigationOptions() {
    return {
      headerTitle: DocumentToolsContainer,
    };
  }

  render() {
    const { navigation } = this.props;
    return (

      <DocumentContainer />

    );
  }
}

export default DocumentFrame;
