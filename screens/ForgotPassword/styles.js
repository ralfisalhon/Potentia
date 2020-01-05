import {StyleSheet, Dimensions} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {c} from '../../constants';

export const s = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: c.bg_color,
  },
  center: {
    alignItems: 'center',
    flex: 1,
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
  input: {
    width: windowWidth * 0.7,
  },
  line: {
    height: 2,
    width: windowWidth,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {backgroundColor: 'gray'},
});
