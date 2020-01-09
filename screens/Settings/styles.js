import {StyleSheet, Dimensions} from 'react-native';
import {c} from '../../constants';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
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
    borderRadius: 15,
  },
  profilePic: {
    height: windowWidth / 5,
    width: windowWidth / 5,
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
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  line: {
    height: 2,
    width: windowWidth,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    width: windowWidth * 0.7,
  },
});
