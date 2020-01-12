import React from 'react';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {Button} from '../../assets/components/Button';
import {TopLogo} from '../../assets/components/TopLogo';
import {Input} from '../../assets/components/Input';

export class ForgotPassword extends React.Component {
  static navigationOptions = {
    header: null,
    // gesturesEnabled: false,
  };

  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  updateField = text => {
    this.setState({username: text});
  };

  resetPassword = navigate => {
    if (this.state?.username?.length < 3) {
      alert('Please enter your email!');
      return;
    }
    alert(
      '[Unimplemented] Instructions on how to reset your password have been sent to your email: ' +
        this.state.username,
    );
    navigate('Welcome');
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo settings={false} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Forgot your password?</Text>
          <Padding height={10} />
          <Input
            placeholder={'Email'}
            value={this.state.username}
            style={[s.text, s.input]}
            onChange={text => this.updateField(text)}
            maxLength={30}
          />
          <Padding height={10} />
          <Button
            textStyle={{fontSize: 12}}
            text={'Send reset instructions'}
            onPress={() => this.resetPassword(navigate)}
          />
          <Padding height={10} />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 15,
            }}>
            <Button
              style={s.button}
              textStyle={{fontSize: 12}}
              text={'Go back'}
              onPress={() => navigate('Welcome')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
