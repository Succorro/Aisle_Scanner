import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function WarehouseIndex() {
  return (
    <View>
      <Text>WarehouseIndex</Text>
      <Link href="/floorView">View Floor</Link>
    </View>
  )
}