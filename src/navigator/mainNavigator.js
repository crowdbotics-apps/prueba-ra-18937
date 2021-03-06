import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList79204Navigator from '../features/ArticleList79204/navigator';
import ArticleList79203Navigator from '../features/ArticleList79203/navigator';
import ArticleList79202Navigator from '../features/ArticleList79202/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList79204: { screen: ArticleList79204Navigator },
ArticleList79203: { screen: ArticleList79203Navigator },
ArticleList79202: { screen: ArticleList79202Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
