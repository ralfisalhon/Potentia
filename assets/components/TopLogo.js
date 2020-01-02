import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {Padding} from './Padding';

import {c} from '../../constants';

class TopLogo extends Component {
  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <View style={styles.center}>
        <Padding height={15} />
        <View style={styles.logo}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={c.logo_uri}
          />
        </View>
        <Padding height={15} />
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  line: {
    width: windowWidth * 0.9,
    height: 1,
    backgroundColor: c.icon_gray,
  },
});

export {TopLogo};
