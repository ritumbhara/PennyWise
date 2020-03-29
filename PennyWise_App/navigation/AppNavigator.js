import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
        HomeStack: MainTabNavigator,
    },
    {
        initialRouteName: "HomeStack"
    }
    )
);
