import React from 'react'
import { Text, Platform } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomNavigator } from 'react-navigation-material-bottom-tabs'

import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetail from '../screens/MealDetail'
import Favorite from '../screens/Favorite'
import Filters from '../screens/Filters'
import Colors from '../constants/Colors'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitle: 'Back',
  headerBackTitleStyle: { fontFamily: 'open-sans-bold' },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
}

/////////  BASIC NAV   //////////

const MealsNavigator = createStackNavigator(
  {
    Categories,
    CategoryMeals,
    MealDetail,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
)

/////////  FAVORITE TOP   //////////

const FavNavigator = createStackNavigator(
  {
    Favorite,
    MealDetail,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
)

/////////  BOTTOM TAB UI   //////////

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        )
      },
      tabBarColor: Colors.primaryColor, //Android Only
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor, //Android Only
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favorite</Text>
        ) : (
          'Favorite'
        ),
    },
  },
}

/////////  BOTTOM TAB   //////////

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true, //Android Only
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          style: { paddingTop: 10 },
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
        },
      })

/////////  FILTERS TOP   //////////

const FiltersNavigator = createStackNavigator(
  {
    Filters,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
)

/////////  SIDE  DRAWER   //////////

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
)

export default createAppContainer(MainNavigator)
