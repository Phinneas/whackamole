import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Menu extends React.Component {
  render() {
    return(
      <View>
        <TouchableHighlight onPress={() => this.props.setup(3)}>
          <Text style={styles.basicText}>3 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setup(6)}>
          <Text style={styles.basicText}>6 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setup(9)}>
          <Text style={styles.basicText}>9 holes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  basicText: {
    fontSize: 25,
    padding: 10,
  },
});
