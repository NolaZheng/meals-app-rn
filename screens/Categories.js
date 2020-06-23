import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTiles from '../components/CatogoryGridTile'

const Categories = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          })
        }}
      />
    )
  }
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    //navigate, goBack, popToTop, replace
  )
}

//HEADER的型態

Categories['navigationOptions'] = () => {
  return {
    title: 'Meal Categories',
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Categories
