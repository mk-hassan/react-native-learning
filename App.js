import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";
import icon from "./assets/adaptive-icon.png";
import { useState } from "react";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }} text="Box 1"></Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56", paddingVertical: 50 }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});