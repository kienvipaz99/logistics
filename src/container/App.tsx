import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 30}}>Kiên</Text>
      <Icon
        name="eye-slash"
        color={'#bcbdbe'}
        size={20}
        style={{marginRight: 10}}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
