import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CArdFlex from './components/CardsFlex'



const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      <CArdFlex/>
    </ScrollView>
   </SafeAreaView>
  )
}

export default App