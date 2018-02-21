/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

//routes
import Routes  from './src/Routes'

export default class my_help extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('my_help', () => my_help);
