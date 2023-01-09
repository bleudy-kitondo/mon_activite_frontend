import React, { useState } from 'react'
import axios from 'axios'
import { SelectList } from 'react-native-dropdown-select-list'
import storage from '../utils/storage'
import { createReport } from '../utils/endpoint'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
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
  SafeAreaView,
  ScrollView,
} from 'react-native'

export default function Send({ navigation }) {
  storage
    .load({
      key: 'login',
    })
    .then(result => {
      setName(result[0].name)
      setLastName(result[0].lastName)
      setUserId(result[0].id)
    })
  const sendRapport = () => {
    if (month !== '' && year !== '' && time !== '') {
      axios
        .post(`${createReport}`, {
          proclamairId,
          month,
          year,
          Publication,
          video,
          time,
          visit,
          course,
          note,
        })
        .then(data => {
          console.log(data.data.message)
          alert(data.data.message)
        })
    } else {
      alert("la date ou le mois ou l'année est vide")
    }
  }
  const [time, setTime] = useState(''),
    [month, setMonth] = useState(''),
    [year, setYear] = useState(''),
    [course, setCourse] = useState(''),
    [note, setNote] = useState(''),
    [visit, setVisit] = useState(''),
    [video, setVideo] = useState(''),
    [Publication, setPublication] = useState(''),
    [name, setName] = useState(''),
    [lastName, setLastName] = useState(''),
    [proclamairId, setUserId] = useState(''),
    months = [
      'Janvier',
      'Fevrier',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Aout',
      'Septembre',
      'Octobre',
      'Novembre',
      'Decembre',
    ],
    years = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/defaultProfil.png')} />
        <View>
          <Text style={styles.userData}>{`${name} ${lastName}`}</Text>
          <Text style={styles.userData}>{proclamairId}</Text>
        </View>
      </View>
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <View style={styles.title}>
            <Text style={styles.title_text}>Envoyez votre rapport</Text>
          </View>
          <View style={styles.periode}>
            <SelectList
              setSelected={val => setMonth(val)}
              data={months}
              placeholder="Mois"
            />
            <SelectList
              setSelected={val => setYear(val)}
              data={years}
              placeholder="Anneé"
            />
          </View>
          <TextInput
            onChangeText={text => {
              setPublication(text)
            }}
            style={styles.input}
            placeholderTextColor="#17144D"
            placeholder="Publications laissées"
            maxLength={3}
          />
          <TextInput
            placeholderTextColor="#17144D"
            onChangeText={text => {
              setVideo(text)
            }}
            style={styles.input}
            placeholder="Vidéos montrées"
          />
          <TextInput
            placeholderTextColor="#17144D"
            onChangeText={text => {
              setTime(text)
            }}
            style={styles.input}
            placeholder="Heures"
          />
          <TextInput
            placeholderTextColor="#17144D"
            onChangeText={text => {
              setVisit(text)
            }}
            style={styles.input}
            placeholder="Nouvelles visites"
          />
          <TextInput
            placeholderTextColor="#17144D"
            onChangeText={text => {
              setCourse(text)
            }}
            style={styles.input}
            placeholder="Nombre de cours bibliques"
          />
          <TextInput
            placeholderTextColor="#17144D"
            onChangeText={text => {
              setNote(text)
            }}
            style={styles.input}
            placeholder="Remarques"
            multiline={true}
            numberOfLines={4}
          />
          <View>
            <Pressable onPress={sendRapport} style={styles.send}>
              <Text style={styles.PressableSend}> Envoyer</Text>
            </Pressable>
            <Pressable style={styles.cancel}>
              <Text style={styles.PressableCancel}>Annuler</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  PressableSend: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  PressableCancel: {
    color: '#17144D',
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
    textAlign: 'center',
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
  input: {
    marginHorizontal: responsiveScreenWidth(5),
    backgroundColor: '#fff',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 1,
    borderColor: '#17144D',
    padding: responsiveScreenHeight(1.2),
    color: '#17144D',
    borderRadius: 12,
    fontSize: responsiveScreenFontSize(2),
  },
  cancel: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#17144D',
    padding: responsiveScreenHeight(1.2),
    borderRadius: 12,
    marginHorizontal: responsiveScreenWidth(5),
    marginVertical: responsiveScreenHeight(1.2),
  },
  send: {
    backgroundColor: '#17144D',
    padding: responsiveScreenHeight(1.2),
    borderRadius: 12,
    marginHorizontal: responsiveScreenWidth(5),
    marginVertical: responsiveScreenHeight(1.2),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenWidth(5),
    marginVertical: responsiveScreenHeight(4),
  },
  title_text: { color: '#17144D', fontSize: responsiveScreenFontSize(3) },
  input_text: {
    fontSize: responsiveScreenFontSize(2),
  },
  periode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenWidth(5),
    marginVertical: responsiveScreenHeight(1),
  },
})
