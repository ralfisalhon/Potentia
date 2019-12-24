import React, {Component} from 'react';
import {TextInput, Dimensions} from 'react-native';
const {width: windowWidth} = Dimensions.get('window');

class Input extends Component {
  static defaultProps = {
    placeholder: 'placeholder',
    value: 'value',
    maxLength: 20,
    placeholderTextColor: '#ecf0f1',
    password: false,
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
    } = this.props;

    const defStyle = {
      color: '#ecf0f1',
      fontSize: 20,
      borderWidth: 0,
      padding: 10,
      backgroundColor: '#34495e',
      borderRadius: 5,
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
      />
    );
  }
}

export {Input};
