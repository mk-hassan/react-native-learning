import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomButton from "./components/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});