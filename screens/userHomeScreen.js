import React, { useEffect, useState } from 'react'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons'
import { findreport } from '../utils/endpoint'
import storage from '../utils/storage'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import axios from 'axios'

export default function Home({ navigation }) {
  const [name, setName] = useState(''),
    [lastName, setLastName] = useState(''),
    [report, setReport] = useState([]),
    reportReverse = report.reverse()
  storage
    .load({
      key: 'login',
    })
    .then(data => {
      setName(data[0].name)
      setLastName(data[0].id)
    })
  useEffect(() => {
    axios
      .get(`${findreport}/${lastName}`)
      .then(result => {
        setReport(result.data)
      })
      .catch(err => console.log(err))
  })

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/defaultProfil.png')} />
        <View>
          <Text style={styles.userData}>{`${name} ${lastName}`}</Text>
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
              style={styles.input_search}
              placeholder="Recherche par mois"
              placeholderTextColor="#17144D"
            />
            <Pressable>
              <Feather name="search" size={24} color="#17144D" />
            </Pressable>
          </View>
        </View>
        <SafeAreaView style={styles.containerReport}>
          <ScrollView>
            {reportReverse.map(oneReport => {
              return (
                <View key={oneReport._id} style={styles.report}>
                  <Text style={styles.date}>
                    {oneReport.month} {oneReport.year}
                  </Text>
                  <Text style={styles.time}>Heures : {oneReport.time} </Text>
                </View>
              )
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            navigation.navigate('Userhome')
          }}
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
    padding: 10,
    color: '#17144D',
    borderRadius: 20,
    marginBottom: responsiveScreenHeight(2),
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
  input_search: {
    fontSize: responsiveScreenFontSize(2),
    padding: 1,
  },
  userData: {
    fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    fontWeight: 'bold',
  },
  report: {
    flexDirection: 'column',
    height: responsiveScreenHeight(6),
    borderBottomWidth: 1,
    borderColor: '#17144D',
    marginHorizontal: responsiveScreenWidth(4),
    paddingTop: responsiveScreenHeight(1),
  },
  containerReport: {
    flexDirection: 'column',
    height: responsiveScreenHeight(60),
  },
  date: {
    color: '#17144D',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2),
  },
  time: {
    color: '#17144D',
    fontSize: responsiveScreenFontSize(2),
  },
})
