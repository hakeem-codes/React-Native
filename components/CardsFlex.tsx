import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CArdFlex() {
  return (
    <View>
      <Text style={styles.heading}>Card Flex</Text>
      <View style={[styles.container]}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 8, 
    borderRadius: 10

  },
  container: {
    flex: 1, flexDirection: 'row'
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8
  },
});
