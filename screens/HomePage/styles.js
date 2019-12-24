import {StyleSheet, Dimensions} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
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
    borderColor: 'gray',
  },
  button: {
    borderWidth: 1,
    paddingVertical: 30,
    width: windowWidth * 0.8,
    alignItems: 'center',
    borderRadius: 8,
  },
});
