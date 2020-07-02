import React, {Fragment} from 'react'
import { ScrollView, FlatList } from 'react-native'

import { Header, Picture } from './components'

const Users = [
  { id: 1, user: 'Matheus' },
  { id: 2, user: 'Lázaro' },
  { id: 3, user: 'Sandra' },
  { id: 4, user: 'Fidelmario' },
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={Users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Header user={item.user} />
            <Picture />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default App
