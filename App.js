import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SBGStatusBar from './src/components/SBGStatusBar'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SBGStatusBar />
        <Text style={styles.content}>Lo, there be dragons...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: 'white',
    fontSize: 28,
  },
})
