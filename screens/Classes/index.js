import React from 'react';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';

export class Classes extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: c.test_mode,
  };

  constructor() {
    super();
    this.state = {
      response: 'Fetching /myclasses',
    };

    this.getClasses();
  }

  getClasses = async () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      console.warn(
        'getClasses | Status:',
        xhr.status,
        '| responseText:',
        xhr.responseText,
      );
      if (xhr.status == 200) {
        // var data = xhr.responseText;
        // var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        this.props.navigation.navigate('Classes');
      } else {
        // console.warn('Status not 200', xhr.responseText);
      }
      this.setState({response: xhr.responseText});
    };

    xhr.open('POST', 'https://potentia-server.herokuapp.com/myclasses');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + 'username' + '&password=' + 'password');
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Classes</Text>
          <Text style={[s.text, {paddingHorizontal: 20}]}>
            {this.state.response}
          </Text>
        </View>
        <NavBar selected="Classes" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
