import { useState } from "react";
import { Switch, SafeAreaView, StatusBar, StyleSheet, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [darkMode, setMode] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name!"
        secureTextEntry={false}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        selectionColor={"red"}
        clearTextOnFocus={true}
        defaultValue="What's your name?" // incase the initial state = "" this will take place
      />
      <TextInput
        style={[styles.input, { minHeight: 100, textAlignVertical: "top" /* to avoid initial position between android and ios */ }]}
        multiline={true}
      />
      <Switch
        value={darkMode}
        onValueChange={() => setMode(!darkMode)}
        thumbColor={"red"}
        trackColor={{ false: "black", true: "green" }}
        ios_backgroundColor="black" // trackColor false value, not working in ios
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1",
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "whitef",
    color: "black",
    // fontSize: 32,
  },
  text: {
    fontSize: 20,
    padding: 12,
  }
});