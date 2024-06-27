import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from "./commonStyles";

export default function MemoryItem({ memory }) {
  return (
    <View style={styles.memoryItem}>
      <Text style={styles.title}>{memory.title.slice(0, 20)}</Text>
      <Pressable>
        <View>
          <Text style={styles.details}>Details ➤</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  memoryItem: {
    padding: 20,

    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",

    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.SecondaryColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PrimaryTextColor,
  },
  details: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.SecondaryTextColor,
  }
});
