import {StyleSheet, Dimensions} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: '#2980b9',
  },
  center: {
    alignItems: 'center',
  },
  logo: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.75,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  text: {
    fontFamily: 'Avenir Next',
  },
  line: {
    height: 2,
    width: windowWidth,
    borderWidth: 1,
    borderColor: '#ecf0f1',
  },
  button: {
    borderWidth: 0,
    paddingVertical: 30,
    width: windowWidth * 0.8,
    alignItems: 'center',
    borderRadius: 8,
  },
});
