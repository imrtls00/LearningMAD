import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.ViewStyle}
        onPress={() => navigation.navigate("ImageScreen")}
      >
        <Text style={styles.textStyle}> Go to Image Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ViewStyle}
        onPress={() => navigation.navigate("CounterScreen")}
      >
        <Text style={styles.textStyle}> Go to Counter Screen </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ViewStyle}
        onPress={() => navigation.navigate("TextScreen")}
      >
        <Text style={styles.textStyle}> Text Screen </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ViewStyle}
        onPress={() => navigation.navigate("FlatScreen")}
      >
        <Text style={styles.textStyle}> Flat Screen </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ViewStyle}
        onPress={() => navigation.navigate("ColorScreen")}
      >
        <Text style={styles.textStyle}> Color Screen </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
