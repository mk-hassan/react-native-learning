import { View, Image, Text, StyleSheet } from 'react-native';
import Imgs from '../modules/characterImagesLoader';

export default function CharacterImage({ name, color: borderColor, emoji, ability, image }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={Imgs[name]} style={styles.characterImage} />
      <View style={[styles.abilityContainer, { borderColor }]}>
        <Text style={styles.ability}>{`${emoji} ${ability}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  abilityContainer: {
    borderRadius: 10,
    borderWidth: 3,
    padding: 5
  },
  ability: {
    fontSize: 18,
    fontWeight: "bold",
  },
  characterImage: {
    width: 300,
    height: 300,
    marginBottom: 20
  }
})
