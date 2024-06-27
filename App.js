import { useState } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput, Button, View, StatusBar, FlatList, Pressable, BackHandler } from "react-native"

// Local imports
import Colors from "./components/commonStyles";
import MemoryItem from "./components/MemoryItem";


export default function App() {
  const [memoryTitle, setMemoryTitle] = useState("");
  const [memoryDetails, setMemoryDetails] = useState("");
  const [memories, setMemories] = useState([]);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.title}>TA<Text style={{ color: Colors.SecondaryTextColor }}>ز</Text>KR</Text>
      </View>
      <View style={[styles.Container, styles.newMemoryContainer]}>
        <TextInput
          style={styles.input}
          value={memoryTitle}
          onChangeText={setMemoryTitle}
          placeholder="Enter memory title"
          clearButtonMode="while-editing"
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor={Colors.PrimaryTextColor}
        />
        <TextInput
          style={[styles.input, styles.details]}
          value={memoryDetails}
          onChangeText={setMemoryDetails}
          placeholder="Enter memory details"
          clearButtonMode="while-editing"
          autoCorrect={false}
          autoCapitalize="none"
          multiline={true}
          selectionColor={Colors.PrimaryTextColor}
        />
        <Pressable
          style={styles.addButton}
          onPress={() => setMemories([{ title: memoryTitle, details: memoryDetails }, ...memories])}
        >
          <Text style={styles.addText}>+ Add Memory</Text>
        </Pressable>
      </View>
      <View style={[styles.Container, styles.memoriesDisplayContainer]}>
        <FlatList
          contentContainerStyle={memories.length === 0 ? styles.emptyLisContainer : {}}
          data={memories}
          renderItem={({ item }) => <MemoryItem memory={item} />}
          ItemSeparatorComponent={<View style={{ padding: 10 }} />}
          ListEmptyComponent={<View><Text style={styles.emptyElement}>No Memories 🫣</Text></View>}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    mariginTop: StatusBar.currentHeight,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",

    padding: 10,
    minHeight: 50,
    borderBottomRightRadius: 100,
    backgroundColor: Colors.PrimaryColor,

    shadowColor: Colors.PrimaryColor,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    elevation: 10, // Android
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 5,
    color: Colors.SecondaryColor,
  },
  newMemoryContainer: {
    rowGap: 20,
    justifyContent: "center",

    paddingVertical: 20,
    paddingHorizontal: 10,

    backgroundColor: Colors.SecondaryColor,
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    color: Colors.PrimaryTextColor,
    borderColor: Colors.PrimaryColor,
  },
  details: {
    minHeight: 150,
  },
  addButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: Colors.PrimaryColor,
  },
  addText: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.SecondaryTextColor
  },
  memoriesDisplayContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,

    borderTopEndRadius: 20,
    borderTopStartRadius: 20,

    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: Colors.PrimaryColor,

    backgroundColor: Colors.PrimaryColor,
  },
  emptyLisContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyElement: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.SecondaryTextColor,
  }
});