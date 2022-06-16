import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, ToastAndroid } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import { Button } from 'react-native-web';
/*import Snackbar from 'react-native-snackbar';*/

function Main({navigation}) {
  const [isLoading, setLoading] = useState(false)
  const [Quote, setQuote] = useState('Loading...')
  const [Author, setAuthor] = useState('Loading...')
  const [window, setwindow] = useState(false)

  const randomQuote = () => {
    setLoading(true)
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      setQuote(result.content)
      setAuthor(result.author)
      setLoading(false)
    })
  }
  
  const audio = () => {
    try {
      Tts.speak('Hello World');
    }
    catch {
      Alert.alert('Error' ,'Something went wrong, our enginers are looking into this')
    }
  }

  const copyToClipboard = () => {
    Clipboard.setString(Quote);
    /*Snackbar.show({
      text: 'Cpoied', 
      duration: Snackbar.LENGTH_LONG,
    });*/
    ToastAndroid.show('Copied!', ToastAndroid.SHORT)
  };

  const popupWin = () => {
    setwindow(true)
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
                <TouchableOpacity style={{padding: 15, borderRadius: 20, backgroundColor: isLoading ? '#FF5252' : '#A6F32C'}}><Text style={{fontWeight:'bold', color: '#fff'}} onPress={randomQuote}>{isLoading ? 'Loading...' : <Icon name="refresh-outline" size={30}/>}</Text></TouchableOpacity>
            </View>
            <View style={styles.exBtnBox}>
              <TouchableOpacity style={styles.exBtn} onPress={audio}><Icon name="musical-notes-outline" size={30}/></TouchableOpacity>
              <TouchableOpacity style={styles.exBtn} onPress={copyToClipboard}><Icon name="copy-outline" size={30}/></TouchableOpacity>
              <TouchableOpacity style={styles.exBtn}><Icon name="share-social-outline" size={30}/></TouchableOpacity>
              <TouchableOpacity style={styles.exBtn} onPress={popupWin}><Icon name="settings-outline" size={30}/></TouchableOpacity>
            </View>
        </View>
        
        <StatusBar style="auto" />
        <Modal transparent={true} visible={window} animationType='fade' onRequestClose={() => {setwindow(false)}}>
          <View style={styles.modalView}>
            <View style={styles.cardView}>
              <Text>This s a Popup Window</Text>
              <TouchableOpacity style={styles.exBtn} onPress={() => {navigation.navigate('Login')}}><Text>Login</Text></TouchableOpacity>
              <TouchableOpacity style={styles.exBtn} onPress={() => {setwindow(false)}}><Text>Customize</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    backgroundColor: 'white',
    /*height: '50%',
    width: '85%',*/
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 20,

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
  },
  exBtnBox: {
    alignItems: 'center',
      flexDirection: 'row',
      padding: 15
  },
  exBtn: {
    padding:20
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardView: {
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default Main;
