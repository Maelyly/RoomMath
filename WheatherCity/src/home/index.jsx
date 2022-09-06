import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

export const HomeList = () => {
  const [cityName, setCityName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Wheather City</Text>
        <Text>Inform the city for Wheather information:</Text>
        <TextInput
          style={styles.formInput}
          placeholder={'City Name'}
          value={cityName}
          onChangeText={setCityName}
          autoCapitalize={'none'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('code')}
        >
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
});
