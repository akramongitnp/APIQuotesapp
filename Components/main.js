import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, ToastAndroid, StatusBar, Dimensions,ImageBackground, TouchableWithoutFeedback} from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
//import Carousel from 'react-native-snap-carousel';
/*import Snackbar from 'react-native-snackbar';*/
import News from './news';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

function Main({navigation}) {
  const [isLoading, setLoading] = useState(false)
  const [Quote, setQuote] = useState('Loading...')
  //const [Author, setAuthor] = useState('Loading...')
  const [window, setWindow] = useState(false)
  const [image, setImage] = useState('../assets/Fidget-spinner.gif')
  const [counter, setCounter] = useState(1)

  const randomQuote = () => {
    setLoading(true)
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      setQuote(result)
      //setAuthor(result.author)
      setLoading(false)
    })
    let tempImg = 'https://picsum.photos/id/'+ counter +'/1080/720'
    setImage(tempImg)
    const icounter = counter + 1
    setCounter(icounter)
    console.log(image)

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
    setWindow(true)
  }

  useEffect(() => {
    randomQuote();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
          <View style={{alignItems: 'flex-end', justifyContent: 'flex-start', margin: 20}}>
            <Icon name='ellipsis-vertical' size={25} color={'#fff'} onPress={popupWin}/>  
            <Modal transparent={true} visible={window} animationType='fade' onRequestClose={() => {setWindow(false)}}>
              <View style={{alignItems: 'flex-end', justifyContent: 'flex-start'}}>
                <View style={styles.modalView}>
                  <TouchableOpacity style={{padding: 5}}><Icon name='share-social' size={18}><Text style={{fontSize: 15}}>Share</Text></Icon></TouchableOpacity>
                  <TouchableOpacity style={{padding: 5}}><Icon name='copy' size={18}><Text style={{fontSize: 15}}>Copy</Text></Icon></TouchableOpacity>
                  <TouchableOpacity style={{padding: 5}}><Icon name='play' size={18}><Text style={{fontSize: 15}}>Play</Text></Icon></TouchableOpacity>
                  <TouchableOpacity style={{padding: 5}}><Icon name='close-circle' size={18} onPress={() => {setWindow(false)}}><Text style={{fontSize: 15}}>Close</Text></Icon></TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttomBox}>
        <View style={{width: '100%', height: '100%'}}>
          <View style={styles.mainBox}>
            <Icon name="person-circle-outline" size={16} style={{alignItems: 'center'}}><Text style={{fontSize: 15}}>{Quote.author}</Text></Icon>
            <Text>{Quote.dateAdded}</Text>
          </View>
          <View style={{width: '80%', height: '40%'}}>
            <View style={styles.mainBox}>
              <Text>{Quote.content}</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <View style={styles.mainBox}>
              <TouchableOpacity onPress={randomQuote} style={styles.reloadBtn}><Icon name="refresh-outline" size={30} color={'white'}/></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
  topBox: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    width: '100%',
  },
  buttomBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: '#F8F8F7',
    width: '100%',
    shadowColor: "#EFEFEF"
  },
  txtMain: {
    color: '#A6F32C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnBox: {
      alignItems: 'flex-end',
      backgroundColor: 'blue'
  },
  mainBox: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: "space-between",
    margin: 20,
  },
  reloadBtn: {
    width: 65,
    height: 65,
    backgroundColor: 'green',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    width: 120,
    height: 140,
    margin: 30,
    marginTop: 60,
    padding: 10,
    borderRadius: 5,
  }
});

export default Main;
