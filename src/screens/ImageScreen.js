import { Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
export default function ImageScreen() {
  return (
    <View>
      <Text>Images</Text>
      <ImageDetail imageSource={require("../../assets/bg-img.png")} />
      <ImageDetail imageSource={require("../../assets/screen.png")} />
    </View>
  );
  const styles = StyleSheet.create({});
}
