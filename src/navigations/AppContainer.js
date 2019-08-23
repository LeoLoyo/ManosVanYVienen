import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {TutorialScreen} from '../screens';

const AppNavigator = createSwitchNavigator({
  Tutorial: TutorialScreen,
  Drawer: DrawerNavigator,
  Auth: AuthNavigator,
});

export default createAppContainer(AppNavigator);
