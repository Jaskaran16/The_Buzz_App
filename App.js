import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Instagram from './Screens/InstagramScreen'
import Facebook from './Screens/FacebookScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import FacebookScreen from './Screens/FacebookScreen';
import InstagramScreen from './Screens/InstagramScreen';
export default class App extends React.Component {
 render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigator)