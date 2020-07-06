import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const Comments = ({ comentarios }) => {

  return (
    <FlatList
      data={comentarios}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        <Text>{item.text}</Text>
      }}
    />
  )
}


const styles = StyleSheet.create({

})

export { Comments }