import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

export const Home = () => {
  const [cityName, setCityName] = useState('');
  const [wheather, setWheather] = useState('');

  function search() {
    let r = fetch(
      `https://weather.contrateumdev.com.br/api/weather/city/?city=${wheather}`
    );
    setWheather(r.wheather.description);
    console.log(r.wheather.description);
    navigation.navigate('Search', { wheather: wheather, city: cityName });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Wheather City</Text>
        <Text style={styles.text}>
          Inform the city for Wheather information:
        </Text>
        <TextInput
          style={styles.formInput}
          placeholder={'City Name'}
          value={cityName}
          onChangeText={setCityName}
          autoCapitalize={'none'}
        />
        <TouchableOpacity style={styles.button} onPress={() => search()}>
          Search
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
  formInput: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    color: 'blue',
  },
});
