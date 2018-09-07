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
    justifyContent: 'space-around',
    padding: 10
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
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    margin: 10,
  },
  modalView: {
    backgroundColor: '#aaa',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 200
  },
  modalText: {
    marginTop: 60
  },
  fixPadding: {
    padding: 10
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    margin: 10,
    height: 50
  },
  document: {
    width: 425,
    height: 550
  }

});

export default styles;
