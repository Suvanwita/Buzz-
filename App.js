import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './Screens/Facebook';
import InstagramScreen from './Screens/Instagram';

export default function App() {
  return (
     <AppContainer/>  
  );
}


const TabNavigator= createBottomTabNavigator(
  {
    Facebook:{screen:FacebookScreen},
    Instagram:{screen:InstagramScreen}
  },
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName;
      if(routeName==="Facebook"){
        return(
          <Image source={require('./assets/facebook.png')} style={{width:30,height:30,padding:5,margin:5}} />
        )
      }else if(routeName==="Instagram"){
        return(
          <Image source={require('./assets/instagram.png')} style={{width:30,height:30,padding:5,margin:5}} />
        )
      }//if
    }
  })
}
)

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
