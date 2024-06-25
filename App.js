import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar, FlatList, Platform, TouchableHighlight, style } from "react-native";
import PokemonData from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PokemonData.slice(0, 3)}
        renderItem={(data) => {
          return <View key={data.item.id}>
            <Text>{data.item.type}</Text>
            <Text>{data.item.name}</Text>
          </View>
        }}
        ItemSeparatorComponent={data => {
          console.log(data);
          return <Text>{data.leadingItem.name}</Text>;
        }}
        Header
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "red",
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
});