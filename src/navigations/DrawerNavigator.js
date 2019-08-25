import React from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../utils/styles';
import {
  DashboardScreen,
  ProfileScreen,
  SearchScreen,
  MapScreen,
  DonationScreen,
  CategoriesScreen,
} from '../screens';

export default createDrawerNavigator({
  Drawer: createStackNavigator(
    {
      Profile: ProfileScreen,
      Dashboard: DashboardScreen,
      Search: SearchScreen,
      Map: MapScreen,
      Donation: DonationScreen,
      Categories: CategoriesScreen,
    },
    {
      defaultNavigationOptions: {
        headerLeft: props => (
          <TouchableOpacity onPress={props.onPress}>
            <Icon name="chevron-left" size={35} color={colors.primary} />
          </TouchableOpacity>
        ),
        headerStyle: {
          height: 44,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      },
    },
  ),
});
