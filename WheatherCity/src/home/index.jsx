import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const Home = () => {
  const [cityName, setCityName] = useState('');
  const [wheather, setWheather] = useState('');

  function search() {
    if (cityName == '') {
      return alert('Digite uma cidade');
    }
    fetch(
      `https://weather.contrateumdev.com.br/api/weather/city/?city=${cityName}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.main.temp), setWheather(json.main.temp);
        alert('Temperatura: ' + json.main.temp);
        // navigator.navigate('Search', { wheather: wheather, city: cityName });
      })
      .catch((err) => console.log('Erro de solicitação', err));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Wheather City</Text>
        <Text style={styles.text}>
          Informe uma cidade para ver a temperatura:
        </Text>
        <TextInput
          style={styles.formInput}
          placeholder={'Nome da cidade'}
          value={cityName}
          onChangeText={setCityName}
          autoCapitalize={'none'}
        />
        <TouchableOpacity style={styles.button} onPress={() => search()}>
          <Text style={styles.buttonText}>Pesquisar</Text>
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
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginLeft: 100,
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
    fontSize: 25,
    color: 'blue',
    fontWeight: '600',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
