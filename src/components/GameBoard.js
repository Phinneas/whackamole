import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameRow from './GameRow.js';

const ROW_NUM = 3;

export default class GameBoard extends React.Component {
  state = {
    pieces: [],
    defaultPieces: [],
  };

  _moled = (index) => {
    //shows mole for slightly longer
    clearTimeout(this.resetTimeout);
    let curPieces = this.state.pieces;
    curPieces[index] = 'mole';
    this.props.updateScore();
    this.setState({pieces: curPieces});

    this.refillHoleTimeout = setTimeout(() => {
      let defaultPieces = Array(this.props.holes).fill('hole');
      this.setState({pieces: defaultPieces});
    }, 500);
  }

  _loadMole = () => {
    setTimeout(() => {
      let defaultPieces = Array(this.props.holes).fill('hole');
      this.setState({pieces: defaultPieces});
    }, 300);

    setTimeout(() => {
      let index = Math.floor(Math.random() * (this.props.holes - 0) + 0);
      let newPieces = this.state.pieces;
      newPieces[index] = 'mole';
      this.setState({pieces: newPieces});
    }, 2500);

    this.resetTimeout = setTimeout(() => {
      let defaultPieces = Array(this.props.holes).fill('hole');
      this.setState({pieces: defaultPieces});
    }, 100);
  }

  componentDidMount() {
    let defaultPieces = Array(this.props.holes).fill('hole');
    this.setState({pieces: defaultPieces});
    this.intervalID = setInterval(this._loadMole, 3000);
    setTimeout(this.props.endGame, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearTimeout(this.refillHoleTimeout);
  }

  render() {
    let pieces = this.state.pieces;
    let numPortions = this.props.holes/ROW_NUM;
    let portions = [];
    for(let i=0; i<numPortions; i++){
      portions.push(pieces.slice(i*ROW_NUM, i*ROW_NUM + ROW_NUM));
    }

    return(
      <View>
        {portions.map((portion, index) => {
          return (
            <View key={index}>
              <GameRow Mole={this.moled} indexStart={index*3} half={portion} />
            </View>
          );
        })}
      </View>
    );
  }
}
