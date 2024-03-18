import { Text, View } from "react-native";
import { Button } from "react-native-web";
import { useState } from "react";
export default function CounterScreen() {
  const button1text = "Increase";
  const button2text = "Decrease";
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title={button1text} onPress={() => setCounter(counter + 1)} />
      <Button title={button2text} onPress={() => setCounter(counter - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
}
