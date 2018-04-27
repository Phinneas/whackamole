import React, { Component } from 'react';
import {
  AsyncStorage,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameBoard from './src/components/GameBoard.js';
import GameOver from './src/components/GameOver.js';
import Menu from './src/components/Menu.js';

export default class App extends Component {
  state = {
    currentHigh: 0,
    score: 0,
    gameover: false,
    holes: 0,
  };

  _setup = (num) => {
    this.setState({holes: num});
  }

  _endGame = () => {

    if(this.state.score > this.state.currentHigh) {
      AsyncStorage.setItem('highScore', this.state.score.toString());
    }

    AsyncStorage.getItem('highScore').then((value) => {
        this.setState({currentHigh: value});
    }).done();

    this.setState({gameover: true});
  }

  _restart = () => {
    this.setState({
      gameover: false,
      score: 0,
    });
  }

  _updateScore = () => {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  componentDidMount() {

    AsyncStorage.getItem('highScore').then((value) => {
        this.setState({currentHigh: value});
    }).done();
  }

  render() {
    return (
      <View>
        <View style={{flex: .25}} />
        <Text style={styles.title}>Whack-a-Mole!!!</Text>
        {this.state.holes === 0 ?
          <View style={styles.board}>
            <Menu setup={this._setup} />
          </View> :
          <View style={styles.board}>

            <Text style={styles.basicText}>Current High Score: {this.state.currentHigh} </Text>
            <Text style={styles.basicText}>Current Score: {this.state.score} </Text>

            {this.state.gameover === true ? <GameOver restart={this._restart} /> :
            <GameBoard updateScore={this._updateScore} holes={this.state.holes} score={this.state.score} endGame={this._endGame} />}

          </View>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: .25,
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
  board: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameRow: {
    padding: 10,
    flexDirection: 'row',
  },
  basicText: {
    fontSize: 25,
    padding: 10,
  },

});

//export default whackamoleapp;
