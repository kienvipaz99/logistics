import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import React, {memo} from 'react';
import stylescustom from '../../res/styles/stylescustom';
import {Image} from 'react-native';
import images from '../../res/images';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import sizes from '../../res/sizes';
import {StatusBar} from 'react-native';
import colors from '../../res/colors';
import IconMenu from '../menu/IconMenu';
interface Props {
  navigation: any;
}
const HeaderHome = (props: Props) => {
  return (
    <SafeAreaView style={[stylescustom.headerHome]}>
      <View style={stylescustom.headerHome1}>
        <IconMenu navigation={props.navigation} />
        <Image source={images.logoapp} style={stylescustom.imglogo} resizeMode={'center'} />
        <TouchableOpacity>
          <Image source={images.iconnotification} style={styles.styleIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  styleIconMenu: {
    marginLeft: sizes._screen_width * 0.03,
  },
  styleIcon: {height: sizes._30sdp, width: sizes._25sdp, marginRight: sizes._screen_width * 0.03},
});
export default memo(HeaderHome);
