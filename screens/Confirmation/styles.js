import {StyleSheet, Dimensions} from 'react-native';
import {c} from '../../constants';
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
  subtitle: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
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
    borderWidth: 1,
    paddingVertical: 30,
    width: windowWidth * 0.8,
    alignItems: 'center',
    borderRadius: 8,
  },
  profile: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    width: windowWidth * 0.6,
    borderColor: c.gray,
  },
  profileTitle: {
    fontWeight: '600',
    // fontSize: 18,
  },
  profileText: {
    fontWeight: '600',
    // fontSize: 14,
    color: c.button_blue,
  },
});
