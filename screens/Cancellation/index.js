import React from 'react';
import {View, Dimensions, SafeAreaView, Text} from 'react-native';

import {s} from './styles';
import {c} from '../../constants';

import {Padding} from '../../assets/components/Padding';
import {NavBar} from '../../assets/components/NavBar';
import {TopLogo} from '../../assets/components/TopLogo';
import {Button} from '../../assets/components/Button';

export class Cancellation extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: c.test_mode,
  };

  constructor() {
    super();
    this.state = {};
  }

  cancelReason(reason) {
    console.warn('[Unimplemented] Cancelling with reason:', reason);
    this.props.navigation.navigate('Classes');
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={s.container}>
        <TopLogo navigate={navigate} />
        <Padding height={15} />
        <View style={s.center}>
          <Text style={[s.text, s.title]}>Thanks for the heads up!</Text>
          <Padding height={10} />
          <Text style={[s.text, s.subtitle]}>
            Please inform us of your{'\n'} reason for cancellation:
          </Text>
          <Padding height={20} />
          <Button
            style={s.cancelButton}
            text={'Work'}
            onPress={() => this.cancelReason('Work')}
          />
          <Padding height={10} />

          <Button
            style={s.cancelButton}
            text={'Emergency'}
            onPress={() => this.cancelReason('Emergency')}
          />
          <Padding height={10} />

          <Button
            style={s.cancelButton}
            text={'Sick'}
            onPress={() => this.cancelReason('Sick')}
          />
          <Padding height={10} />
          <Button
            style={s.cancelButton}
            text={'Other'}
            onPress={() => this.cancelReason('Other')}
          />
        </View>
        {/* <NavBar selected="Classes" navigate={navigate} /> */}
      </SafeAreaView>
    );
  }
}
