import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailExpenseScreen from '../screens/DetailExpenseScreen';
import Chatbot from '../screens/Chatbot';
import FundSomeone from '../screens/FundSomeone';
import AddMoney from '../screens/AddMoney';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    // initialroute 
  },
});

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    DetailExpense: { screen: DetailExpenseScreen},
    Chatbot: Chatbot,
    AddMoney: AddMoney,
    Links: LinksScreen,
    Fund: FundSomeone,
    Settings: SettingsScreen 

  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none'
  }
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-home'
//       }
//     />
//   ),
// };

// HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//     Fund: FundSomeone
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'LoanNow',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-cash'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Profile',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-people'} />
//   ),
// };

// SettingsStack.path = '';

// const tabNavigator = createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });

// tabNavigator.path = '';

export default HomeStack;
