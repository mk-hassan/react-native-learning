import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation, route }) {
  for (let key of Object.keys(route)) {
    console.log(key);
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "'green" }}>Home Screen</Text>
      <Button title="go to About" onPress={() => navigation.navigate("About", { name: "Kamal" })} />
    </View>
  )
}
