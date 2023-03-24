import {Animated, Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useRef} from 'react';
import images from '../../res/images';
import sizes from '../../res/sizes';
import stylescustom from '../../res/styles/stylescustom';
interface Props {
  navigation: any;
}
const SlapshScreen1 = (props: Props) => {
  const Navigation = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={stylescustom.containerCenter}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'dark-content'}
        showHideTransition={'fade'}
        translucent={true}
      />
      <Image source={images.iconslap} resizeMode="contain" style={stylescustom.imageSlap1} />
      <Text style={stylescustom.txt2}>Xin chào, đối tác giao hàng.</Text>
      <View style={{marginTop: sizes._10sdp, alignItems: 'center'}}>
        <Text style={stylescustom.txt1}>Chúng tôi rất vui vì bạn là một phần của chúng tôi.</Text>
        <Text style={stylescustom.txt1}>Hãy đăng nhập để trải nghiệm nhé!</Text>
      </View>
      <TouchableOpacity style={stylescustom.tiker} onPress={Navigation}>
        <Image source={images.tiker} style={stylescustom.imgticker} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};
export default SlapshScreen1;
