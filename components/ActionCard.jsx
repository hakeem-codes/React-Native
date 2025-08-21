import {
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebSite(website) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text numberOfLines={3}>
        Nestled in the Karakoram Mountains, Hunza Valley is known for its
        breathtaking landscapes, snow-capped peaks, and vibrant culture.
        Visitors can explore ancient forts, crystal-clear lakes, and enjoy the
        warm hospitality of locals. It’s a perfect destination for nature lovers
        and adventure seekers alike.
      </Text>
      <View>
        <TouchableOpacity
          onPress={() =>
            openWebSite(
              'https://reactnative.dev/docs/linking?language=javascript#openurl',
            )
          }
        >
          <Text style={styles.link}>read more</Text>
        </TouchableOpacity>
      </View>
       <View>
        <TouchableOpacity
          onPress={() =>
            openWebSite(
              '',
            )
          }
        >
          <Text style={styles.link}>Follow me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
link: {
  backgroundColor: '#4A90E2',  // modern blue
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5, // for Android shadow
  margin: 5
}
});
