import {createDrawerNavigator} from 'react-navigation';
import {
  DashboardScreen,
  ProfileScreen,
  SearchScreen,
  MapScreen,
  DonationScreen,
  CategoriesScreen,
} from '../screens';

export default createDrawerNavigator({
  Dashboard: DashboardScreen,
  Profile: ProfileScreen,
  Search: SearchScreen,
  Map: MapScreen,
  Donation: DonationScreen,
  Categories: CategoriesScreen,
});
