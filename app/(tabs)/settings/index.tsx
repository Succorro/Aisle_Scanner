import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

export default function SettingsPage() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Settings" }} />
      <Text>SettingsPage</Text>
    </View>
  )
}