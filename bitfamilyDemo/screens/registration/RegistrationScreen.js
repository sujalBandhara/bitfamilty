import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

 class RegistrationScreen extends Component {
   constructor(){
        super()

        this.onPressFlag = this.onPressFlag.bind(this)
        this.selectCountry = this.selectCountry.bind(this)
        this.state = {
            cca2: 'US',
            valid: '',
            type: '',
            value: '',
            firstname:'',
            lastname:'',
            emailaddress:'',
            phonenumber:'',
        };
          this.updateInfo = this.updateInfo.bind(this)
        /*this.renderInfo = this.renderInfo.bind(this)*/
    }
     componentDidMount(){
        this.setState({
            pickerData: this.refs.phonenumber.getPickerData()
        })
    }
     onPressFlag(){
        this.refs.countryPicker.openModal()
    }

    selectCountry(country){
        this.refs.phonenumber.selectCountry(country.cca2.toLowerCase())
        this.setState({cca2: country.cca2})
    }
    updateInfo(){
        this.setState({
            valid: this.refs.phonenumber.isValidNumber(),
            type: this.refs.phonenumber.getNumberType(),
            value: this.refs.phonenumber.getValue()
        })
    }
  
 
  validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

  render() {
    return (
      <View style={styles.container}>
          <View>
                <Text style={styles.confirmtext}>Confirm your information</Text>
          </View>
          <View style={styles.namecontainer}>
              <View style={styles.firstnamecontainer}>
                  <TextInput 
                  placeholder='First Name'
                  onChangeText={(text) => this.setState({firstname: text})}
                  value={this.state.firstname}
                  autoFocus = {true}
                  returnKeyType='next'
                  style={styles.inputtext}
                  onSubmitEditing={(event)=>{this.refs.lastname.focus();}}
                  />

              </View>
               <View style={styles.firstnamecontainer}>
                  <TextInput
                  placeholder='Last Name'
                  ref='lastname'
                  onChangeText={(text) => this.setState({lastname: text})} 
                  value={this.state.lastname}
                  returnKeyType='next'
                  style={styles.inputtext}
                  onSubmitEditing={(event)=>{this.refs.email.focus();}}


                  /> 
              </View>
                
          </View>
          <View style={styles.emailcontainer}>
                 <TextInput
                  placeholder='Email'
                  ref='email'
                  onChangeText={(text) => this.setState({email: text})} 
                  value={this.state.email}
                  returnKeyType='next'
                  style={styles.inputtext}
                  onSubmitEditing={(event)=>{this.refs.phonenumber.focus();}}
                  keyboardType="email-address"

                /> 
          </View>
          <View style={styles.phonenumbercontainer}>
                  <CountryPicker
                    ref='countryPicker'
                    onChange={(value)=> this.selectCountry(value)}
                    translation='eng'
                    cca2={this.state.cca2}
                    >
                    <View></View>
                    </CountryPicker>
                    <PhoneInput 
                    ref='phonenumber'
                    
                    onPressFlag={this.onPressFlag}
                  />

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
  confirmtext:{
    color:'black',
    fontSize:20,
  },
  namecontainer:{
     flexDirection: 'row',
     marginTop:10,
  },
  firstnamecontainer:{
      flex:1,
  },
  emailcontainer:{
      marginTop:10,
  },
  inputtext:{
    fontSize:16,
  },
  phonenumbercontainer:{
    marginTop:20,
  },
 
  
});
module.exports = RegistrationScreen;