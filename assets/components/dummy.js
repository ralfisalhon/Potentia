import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

class Welcome extends Component {
  static defaultProps = {};

  render() {
    const {} = this.props;

    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
  },
  center: {
    alignItems: 'center',
  },
});

export {Welcome};
