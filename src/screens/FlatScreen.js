import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";

export default function FlatScreen() {
  const friends = [
    { name: "Muhammad", age: 21 },
    { name: "Umer", age: 22 },
    { name: "Ali", age: 20 },
    { name: "Qasim", age: 23 },
  ];

  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} and {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    fontSize: 20,
    color: "rgb(100,5,6)",
  },
});
