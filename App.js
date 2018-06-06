import React from 'react';
import { StyleSheet, Text, Button,  TouchableHighlight, View, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/home';
import DataScreen from './src/data';
import LoginScreen from './src/login';
import DaftarScreen from './src/daftar';
import DetailScreen from './src/deskripsi'

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    DataScreen: {
      screen: DataScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    DaftarScreen: {
      screen: DaftarScreen,
    },
    DetailScreen: {
      screen: DetailScreen,
    }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
export default class App extends React.Component {
  render() {
    return (
    <RootStack />

    );
  }
}
