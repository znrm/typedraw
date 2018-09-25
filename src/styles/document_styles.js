import { StyleSheet } from 'react-native';

export const textInputStyleMaker = zIndex =>
  StyleSheet.create({
    textInput: {
      borderWidth: 0,
      padding: 25,
      paddingTop: 25,
      paddingBottom: 25,
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex
    }
  });

export const documentStyle = StyleSheet.create({
  document: {
    width: '100vw',
    height: '100vh'
  }
});
