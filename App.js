import { SafeAreaView, SectionList, StyleSheet, Text, View, StatusBar, FlatList, Platform, TouchableHighlight, style } from "react-native";
import PokemonData from './data.json';
import sections from './grouped-data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingLeft: 10 }}>
        <SectionList
          sections={sections.slice(0, 1)}
          renderItem={data => {
            return <Text>{data.item}</Text>
          }}
          renderSectionHeader={data => {
            return <Text>{data.section.type}</Text>
          }}
          ItemSeparatorComponent={() => { return <View style={{ backgroundColor: "red", height: 5 }} /> }}
          SectionSeparatorComponent={() => { return <View style={{ backgroundColor: "green", height: 5 }} /> }}
        />
        {/* <FlatList
          data={PokemonData.slice(0, 3)}
          renderItem={(data) => {
            return <Text>{data.index}</Text>
          }}
          keyExtractor={(data, idx) => { return "kamal" + idx; }}
          ItemSeparatorComponent={<View style={{ backgroundColor: "red", height: 5 }} />}
        /> */}
      </View>
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