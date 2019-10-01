import React from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions, TouchableOpacity, Easing, Animated} from 'react-native';
import {
  SearchScreen,
  DashboardScreen,
  ProfileScreen,
  MapScreen,
  DonationScreen,
  CategoryScreen,
} from '../screens';
import {colors, fontFamilyBold} from '../utils/styles';
import {HeaderLeft, CustomDrawer} from '../components';

const {width} = Dimensions.get('window');

const defaultConfig = {
  defaultNavigationOptions: {
    gesturesEnabled: false,
    headerStyle: {
      height: 55,
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.secondary,
      fontFamily: fontFamilyBold,
    },
  },
};

export default createDrawerNavigator(
  {
    Dashboard: createStackNavigator(
      {
        Dashboard: {
          path: '/',
          screen: DashboardScreen,
          navigationOptions: ({navigation}) => {
            return {
              headerLeft: (
                <TouchableOpacity
                  onPress={navigation.toggleDrawer}
                  style={{padding: 8}}>
                  <Icon name="menu" size={35} color={colors.secondary} />
                </TouchableOpacity>
              ),
              headerRight: (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
                  style={{padding: 8}}>
                  <Icon name="search" size={35} color={colors.secondary} />
                </TouchableOpacity>
              ),
            };
          },
        },
        Search: {
          path: '/search',
          screen: SearchScreen,
          navigationOptions: () => {
            return {
              title: 'Encuentra lo que deseas',
              headerLeft: HeaderLeft,
            };
          },
        },

        Category: {
          screen: CategoryScreen,
          path: '/category/:categoryId',
          navigationOptions: ({navigation}) => {
            return {
              title: navigation.state.params.item.title,
              headerLeft: HeaderLeft,
            };
          },
        },
        Donation: {
          screen: DonationScreen,
          path: '/donation/:donationId',
          navigationOptions: ({navigation}) => {
            return {
              title: navigation.state.params.item.title,
              headerLeft: HeaderLeft,
            };
          },
        },
        Profile: {
          screen: ProfileScreen,
          path: '/profile',
        },

        Map: {
          screen: MapScreen,
          path: '/map',
        },
      },
      {
        initialRouteName: 'Dashboard',
        ...defaultConfig,
        headerMode: 'float',
        mode: 'screen',
        transitionConfig: () => ({
          isModal: true,
          transitionSpec: {
            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
          },
          screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            const height = layout.initHeight;
            const translateY = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index],
              outputRange: [0, 1, 1],
            });

            return {opacity, transform: [{translateY}]};
          },
        }),
      },
    ),
    Search: {
      path: '/search',
      screen: SearchScreen,
    },
    Profile: {
      screen: ProfileScreen,
      path: '/profile',
    },
    Map: {
      screen: MapScreen,
      path: '/map',
    },
  },
  {
    initialRouteName: 'Dashboard',
    hideStatusBar: true,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    overlayColor: 'red',
    drawerWidth: width * 0.8,
    contentComponent: CustomDrawer,
  },
);
