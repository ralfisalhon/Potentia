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
    height: windowHeight * 0.25,
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
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: windowWidth * 0.125,
    fontSize: 24,
  },
  create: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 12,
  },
  input: {
    color: 'black',
    fontSize: 20,
    borderWidth: 1,
    padding: 5,
    width: windowWidth * 0.75,
  },
  button: {
    width: windowWidth * 0.5,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});
