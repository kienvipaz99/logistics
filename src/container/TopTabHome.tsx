import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React, {memo} from 'react';
import ReceiveApplication from '../screen/Home/homechildren/ReceiveApplication';
import Processing from '../screen/Home/homechildren/Processing';
import sizes from '../res/sizes';
import {TabView, TabBar} from 'react-native-tab-view';
import fonts from '../res/fonts';
import colors from '../res/colors';
const TopTabHome = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'nhandon', title: 'NHẬN ĐƠN'},
    {key: 'xuly', title: 'ĐANG XỬ LÝ'},
  ]);
  const renderScene = ({route, jumpTo}: any) => {
    switch (route.key) {
      case 'nhandon':
        return <ReceiveApplication />;

      case 'xuly':
        return <Processing />;

      default:
        return null;
    }
  };
  const renderHeader = (props: any) => (
    <TabBar
      pressColor="transparent"
      {...props}
      scrollEnabled={true}
      style={[
        {
          height: sizes._40sdp,
          elevation: 10,

          backgroundColor: 'white',
        },
      ]}
      indicatorStyle={{backgroundColor: colors.colorTextRed, height: 2, borderRadius: 10}}
      tabStyle={{width: sizes._csreen_width / 2}}
      renderLabel={({route, focused, color}: any) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={[styles.txtheader, {color: focused ? colors.colorTextRed : colors.colorText}]}>
              {route.title}
            </Text>
          </View>
        );
      }}
    />
  );
  return (
    <NavigationContainer independent={true}>
      <TabView
        swipeEnabled={true}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderHeader}
        onIndexChange={(index: any) => {
          setIndex(index);
        }}
      />
    </NavigationContainer>
  );
};

export default memo(TopTabHome);

const styles = StyleSheet.create({
  txtheader: {
    fontSize: sizes._font_size_large,
    fontFamily: fonts.fontRegular,
  },
});
