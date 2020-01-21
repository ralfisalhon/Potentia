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
    fontSize: 18,
  },
  id: {
    fontWeight: '300',
  },
  line: {
    height: 2,
    width: windowWidth,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    // backgroundColor: c.potentia_orange,
  },
  buttonText: {
    fontSize: 14,
  },
  class: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    width: windowWidth * 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
