import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Weather = ({ data }: { data: any }) => {
  if (!data || !data.main) {
    return <Text>No weather data available</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text>{data.name}</Text>
        <Image
          source={{ uri: `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png` }}
          style={styles.flag}
        />
      </View>
      <Text>{data.weather[0].description}</Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/w/${data.weather[0].icon}.png` }}
        style={styles.weatherIcon}
      />
      <Text>{data.main.temp}°C</Text>
      <View style={styles.parameterContainer}>
        <View style={styles.parameter}>
          <Text>Windspeed: {data.wind.speed} m/s</Text>
        </View>
        <View style={styles.parameter}>
          <Text>Humidity: {data.main.humidity}%</Text>
        </View>
        <View style={styles.parameter}>
          <Text>Clouds: {data.clouds.all}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 30,
    height: 20,
    marginLeft: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  parameterContainer: {
    marginTop: 20,
  },
  parameter: {
    marginVertical: 5,
  },
});

export default Weather;