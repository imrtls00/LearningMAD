import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { Button } from "react-native";
import Flat from "./src/screens/flat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ColorScreen from "./src/screens/ColorScreen";
import FlatScreen from "./src/screens/FlatScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Flat" component={Flat} />
        <Stack.Screen name="FlatScreen" component={FlatScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
