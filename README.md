# Weather App

This React-based weather application allows users to:

1. Create an account and sign in
2. View weather information for their current location
3. Search for and display weather data for specific cities

## Getting Started

To run the Weather App locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/weather-app.git
   ```


2. Install dependencies:
   ```
   npm install
   npm install firebase
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Choose the iOS option to run the app in an iOS simulator or on your iOS device.

## Using the App

1. **Sign Up and Sign In**: 
   - On the home screen, tap "Sign Up" to create a new account.
   - Enter your name, email, password, and phone number.
   - After signing up, you'll be directed to the Sign In page.
   - Use your email and password to sign in.

2. **View Current Location Weather**:
   - After signing in, the app will attempt to fetch weather data for your current location.
   - Ensure you've granted the necessary location permissions to the app.

3. **Search for Weather**:
   - On the weather screen, you'll see a search bar at the top.
   - Enter the name of a city and tap the "Search" button.
   - The app will display the current weather for the specified city.

4. **Refresh Current Location Weather**:
   - Tap the "Get My Weather" button to refresh the weather data for your current location.

## Features

- User authentication (sign up and sign in)
- Current location weather display
- City-based weather search
- Temperature display in Celsius
- Weather condition description

## Technologies Used

- React Native
- Expo
- Firebase (for user authentication and data storage)
- OpenWeatherMap API (for weather data)

## Note

This app is for educational purposes and may not include all security features necessary for a production application. Always ensure proper security measures are implemented when dealing with user data in real-world applications.