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
  },
  title: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 22,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  line: {
    height: 2,
    width: windowWidth,
    borderWidth: 1,
    borderColor: 'gray',
  },
  cancelButton: {
    width: windowWidth * 0.5,
    paddingVertical: 8,
  },
});
