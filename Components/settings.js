import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Header from './header.js'

function Settings() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text>Settings</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})

export default Settings;