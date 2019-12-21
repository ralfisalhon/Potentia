import React, {Component} from 'react';
import {TextInput} from 'react-native';

class Input extends Component {
  static defaultProps = {
    placeholder: 'placeholder',
    value: 'value',
    maxLength: 20,
    placeholderTextColor: 'black',
  };

  render() {
    const {
      placeholder,
      value,
      maxLength,
      placeholderTextColor,
      style,
      onChange,
    } = this.props;

    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        style={style}
        autoCapitalize={'none'}
        autoCompleteType={'off'}
        autoCorrect={false}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChange}
      />
    );
  }
}

export {Input};
