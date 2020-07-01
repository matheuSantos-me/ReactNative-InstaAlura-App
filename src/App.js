import React, {Fragment} from 'react'

import {Text, Dimensions, ScrollView, Image, FlatList } from 'react-native'

const Width = Dimensions.get('screen').width

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
            {/* <Image source={require('../assets/ ')} /> */}
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default App
