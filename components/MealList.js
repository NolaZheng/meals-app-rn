import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MealItem from '../components/MealItem'

const MealList = props => {
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

  return (
    <View style={styles.list}>
      <FlatList
        data={props.displayMeals}
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
})

export default MealList
