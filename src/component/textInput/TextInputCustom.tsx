import {View, Text, TextInput, Image} from 'react-native';
import React, {memo} from 'react';
import stylesComponent from '../../res/styles/stylesComponent';
interface Props {
  value?: string | number;
  setValue?: any;
  icon?: boolean;
  nameicon?: any;
  placeholder?: string;
  magintop?: number;
}
const TextInputCustom = (props: Props) => {
  return (
    <View style={[stylesComponent.viewInput, {marginTop: props.magintop}]}>
      {props.icon ? (
        <Image source={props.nameicon} style={stylesComponent.icon} resizeMode={'cover'} />
      ) : null}
      <TextInput placeholder={props.placeholder} style={stylesComponent.txtInput} />
    </View>
  );
};

export default memo(TextInputCustom);
