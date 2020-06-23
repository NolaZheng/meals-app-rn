import { Platform } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetail from '../screens/MealDetail'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator(
  {
    Categories,
    CategoryMeals,
    MealDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
      headerBackTitle: 'Back',
    },
  }
)

export default createAppContainer(MealsNavigator)
