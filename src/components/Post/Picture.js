import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

const Dimension = Dimensions.get('screen').width

const Picture = props => {
  const [like, setLike] = useState(false)

  const LikePicture = () => {
    setLike(!like)
  }

  return (
    <View>
      <Image source={{ uri: props.picturePost }} style={styles.image} />
      <Text>{props.description}</Text>
      <TouchableOpacity onPress={() => LikePicture()}>
        <Image source={ImageLike(like)} style={styles.like} />
      </TouchableOpacity>
    </View>
  )
}

const ImageLike = (like) => {
  if (like) {
    return require('../../../assets/heart-checked.png')
  } else {
    return require('../../../assets/heart-disabled.png')
  }
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