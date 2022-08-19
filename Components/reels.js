import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './header.js'

function Item({author, content, image}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Icon name='person-circle-outline' size={40}/>
          <Text style={styles.userName}>{author}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity><Icon name='ellipsis-horizontal-outline' size={25}/></TouchableOpacity>
        </View>
      </View>
      <Text style={styles.caption}>{content}</Text>
      <Image style={styles.feedImg} source={{uri: {image}}}/>
      {/* 'https://i.picsum.photos/id/110/1080/720.jpg?hmac=TBCX4SOH0S71RGG92YmRQiDL_jGvMmFMcVIasdpmpjQ' */}
      <View style={styles.cardFooter}>
        <View style={styles.footerleft}>
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
            <Icon name='heart' color='red' size={30}/>
            <Text style={{fontSize: 10, marginTop: 8, marginLeft: 5}}>1000</Text>
            <Icon name='chatbox-outline' size={30} style={{marginLeft: 15}}/>
            <Text style={{fontSize: 10, marginTop: 8, marginLeft: 5}}>50</Text>
          </View>
        </View>
        <View style={styles.caption.footerRight}>
          <View style={{flexDirection: 'row', marginTop: 8, marginLeft: 5}}>
            <Icon name='share-outline' size={25}/>
          </View>
        </View>
      </View>
    </View>
  )
}
function Reels() {
  const [data, setData] = useState()

  const fetchData = () => {
    fetch("http://localhost:8000/")
    .then((response) => response.json())
    .then((res) => setData(res))
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={data}
        renderItem={({item}) => 
        <Item author={item.author}
        content={item.content}
        img={item.image}/>
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row'
  },
  userName: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  headerRight: {
    flexDirection: 'row',
    marginTop: 8
  },
  feedImg: {
    height: 300,
    borderRadius: 5,
    margin: 5
  },
  caption: {
    margin: 5
  },
  cardFooter: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
})

export default Reels;