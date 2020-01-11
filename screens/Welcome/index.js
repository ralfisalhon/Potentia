import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Input} from '../../assets/components/Input';
import {Button} from '../../assets/components/Button';
import {BottomDots} from '../../assets/components/BottomDots';

var PushNotification = require('react-native-push-notification');

console.log("I'm here");

export class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      loggingIn: false,
      rememberMe: false,
      pushToken: 'Simulator_Or_Not_Allowed',
    };

    this.configurePushNotifications();
  }

  logIn = async (username, password) => {
    this.setState({loggingIn: true});
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return;
      console.warn(
        'logIn | Status:',
        xhr.status,
        '| responseText:',
        xhr.responseText,
      );
      if (xhr.status == 200) {
        // var data = xhr.responseText;
        // var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));
        this.setState({loggingIn: false});
        this.props.navigation.navigate('Classes');
      } else {
        console.warn('Oopsie doosie', xhr.readyState);
        this.setState({loggingIn: false});
      }
    };

    xhr.open('POST', 'https://potentia-server.herokuapp.com/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + username + '&password=' + password);
  };

  configurePushNotifications = () => {
    let that = this;
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        if (token?.token) {
          that.setState({pushToken: token.token});
        }
        // console.warn('pushToken:', this.state.pushToken);
        console.warn('token:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.warn('NOTIFICATION:', notification);

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: 'YOUR GCM (OR FCM) SENDER ID',

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true,
    });
  };

  updateField = (field, text) => {
    if (field == 'username') {
      this.setState({username: text});
    } else if (field == 'password') {
      this.setState({password: text});
    }
  };

  // logIn = (username, password) => {
  //   if (username && password && username.length > 0 && password.length > 0) {
  //     console.warn(
  //       'Simulating 200 login with',
  //       username,
  //       password,
  //       'in 0.5 seconds',
  //     );
  //     this.setState({loggingIn: true});
  //     setTimeout(() => {
  //       // this.setState({loggingIn: false});
  //       this.props.navigation.navigate('Classes');
  //     }, 500);
  //   } else {
  //     alert('Please enter your username and password!');
  //   }
  // };

  forgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  getRememberStyle = () => {
    return [
      s.mini_square,
      {
        backgroundColor: this.state.rememberMe ? c.button_blue : c.bg_color,
      },
    ];
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <View style={s.center}>
          <Padding height={35} />
          <Text
            style={[
              s.text,
              {fontSize: 10, color: 'red', marginBottom: 15, marginTop: -25},
            ]}>
            {c.test_mode && 'Test Mode is Active'}
          </Text>
          <View style={s.logo}>
            <Image style={s.image} resizeMode={'contain'} source={c.logo_uri} />
          </View>
        </View>
        <Padding height={30} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Welcome!</Text>
          <Text style={[s.text, {fontSize: 8}]}>
            {c.test_mode && 'pushToken: ' + this.state.pushToken.substr(0, 25)}
          </Text>
        </View>
        <Padding height={20} />
        <View style={s.center}>
          <Input
            placeholder={'Email / Phone Number'}
            value={this.state.username}
            style={[s.text, s.input]}
            onChange={text => this.updateField('username', text)}
            maxLength={30}
          />
          <Padding height={10} />
          <Input
            placeholder={'Password'}
            value={this.state.password}
            style={[s.text, s.input]}
            onChange={text => this.updateField('password', text)}
            password={true}
          />
          <Padding height={20} />
          {!this.state.loggingIn ? (
            <View style={s.center}>
              <View style={[s.row, {width: windowWidth * 0.65}]}>
                <TouchableOpacity
                  style={s.row}
                  onPress={() =>
                    this.setState({rememberMe: !this.state.rememberMe})
                  }>
                  <View style={this.getRememberStyle()} />
                  <Padding width={5} />
                  <Text style={[s.text, s.small_text]}>Remember Me</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.forgotPassword()}>
                  <Text style={[s.text, s.small_text]}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <Padding height={20} />
              <Button
                style={s.button}
                text={'Log In'}
                onPress={() =>
                  this.logIn(this.state.username, this.state.password)
                }
              />
              <Padding height={10} />
              <Text
                style={[s.text, s.create]}
                onPress={() => navigate('CreateAccount')}>
                Create New Account
              </Text>

              {c.test_mode && (
                <View style={{zIndex: 100}}>
                  <Padding height={10} />
                  <Button
                    style={[s.button, {backgroundColor: c.potentia_orange}]}
                    textStyle={{fontSize: 16}}
                    text={'Continue as Guest'}
                    onPress={() => navigate('Classes')}
                  />
                </View>
              )}
            </View>
          ) : (
            <View style={s.center}>
              <Text style={[s.text, s.loading]}>Checking credentials...</Text>
            </View>
          )}
        </View>
        <BottomDots />
      </SafeAreaView>
    );
  }
}
