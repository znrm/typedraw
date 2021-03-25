import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    margin: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  titleText: {
    fontSize: 22,
    marginBottom: 40
  },
  text: {
    alignItems: 'center',
    margin: 10
  },
  document: {
    width: '100vw',
    height: '100vh'
  }
});

export default styles;
