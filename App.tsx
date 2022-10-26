/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import List from './Components/List';
import wishList from './Components/wishList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="wishList" component={wishList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
