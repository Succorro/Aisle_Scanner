import React, {useState} from 'react'
import { Redirect } from 'expo-router'
import { Text, View } from 'react-native'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true)
  if(loggedIn){
    return (
      <Redirect href={"/(tabs)/home"} />
    )
  }
  return (
    <View>
      <Text>
        Login
      </Text>
    </View>
  )
}