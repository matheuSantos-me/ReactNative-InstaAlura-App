import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width

const Picture = () => {

  return (
    <View>
      <Image source={require('../assets/post.jpg')} style={ styles.image } />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: width,
    width: width
  }
})

export { Picture }