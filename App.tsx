/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import SlapshScreen from './src/screen/SlapshScreen/SlapshScreen';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <SlapshScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
