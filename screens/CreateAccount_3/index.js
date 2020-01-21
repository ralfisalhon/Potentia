import React from 'react';
import {View, Dimensions, SafeAreaView, Text, ScrollView} from 'react-native';
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
      submitting: false,
      error: null,
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
      if (person.password.length < 6) {
        alert('Please set your password to at least 6 characters!');
        return;
      }
      this.signUp();
    } else {
      alert('Please fill in all fields! / Passwords do not match');
    }
  };

  signUp = async () => {
    this.setState({submitting: true});
    console.warn('Signing up');
    const {person} = this.state;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      this.setState({submitting: false});
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
        console.warn('Could not sign up', xhr.status);
        this.setState({error: xhr.responseText});
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
    const {submitting} = this.state;

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
          <Padding height={10} />
          <Text style={[s.text, s.biggerText]}>
            Hey {this.state.person.first_name}! Last step, set a password:
          </Text>
          <Padding height={10} />
          <Input
            placeholder={'Password'}
            value={this.state.person.password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('password', text)}
            maxLength={30}
            password={true}
          />
          <Padding height={15} />
          <Input
            placeholder={'Confirm Password'}
            value={this.state.person.confirm_password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('confirm_password', text)}
            maxLength={30}
            password={true}
          />
          <Padding height={15} />
          <Text style={[s.text, s.biggerText, {fontSize: 13}]}>
            You'll use your email {this.state.person.email} to log in.
          </Text>
          <Padding height={10} />
          {submitting ? (
            <Text style={[s.text, s.biggerText, {color: c.button_blue}]}>
              Creating Your Account...
            </Text>
          ) : (
            <Button
              style={s.next}
              text={'Submit'}
              onPress={() => this.submit()}
            />
          )}
          <Padding height={20} />
          {this.state.error && (
            <ScrollView>
              <Text style={{paddingHorizontal: 5}}>{this.state.error}</Text>
            </ScrollView>
          )}
        </View>
        <BottomDots opacity={0.75} />
      </SafeAreaView>
    );
  }
}
