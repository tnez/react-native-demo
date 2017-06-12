import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const SBGAppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Ionicons style={styles.menuIcon} name="ios-menu" size={32} />
        <Text style={styles.title}>SearchBookGo!</Text>
        <View style={styles.spacer} />
        <Ionicons style={styles.optionsIcon} name="ios-train" size={32} />
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
    padding: 10,
  },
  menuIcon: {
    lineHeight: 39,
    color: 'white',
  },
  optionsIcon: {
    lineHeight: 36,
    color: 'white',
    alignSelf: 'flex-end',
  },
  spacer: {
    flex: 1,
  },
  title: {
    color: 'white',
    marginLeft: 12,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 36,
  },
})

export default SBGAppBar
