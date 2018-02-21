import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux'

const drugstore = require('../../assets/first-aid-kit.png');
const drivingSchool = require('../../assets/driving-school.png');
const carRepair = require('../../assets/car-repair.png');
const forwardMan = require('../../assets/group.png');
const supermaket = require('../../assets/shopping-cart.png');
const workshop = require('../../assets/work-tools-cross.png');
const logo = require('../../assets/unnamed.png');

export default class App extends Component {
  render() {
    return (
      <View style={css.cenaPrincipal}>

        <View style={ css.logo}>
          <Image source={ logo } style={ css.logoImage }/>
        </View>

        <View style={ css.menu }>

          <View style={ css.menuGroup}>
              <TouchableHighlight onPress={ () => {
                Actions.drugstore()
              }}>
                <Image source={ drugstore } style={ css.imgMenu }/>
              </TouchableHighlight>

              <TouchableHighlight onPress={ () => {
                Actions.drivingSchool()
              }}>
                <Image source={ drivingSchool } style={ css.imgMenu }/>
              </TouchableHighlight>

              <TouchableHighlight onPress={ () => {
                Actions.carRepair()
              }}>
                <Image source={ carRepair } style={ css.imgMenu }/>
              </TouchableHighlight>

          </View>

          <View style={ css.menuGroup }>
            <TouchableHighlight onPress={ () => {
              Actions.forwardMan()
            }}>
              <Image source={ forwardMan } style={ css.imgMenu }/>
            </TouchableHighlight>


            <TouchableHighlight onPress={ () => {
              Actions.supermakets()
            }}>
              <Image source={ supermaket } style={ css.imgMenu }/>
            </TouchableHighlight>


            <TouchableHighlight onPress={ () => {
              Actions.workshop()
            }}>
              <Image source={ workshop } style={ css.imgMenu }/>
            </TouchableHighlight>
          </View>

          <View style={ css.menuGroup }>
            <TouchableHighlight onPress={ () => {
              Actions.forwardMan()
            }}>
              <Image source={ forwardMan } style={ css.imgMenu }/>
            </TouchableHighlight>


            <TouchableHighlight onPress={ () => {
              Actions.supermaket()
            }}>
              <Image source={ supermaket } style={ css.imgMenu }/>
            </TouchableHighlight>


            <TouchableHighlight onPress={ () => {
              Actions.workshop()
            }}>
              <Image source={ workshop } style={ css.imgMenu }/>
            </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  cenaPrincipal: {
    backgroundColor: '#61bd8c',
    flex: 1
  },
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  logoImage:{
    width: 100,
    height: 100,
  },


  menu: {
    flex: 14
  },
  menuGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    // marginLeft: 0,
    // marginRight: 30
  },

  imgMenu: {
    margin: 15,
    marginLeft: 0,
    marginRight: 30,
    marginBottom: 7
  },

  textOfIcon: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
});
