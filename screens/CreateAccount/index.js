import React from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Input} from '../../assets/components/Input';
import {TopLogo} from '../../assets/components/TopLogo';
import {Button} from '../../assets/components/Button';
import {BottomDots} from '../../assets/components/BottomDots';

export class CreateAccount extends React.Component {
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

  validEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  };

  continue = navigate => {
    const {person} = this.state;
    if (c.test_mode) {
      navigate('CreateAccount_2', {person: this.state.person});
      return;
    }
    if (
      person.first_name &&
      person.last_name &&
      person.birthday &&
      person.email &&
      person.phone
    ) {
      if (this.validEmail(person.email))
        navigate('CreateAccount_2', {person: this.state.person});
      else {
        alert('Invalid Email Address');
        return;
      }
    } else {
      alert('Please fill in all fields!');
    }
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo settings={false} />
        <Padding height={10} />

        <ScrollView alwaysBounceVertical={false}>
          <View style={s.center}>
            <Text style={[s.text, s.title]}>Create New Account</Text>
            <Padding height={8} />
            <View style={s.three_bars}>
              <View style={s.filled_bar} />
              <View style={s.unfilled_bar} />
              <View style={s.unfilled_bar} />
            </View>
            <Padding height={24} />
            <Input
              placeholder={'First Name'}
              value={this.state.person.first_name}
              style={[s.text, s.input]}
              onChange={text => this.updateField('first_name', text)}
              maxLength={30}
            />
            <Padding height={15} />
            <Input
              placeholder={'Last Name'}
              value={this.state.person.last_name}
              style={[s.text, s.input]}
              onChange={text => this.updateField('last_name', text)}
              maxLength={30}
            />
            <Padding height={15} />
            <Input
              placeholder={'Birthday'}
              value={this.state.person.birthday}
              style={[s.text, s.input]}
              onChange={text => this.updateField('birthday', text)}
              maxLength={30}
            />
            <Padding height={15} />
            <Input
              placeholder={'Email'}
              value={this.state.person.email}
              style={[s.text, s.input]}
              onChange={text => this.updateField('email', text)}
              maxLength={30}
              email={true}
            />
            <Padding height={15} />
            <Input
              placeholder={'Phone Number'}
              value={this.state.person.phone}
              style={[s.text, s.input]}
              onChange={text => this.updateField('phone', text)}
              maxLength={30}
              number={true}
            />
            <Padding height={15} />
            <Button
              style={s.next}
              text={'Next'}
              onPress={() => this.continue(navigate)}
            />
            <Padding height={windowHeight / 2.75} />
          </View>
        </ScrollView>
        <BottomDots opacity={0.75} />
      </SafeAreaView>
    );
  }
}
