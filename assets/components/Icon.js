import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {c} from '../../constants';

const {width: windowWidth} = Dimensions.get('window');
const isSmallDevice = windowWidth < 350 ? true : false;

class Icon extends Component {
  static defaultProps = {
    text: 'Lorem',
    selected: false,
  };

  render() {
    const {logo_uri, text, selected, onPress} = this.props;

    return (
      <View>
        <TouchableOpacity
          style={[
            styles.icon,
            selected && {backgroundColor: c.selected_icon_color},
          ]}
          onPress={onPress}
          activeOpacity={0.5}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={logo_uri}
          />
        </TouchableOpacity>
        <Text style={[styles.text, selected && {color: c.selected_icon_color}]}>
          {text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: windowWidth / 5.5,
    width: windowWidth / 5.5,
    backgroundColor: c.icon_gray,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  text: {
    fontFamily: 'Avenir Next',
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '700',
  },
});

export {Icon};
