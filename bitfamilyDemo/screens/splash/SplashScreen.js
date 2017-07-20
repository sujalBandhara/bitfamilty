import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';

 class SplashScreen extends Component {
   componentWillMount() {
      setTimeout(() => {
 
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LandingScreen' })],
    });

    this.props.navigation.dispatch(resetAction);
    }, 3000);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          SplashScreen
        </Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 
});
module.exports = SplashScreen;