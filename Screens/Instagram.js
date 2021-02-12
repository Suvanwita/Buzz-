import * as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class InstagramScreen extends React.Component{
  render(){
    return(
      <View>
      <Header
        centerComponent={{ text: 'Buzz', style: { fontSize:27} }}
      />
      <Text style={{alignSelf:'center'}} >Instagram</Text>
      </View>
    );
  }
}