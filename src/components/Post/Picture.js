import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

const Dimension = Dimensions.get('screen').width

const Picture = ({ picturePost, description, qntLikes }) => {
  const [curtiu, setCurtiu] = useState(false)
  const [likes, setLikes] = useState(qntLikes)

  const curtiuFoto = () => {
    let qnt = likes
    if (curtiu) {
      qnt--
    } else {
      qnt++
    }
    setLikes(qnt)
    setCurtiu(!curtiu)
  }

  return (
    <View>
      <Image source={{ uri: picturePost }} style={styles.imagePost} />
      <Text>{description}</Text>
      <View style={styles.likes}>
        <TouchableOpacity onPress={curtiuFoto}>
          <Image source={ImageLike(curtiu)} style={styles.like} />
        </TouchableOpacity>
        <Text>{likes} curtidas</Text>
      </View>
    </View>
  )
}

const ImageLike = (curtiu) => {
  if (curtiu) {
    return require('../../../assets/heart-checked.png')
  } else {
    return require('../../../assets/heart-disabled.png')
  }
}

const styles = StyleSheet.create({
  imagePost: {
    height: Dimension,
    width: Dimension
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  like: {
    height: 40,
    width: 40
  }
})

export { Picture }