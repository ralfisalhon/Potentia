import React from 'react';
import {View, Dimensions, Image, SafeAreaView, Text} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Button} from '../../assets/components/Button';

export class Sedat extends React.Component {
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
        <Text>SEDAAATTT</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            text={'Sedat selam'}
            style={{width: 200, padding: 10, alignItems: 'center'}}
            onPress={() => alert('SEDAT SELAAAM')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
