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
      response: 'Fetching /getProfile',
    };

    this.getProfile();
  }

  getProfile = async () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      console.warn(
        'getProfile | Status:',
        xhr.status,
        '| responseText:',
        xhr.responseText,
      );
      if (xhr.status == 200) {
        var data = xhr.responseText;
        var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        // console.warn(obj[0]);
        this.setState({response: obj});
      } else {
        this.setState({response: xhr.responseText});
      }
    };

    xhr.open('GET', 'https://potentia-server.herokuapp.com/getProfile');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
  };

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
              source={c.avatar_uri}
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
          <Padding height={20} />
          <Text style={[s.text, {paddingHorizontal: 20}]}>
            {this.state.response}
          </Text>
        </View>
        <NavBar selected="Profile" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
