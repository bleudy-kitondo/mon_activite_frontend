// import React, { useState } from 'react'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons'
// import { data } from '../data'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Image,
  FlatList,
} from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/defaultProfil.png')} />
        <View>
          <Text style={styles.userData}>Bleudy kitondo</Text>
          <Text style={styles.userData}>groupe de predication : 1</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <View style={styles.title}>
            <Text style={styles.title_text}>Tes Rapports</Text>
            <Feather name="filter" size={24} color="#17144D" />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.input_text}
              placeholder="Recherche par mois"
              placeholderTextColor="#17144D"
            />
            <Pressable>
              <Feather name="search" size={24} color="#17144D" />
            </Pressable>
          </View>
        </View>
        <View></View>
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
          <Text style={styles.text}>Parametres</Text>
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
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenWidth(4),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#17144D',
    padding: 15,
    color: '#17144D',
    borderRadius: 20,
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
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenWidth(4),
    marginVertical: responsiveScreenHeight(4),
  },
  title_text: { color: '#17144D', fontSize: responsiveScreenFontSize(3) },
  input_text: {
    fontSize: responsiveScreenFontSize(2),
  },
  userData: {
    fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    fontWeight: 'bold',
  },
})
