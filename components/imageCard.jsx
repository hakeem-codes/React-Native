import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ImageCard({source}) {
  return (
    <View >
      <View style={styles.container}>
      <View>
        <Text style={styles.heading}>trending placess </Text>
      </View>
      <Image style={styles.imageCard} source={source} />
      <View>
        <Text style={styles.label}>Hunza Valley, Pakistan</Text>
      </View>
      <View>
        <Text style={styles.description} numberOfLines={3}>
          Nestled in the Karakoram Mountains, Hunza Valley is known for its
          breathtaking landscapes, snow-capped peaks, and vibrant culture.
          Visitors can explore ancient forts, crystal-clear lakes, and enjoy the
          warm hospitality of locals. It’s a perfect destination for nature
          lovers and adventure seekers alike.
        </Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    color: 'white'
  },
  imageCard: {
    width: 400,
    height: 300,
    elevation: 3
    //borderRadius: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'black',
    borderRadius: 10,
    borderTopRightRadius:20,
    borderTopLeftRadius: 20,
    
    margin: 10
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },
});
