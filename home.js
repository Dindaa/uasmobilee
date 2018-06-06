import React from 'react';
import { Text,
  StyleSheet,
  TouchableOpacity,
  Image, View } from 'react-native';
  import {} from 'react-native-elements';

class HomeScreen extends React.Component {
  static navigationOptions={
  header: null
};
    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.judul}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            WISKUBUL</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.isi}>
              <Text style={{ fontSize: 18 }}> SELAMAT DATANG</Text>
              <Text style={{ fontSize: 18, marginBottom: 35 }}> Wisata Kuliner Buleleng</Text>
              <Image
                source={require('./img/logo2.png')}
                style={styles.logo}
              />
              <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('DaftarScreen')}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Daftar</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.footer}>
          <Text style={{ fontSize: 20 }}> copyright@Wisata Kuliner </Text>
          </View>
        </View>
      );
    }
  }
export default HomeScreen;
const styles = StyleSheet.create(
  {
    containerMain: {
      marginTop: 25,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    judul: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: '100%',
      backgroundColor: '#2196f3',
    },
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    isi: {
      width: 300,
      height: 450,
      backgroundColor: '#2196f3',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: '100%',
      backgroundColor: '#2196f3',

    },
    logo:{
      width: 245,
      height: 245,
    },
    button: {
      marginTop: 10,
      width: 250,
      height: 40,
      backgroundColor: '#0d47a1',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
);
