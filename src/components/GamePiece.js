import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Mole from './Mole.js'
import Hole from './Hole.js'


export default class GamePiece extends Component {
    render() {    //switches from mole to hole
        let piece = <View />;
        if(this.props.type === 'hole') {
            piece = <Hole style={styles.piece}/>;
        }else {
            piece = <Mole style={styles.piece}/>;
        }

        return(
            <TouchableHighlight style={{margin: 10}} activeOpacity={1}
            onPress={this.props.type === 'mole' ? this.props.updatePiece : null}>
                <View>
                    {piece}
                </View>
            </TouchableHighlight>
        );
    }

}

const styles = StyleSheet.create({
  piece: {
    width: 100,
    height: 100,
    backgroundColor: '#F5FCFF',
  }

});
