import React, {Fragment} from 'react'

import {Text, Dimensions, ScrollView, Image, FlatList, StyleSheet } from 'react-native'

const Dimension = Dimensions.get('screen').width

const Users = [
  { user: 'Matheus' },
  { user: 'Lázaro' },
  { user: 'Sandra' },
  { user: 'Fidelmario' },
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={Users}
        renderItem={({ item }) =>
          <Fragment>
            <Text>{item.user}</Text>
            <Image source={require('../assets/post.jpg')} style={ styles.image } />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: Dimension,
    width: Dimension,
  }
})

export default App
