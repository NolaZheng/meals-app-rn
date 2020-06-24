import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ url: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.text}>{props.duration}m</Text>
            <Text style={styles.text}>{props.complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ddd',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    fontFamily: 'open-sans',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',

    textAlign: 'center',
  },
  text: {
    fontFamily: 'open-sans',
  },
})

export default MealItem
