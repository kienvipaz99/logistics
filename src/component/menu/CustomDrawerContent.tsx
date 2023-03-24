import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import images from '../../res/images';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import stylesComponent from '../../res/styles/stylesComponent';
import stylescustom from '../../res/styles/stylescustom';
function CustomDrawerContent(props: any) {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.banner} style={styles.imgbg}>
        <View style={styles.info}>
          <Image source={images.images} resizeMode="center" style={styles.imgavatar} />
          <View style={{marginTop: 15}}>
            <Text style={styles.txtname}>Nguyễn Văn A</Text>
            <Text style={[styles.txtname, {fontSize: sizes._screen_width * 0.04, marginTop: 5}]}>
              0965232211
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View>
        <View style={{marginTop: sizes._screen_height * 0.025, marginLeft: sizes._15sdp}}>
          <View style={[stylesComponent.styleitemmenu, {justifyContent: 'space-between'}]}>
            <Image source={images.status} style={stylesComponent.imgemenu} resizeMode="contain" />
            <Text style={styles.txt2}>Trạng thái hoạt động</Text>
            <View
              style={{
                height: sizes._screen_width * 0.035,
                width: sizes._screen_width * 0.035,
                borderRadius: 60,
                backgroundColor: 'green',
                marginRight: sizes._15sdp,
              }}
            />
          </View>
          <View
            style={[
              stylesComponent.styleitemmenu,
              {justifyContent: 'space-between', marginTop: 20},
            ]}>
            <Image source={images.onstatus} style={stylesComponent.imgemenu} resizeMode="contain" />
            <Text style={styles.txt2}>Trạng thái hoạt động</Text>
            <View
              style={{
                height: sizes._screen_width * 0.035,
                width: sizes._screen_width * 0.035,
                borderRadius: 60,
                backgroundColor: 'green',
                marginRight: sizes._15sdp,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgbg: {width: '100%', height: sizes._screen_height * 0.23},
  info: {marginLeft: sizes._30sdp, marginTop: sizes._30sdp},
  imgavatar: {height: 60, width: 60, borderRadius: 90, backgroundColor: 'white'},
  txtname: {
    color: colors.colorBackground,
    fontFamily: fonts.fontRegular,
    fontSize: sizes._screen_width * 0.045,
  },
  txt2: {
    color: colors.colorText,
    fontSize: sizes._screen_width * 0.045,
    fontFamily: fonts.fontRegular,
  },
});
