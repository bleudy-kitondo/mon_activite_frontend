// import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'
import { View, Button, TextInput, StyleSheet, Text,Pressable } from 'react-native'

export default function Group({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.hearder}></View>
      <View style={styles.body}>
        <Text> group</Text>
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
    height: responsiveScreenHeight(12),
    backgroundColor: 'red',
    backgroundColor: '#206FAB',
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
})
