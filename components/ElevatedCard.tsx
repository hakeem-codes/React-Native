import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Text>tap Me</Text>
          </View>
          <View style={styles.card}>
            <Text>next</Text>
          </View>
          <View style={styles.card}>
            <Text>next one</Text>
          </View>
          <View style={styles.card}>
            <Text>Best One</Text>
          </View>
          <View style={styles.card}>
            <Text>More</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,

  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 10,
  },
});
