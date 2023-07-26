import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WithdrawalPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Withdrawal Page</Text>
      {/* Add your withdrawal logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F6EA', // Background color
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B9460', // Text color
  },
});

export default WithdrawalPage;
