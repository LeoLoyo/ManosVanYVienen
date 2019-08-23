import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {SignInScreen, SignUpScreen, ForgotPasswordScreen} from '../screens';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../utils/styles';

export default createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ForgotPassword: ForgotPasswordScreen,
  },
  {
    defaultNavigationOptions: {
      headerLeft: props => (
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="chevron-left" size={35} color={colors.primary} />
        </TouchableOpacity>
      ),
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
    },
  },
);
