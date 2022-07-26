import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function Settings () {
  return (
    <View style={styles.container}>
      <View>
        <Text>Thinker</Text>
      </View>
      <View>
        <Text>Options</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Settings