import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ImageDetail(props) {
  return (
    <View>
      <Image
        source={props.imageSource}
        style={{ width: "100", height: "100", resizeMode: "contain" }}
      />
      {/* <Text> {props.title} </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
