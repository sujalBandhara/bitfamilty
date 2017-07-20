import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

 class LandingScreen extends Component {
   constructor(){
        super()

        this.onPressFlag = this.onPressFlag.bind(this)
        this.selectCountry = this.selectCountry.bind(this)
        this.state = {
            cca2: 'US',
            valid: '',
            type: '',
            value: ''
        };
          this.updateInfo = this.updateInfo.bind(this)
        /*this.renderInfo = this.renderInfo.bind(this)*/
    }
     componentDidMount(){
        this.setState({
            pickerData: this.refs.phone.getPickerData()
        })
    }
     onPressFlag(){
        this.refs.countryPicker.openModal()
    }

    selectCountry(country){
        this.refs.phone.selectCountry(country.cca2.toLowerCase())
        this.setState({cca2: country.cca2})
    }
    updateInfo(){
        this.setState({
            valid: this.refs.phone.isValidNumber(),
            type: this.refs.phone.getNumberType(),
            value: this.refs.phone.getValue()
        })
    }
    gotoSocoalLogin()
    {

    }


   /* renderInfo(){
        if(this.state.value)
        return (
            <View style={styles.info}>
                    <Text>Is Valid: <Text style={{fontWeight:'bold'}}>{this.state.valid.toString()}</Text></Text>
                    <Text>Type: <Text style={{fontWeight:'bold'}}>{this.state.type}</Text></Text>
                    <Text>Value: <Text style={{fontWeight:'bold'}}>{this.state.value}</Text></Text>
            </View>
        )
    }*/

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.topcontainer}>
              <Text style={styles.logotext}>
                  LOGO
              </Text>
          </View>
          <View style={styles.bottomcontainer}>
              <View style={styles.mobilecontainer}>
                  <Text style={styles.getmovingtext}>Get Moving With Ubar</Text>
                  <View style={styles.mobilenumbercontainer}>
                   <PhoneInput 
                    ref='phone' 

                    onPressFlag={this.onPressFlag}
                />
                    <CountryPicker
                    ref='countryPicker'
                    onChange={(value)=> this.selectCountry(value)}
                    translation='eng'
                    cca2={this.state.cca2}
                    >
                    <View></View>
                    </CountryPicker>
                  </View>

                {/*   <TouchableOpacity onPress={this.updateInfo} style={styles.button}>
                    <Text>Get Info </Text>
                </TouchableOpacity>
                <Text>{this.state.valid.toString()}</Text>*/}

              </View>
              <View style={styles.horizontalLine}/>
              <View style={styles.socialcontainer}>
                  <Text onPress={()=>this.gotoSocoalLogin()}>Or connect using a social account</Text>
              </View>
          </View>
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor:'white',

    },
  topcontainer:{
    flex:7,
     backgroundColor: '#129399', 
     alignItems: 'center',
     justifyContent: 'center',
  },
  bottomcontainer:{
    flex:3,
  },
  mobilecontainer:{
    flex:2,
    padding:30,
  },
  socialcontainer:{
    flex:1,
    paddingLeft:30,
  },
  getmovingtext:{
    fontSize: 20,
  },
  mobilenumbercontainer:{
    marginTop:20,

  },
  horizontalLine: {
  width: (Dimensions.get('window').width),
  borderWidth:0.5,
  borderColor: 'grey',
  marginBottom:16,
 },
  logotext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white',
  },
  
});
module.exports = LandingScreen;