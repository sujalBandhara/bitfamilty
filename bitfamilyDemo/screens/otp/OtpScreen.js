import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

 class OtpScreen extends Component {
 	render() {
    return (
      <View style={styles.container}>
      		<View style={styles.topconatiner}>	
      			<Text style={styles.enterotptext}>Enter the 4-digit code send to you at</Text>
      			<Text  style={styles.mobilenumbertext}>1234567890</Text>
      			<TextInput 
      			 placeholder='_ _ _ _'
      			/>

      		</View>
      		<View style={styles.bottomcontainer}>
      			<Text>Resend code in</Text>
      		</View>
      </View>
      );
	}	
 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
  },
  enterotpcontainer:{

  },
  enterotptext:{
  	fontSize:18,
  },
  mobilenumbertext:{
  	fontWeight:'bold',
  	fontSize:18,
  },	
  topconatiner:{
  	flex:6,
  },
  bottomcontainer:{
  	flex:4,
  },
  resendtext:{
  	fontSize:16,
  },
 
  
});
module.exports = OtpScreen;