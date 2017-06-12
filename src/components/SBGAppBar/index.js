import React from 'react'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { Alert, StyleSheet, Text, View } from 'react-native'

const SBGAppBar = props => {
  const { handleMenuTouch, handleOptionsTouch } = props

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Ionicons
          onPress={handleMenuTouch}
          style={styles.menuIcon}
          name="ios-menu"
          size={32}
        />
        <Text style={styles.title}>SearchBookGo!</Text>
        <View style={styles.spacer} />
        <Ionicons
          onPress={handleOptionsTouch}
          style={styles.optionsIcon}
          name="ios-train"
          size={32}
        />
      </View>
    </View>
  )
}

SBGAppBar.propTypes = {
  handleMenuTouch: PropTypes.func.isRequired,
  handleOptionsTouch: PropTypes.func.isRequired,
}

SBGAppBar.defaultProps = {
  handleMenuTouch: e => Alert.alert('Event Handled', 'You done it now foo!'),
  handleOptionsTouch: e => Alert.alert('Train Time', 'That was a train!'),
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
