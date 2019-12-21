import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import {human} from 'react-native-typography';

import {s} from './styles.js';
import {c} from './constants.js';

import {Padding} from '../../assets/components/Padding';
import {Input} from '../../assets/components/Input';
import {Button} from '../../assets/components/Button';
/* <Padding height={50} /> */

export class Screen1 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
    };
  }

  componentDidMount() {}

  updateField = (field, text) => {
    // console.warn(text);
  };

  render() {
    return (
      <SafeAreaView style={s.container}>
        <Padding height={30} />
        <View style={s.center}>
          <View style={s.logo}>
            <Image style={s.image} resizeMode={'contain'} source={c.logo_uri} />
          </View>
        </View>
        <Padding height={20} />
        <Text style={[s.text, s.title]}>Welcome!</Text>
        <Padding height={20} />
        <View style={s.center}>
          <Input
            placeholder={c.placeholder1}
            value={this.state.name}
            style={[s.text, s.input]}
            onChange={text => this.updateField('name', text)}
          />
          <Padding height={10} />
          <Input
            placeholder={c.placeholder2}
            value={this.state.password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('password', text)}
          />
          <Padding height={20} />
          <Button style={s.button} text={c.buttonText} />
          <Padding height={5} />
          <Text style={[s.text, s.create]}>Create a new account</Text>
        </View>
      </SafeAreaView>
    );
  }
}
