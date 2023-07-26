import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can replace the URL with your actual backend API endpoint for login
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
      .then(response => response.json())
      .then(users => {
        // Simulate the login process by finding a user with the entered username
        const user = users.find(user => user.username === username);

        if (user) {
          if (user.id.toString() === password) {
            // For this example, we'll just log the user data to the console
            console.log('Logged in user:', user);
            // Get the last 4 digits of the phone number as the account balance
            const accountBalance = user.phone.slice(-4);


            // Navigate to the home page
            navigation.navigate('Home', {
              // Pass any user data you want to the home page
              // For example, you can pass the user ID to fetch account balance and transaction history
              userId: user.username,
              accountBalance: accountBalance,

            });
          } else {
            // Show an error message for incorrect password
            Alert.alert('Login Error', 'Incorrect password. Please try again.');
          }
        } else {
          // Show an error message for unknown username
          Alert.alert('Login Error', 'Username not found. Please check your username and try again.');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        // Show a generic error message if something goes wrong with the API call
        Alert.alert('Login Error', 'An error occurred. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AgriBlock</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F6EA', // Background color
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#4B9460', // Text color
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#4B9460', // Border color
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4B9460', // Button background color
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  loginText: {
    color: '#E5F6EA', // Text color for the button
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginPage;
