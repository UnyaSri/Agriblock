import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQrcode,
    faMoneyBillWave,
    faMoneyCheckAlt,
    faChartLine,} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    const route = useRoute();
    const { userId, accountBalance } = route.params; // Fetch the user ID and accountBalance passed from the LoginPage
    const navigation = useNavigation();
  
    const transactionHistory = [
      { id: 1, amount: 50, type: 'Deposit' },
      { id: 2, amount: -30, type: 'Withdrawal' },
      { id: 3, amount: -16, type: 'Lisa' },
      { id: 4, amount: 86, type: 'John' },
      // Add more transactions here...
    ];
  
    return (
      <View style={styles.container}>
        {/* Green box for account balance and QR code button */}
        <View style={styles.greenBox}>
          <View>
            <Text style={styles.title}>Hello {userId}!</Text>
            <Text style={styles.balance}>Balance: £{accountBalance}</Text>
          </View>
          <TouchableOpacity style={styles.qrCodeButton} onPress={() => navigation.navigate('Profile')}>
            <FontAwesomeIcon icon={faQrcode} size={'35'} color="#4B9460" />
          </TouchableOpacity>
        </View>
  
        {/* Gray box for buttons */}
        <View style={styles.grayBox}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMoney')}>
            <FontAwesomeIcon icon={faMoneyBillWave} size={20} color="#4B9460" />
            <Text style={styles.buttonText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Withdrawal')}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} size={20} color="#4B9460" />
            <Text style={styles.buttonText}>Withdrawal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PriceIndicate')}>
            <FontAwesomeIcon icon={faChartLine} size={20} color="#4B9460" />
            <Text style={styles.buttonText}>Price Indicate</Text>
          </TouchableOpacity>
        </View>
  
        <Text style={styles.transactionTitle}>Transaction History:</Text>
        {/* Transaction history items */}
        {transactionHistory.map(transaction => (
          <View key={transaction.id} style={styles.transactionItem}>
            <Text>{transaction.type}</Text>
            <Text>£{transaction.amount}</Text>
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', // Top-aligned content
      alignItems: 'center',
      backgroundColor: '#E5F6EA', // Background color
      padding: 22,
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      color: '#FFFFFF', // Text color
      marginBottom: 5,
      marginTop: 5,
    },
    balance: {
      fontSize: 25,
      marginBottom: 5,
      color: '#FFFFFF', // Text color
    },
    greenBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#4B9460', // Green box background color
      padding: 10,
      borderRadius: 8,
      marginBottom: 20,
      width: '100%',
    },
    qrCodeButton: {
      backgroundColor: '#FFFFFF', // White button background color
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 8,
    },
    qrCodeButtonText: {
      color: '#4B9460', // Text color
      fontWeight: 'bold',
    },
    grayBox: {
      backgroundColor: '#D9D9D9', // Gray box background color
      padding: 16,
      width: '100%',
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // White button background color
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 10,
    },
    buttonText: {
      color: '#4B9460', // Text color
      fontWeight: 'bold',
    },
    transactionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4B9460', // Text color
      marginBottom: 10,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#4B9460', // Border color
    },
  });
  
  export default HomePage;