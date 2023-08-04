import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faQrcode,
  faMoneyBillWave,
  faMoneyCheckAlt,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import AddMoneyPage from './AddMoneyPage';
import WithdrawalPage from './WithdrawalPage';
import PriceIndicatePage from './PriceIndicatePage';
import BuySellPage from './BuySellPage';
import MorePage from './MorePage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Add the FontAwesome icons to the library
library.add(faQrcode, faMoneyBillWave, faMoneyCheckAlt, faChartLine);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerTitle: 'Home',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerTitle: 'Profile',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddMoney"
          component={AddMoneyPage}
          options={{
            headerTitle: 'Add Money',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Withdrawal"
          component={WithdrawalPage}
          options={{
            headerTitle: 'Withdrawal',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="PriceIndicate"
          component={PriceIndicatePage}
          options={{
            headerTitle: 'Price Indicate',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="BuySell"
          component={BuySellPage}
          options={{
            headerTitle: 'Buy/Sell',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="More"
          component={MorePage}
          options={{
            headerTitle: 'More',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
