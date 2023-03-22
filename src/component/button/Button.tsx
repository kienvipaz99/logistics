import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import stylesComponent from '../../res/styles/stylesComponent';
import stylescustom from '../../res/styles/stylescustom';
interface Props {
  onpress?: () => void;
  background?: string;
  colortext?: string;
  text?: string;
}
const Button = (props: Props) => {
  return (
    <TouchableOpacity
      style={[stylesComponent.btn, {backgroundColor: props.background}]}
      onPress={props.onpress}>
      <Text style={[stylescustom.txtDangNhap, {color: props.colortext}]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
