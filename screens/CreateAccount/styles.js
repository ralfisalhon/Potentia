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
  three_bars: {
    width: windowWidth * 0.9,
    height: 8,
    flexDirection: 'row',
  },
  filled_bar: {
    flex: 1,
    backgroundColor: c.potentia_orange,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  unfilled_bar: {
    flex: 1,
    backgroundColor: c.icon_gray,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
    borderRadius: 15,
  },
  profilePic: {
    height: windowWidth / 4.5,
    width: windowWidth / 4.5,
  },
  edit: {
    color: c.button_blue,
    fontWeight: '500',
    fontSize: 14,
  },
  input: {
    width: windowWidth * 0.7,
    height: 45,
  },
  next: {
    width: windowWidth * 0.5,
    paddingVertical: 8,
  },
});
