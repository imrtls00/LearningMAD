import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import { Button } from "react-native-web";
import { useState } from "react";

export default function TextScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Written Text is :{name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "lightgrey",
  },
});
