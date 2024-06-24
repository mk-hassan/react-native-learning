import { View, Text, Image } from 'react-native';
import Imgs from '../modules/characterImagesLoader';
import { PokemonCardStyles, TitleComponentStyles, CharacterImagesStyles, CharacterInfoStyles } from './styles/pokemonCardStyles';

export default function PokemonCard({ children }) {
  return (
    <View style={PokemonCardStyles.cardMainStyle}>
      {children}
    </View>
  )
}

PokemonCard.Title = ({ name, hp }) => {
  return (
    <View style={TitleComponentStyles.titleContainer}>
      <Text style={TitleComponentStyles.characterName}>{name}</Text>
      <Text style={TitleComponentStyles.hpLevel}>❤️HP: {hp}</Text>
    </View>
  )
};

PokemonCard.CharacterImage = ({ name, color: borderColor, emoji, ability }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={Imgs[name]} style={CharacterImagesStyles.characterImage} />
      <View style={[CharacterImagesStyles.abilityContainer, { borderColor }]}>
        <Text style={CharacterImagesStyles.ability}>{`${emoji} ${ability}`}</Text>
      </View>
    </View>
  )
}

PokemonCard.CharacterInfo = ({ color, moves, weaknesses }) => {
  return (
    <View>
      <Text style={CharacterInfoStyles.fields}><Text style={{ color }}>Moves</Text> : {moves.join(', ')}</Text>
      <Text style={CharacterInfoStyles.fields}><Text style={{ color: "red" }}>Weaknesses</Text> : {weaknesses.join(', ')}</Text>
    </View>
  )
}
