import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMeals = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: itemData.item.id },
          })
        }}
      />
    )
  }
  const cateId = props.navigation.getParam('categoryId')

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(cateId) >= 0
  )

  // const selectedCategory = CATEGORIES.find(category => category.id === cateId)
  //找到是分在哪一類的

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
      {/* <Text>CategoryMeals</Text>
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
      /> */}
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
    padding: 10,
  },
})

export default CategoryMeals
