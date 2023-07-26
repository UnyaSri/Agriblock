import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddMoneyPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Money Page</Text>
      {/* Add your add money logic here */}
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

export default AddMoneyPage;
