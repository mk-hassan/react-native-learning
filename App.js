import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";
import icon from "./assets/adaptive-icon.png";
import { useState } from "react";

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBox, styles.boxShadow]}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={[styles.box, styles.darkBox]}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "midnightblue"
  },
  box: {
    width: 300,
    height: 200,
    padding: 10,
    margin: 30,
  },
  lightBox: {
    backgroundColor: "white",
  },
  darkBox: {
    backgroundColor: "black",
  },
  title: {
    color: "gray",
    fontSize: 50,
    fontWeight: "bolder"
  },
  boxShadow: {
    shadowColor: "orange",
    shadowOffset: {
      width: 300,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 2
  }
});