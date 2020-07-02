import React from 'react'
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native'

const Dimension = Dimensions.get('screen').width

const Picture = props => {

  return (
    <View>
      <Image source={{ uri: props.picturePost }} style={styles.image} />
      <Text>{props.description}</Text>
      <Image source={require('../../../assets/heart-disabled.png')} style={styles.like}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: Dimension,
    width: Dimension
  },
  like: {
    height: 40,
    width: 40
  }
})

export { Picture }