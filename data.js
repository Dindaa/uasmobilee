import React from 'react';
import { Text,
  StyleSheet,
  TouchableOpacity,
  Image, View, FlatList, RefreshControl } from 'react-native';
  import { List, ListItem, ListView } from 'react-native-elements'

class DataScreen extends React.Component {
  static navigationOptions={
  header: null
}
constructor(props) {
  super(props);
  this.state = {
    loading: false,
    data: [],
    error: null,
    refreshing: false,
    ActivityIndicator_Loading: false,
  };
}

componentDidMount()  {
    const url ='https://dindaajeng.000webhostapp.com/Wiskulbul/getData.php';
     this.setState({ loading: true });
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        data: responseJson,
        error: responseJson.error || null,
        loading: false,
        refreshing: false
      });
    }
  );
}

render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.judul}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            WISATA KULINER</Text>
          </View>
          <View style={styles.main}>

          <FlatList
              data={this.state.data}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
              <TouchableOpacity activeOpacity={0.7} style={styles.isi}
              onPress={()=>{
              console.log("clicked");
              this.props.navigation.navigate('DetailScreen',
              {
                id: item.id,
                title: item.nama_tempat,
                nama_tempat: item.nama_tempat,
                menu_makanan: item.menu_makanan,
                menu_minuman: item.menu_minuman,
                jam_buka: item.jam_buka,
              });
            }}>
              <View style={styles.photo}>
              <Image
                source={{uri: item.img}}
                style={styles.logo}
              />
              </View>
              <View style={styles.text}>
              <Text style={styles.tulis}>{item.nama_tempat}</Text>
              </View>

              </TouchableOpacity>
              }
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.componentDidMount.bind(this)}
                  />
                }
          />
          </View>
        </View>
      );
    }
  }
export default DataScreen;
const styles = StyleSheet.create(
  {
    containerMain: {
      marginTop: 25,
      flex: 1,
      backgroundColor: '#fff',
    },
    judul: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      flex: 1,
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
      width: 100,
      height: 100
    },
    button: {
      marginTop: 25,
      width: 250,
      height: 40,
      backgroundColor: '#0d47a1',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    isi: {
      flex: 1,
      flexDirection: 'row'
    },
    photo: {
      flex: 0.3,
      flexDirection: 'row'
    },
    text: {
      flex: 0.7,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tulis: {
      fontSize: 18,
      fontWeight: 'bold'
    }

  }
);
