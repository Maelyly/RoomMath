import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

export const Search = ({ city, wheather }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Wheather City</Text>
        <Text style={styles.text}>Wheather on {city}:</Text>
        <Text style={styles.text}>{wheather}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          Home Page
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    padding: 15,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 15,
    color: 'blue',
  },
});
