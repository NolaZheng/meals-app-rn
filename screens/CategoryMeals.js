import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMeals = props => {
  const cateId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(category => category.id === cateId)
  //找到是分在哪一類的

  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate('MealDetail')
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack()
        }}
      />
    </View>
  )
}

CategoryMeals.navigationOptions = data => {
  const cateId = data.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === cateId)

  return {
    title: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoryMeals
