import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SBGAppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Provider App</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2199E8',
    height: 60,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    padding: 8,
  },
  title: {
    color: 'white',
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 24,
  },
})

export default SBGAppBar
