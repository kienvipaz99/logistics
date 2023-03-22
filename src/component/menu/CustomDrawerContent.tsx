import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../res/images';
function CustomDrawerContent(props: any) {
  return (
    <View style={styles.container}>
      <Image source={images.SlapshIMG} style={{width: '100%'}} />
    </View>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
