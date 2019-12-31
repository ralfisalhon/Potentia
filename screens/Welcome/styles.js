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
    width: windowWidth,
    height: windowWidth / 2.75,
    // backgroundColor: 'blue',
  },
  text: {
    fontFamily: 'Avenir Next',
    color: c.text_color,
    fontSize: 14,
  },
  small_text: {
    fontSize: 12,
  },
  title: {
    fontWeight: '600',
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
    width: windowWidth * 0.7,
  },
  button: {
    width: windowWidth * 0.5,
  },
  bottom_dots: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  mini_square: {
    height: 14,
    width: 14,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
