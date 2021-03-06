import React from 'react';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Button} from '../../assets/components/Button';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';

import DefaultPreference from 'react-native-default-preference';

export class Settings extends React.Component {
  static navigationOptions = {
    header: null,
    // gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {
      notificationsAllowed: true,
    };
  }

  changeNotificationState = () => {
    this.setState({notificationsAllowed: !this.state.notificationsAllowed});
  };

  logout = navigate => {
    DefaultPreference.set('token', null).then(function() {
      navigate('Welcome');
    });
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo settings={false} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Settings</Text>
          <Padding height={20} />
          <Button
            textStyle={{fontSize: 16}}
            style={[s.button, {backgroundColor: c.potentia_orange}]}
            text={
              this.state.notificationsAllowed
                ? 'Notifications: Allowed'
                : 'Notifications: Not Allowed'
            }
            onPress={() => this.changeNotificationState()}
          />
          <Padding height={20} />
          <Button
            textStyle={{fontSize: 16}}
            style={s.button}
            text={'Log Out'}
            onPress={() => this.logout(navigate)}
          />
          <Padding height={20} />
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Button
              textStyle={{fontSize: 16}}
              style={s.goBack}
              text={'Go Back'}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
