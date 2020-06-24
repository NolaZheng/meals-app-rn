import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { MEALS } from '../data/dummy-data'

const MealDetail = props => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>MealDetail</Text>
      <Button
        title="Go Back"
        onPress={() => {
          // props.navigation.popToTop()
          props.navigation.goBack()
        }}
      />
    </View>
  )
}

MealDetail.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: <Text>FAVI</Text>,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetail
