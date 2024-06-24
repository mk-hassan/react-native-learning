import { View, Text, StyleSheet } from "react-native";

export default function CharacterInfo({ color, moves, weaknesses }) {
  return (
    <View>
      <Text style={styles.fields}><Text style={{ color }}>Moves</Text> : {moves.join(', ')}</Text>
      <Text style={styles.fields}><Text style={{ color: "red" }}>Weaknesses</Text> : {weaknesses.join(', ')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  fields: {
    fontSize: 16,
    fontWeight: "700",
  }
})