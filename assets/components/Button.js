import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class Button extends Component {
  static defaultProps = {
    text: 'Lorem Ipsum',
    onPress: () => alert('I am pressed!'),
    textStyle: {
      fontFamily: 'Avenir Next',
      color: '#ecf0f1',
      fontWeight: '500',
    },
  };

  render() {
    const {text, style, textStyle, onPress} = this.props;
    const defStyle = {
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
      backgroundColor: '#34495e',
      borderColor: '#3498db',
    };

    return (
      <TouchableOpacity style={[defStyle, style]} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export {Button};
