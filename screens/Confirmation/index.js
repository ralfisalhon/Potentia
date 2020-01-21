import React from 'react';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';
import {Button} from '../../assets/components/Button';

export class Confirmation extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: c.test_mode,
  };

  constructor() {
    super();
    this.state = {
      first_name: 'Tim',
      date: 'Nov 11 (Mon), 10:00 AM',
      location: '574 Boston Ave, Rm 204',
      learner: 'Lara Someone',
    };
  }

  cancelReason(reason) {
    console.warn('[Unimplemented] Cancelling with reason:', reason);
    this.props.navigation.navigate('Classes');
  }

  render() {
    const {navigate} = this.props.navigation;
    const {date, location, tutor} = this.props.navigation.state.params;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>
            {this.state.first_name}, thanks for confirming!
          </Text>
          <Padding height={10} />
          <Text style={[s.text, s.subtitle]}>Your upcoming class:</Text>
          <Padding height={20} />
          <View style={s.profile}>
            <Text style={[s.text, s.profileTitle]}>Date</Text>
            <Text style={[s.text, s.profileText]}>{date}</Text>
            <Padding height={8} />
            <Text style={[s.text, s.profileTitle]}>Location</Text>
            <Text style={[s.text, s.profileText]}>{location}</Text>
            <Padding height={8} />
            <Text style={[s.text, s.profileTitle]}>Tutor</Text>
            <Text style={[s.text, s.profileText]}>{tutor}</Text>
          </View>
        </View>
        <NavBar selected="Classes" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
