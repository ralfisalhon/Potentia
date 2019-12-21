import React from 'react';
import {Text, View, Dimensions} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import {human} from 'react-native-typography';

import {styles} from './styles.js';

// import { Profile } from "../assets/components/Profile";

export class Screen2 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={human.title1}>Screen2</Text>
      </View>
    );
  }
}
