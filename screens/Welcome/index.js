import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import {human} from 'react-native-typography';

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Input} from '../../assets/components/Input';
import {Button} from '../../assets/components/Button';
import {BottomDots} from '../../assets/components/BottomDots';
/* <Padding height={50} /> */

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
    };
  }

  componentDidMount() {}

  updateField = (field, text) => {
    if (field == 'username') {
      this.setState({username: text});
    } else if (field == 'password') {
      this.setState({password: text});
    }
  };

  logIn = (username, password) => {
    if (username && password && username.length > 0 && password.length > 0) {
      console.warn(
        'Simulating 200 login with',
        username,
        password,
        'in 0.5 seconds',
      );
      this.setState({loggingIn: true});
      setTimeout(() => {
        // this.setState({loggingIn: false});
        this.props.navigation.navigate('Home');
      }, 500);
    } else {
      alert('Please enter your username and password!');
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

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <Padding height={35} />
        <View style={s.center}>
          <View style={s.logo}>
            <Image style={s.image} resizeMode={'contain'} source={c.logo_uri} />
          </View>
        </View>
        <Padding height={30} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Welcome!</Text>
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
                text={'Login'}
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
              <Padding height={20} />
              {c.test_mode && (
                <Button
                  style={[s.button, {backgroundColor: c.potentia_orange}]}
                  textStyle={{fontSize: 16}}
                  text={'Continue as Guest'}
                  onPress={() => navigate('Home')}
                />
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
