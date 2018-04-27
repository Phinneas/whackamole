import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class GameOver extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.basicText}>Game Over!</Text>
        <TouchableHighlight onPress={this.props.restart}>
          <Text style={styles.basicText}>Restart?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  basicText: {
    fontSize: 25,
    padding: 10,
  },
});
