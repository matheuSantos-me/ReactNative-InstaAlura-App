import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'

const Header = props => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/post.jpg')} style={styles.image} />
      <Text>{props.user}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 15,
    borderRadius: 50
  }
})

export { Header }