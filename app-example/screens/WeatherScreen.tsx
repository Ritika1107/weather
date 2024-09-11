import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Weather from '../components/Weather';
import { fetchUserWeatherInfo, fetchSearchWeatherInfo, getLocation } from '../services/weatherApi';

export default function WeatherScreen() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    handleUserWeather();
  }, []);

  const handleUserWeather = async () => {
    setIsLoading(true);
    try {
      const coordinates = await getLocation();
      const data = await fetchUserWeatherInfo(coordinates);
      setWeatherData(data);
    } catch (err) {
      console.error('Error in handleUserWeather:', err);
      setError('Failed to fetch user weather data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchCity) return;

    setIsLoading(true);
    try {
      const data = await fetchSearchWeatherInfo(searchCity);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for City..."
          value={searchCity}
          onChangeText={setSearchCity}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <Button title="Get My Weather" onPress={handleUserWeather} />

      {isLoading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && !isLoading && <Weather data={weatherData} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    padding: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  backLink: {
    marginBottom: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});