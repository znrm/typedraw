import React from 'react';
import { View } from 'react-native';
import DocumentContainer from './document_container';
import ToolbarContainer from './toolbar_container';

class DocumentFrame extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:
        <View>
          <ToolbarContainer navigation={navigation}/>
        </View>
    };
  }

  render() {
    return (
      <DocumentContainer />
    );
  }
}

export default DocumentFrame;
