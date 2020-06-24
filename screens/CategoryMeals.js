import React from 'react'


import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMeals = props => {
  const cateId = props.navigation.getParam('categoryId')

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(cateId) >= 0
  )

  // const selectedCategory = CATEGORIES.find(category => category.id === cateId)
  //找到是分在哪一類的

  return <MealList displayMeals={displayMeals} navigation={props.navigation} />
}

CategoryMeals.navigationOptions = data => {
  const cateId = data.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === cateId)

  return {
    title: selectedCategory.title,
  }
}

export default CategoryMeals
