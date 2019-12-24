import React from 'react';
import {View, Dimensions, Image, SafeAreaView} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles.js';
import {c} from './constants.js';

import {Padding} from '../../assets/components/Padding';

export class Screen2 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <Padding height={30} />
        <View style={s.center}>
          <View style={s.logo}>
            <Image style={s.image} resizeMode={'contain'} source={c.logo_uri} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
