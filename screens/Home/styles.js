import {StyleSheet, Dimensions} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {c} from '../../constants';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.bg_color,
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
    color: c.text_color,
  },
  title: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 22,
  },
  line: {
    height: 2,
    width: windowWidth,
    borderWidth: 1,
    borderColor: '#ecf0f1',
  },
  button: {
    paddingVertical: 30,
    width: windowWidth * 0.8,
    // borderRadius: 1,
  },
});
