import React, { Component } from 'react';
import {
  AppRegistry,
  UIManager,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackAndroid,
  Image,
  Alert,
} from 'react-native';

var TAG="APP";
import { StackNavigator } from 'react-navigation';

import { NavigationActions } from 'react-navigation';

var SplashScreen= require('./screens/splash/SplashScreen');
var LandingScreen= require('./screens/landing/LandingScreen');
var RegistrationScreen=require('./screens/registration/RegistrationScreen');
var OtpScreen=require('./screens/otp/OtpScreen');
 
    
  

export default  App = StackNavigator(
{

  SplashScreen: { 
    screen: SplashScreen,
    navigationOptions: {
      header:false ,
    },
   },
   LandingScreen: { 
    screen: LandingScreen,
    navigationOptions: {
      header:false ,
    },
   },
    RegistrationScreen: { 
    screen: RegistrationScreen,
    navigationOptions: {
      headerTitle:' ',
      },
   },
   OtpScreen: { 
    screen: OtpScreen,
    navigationOptions: {
      headerTitle:' ',
      },
   },
   
   
 },

{
initialRouteName: 'SplashScreen',
 headerMode: 'screen',
  transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

           
            return { opacity, transform: [{ translateX }] }
        }
    })

}
);


UIManager.setLayoutAnimationEnabledExperimental(true);
