import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {human} from 'react-native-typography';

class Padding extends Component {
  static defaultProps = {
    height: 0,
    width: 0,
  };

  render() {
    const {height, width} = this.props;

    return <View style={{height, width}} />;
  }
}

export {Padding};
