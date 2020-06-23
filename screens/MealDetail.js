import React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetail = props => {
  return (
    <View style={styles.screen}>
      <Text>MealDetail</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetail
