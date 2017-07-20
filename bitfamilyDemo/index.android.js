/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  
} from 'react-native';

import App from './App';
export default class bitfamilyDemo extends Component {
  render() {
    return (
     <App/>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('bitfamilyDemo', () => bitfamilyDemo);
