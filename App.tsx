import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CArdFlex from './components/CardsFlex'
import ElevatedCard from './components/ElevatedCard'
import ImageCard from './components/imageCard'
import ActionCard from './components/ActionCard'





const App = () => {
  return (
   <SafeAreaView >
    <ScrollView >
      <CArdFlex/>
      <ElevatedCard/>
    <ImageCard source={require('./assets/img.jpg')}/>
    <ImageCard source={require('./assets/river.jpg')}/>
    <ActionCard/>
    
    </ScrollView>
   </SafeAreaView>
  )
}

export default App