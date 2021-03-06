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

import DefaultPreference from 'react-native-default-preference';

var PushNotification = require('react-native-push-notification');

console.log("I'm here");

export class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loggingIn: false,
      rememberMe: false,
      pushToken: 'Simulator_Or_Not_Allowed',
    };

    this.configurePushNotifications();
  }

  componentDidMount() {
    let that = this;
    this.setState({loggingIn: false});
    DefaultPreference.get('pushToken').then(function(pushToken) {
      if (pushToken) {
        that.setState({pushToken});
        globalToken = pushToken;
      }
    });

    DefaultPreference.get('rememberMe').then(function(rememberMe) {
      if (rememberMe == '0') {
        that.setState({rememberMe: false});
      } else if (rememberMe == '1') {
        that.setState({rememberMe: true});
        DefaultPreference.get('token').then(function(token) {
          if (token) {
            DefaultPreference.get('email').then(function(email) {
              globalToken = token;
              globalEmail = email;
              that.props.navigation.navigate('Classes');
            });
          }
        });
      }
    });
  }

  validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  logIn = async () => {
    const {email, password} = this.state;

    if (!this.validateEmail(email)) {
      alert('Incorrect email');
      this.setState({loggingIn: false});
      return;
    }

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
        var data = xhr.responseText;
        var obj = JSON.parse(data.replace(/\r?\n|\r/g, ''));

        const {iat, exp, token} = obj;
        globalEmail = email;
        DefaultPreference.set('email', email);
        DefaultPreference.set('iat', iat);
        DefaultPreference.set('exp', exp);
        DefaultPreference.set('token', token);

        this.setState({loggingIn: false});
        this.props.navigation.navigate('Classes');
      } else if (xhr.status == 401) {
        alert('Incorrect Email / Password');
        this.setState({loggingIn: false});
        return;
      } else {
        console.warn('Something went wrong while logging in:', xhr.readyState);
        this.setState({loggingIn: false});
      }
    };

    xhr.open('POST', 'https://potentia-server.herokuapp.com/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('email=' + email + '&password=' + password);
  };

  configurePushNotifications = () => {
    let that = this;
    PushNotification.configure({
      onRegister: function(token) {
        if (token?.token) {
          that.setState({pushToken: token.token});
          globalToken = token.token;
        }
      },

      onNotification: function(notification) {
        // process the notification
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      senderID: 'YOUR GCM (OR FCM) SENDER ID',
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };

  updateField = (field, text) => {
    if (field == 'email') {
      this.setState({email: text});
    } else if (field == 'password') {
      this.setState({password: text});
    }
  };

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

  updateRememberMeState = () => {
    let that = this;
    this.setState({rememberMe: !this.state.rememberMe}, () => {
      DefaultPreference.set(
        'rememberMe',
        that.state.rememberMe,
      ).then(function() {});
    });
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <View style={s.center}>
          <Padding height={35} />
          <Text style={[s.text, s.test]}>
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
            placeholder={'Email'}
            value={this.state.email}
            style={[s.text, s.input]}
            onChange={text => this.updateField('email', text)}
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
                  onPress={() => this.updateRememberMeState()}>
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
                onPress={() => this.logIn()}
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
