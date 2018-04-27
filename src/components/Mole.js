import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import MoleImg from '../assets/img/mole.png';

export default class Mole extends Component {
  render() {
    return (
        <Image source={MoleImg}  style={this.props.style}/>
    );
  }
}
