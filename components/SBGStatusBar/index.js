import React from 'react'
import { StatusBar, View } from 'react-native'
import styles from './index.styles'

const SBGStatusBar = () =>
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
  </View>

export default SBGStatusBar
