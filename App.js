import React from 'react';
import { View } from 'react-native';
import LoginPage from './LoginPage'; // Update the path accordingly
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; // Update the path accordingly
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faQrcode,
  faMoneyBillWave,
  faMoneyCheckAlt,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';


import ProfilePage from './ProfilePage';
import AddMoneyPage from './AddMoneyPage';
import WithdrawalPage from './WithdrawalPage';
import PriceIndicatePage from './PriceIndicatePage';

// Add the FontAwesome icons to the library
library.add(faQrcode, faMoneyBillWave, faMoneyCheckAlt, faChartLine);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="AddMoney" component={AddMoneyPage} />
        <Stack.Screen name="Withdrawal" component={WithdrawalPage} />
        <Stack.Screen name="PriceIndicate" component={PriceIndicatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;