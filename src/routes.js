import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeTintColor: '#FFF',
              keyboardHidesTabBar: true, // o teclado fica encima do "menu"
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
