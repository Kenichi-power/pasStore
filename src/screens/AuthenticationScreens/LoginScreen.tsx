import React, { useState } from 'react'
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { auth } from '../../../firebase/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { AppStackScreenProps } from '../../navigator/AppNavigator'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusInput1, setFocusInput1] = useState(false)
  const [focusInput2, setFocusInput2] = useState(false)
  const { navigate, replace } = useNavigation<AppStackScreenProps['navigation']>()

  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        replace('MainTabNavigator')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrLoginScreener}>
        <TextInput
          style={focusInput1 ? styles.focusTextInput : styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="gray"
          onFocus={() => setFocusInput1(true)}
          onBlur={() => setFocusInput1(false)}
        />
        <TextInput
          style={focusInput2 ? styles.focusTextInput : styles.textInput}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="gray"
          onFocus={() => setFocusInput2(true)}
          onBlur={() => setFocusInput2(false)}
        />
        <TouchableOpacity onPress={() => navigate('Register')} style={styles.createButton}>
          <Text style={styles.text}>Create account</Text>
        </TouchableOpacity>
        <Button
          title="Sign In"
          color={email && password ? 'purple' : 'gray'}
          onPress={SignInUser}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrLoginScreener: {
    width: width - 50,
    height: height / 5,
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    textAlign: 'center',
    color: 'gray',
  },
  focusTextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'purple',
    textAlign: 'center',
    color: 'purple',
  },
  createButton: {
    alignItems: 'flex-end',
  },
  text: {
    color: 'gray',
  },
})

export default LoginScreen
