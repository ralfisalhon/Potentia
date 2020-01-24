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
      response: null,
      fetching: true,
    };

    this.getClasses();
  }

  getCourse = async id => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      console.warn(
        'getCourse | Status:',
        xhr.status,
        '| responseText:',
        xhr.responseText,
      );
      this.setState({fetching: false});
      if (xhr.status == 200) {
        var data = xhr.responseText;
        var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        console.warn(obj);
        // this.setState({response: obj});
      } else {
        // console.warn('Status not 200', xhr.responseText);
      }
    };

    xhr.open('GET', 'https://potentia-server.herokuapp.com/courses/' + id);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
  };

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
      this.setState({fetching: false});
      if (xhr.status == 200) {
        var data = xhr.responseText;
        var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        console.warn(obj[0]);
        this.setState({response: obj});
        this.getCourse(obj[0]._id);
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
        <Text style={[s.text, s.title]}>
          {item.name} <Text style={s.id}>({item._id})</Text>
        </Text>
        <Text style={s.text}>Tutor: {item.tutor}</Text>
        <Text style={s.text}>Students: {item.students}</Text>
        <Text style={s.text}>Location: {item.location}</Text>
        <Padding height={10} />
        <View style={s.row}>
          <Button
            style={s.button}
            onPress={() =>
              this.props.navigation.navigate('Confirmation', {
                date: item.date,
                location: item.location,
                tutor: item.tutor,
              })
            }
            textStyle={s.buttonText}
            text={'Confirm Class'}
          />
          <Button
            onPress={() => this.props.navigation.navigate('Cancellation')}
            textStyle={s.buttonText}
            text={'Cancel Class'}
          />
        </View>
      </View>
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    const {fetching} = this.state;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <ScrollView maxHeight={windowHeight * 0.65}>
          <View style={s.center}>
            <Text style={[s.text, s.title]}>Classes</Text>
            <Padding height={10} />
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.state.response}
              renderItem={({item, index}) => this.renderItem(item, index)}
              keyExtractor={(_, index) => index.toString()}
            />
            <Padding height={5} />
            {fetching && (
              <Text style={[s.text, s.title]}>Fetching courses...</Text>
            )}
          </View>
        </ScrollView>
        <NavBar selected="Classes" navigate={navigate} />
      </SafeAreaView>
    );
  }
}
