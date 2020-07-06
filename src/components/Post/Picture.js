import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

import { ImageLike, curtiuFoto } from '../../utils/functions/likes'

const Dimension = Dimensions.get('screen').width

const Picture = ({ picturePost, description, qntLikes }) => {
  const [curtiu, setCurtiu] = useState(false)
  const [likes, setLikes] = useState(qntLikes)

  const clicouCurtir = () => {
    const [curtiuState, qnt] = curtiuFoto(curtiu, likes)
    setLikes(qnt)
    setCurtiu(curtiuState)
  }

  return (
    <View>
      <Image source={{ uri: picturePost }} style={styles.imagePost} />
      <Text>{description}</Text>
      <View style={styles.likes}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={ImageLike(curtiu)} style={styles.like} />
        </TouchableOpacity>
        <Text>{likes} curtidas</Text>
      </View>
    </View>
  )
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
    width: 40,
    marginRight: 10
  }
})

export { Picture }