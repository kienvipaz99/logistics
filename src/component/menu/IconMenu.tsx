import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import sizes from '../../res/sizes';

interface Props {
  navigation: any;
}
export default function IconMenu(props: Props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={styles.styleIconMenu}>
      <Icon name="menu" color={'white'} size={sizes._30sdp} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  styleIconMenu: {
    marginLeft: sizes._screen_width * 0.03,
  },
});
