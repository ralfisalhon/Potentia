import React from 'react';
import {View, Dimensions, SafeAreaView, Text, Image} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Input} from '../../assets/components/Input';
import {TopLogo} from '../../assets/components/TopLogo';
import {Button} from '../../assets/components/Button';
import {BottomDots} from '../../assets/components/BottomDots';

export class CreateAccount_3 extends React.Component {
  static navigationOptions = {
    header: null,
    // gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {
      person: {
        first_name: 'Ralfi',
        last_name: 'Salhon',
        email: 'ralfisalhon@gmail.com',
        phone_num: '8575235290',
        major: 'CS',
        password: '12345678',
        dob: '06/12/97',
        user_type: 'Tutor',
      },
    };

    this.signUp();
  }

  updateField = (field, text) => {
    let new_person = this.state.person;
    new_person[field] = text;
    this.setState({person: new_person});
  };

  signUp = async () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      console.warn(
        'signUp | Status:',
        xhr.status,
        '| responseText:',
        xhr.responseText,
      );
      if (xhr.status == 200) {
        // var data = xhr.responseText;
        // var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        this.props.navigation.navigate('Classes');
      } else {
        // console.warn('Could not get classes', xhr.status);
      }
    };

    xhr.open('POST', 'https://potentia-server.herokuapp.com/signup');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(
      'first_name=' +
        this.state.first_name +
        '&last_name=' +
        this.state.last_name +
        '&email=' +
        this.state.email +
        '&phone_num=' +
        this.state.phone_num +
        '&major=' +
        this.state.major +
        '&password=' +
        this.state.password +
        '&user_type=' +
        this.state.user_type +
        '&dob=' +
        this.state.dob,
    );
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo settings={false} />
        <Padding height={10} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Create New Account</Text>
          <Padding height={8} />
          <View style={s.three_bars}>
            <View style={s.filled_bar} />
            <View style={s.filled_bar} />
            <View style={s.filled_bar} />
          </View>
          <Padding height={12} />
          <View style={s.profilePic}>
            <Image
              style={s.image}
              resizeMode={'contain'}
              source={c.avatar_uri}
            />
          </View>
          <Padding height={5} />
          <Text style={[s.text, s.edit]}>Edit</Text>
          <Padding height={12} />
          <Input
            placeholder={'Username'}
            value={this.state.person.first_name}
            style={[s.text, s.input]}
            onChange={text => this.updateField('first_name', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Input
            placeholder={'Password'}
            value={this.state.person.last_name}
            style={[s.text, s.input]}
            onChange={text => this.updateField('last_name', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Input
            placeholder={'Confirm Password'}
            value={this.state.person.birthday}
            style={[s.text, s.input]}
            onChange={text => this.updateField('birthday', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Button
            style={s.next}
            text={'Submit'}
            onPress={() => navigate('Classes')}
          />
        </View>
        <BottomDots opacity={0.75} />
      </SafeAreaView>
    );
  }
}
