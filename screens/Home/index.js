import React from 'react';
import {View, Dimensions, Image, SafeAreaView} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Button} from '../../assets/components/Button';
import {NavBar} from '../../assets/components/NavBar';

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
        <Padding height={20} />
        <View style={s.center}>
          <View style={s.logo}>
            <Image style={s.image} resizeMode={'contain'} source={c.logo_uri} />
          </View>
        </View>
        <Padding height={30} />
        <View style={s.center}></View>
        <View style={s.center}>
          <Button
            text={'My Classes'}
            style={s.button}
            onPress={() => navigate('Classes')}
          />
          <Padding height={20} />
          <Button
            text={'Practice Tools'}
            style={s.button}
            onPress={() => navigate('Tools')}
          />
          <Padding height={20} />
          <Button
            text={'Track Progress'}
            style={s.button}
            onPress={() => navigate('Progress')}
          />
        </View>
        <NavBar />
      </SafeAreaView>
    );
  }
}