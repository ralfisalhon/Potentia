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
    height: windowHeight * 0.15,
    width: windowWidth * 0.75,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  image2: {
    width: windowWidth + 10,
    flex: 1,
  },
  text: {
    fontFamily: 'Avenir Next',
    color: c.text_color,
  },
  title: {
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 24,
  },
  loading: {
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 16,
  },
  create: {
    // textDecorationLine: 'underline',
    color: '#0069f6',
    fontSize: 12,
    fontWeight: '500',
  },
  input: {
    width: windowWidth * 0.75,
  },
  button: {
    width: windowWidth * 0.5,
  },
  bottom_dots: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
