import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/styles/stylescustom';
import HeaderHome from '../../component/header/HeaderHome';
import TopTabHome from '../../container/TopTabHome';
import colors from '../../res/colors';
interface Props {
  navigation: any;
}
export default function Home(props: Props) {
  return (
    <View style={stylescustom.containerHome}>
      <StatusBar
        backgroundColor={colors.colorBGRed}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={false}
      />
      <HeaderHome navigation={props.navigation} />
      <TopTabHome />
    </View>
  );
}

const styles = StyleSheet.create({});
