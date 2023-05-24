import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppNavigator from './src/navigator/AppNavigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { Provider } from 'react-redux'

const App = () => {
  // const { top } = useSafeAreaInsets()
  return (
    // <Provider store={store}>
    <View style={styles.container}>
      <AppNavigator />
    </View>
    // </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})

export default App
