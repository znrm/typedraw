import React from 'react';
import { View, Button } from 'react-native';
import DocumentContainer from './document_container';
import DocumentToolsContainer from './document_tools_container';
import styles from '../../styles';
// import DocumentTools from './document_tools';

class DocumentFrame extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 
        <View>
          <DocumentToolsContainer navigation={navigation}/>   
        </View>
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
