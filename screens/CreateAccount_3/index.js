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
      person: {},
    };
  }

  updateField = (field, text) => {
    let new_person = this.state.person;
    new_person[field] = text;
    this.setState({person: new_person});
  };

  componentDidMount() {
    this.setState({person: this.props.navigation.state.params.person});
  }

  submit = navigate => {
    const {person} = this.state;
    if (
      person.password &&
      person.confirm_password &&
      person.password == person.confirm_password
    ) {
      this.signUp();
    } else {
      alert('Please fill in all fields! / Passwords do not match');
    }
  };

  signUp = async () => {
    const {person} = this.state;
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
        person.first_name +
        '&last_name=' +
        person.last_name +
        '&email=' +
        person.email +
        '&phone_num=' +
        person.phone_num +
        '&major=' +
        person.major +
        '&password=' +
        person.password +
        '&user_type=' +
        person.user_type +
        '&dob=' +
        person.birthday,
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
            placeholder={'Password'}
            value={this.state.person.password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('password', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Input
            placeholder={'Confirm Password'}
            value={this.state.person.confirm_password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('confirm_password', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Button
            style={s.next}
            text={'Submit'}
            onPress={() => this.submit()}
          />
        </View>
        <BottomDots opacity={0.75} />
      </SafeAreaView>
    );
  }
}
