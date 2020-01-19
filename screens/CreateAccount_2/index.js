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
import {TouchableOpacity} from 'react-native-gesture-handler';

export class CreateAccount_2 extends React.Component {
  static navigationOptions = {
    header: null,
    // gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {
      person: {},
      student: true,
    };
  }

  updateField = (field, text) => {
    let new_person = this.state.person;
    new_person[field] = text;
    this.setState({person: new_person});
  };

  continue = navigate => {
    const {person} = this.state;
    person.user_type = this.state.student ? 'student' : 'tutor';
    if (
      c.test_mode ||
      (person.user_type &&
        person.school &&
        person.major &&
        person.graduation_year)
    ) {
      navigate('CreateAccount_3', {person: this.state.person});
    } else {
      alert('Please fill in all fields!');
    }
  };

  componentDidMount() {
    this.setState({person: this.props.navigation.state.params.person});
  }

  render() {
    const {navigate} = this.props.navigation;
    const {student} = this.state;

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
              <View style={s.filled_bar} />
              <View style={s.unfilled_bar} />
            </View>
            <Padding height={24} />
            <View style={s.selectContainer}>
              <TouchableOpacity
                onPress={() => this.setState({student: true})}
                style={[
                  s.input,
                  s.select,
                  student && {backgroundColor: c.button_blue},
                ]}>
                <Text style={[s.text, s.title, student && {color: c.bg_color}]}>
                  Student
                </Text>
              </TouchableOpacity>
              <View style={{flex: 1}}></View>
              <TouchableOpacity
                onPress={() => this.setState({student: false})}
                style={[
                  s.input,
                  s.select,
                  !student && {backgroundColor: c.button_blue},
                ]}>
                <Text
                  style={[s.text, s.title, !student && {color: c.bg_color}]}>
                  Tutor
                </Text>
              </TouchableOpacity>
            </View>
            <Padding height={15} />
            <Input
              placeholder={'School'}
              value={this.state.person.school}
              style={[s.text, s.input]}
              onChange={text => this.updateField('school', text)}
              maxLength={30}
            />
            <Padding height={15} />
            <Input
              placeholder={'Major'}
              value={this.state.person.major}
              style={[s.text, s.input]}
              onChange={text => this.updateField('major', text)}
              maxLength={30}
            />
            <Padding height={15} />
            <Input
              placeholder={'Graduation Year'}
              value={this.state.person.graduation_year}
              style={[s.text, s.input]}
              onChange={text => this.updateField('graduation_year', text)}
              maxLength={30}
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
