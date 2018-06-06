import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


//Login Screen


class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent: 'center' }}>
        <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 25 }}>Wisata Kuliner Buleleng</Text>
      </View>
    );
  }
}


class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };



  constructor()
    {
        super();

        this.state = {
          username: '',
          password: '',
          ActivityIndicator_Loading: false,

        }
    }
    //fungsi mengirim data ke database
    UserLoginFunction = () =>{
      this.setState({ ActivityIndicator_Loading : true }, () =>
             {
     fetch('https://dindaajeng.000webhostapp.com/Wiskulbul/login.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         username : this.state.username,
         password : this.state.password,

       })

     }).then((response) => response.json())
           .then((responseJson) => {
             this.setState({ ActivityIndicator_Loading : false });
             // If server response message same as Data Matched
            if(responseJson === 'Login berhasil!')
             {

                 //Then open Profile activity and send user email to profile activity.
                 this.props.navigation.navigate('DataScreen');

             }
             else{

               Alert.alert(responseJson);
             }

           }).catch((error) => {
             console.error(error);
             this.setState({ ActivityIndicator_Loading : false});
           });

         });
       }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>
        <View style={{ flex: 0.5, alignItems: 'center', justifyContent:'center' }}>
        <Image
                source={require('./img/logo2.png')}
                style={{ width: 100, height: 100, alignContent:'center', paddingBottom: 10 }}
                />
        </View>
                <TextInput
                  placeholder = "username"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"

                  onChangeText = {(TextInputText) => this.setState({ username: TextInputText })} />

                  <TextInput
                    placeholder = "Pasword"
                    style = { styles.TextInputStyleClass }
                    underlineColorAndroid = "transparent"
                    returnKeyType="next"

                    onChangeText = {(TextInputText) => this.setState({ password: TextInputText })} />

                <TouchableOpacity
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle }
                  onPress = {this.UserLoginFunction}>

                    <Text style = { styles.TextStyle }>Masuk</Text>

                </TouchableOpacity>

                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#D500F9' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }

            </KeyboardAvoidingView> //penutup containerMain


    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      backgroundColor : "#ffffff"

    },

    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#f9f9f9",
      borderWidth: 1,
      borderColor: '#F1F8E9',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'center',
      height: 40,
      backgroundColor : "#f9f9f9",
      borderWidth: 1,
      borderColor: '#f48fb1',
      borderRadius: 7,
      marginBottom: 10,
      width: '95%'
    },

    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#455A64',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },

    TextStyle:
    {
       color: 'white',
        textAlign: 'center',
        fontSize: 20
    },

    ActivityIndicatorStyle:{

      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'

  },
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 80,
        color: '#ffebee'
    },
});
