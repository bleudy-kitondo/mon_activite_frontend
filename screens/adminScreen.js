import AntDesign from '@expo/vector-icons/AntDesign'
import axios from 'axios'
import { singinAdmin } from '../utils/endpoint'
import { useState } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'

export default function Admin({ navigation }) {
  const [userName, setUserName] = useState(''),
    [password, setPassword] = useState(''),
    loginAdmin = () => {
      if (userName !== '' && password !== '') {
        axios
          .post(`${singinAdmin}`, {
            userName,
            password,
          })
          .then(data => {
            console.log(data.data)
          })
          .catch(err => {
            throw err
          })
      }
    }
  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/logo.jpg')} />
        <Text style={styles.title}>Mon rapport d'activité de predication</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign
            style={styles.icon}
            name="left"
            size={32}
            color="#206FAB"
            onPress={() => navigation.navigate('Login')}
          />
          <Text style={styles.title2}>Page admin</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utlisateur "
          placeholderTextColor="#17144D"
          maxLength={20}
          onChangeText={text => setUserName(text)}
          // autoFocus
        />
        <TextInput
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
          placeholderTextColor="#17144D"
          placeholder="Mot de passe"
          onChangeText={text => setPassword(text)}
        />
        <View>
          <Pressable onPress={loginAdmin} style={styles.connexion}>
            <Text style={styles.Pressablelogin}> Connexion</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footer}>
        <Image style={styles.picture} source={require('../assets/jw.png')} />
        <Text style={styles.hearderText}>Copyright ©2022, by Bleudy TETE</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  input: {
    marginHorizontal: 40,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#17144D',
    padding: 15,
    color: '#17144D',
    borderRadius: 20,
    fontSize: 14,
  },
  connexion: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#17144D',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  create: {
    backgroundColor: '#17144D',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  Pressablelogin: {
    color: '#17144D',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  picture: {
    height: 66,
    width: 66,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: '90%',
  },
  hearder: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 33,
    padding: 10,
    backgroundColor: '#E8E8EA',
  },
  title: {
    color: '#17144D',
    fontSize: 24,
    width: '90%',
  },
  title2: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 40,
    width: '50%',
    color: '#17144D',
  },
  hearderText: {
    backgroundColor: '#206FAB',
    width: '90%',
    color: '#fff',
    padding: 20,
  },
  icon: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 40,
    width: '25%',
  },
})
