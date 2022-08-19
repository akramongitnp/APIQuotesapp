import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function header() {
  return (
    <View style={styles.container}>
        <View>
            <View style={styles.left}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Thinker...</Text>
            </View>
        </View>
        <View>
            <View style={styles.right}>
                <TouchableOpacity style={{marginRight: 10}}><Icon name='add-outline' size={30}/></TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 10}}><Icon name='search-outline' size={30}/></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    right: {
        flexDirection: 'row',
        margin: 5,
        paddingRight: 10
    }
})