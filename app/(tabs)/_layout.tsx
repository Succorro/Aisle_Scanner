import { Tabs } from "expo-router"

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="(home)" options={{title: "Home"}}/>
        <Tabs.Screen name="(warehouse)" options={{title: "Warehouse"}}/>
        <Tabs.Screen name="(settings)" options={{title: "Settings"}}/>
    </Tabs>
  )
}