import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

interface WeatherProps {
  data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{data.name}</Text>
      <Text style={styles.temp}>{data.main.temp}°C</Text>
      <Text style={styles.description}>{data.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
  },
});

export default Weather;