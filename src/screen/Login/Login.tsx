import {View, Text, Animated, TouchableOpacity, Image, StatusBar} from 'react-native';
import React, {useRef, useState} from 'react';
import images from '../../res/images';
import stylescustom from '../../res/styles/styles';
import TextInputCustom from '../../component/textInput/TextInputCustom';
import sizes from '../../res/sizes';
import CheckBoxLogin from '../../component/checkbox/CheckBoxLogin';
interface Props {
  navigation: any;
}
export default function Login(props: Props) {
  const [username, setUserName] = useState<string | number>();
  const [pass, setPass] = useState<string | number>();
  const [checked, setChecked] = useState<boolean>(false);
  const clickCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={true}
      />
      <Image style={stylescustom.imageLogin} source={images.headerlogin} />
      <View style={stylescustom.styleLogin}>
        <Text style={stylescustom.txtDangNhap}>ĐĂNG NHẬP</Text>
        <View style={{marginTop: sizes._screen_height * 0.04, width: '80%'}}>
          <TextInputCustom
            value={username}
            setValue={setUserName}
            placeholder={'Tên đăng nhập'}
            icon
            nameicon={images.iconuser}
          />
          <TextInputCustom
            value={pass}
            setValue={setPass}
            placeholder={'Mật khẩu'}
            icon
            nameicon={images.iconpass}
            magintop={sizes._screen_height * 0.03}
          />
          <CheckBoxLogin check={checked} clickCheckbox={clickCheckbox} />
        </View>
      </View>
    </View>
  );
}
