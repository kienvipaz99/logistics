import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/styles/stylescustom';
import HeaderHome from '../../component/header/HeaderHome';
import TopTabHome from '../../container/TopTabHome';
interface Props {
  navigation: any;
}
export default function Home(props: Props) {
  return (
    <View style={stylescustom.containerHome}>
      <HeaderHome navigation={props.navigation} />
      <TopTabHome />
    </View>
  );
}

const styles = StyleSheet.create({});
