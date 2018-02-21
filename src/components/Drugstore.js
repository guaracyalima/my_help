
import React, { Component } from 'react';

import{ StyleSheet, Text, View, StatusBar, Image } from 'react-native'

const drugstore = require('../../assets/first-aid-kit.png');
import ListaItems from './ListaItems'

export default class Drugstore extends Component {
  render() {
    return (
      <ListaItems></ListaItems>
    );
  }
}
