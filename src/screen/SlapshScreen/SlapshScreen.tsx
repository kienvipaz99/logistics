import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import images from '../../res/images';

const SlapshScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={images.SlapshIMG}
        resizeMode="cover"
        style={styles.container}></ImageBackground>
    </View>
  );
};
export default memo(SlapshScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
