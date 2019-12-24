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

import {s} from './styles';
import {c} from './constants';

import {Padding} from '../../assets/components/Padding';
import {Input} from '../../assets/components/Input';
import {Button} from '../../assets/components/Button';
/* <Padding height={50} /> */

export class Welcome extends React.Component {
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
    const {navigate} = this.props.navigation;

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
            placeholder={'Email/Phone Number'}
            value={this.state.name}
            style={[s.text, s.input]}
            onChange={text => this.updateField('name', text)}
            maxLength={30}
          />
          <Padding height={10} />
          <Input
            placeholder={'Password'}
            value={this.state.password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('password', text)}
            password={true}
          />
          <Padding height={20} />
          <Button
            style={s.button}
            text={'Log In'}
            onPress={() => navigate('HomePage')}
          />
          <Padding height={5} />
          <Text style={[s.text, s.create]}>Create a new account</Text>
        </View>
      </SafeAreaView>
    );
  }
}
