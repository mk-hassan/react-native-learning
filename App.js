import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import PokemonCard from "./components/PokemonCard";
import charactersData from './data/pokemonCards.json';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.cardsContainer} contentContainerStyle={{ gap: 20 }}>
        {
          charactersData.map(cardData =>
            <PokemonCard key={cardData.name} {...cardData}>
              <PokemonCard.Title name={cardData.name} hp={cardData.hp} />
              <PokemonCard.CharacterImage {...cardData} />
              <PokemonCard.CharacterInfo {...cardData} />
            </PokemonCard>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#ede",
  },
  cardsContainer: {
    gap: 10,
    paddingHorizontal: 20,
  }
});