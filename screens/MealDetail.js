import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'

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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log('Mark as favorite')
            }}
          />
        </HeaderButtons>
      )
    },
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
