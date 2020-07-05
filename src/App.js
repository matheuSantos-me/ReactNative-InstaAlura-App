import React, { Fragment, useState, useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native'

import { Header, Picture } from './components'

const App = () => {
  const [picture, setPicture] = useState([])

  useEffect(() => {
    const readPictures = async () => {
      const picturesHTTP = await fetch('http://10.0.2.2:3030/feed')
      const picturesJSON = await picturesHTTP.json()
      setPicture(picturesJSON)
    }

    readPictures()
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={picture}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Header pictureUser={item.userURL} user={item.userName} />
            <Picture picturePost={item.userURL} description={item.description} qntLikes={item.likes} />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default App
