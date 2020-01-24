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
      name: null,
      email: null,
      user_type: null,
    };

    this.profile();
  }

  profile = async () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      console.warn(
        'profile | Status:',
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

    xhr.open(
      'GET',
      'https://potentia-server.herokuapp.com/profile/' + globalEmail,
    );
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
  };

  render() {
    const {navigate} = this.props.navigation;
    const {name, email, user_type} = this.state;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Profile</Text>
        </View>
        <View style={s.center}>
          {/* <View style={s.profilePic}>
            <Image
              style={s.image}
              resizeMode={'contain'}
              source={c.avatar_uri}
            />
          </View> */}
          <Padding height={10} />
          <Text style={[s.text, s.name]}>{this.state.name}</Text>
          <Padding height={10} />
          <View style={s.profile}>
            <Text style={[s.text, s.profileTitle]}>Name</Text>
            <Text style={[s.text, s.profileText]}>{name}</Text>
            <Padding height={8} />
            <Text style={[s.text, s.profileTitle]}>Email</Text>
            <Text style={[s.text, s.profileText]}>{email}</Text>
            <Padding height={8} />
            <Text style={[s.text, s.profileTitle]}>User_Type</Text>
            <Text style={[s.text, s.profileText]}>{user_type}</Text>
            <Padding height={15} />
            <View style={s.center}>
              <Button
                onPress={() => alert('Sorry, this is a work in progress!')}
                style={{width: windowWidth / 3}}
                textStyle={{fontSize: 12}}
                text={'Edit Info'}
              />
            </View>
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
