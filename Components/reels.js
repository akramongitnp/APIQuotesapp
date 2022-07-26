import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Reels () {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Fidget-spinner.gif')} style={styles.img}/>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>We are working on it, it will be avalible soon.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 100,
    height: 100
  }
})