import { View, StyleSheet } from "react-native";
import icon from "./assets/adaptive-icon.png";
import { useState } from "react";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: 64,
  },
});