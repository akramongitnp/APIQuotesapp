import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

function Login({navigation}) {
  return(
    <View style={styles.mainWin}>
      <View style={styles.inptUI}>
        <TextInput placeholder='Email' placeholderTextColor={'#A6F32C'} style={styles.input}/>
        <TextInput placeholder='Password' placeholderTextColor={'#A6F32C'} style={styles.input}/>
        <TouchableOpacity style={styles.btn}><Text style={styles.txt}>Login</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainWin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inptUI: {
    backgroundColor: '#A6F32C',
    margin: 50,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    padding: 60,
  },
  input: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    color: '#A6F32C',
    fontWeight: 'bold',
    width: 200,
    height: 50,
    padding: 10
  },
  btn: {
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5
  },
  txt: {
    color: '#A6F32C',
    fontWeight: 'bold',
  }
})

export default Login;
