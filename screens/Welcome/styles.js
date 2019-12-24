import {StyleSheet, Dimensions} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: '#ecf0f1',
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
  text: {
    fontFamily: 'Avenir Next',
  },
  title: {
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: windowWidth * 0.125,
    fontSize: 24,
  },
  loading: {
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 16,
  },
  create: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 12,
  },
  input: {
    width: windowWidth * 0.75,
  },
  button: {
    width: windowWidth * 0.5,
    borderWidth: 0,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#2980b9',
  },
});
