import { useState } from 'react'
import axios from 'axios'
import { singInProclamair } from '../utils/endpoint'
import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'

export default function Login({ navigation }) {
  const [userName, setUserName] = useState(''),
    [password, setPassword] = useState(''),
    longinProclamair = () => {
      if (userName !== '' && password !== '') {
        axios
          .post(`${singInProclamair}`, {
            userName,
            password,
          })
          .then(data => {
            // setPassword('')
            // setUserName('')
            alert(`connexion reussi`)
            console.log(data.data.token)
          })
          .catch(err => alert(err))
      } else {
        alert('remplissez les champs vides svp')
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/logo1.png')} />
        <Text style={styles.title}>Mon activité de predication</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title2}>Se connecter</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#17144D"
          placeholder="Nom d'utlisateur "
          maxLength={40}
          onChangeText={text => setUserName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#17144D"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          autoCorrect={false}
        />
        <View>
          <Pressable onPress={longinProclamair} style={styles.login}>
            <Text style={styles.Pressablelogin}> Connexion</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Signup')} style={styles.create}>
            <Text style={styles.PressableCreate}>Creer un compte</Text>
          </Pressable>
        </View>
        <Text onPress={() => navigation.navigate('Admin')} style={styles.paragraph}>
          Je suis un admin
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}> Copyright ©2022, by Bleudy TETE</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    container: {
      flex: 1,
      flexDirection: 'column',
      height: responsiveScreenHeight(100),
      width: responsiveScreenWidth(100),
    },
  },
  input: {
    marginHorizontal: 40,
    backgroundColor: '#fff',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#17144D',
    padding: 15,
    color: '#17144D',
    borderRadius: 20,
    fontSize: responsiveScreenFontSize(2),
  },
  login: {
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
  PressableCreate: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Pressablelogin: {
    color: '#17144D',
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {
    marginHorizontal: 40,
    marginVertical: 15,
    fontSize: responsiveScreenFontSize(2),
    color: '#17144D',
  },
  picture: {
    height: responsiveScreenHeight(9),
    width: responsiveScreenWidth(20),
  },
  footer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(100),
  },
  hearder: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: responsiveScreenHeight(4),
    padding: responsiveScreenHeight(1),
    backgroundColor: '#206FAB',
    height: responsiveScreenHeight(12),
    width: responsiveScreenWidth(100),
  },
  body: {
    height: responsiveScreenHeight(81),
    width: responsiveScreenWidth(100),
  },
  title: {
    color: '#E8E8EA',
    fontSize: responsiveScreenFontSize(3),
    width: responsiveScreenWidth(80),
  },
  title2: {
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(4),
    marginVertical: 40,
    color: '#17144D',
  },
  copyright: {
    backgroundColor: '#206FAB',
    width: responsiveScreenWidth(100),
    color: '#fff',
    padding: 20,
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.7),
  },
})
