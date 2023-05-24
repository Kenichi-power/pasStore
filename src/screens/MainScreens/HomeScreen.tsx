import { collection, getDocs } from 'firebase/firestore/lite'
import React from 'react'
import { Button, View } from 'react-native'
import { db } from '../../../firebase/firebase-config'

const HomeScreen = () => {
  const GetData = async () => {
    const passwordsCol = collection(db, 'passwords')
    const paswordsSnapshot = await getDocs(passwordsCol)
    const passwordList = paswordsSnapshot.docs.map(doc => doc.data())
    console.log('passwords', passwordList)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingTop: 50 }}>
      <Button title="Get Data" onPress={GetData} />
    </View>
  )
}

export default HomeScreen
