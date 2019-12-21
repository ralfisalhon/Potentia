import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

class Button extends Component {
  static defaultProps = {
    text: 'Lorem Ipsum',
    style: {borderWidth: 1, padding: 5, borderRadius: 5},
  };

  render() {
    const {text, style} = this.props;

    return (
      <TouchableOpacity style={style}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export {Button};
