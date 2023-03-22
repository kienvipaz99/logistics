import {ImageBackground, SafeAreaView, View, StatusBar} from 'react-native';
import React, {memo, useRef} from 'react';
import images from '../../res/images';
import stylescustom from '../../res/styles/stylescustom';
interface Props {
  navigation: any;
}
const SlapshScreen = (props: Props) => {
  const timerRef: any = useRef(null);
  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      props.navigation.navigate('SlapshScreen1');
    }, 3000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={true}
      />
      <ImageBackground
        source={images.SlapshIMG}
        resizeMode="cover"
        style={stylescustom.containerCenter}></ImageBackground>
    </View>
  );
};
export default SlapshScreen;
