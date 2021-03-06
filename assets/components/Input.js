import React, {Component} from 'react';
import {TextInput, Dimensions} from 'react-native';
const {width: windowWidth} = Dimensions.get('window');

import {c} from '../../constants';

class Input extends Component {
  static defaultProps = {
    placeholder: 'placeholder',
    value: null,
    maxLength: 20,
    placeholderTextColor: c.text_color,
    password: false,
    number: false,
    email: false,
  };

  render() {
    const {
      placeholder,
      value,
      maxLength,
      placeholderTextColor,
      style,
      onChange,
      password,
      number,
      email,
    } = this.props;

    const defStyle = {
      fontSize: 16,
      borderWidth: 0,
      padding: 14,
      backgroundColor: 'white',
      borderRadius: 5,
      textAlign: 'center',
      fontWeight: '600',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'gray',
    };

    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        style={[defStyle, style]}
        autoCapitalize={'none'}
        autoCompleteType={'off'}
        autoCorrect={false}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChange}
        secureTextEntry={password}
        autoCompleteType={password ? 'password' : 'username'}
        textContentType={password ? 'password' : 'emailAddress'}
        keyboardType={
          number ? 'phone-pad' : email ? 'email-address' : 'default'
        }
      />
    );
  }
}

export {Input};
