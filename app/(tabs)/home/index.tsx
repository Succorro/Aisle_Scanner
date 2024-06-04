import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

export default function HomePage() {
  return (
    <View>
        <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <Text>Oauth somewhere? </Text>
      <Text>Current Project</Text>
      <Text>Tutorials</Text>
    </View>
  )
}