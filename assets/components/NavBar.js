import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {c} from '../../constants';
const {width: windowWidth} = Dimensions.get('window');

import {Icon} from './Icon';

class NavBar extends Component {
  static defaultProps = {
    height: 0,
    width: 0,
  };

  render() {
    const {height, width} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Icon logo_uri={c.home_uri} text="Home" selected={true} />
          <Icon logo_uri={c.classes_uri} text="Classes" />
          <Icon logo_uri={c.events_uri} text="Events" />
          <Icon logo_uri={c.profile_uri} text="Profile" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  navbar: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export {NavBar};
