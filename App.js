import React from 'react'
import { StyleSheet, View } from 'react-native'
import SBGStatusBar from './src/components/SBGStatusBar'
import SBGAppBar from './src/components/SBGAppBar'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SBGStatusBar />
        <SBGAppBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    color: 'white',
    fontSize: 28,
  },
})
