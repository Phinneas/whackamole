import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class Mole extends Component {
  render() {
    return  <Image source={require('../assets/img/mole.png')}  style={this.props.style}/>;
  }
}
