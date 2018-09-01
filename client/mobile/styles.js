import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  error: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stackNavigation: {
    flex: 1,
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 22,
    marginBottom: 40
  },
  input: {
    fontSize: 16,
    margin: 10,
    padding: 10,
    height: 50,
    minWidth: 300,
    borderColor: 'lightgray',
    borderWidth: 1
  }
});

export default styles;
