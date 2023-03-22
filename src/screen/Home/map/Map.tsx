import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import sizes from '../../../res/sizes';
export default function Map() {
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        minZoomLevel={0}
        showsTraffic={false}
        showsBuildings={true}
        loadingEnabled={true}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        zoomEnabled={true}>
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyCllPeSGpKPaY9UnNrSafaWkZq6yUauUAo'}
        /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: sizes._screen_width,
    flex: 1,
  },
  map: {
    width: sizes._screen_width,
    height: '100%',
  },
});
