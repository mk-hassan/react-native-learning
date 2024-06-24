import { View, Text, StyleSheet } from 'react-native';

export default function CardTitle({ title, hp }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.characterName}>{title}</Text>
      <Text style={styles.hpLevel}>❤️HP: {hp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  characterName: {
    fontSize: 30,
    fontWeight: "bold"
  },
  hpLevel: {
    fontSize: 18,
  }
});