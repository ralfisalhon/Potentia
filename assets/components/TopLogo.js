import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {Padding} from './Padding';

import {c} from '../../constants';

class TopLogo extends Component {
  static defaultProps = {
    settings: true,
  };

  render() {
    const {settings, navigate} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          // onPress={() => alert('Back')}
          style={styles.backButton}>
          <View style={styles.small_button}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              // source={c.backButton_uri}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.center}>
          <Padding height={15} />
          <View style={styles.logo}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={c.stripped_logo_uri}
            />
          </View>
          <Padding height={15} />
          <View style={styles.line} />
        </View>
        <TouchableOpacity
          style={styles.settings}
          onPress={() => settings && navigate('Settings')}>
          <View style={styles.small_button}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={settings && c.settings_uri}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.7,
  },
  backButton: {
    marginLeft: windowWidth * 0.1,
  },
  settings: {
    marginRight: windowWidth * 0.1,
  },
  small_button: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.08,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  line: {
    width: windowWidth * 0.9,
    height: 1,
    backgroundColor: c.icon_gray,
  },
});

export {TopLogo};
