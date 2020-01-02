import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {c} from '../../constants';
const {width: windowWidth} = Dimensions.get('window');

import {Icon} from './Icon';

class NavBar extends Component {
  static defaultProps = {
    selected: 'Home',
  };

  render() {
    const {selected, navigate} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Icon
            logo_uri={c.home_uri}
            text="Home"
            selected={selected == 'Home'}
            onPress={() => navigate('Home')}
          />
          <Icon
            logo_uri={c.classes_uri}
            text="Classes"
            selected={selected == 'Classes'}
            onPress={() => navigate('Classes')}
          />
          <Icon
            logo_uri={c.events_uri}
            text="Events"
            selected={selected == 'Events'}
            onPress={() => navigate('Events')}
          />
          <Icon
            logo_uri={c.profile_uri}
            text="Profile"
            selected={selected == 'Profile'}
            onPress={() => navigate('Profile')}
          />
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
