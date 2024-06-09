import { View, Text } from 'react-native'
import { Link, Stack } from 'expo-router'

export default function WarehousePage() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Warehouse" }} />
      <Text>Warehouse</Text>
      <Link href="/warehouse/warehouseLayout">Current warehouse</Link>
    </View>
  )
}