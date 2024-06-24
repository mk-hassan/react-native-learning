import { StyleSheet } from "react-native";

const PokemonCardStyles = StyleSheet.create({
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

const TitleComponentStyles = StyleSheet.create({
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

const CharacterImagesStyles = StyleSheet.create({
  characterImage: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  abilityContainer: {
    borderRadius: 10,
    borderWidth: 3,
    padding: 5
  },
  ability: {
    fontSize: 18,
    fontWeight: "bold",
  }
})

const CharacterInfoStyles = StyleSheet.create({
  fields: {
    fontSize: 16,
    fontWeight: "700",
  }
})

export { PokemonCardStyles, TitleComponentStyles, CharacterImagesStyles, CharacterInfoStyles }