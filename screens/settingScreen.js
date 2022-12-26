// import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'
import storage from '../utils/storage'
import { View, Button, TextInput, StyleSheet, Text, Pressable, Image } from 'react-native'
import { useState } from 'react'

export default function Setting({ navigation }) {
  const [name, setname] = useState(''),
    [lastName, setUserName] = useState('')
  storage
    .load({
      key: 'login',
    })
    .then(data => {
      setname(data[0].name)
      setUserName(data[0].lastName)
    })
  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/defaultProfil.png')} />
        <View>
          <Text style={styles.userData}>{`${name} ${lastName}`} </Text>
          <Text style={styles.userData}>groupe de predication : 1</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text> setting</Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={() => navigation.navigate('Userhome')}
          style={styles.containerIcon}>
          <Ionicons name="ios-home-sharp" size={30} color="#E8E8EA" />
          <Text style={styles.text}>Accueil</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Send')}
          style={styles.containerIcon}>
          <MaterialCommunityIcons name="send" size={30} color="#E8E8EA" />
          <Text style={styles.text}>Envoyer</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Group')}
          style={styles.containerIcon}>
          <MaterialCommunityIcons name="account-group" size={30} color="#E8E8EA" />
          <Text style={styles.text}>Mon groupe</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Setting')}
          style={styles.containerIcon}>
          <MaterialIcons name="settings" size={30} color="#E8E8EA" />
          <Text style={styles.text}>Parametre</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
  },
  hearder: {
    backgroundColor: '#206FAB',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: responsiveScreenHeight(4),
    padding: responsiveScreenHeight(1),
    height: responsiveScreenHeight(12),
    width: responsiveScreenWidth(100),
  },
  body: {
    height: responsiveScreenHeight(79),
    backgroundColor: '#fff',
  },
  footer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(9),
    backgroundColor: '#206FAB',
    justifyContent: 'space-between',
    padding: responsiveScreenHeight(1),
    width: responsiveScreenWidth(100),
  },
  text: {
    color: '#E8E8EA',
    fontSize: responsiveScreenFontSize(1.6),
  },
  containerIcon: {
    alignItems: 'center',
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginHorizontal: responsiveScreenWidth(4),
  },
  userData: {
    fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    fontWeight: 'bold',
  },
})
