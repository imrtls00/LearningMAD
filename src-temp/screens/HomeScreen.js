import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Text>This is a basic HomeScreen component.</Text>
      <Text>Flat List</Text>
    <TouchableOpacity onPress={() => navigation.navigate("FlatScreen")}>
      <Text>Press me for flat list</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("ColorScreen")}>
      <Text>Press me for Color Screen</Text>
    </TouchableOpacity>
    {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
