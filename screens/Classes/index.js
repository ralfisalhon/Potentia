import React from 'react';
import {View, Dimensions, SafeAreaView, Text, ScrollView} from 'react-native';

import {s} from './styles';
import {c} from '../../constants';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

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
      response: 'Fetching /courses',
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
        // this.props.navigation.navigate('Classes');
      } else {
        // console.warn('Status not 200', xhr.responseText);
      }
      this.setState({response: xhr.responseText});
    };

    xhr.open('GET', 'https://potentia-server.herokuapp.com/courses');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
  };

  // SAMPLE GET
  // getClasses = async () => {
  //   let xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = e => {
  //     if (xhr.readyState !== 4) return;
  //     console.warn(
  //       'getClasses | Status:',
  //       xhr.status,
  //       '| responseText:',
  //       xhr.responseText,
  //     );
  //     if (xhr.status == 200) {
  //       // var data = xhr.responseText;
  //       // var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
  //       this.props.navigation.navigate('Classes');
  //     } else {
  //       // console.warn('Status not 200', xhr.responseText);
  //     }
  //     this.setState({response: xhr.responseText});
  //   };

  //   xhr.open('GET', 'https://potentia-server.herokuapp.com/myclasses');
  //   // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //   xhr.setRequestHeader('Accept', 'application/json');
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.send();
  // };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <ScrollView maxHeight={windowHeight * 0.65}>
          <View style={s.center}>
            <Text style={[s.text, s.title]}>Classes</Text>
            <Padding height={10} />
            <Text
              onPress={() => navigate('Cancellation')}
              style={[s.text, {fontWeight: '600'}]}>
              Open Cancel Screen
            </Text>
            <Padding height={10} />
            <Text
              onPress={() => navigate('Confirmation')}
              style={[s.text, {fontWeight: '600'}]}>
              Open Confirm Screen
            </Text>
            <Padding height={10} />
            <Text style={[s.text, {paddingHorizontal: 20}]}>
              Server Response: {this.state.response}
            </Text>
          </View>
        </ScrollView>
        <NavBar selected="Classes" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
