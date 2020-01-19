import React from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

import {s} from './styles';
import {c} from '../../constants';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {Padding} from '../../assets/components/Padding';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';
import {Button} from '../../assets/components/Button';

export class Classes extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: c.test_mode,
  };

  constructor() {
    super();
    this.state = {
      response: ['Fetching /courses'],
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
        var data = xhr.responseText;
        var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        // console.warn(obj[0]);
        this.setState({response: obj});
      } else {
        // console.warn('Status not 200', xhr.responseText);
      }
    };

    xhr.open('GET', 'https://potentia-server.herokuapp.com/courses');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
  };

  renderItem = (item, index) => {
    return (
      <View style={s.class}>
        {item.students?.length > 1 && <Text>{item.students}</Text>}
        <Text>{item._id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.courseID}</Text>
        <Text>{item.location}</Text>
      </View>
    );
  };

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
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => navigate('Cancellation')}
                textStyle={s.buttonText}
                text={'Open Cancel Screen'}
              />
              <Padding width={10} />
              <Button
                onPress={() => navigate('Confirmation')}
                textStyle={s.buttonText}
                text={'Open Confirm Screen'}
              />
            </View>
            <Padding height={10} />
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.state.response}
              renderItem={({item, index}) => this.renderItem(item, index)}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <NavBar selected="Classes" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
