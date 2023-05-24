import React, { useState } from 'react'
import { Button, Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { auth } from '../../../firebase/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { AppStackScreenProps } from '../../navigator/AppNavigator'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [focusInput1, setFocusInput1] = useState(false)
  const [focusInput2, setFocusInput2] = useState(false)
  const [focusInput3, setFocusInput3] = useState(false)
  const { navigate } = useNavigation<AppStackScreenProps['navigation']>()

  const RegisterUser = () => {
    if (email && password && confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('Login')
        })
        .catch(err => {
          console.log(err)
        })
    }
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
        <TextInput
          style={focusInput3 ? styles.focusTextInput : styles.textInput}
          placeholder="Confirm Password"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
          placeholderTextColor="gray"
          onFocus={() => setFocusInput3(true)}
          onBlur={() => setFocusInput3(false)}
        />
        <Button
          title="Register"
          color={email && password && confirmPassword ? 'purple' : 'gray'}
          onPress={RegisterUser}
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
    height: height / 4,
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
})

export default RegisterScreen
