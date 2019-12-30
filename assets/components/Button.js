import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {c} from '../../constants';

class Button extends Component {
  static defaultProps = {
    text: 'Lorem Ipsum',
    onPress: () => alert('I am pressed!'),
  };

  render() {
    const {text, style, textStyle, onPress} = this.props;
    const defStyle = {
      padding: 14,
      borderRadius: 100,
      backgroundColor: c.button_blue,
      alignItems: 'center',
    };
    const defTextStyle = {
      fontFamily: 'Avenir Next',
      color: 'white',
      fontWeight: '700',
      fontSize: 20,
    };

    return (
      <TouchableOpacity style={[defStyle, style]} onPress={onPress}>
        <Text style={[defTextStyle, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export {Button};
