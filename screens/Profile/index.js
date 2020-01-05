import React from 'react';
import {View, Dimensions, SafeAreaView, Text, Image} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Button} from '../../assets/components/Button';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';

export class Profile extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {
      name: 'Tim J. Smith',
      joined: 'Dec 29, 2019',
      classes_taught: 10,
      points: 5000,
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Profile</Text>
        </View>
        <Padding height={10} />
        <View style={s.center}>
          <View style={s.profilePic}>
            <Image
              style={s.image}
              resizeMode={'contain'}
              source={{uri: 'http://placehold.it/256'}}
            />
          </View>
          <Padding height={10} />
          <Text style={[s.text, s.name]}>{this.state.name}</Text>
          <Padding height={10} />
          <View style={s.profile}>
            <Text style={[s.text, s.profileTitle]}>Joined</Text>
            <Text style={[s.text, s.profileText]}>Dec 29, 2019</Text>
            <Padding height={8} />
            <Text style={[s.text, s.profileTitle]}>Classes Taught</Text>
            <Text style={[s.text, s.profileText]}>
              {this.state.classes_taught} Classes
            </Text>
            <Padding height={8} />
            <Text style={[s.text, s.profileTitle]}>Points</Text>
            <Text style={[s.text, s.profileText]}>{this.state.points} Pts</Text>
          </View>
        </View>
        <NavBar selected="Profile" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
