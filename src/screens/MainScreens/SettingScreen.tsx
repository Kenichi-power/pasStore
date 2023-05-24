import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, View } from 'react-native'
import { auth } from '../../../firebase/firebase-config'
import { useNavigation } from '@react-navigation/native'
import { AppStackScreenProps } from '../../navigator/AppNavigator'

const SettingScreen = ({}) => {
  const { navigate } = useNavigation<AppStackScreenProps['navigation']>()

  const SignOutUser = () => {
    signOut(auth)
      .then(() => {
        // setIsSignedIn(false)
        navigate('Login')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <View style={{ flex: 1, paddingTop: 50, justifyContent: 'flex-end' }}>
      <Button title="Sign Out" color={'purple'} onPress={SignOutUser} />
    </View>
  )
}

export default SettingScreen
