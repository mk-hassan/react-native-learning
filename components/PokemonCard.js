import { View, StyleSheet } from 'react-native';
import CardTitle from './CardTitle';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';

export default function PokemonCard({ name, image, hpLevel, ability, color, emoji, moves, weaknesses }) {
  return (
    <View style={styles.cardMainStyle}>
      <CardTitle title={name} hp={hpLevel} />
      <CharacterImage {...{ name, color, emoji, ability, image }} />
      <CharacterInfo {...{ color, moves, weaknesses }} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardMainStyle: {
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    gap: 10,
  }
});
