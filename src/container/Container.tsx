// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SlapshScreen from '../screen/SlapshScreen/SlapshScreen';
import SlapshScreen1 from '../screen/SlapshScreen/SlapshScreen1';
import Login from '../screen/Login/Login';
const Stack = createNativeStackNavigator();

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SlapshScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SlapshScreen" component={SlapshScreen} />
        <Stack.Screen name="SlapshScreen1" component={SlapshScreen1} />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{animation: 'slide_from_bottom', animationDuration: 1200}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
