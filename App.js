import { View, Text, StyleSheet, useWindowDimensions, Platform } from "react-native";
import CustomButton from "./components/CustomButton";

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
        <CustomButton title={`Hello, from ${Platform.OS}`} onPress={() => console.log("Pressed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "ios" ? 64 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});