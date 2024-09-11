import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Button 
        title="Sign Up" 
        onPress={() => router.push('/sign-up')}
      />
      <Button 
        title="Sign In" 
        onPress={() => router.push('/sign-in')}
      />
      <Button 
        title="Check Weather" 
        onPress={() => router.push('/weather')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
