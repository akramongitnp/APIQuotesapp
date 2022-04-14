import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

function Main() {
  const [isLoading, setLoading] = useState(false)
  const [Quote, setQuote] = useState('Loading...')
  const [Author, setAuthor] = useState('Loading...')

  const randomQuote = () => {
    setLoading(true)
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      setQuote(result.content)
      setAuthor(result.author)
      setLoading(false)
    })
  }
  useEffect(() => {
    randomQuote();
  }, []);
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <Text style={{marginBottom: 25,marginTop: 25 , color: '#A6F32C', fontWeight: 'bold', fontSize: 25}}>Quots of the Day</Text>
            <Text style={styles.txtMain}>{isLoading ? 'Loading...' : Quote}</Text>
            <Text style={{marginLeft: '70%', color: '#A6F32C'}}>____{isLoading ? 'Loading...' : Author}</Text>
            <View style={styles.btnBox}>
                <TouchableOpacity style={{padding: 15, borderRadius: 20, backgroundColor: isLoading ? '#FF5252' : '#A6F32C'}}><Text style={{fontWeight:'bold', color: '#fff'}} onPress={randomQuote}>{isLoading ? 'Loading...' : 'New Quotes'}</Text></TouchableOpacity>
                <Icon name="md-menu" size={30}/>
            </View>
        </View>
        
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6F32C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#F4FDE7',
    height: '50%',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 40,

  },
  txtMain: {
    color: '#A6F32C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnBox: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 15

  }
});

export default Main;
