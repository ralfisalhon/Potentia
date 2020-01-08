import React from 'react';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Button} from '../../assets/components/Button';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';

export class Home extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Home</Text>
          <Text style={s.text}>Upcoming classes</Text>
          <Text style={s.text}>Most recent event?</Text>
        </View>
        <NavBar selected="Home" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
