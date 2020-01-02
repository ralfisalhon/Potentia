import React, {Component} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {c} from '../../constants';
const {width: windowWidth} = Dimensions.get('window');

class BottomDots extends Component {
  static defaultProps = {
    height: 0,
    width: 0,
  };

  render() {
    const {height, width} = this.props;

    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image
          style={{width: windowWidth, height: windowWidth / 2.75}}
          resizeMode={'stretch'}
          source={c.bottom_dots_uri}
        />
      </View>
    );
  }
}

export {BottomDots};
