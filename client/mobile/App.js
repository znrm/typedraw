import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Document from './components/documents';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// export default class App extends React.Component {
//   render() {
//     return (

//     );
//   }
// }
const App = () => (
  <View style={styles.container}>
    <Text>TypeDraw!!</Text>
    <Document />
  </View>
);


export default App;
