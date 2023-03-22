import {View, Text, StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native';
import React, {useRef, useState} from 'react';
import images from '../../res/images';
import stylescustom from '../../res/styles/stylescustom';
import TextInputCustom from '../../component/textInput/TextInputCustom';
import sizes from '../../res/sizes';
import CheckBoxLogin from '../../component/checkbox/CheckBoxLogin';
import Button from '../../component/button/Button';
import colors from '../../res/colors';
import {ScrollView} from 'react-native';
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
  const onPressLogin = async () => {
    await props.navigation.navigate('Home');
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={true}
      />
      <Image style={stylescustom.imageLogin} source={images.headerlogin} />
      <View style={stylescustom.styleLogin}>
        <Text style={[stylescustom.txtDangNhap, {marginTop: sizes._screen_height * 0.04}]}>
          ĐĂNG NHẬP
        </Text>
        <View style={styles.viewform}>
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
          <View style={stylescustom.viewCheckboxLogin}>
            <CheckBoxLogin check={checked} clickCheckbox={clickCheckbox} />
            <Text style={[stylescustom.txtIntalic, {marginLeft: sizes._10sdp}]}>Nhớ mật khẩu</Text>
          </View>
        </View>
        <View style={{marginTop: sizes._25sdp}}>
          <Button
            colortext="white"
            text="ĐĂNG NHẬP"
            background={colors.colorBGRed}
            onpress={onPressLogin}
          />
        </View>
        <View style={styles.viewregister}>
          <Text style={stylescustom.txtsiver}>Bạn chưa có tài khoản?</Text>
          <Text style={[stylescustom.txtIntalic, {color: colors.colorTextGreen}]}>
            Đăng ký ngay
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewform: {marginTop: sizes._screen_height * 0.04, width: sizes._screen_width * 0.8},
  viewregister: {
    marginTop: sizes._screen_height * 0.1,
    alignItems: 'center',
  },
});
