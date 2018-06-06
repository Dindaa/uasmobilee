import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.638698,
          longitude: 115.217550
        },
        title: 'Ranggon Sunset Dermaga Resto',
        subtitle: 'Ranggon Sunset Dermaga Resto adalah Restaurants yang berlokasi di singaraja ,Bali .'
      },
      {
        key:2,
        latlng: {
          latitude:-8.1033766,
          longitude: 115.0865205
        },
        title: 'Loving Hut',
        subtitle: 'Loving Hut adalah Restaurants yang berlokasi di singaraja , Bali.'
      },
      {
        key:3,
        latlng: {
          latitude:-8.113511,
          longitude: 115.0830833
        },
        title: 'Lucky Iceland',
        subtitle: 'Lucky Iceland adalah Restaurants yang berlokasi di singaraja , Bali '
      },
      {
        key:4,
        latlng: {
          latitude:-8.114294,
          longitude: 115.0839253
        },
        title: 'Mailaku',
        subtitle: 'Mailaku adalah Restaurants yang berlokasi di singaraja , Bali'
      };
      {
        key:5,
        latlng: {
          latitude:-8.116057,
          longitude: 115.0830475
        },
        title: 'Warung Resto LOOP Corner',
        subtitle: 'Warung Resto LOOP Corner adalah Restaurants yang berlokasi di singaraja , Bali'
      }


   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Hotel di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> copyright@Wisata Kuliner</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#0057E7',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#0057E7',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
