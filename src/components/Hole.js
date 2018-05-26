import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Hole extends Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/img/hole.png')}  style={this.props.style} />
        <Image source={require('../assets/img/holeMask.png')} style={this.props.style} />
      </View>

    );
  }
}
