import React from 'react';
import DocumentContainer from './document_container';
import ToolbarContainer from './toolbar_container';

class DocumentFrame extends React.Component {
  get navigationOptions() {
    return {
      headerTitle: <ToolbarContainer />
    };
  }

  render() {
    return <DocumentContainer />;
  }
}

export default DocumentFrame;
