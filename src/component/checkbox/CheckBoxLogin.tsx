import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {StyleSheet, View, Pressable} from 'react-native';
import images from '../../res/images';
import sizes from '../../res/sizes';
import stylesComponent from '../../res/styles/stylesComponent';
interface Props {
  check?: boolean;
  clickCheckbox?: any;
}
export default function CheckBoxLogin(props: Props) {
  return (
    <TouchableOpacity style={stylesComponent.checkbox} onPress={props.clickCheckbox}>
      {props.check ? (
        <Image
          source={images.iconcheckbox}
          resizeMode={'cover'}
          style={{height: sizes._screen_width * 0.035, width: sizes._screen_width * 0.04}}
        />
      ) : null}
    </TouchableOpacity>
  );
}
