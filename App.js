import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// local imports
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen'

const StackNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='Home'>
        <StackNavigator.Screen name='Home' component={HomeScreen} options={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "red"
          },
          contentStyle: {
            backgroundColor: "orange",
          }
        }} />
        <StackNavigator.Screen name='About' component={AboutScreen} initialParams={{ name: "Kamal" }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
