import { Platform, StyleSheet } from 'react-native'

const styles = {
  container: {
    backgroundColor: '#2A628F',
    height: Platform.OS === 'ios' ? 20 : 0,
  },
}

export default StyleSheet.create(styles)
