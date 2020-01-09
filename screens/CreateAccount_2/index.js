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

export class CreateAccount_2 extends React.Component {
  static navigationOptions = {
    header: null,
    // gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {
      person: {
        first_name: null,
        last_name: null,
        birthday: null,
        email_phone: null,
      },
    };
  }

  updateField = (field, text) => {
    let new_person = this.state.person;
    new_person[field] = text;
    this.setState({person: new_person});
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
            <View style={s.unfilled_bar} />
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
            placeholder={'Student / Tutor'}
            value={this.state.person.first_name}
            style={[s.text, s.input]}
            onChange={text => this.updateField('first_name', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Input
            placeholder={'School'}
            value={this.state.person.last_name}
            style={[s.text, s.input]}
            onChange={text => this.updateField('last_name', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Input
            placeholder={'Major'}
            value={this.state.person.birthday}
            style={[s.text, s.input]}
            onChange={text => this.updateField('birthday', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Input
            placeholder={'Graduation Year'}
            value={this.state.person.email_phone}
            style={[s.text, s.input]}
            onChange={text => this.updateField('email_phone', text)}
            maxLength={30}
          />
          <Padding height={15} />
          <Button
            style={s.next}
            text={'Next'}
            onPress={() =>
              navigate('CreateAccount_3', {person: this.state.person})
            }
          />
        </View>
        <BottomDots opacity={0.75} />
      </SafeAreaView>
    );
  }
}
