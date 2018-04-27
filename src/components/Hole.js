import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import HoleImg from '../assets/img/hole.png';
import HoleMask from '../assets/img/holeMask.png';

export default class Hole extends Component {
  render() {
    return (
      <div>
        <Image source={HoleImg}  style={this.props.style} />
        <Image source={HoleMask} style={this.props.style} />
      </div>

    );
  }
}
