import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


//Home Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent: 'center' }}>
        <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 25 }}>Wisata Kuliner Buleleng</Text>
      </View>
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  constructor()
    {
        super();

        this.state = {
          namacustomer: '',
          username: '',
          password: '',
          email: '',
          ActivityIndicator_Loading: false,

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('https://dindaajeng.000webhostapp.com/Wiskulbul/addUser.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  email : this.state.email,
                  username : this.state.username,
                  password : this.state.password,

                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent:'center' }}>
        <Image
                source={require('./img/logo2.png')}
                style={{ width: 70, height: 70, alignContent:'center', paddingBottom: 10 }}
                />

        </View>
                <TextInput
                  placeholder = "Nama"
                  style = { styles.TextInputStyleClass }
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"

                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

                  <TextInput
                    placeholder = "Email"
                    style = { styles.TextInputStyleClass }
                    underlineColorAndroid = "transparent"
                    returnKeyType="next"
                    autoCapitalize="words"

                    onChangeText = {(TextInputText) => this.setState({ email: TextInputText })} />

                  <TextInput
                    placeholder = "Username"
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
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Daftar</Text>

                </TouchableOpacity>


                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#D500F9' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }

            </KeyboardAvoidingView> //penutup containerMain


    );
  }
}
export default HomeScreen;

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
