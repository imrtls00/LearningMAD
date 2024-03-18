import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import TextScreen from "./src/screens/TextScreen";
import ColorScreen from "./src/screens/ColorScreen";
import FlatScreen from "./src/screens/FlatScreen";
const stack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="FlatScreen" component={FlatScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
