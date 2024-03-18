

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Button } from 'react-native';
import {useState} from 'react';

export default function ColorScreen() {
  const randomRGB=()=>
  {
	  const red = Math.floor(Math.random()*256);
	  const green = Math.floor(Math.random()*256);
	  const blue = Math.floor(Math.random()*256);
		return `rgb(${red},${green},${blue})`;
  }
  const [colors,setColors] = useState([]);
  return (
  <View>
  <Text>Generate Random Colors</Text>
  <Button
  title="Add Color"
  onPress={()=>{
	 setColors([...colors,randomRGB()]); 
  }}
  />
  <FlatList
  data={colors}
  renderItem={({item})=>{
	  return(
	   <View style={{height:100,width:100,backgroundColor:item}}>
  </View>
	  )
  }}
  />
 
  </View>
  );
}

const styles = StyleSheet.create({

});
