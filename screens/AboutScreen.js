import { View, Text, Button } from 'react-native'

export default function AboutScreen({ navigation, route }) {
  console.log(Object.keys(navigation));
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "'green" }}>Name: {route.params?.name}</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "'green" }}>Age: {route.params?.age}</Text>
      <Button title="change initial params" onPress={() => navigation.setParams({ age: 22 })} />
      <Button title="go back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}
