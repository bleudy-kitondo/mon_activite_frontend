import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Storage from 'react-native-storage'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'
import { findGroup, congregationFindOne } from '../utils/endpoint'
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
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { useEffect, useState } from 'react'
import storage from '../utils/storage'

export default function Group({ navigation }) {
  const [member, setMember] = useState([]),
    [allGroup, setAllGroup] = useState([]),
    [groupId, setGroupId] = useState(),
    [name, setName] = useState(''),
    [lastname, setLastName] = useState(''),
    [userGroup, setUserGroup] = useState('')

  useEffect(() => {
    storage
      .load({
        key: 'login',
      })
      .then(data => {
        setName(data[0].name)
        setLastName(data[0].lastName)
        setGroupId(data[0].groupId)
        axios
          .get(`${congregationFindOne}/${data[0].numberOfCongreg}`)
          .then(data => {
            axios
              .get(`${findGroup}/${data.data._id}`)
              .then(allGroup => {
                setAllGroup(allGroup.data)
              })
              .catch(err => console.log('err', err))
          })
          .catch(err => console.log(err))
      })
  }, [])
  const find = allGroup?.find(element => element._id === groupId)
  console.log('allgroupe', allGroup)
  console.log('find', find)

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/defaultProfil.png')} />
        <View>
          <Text style={styles.userData}>
            {name} {lastname}
          </Text>
          <Text style={styles.userData}>groupe de predication : {find?.number} </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.container1}>
          <View style={styles.containerKey}>
            <Text style={styles.key}>Responsable : </Text>
            <Text style={styles.value}>{find?.manager}</Text>
          </View>
          <View style={styles.containerKey}>
            <Text style={styles.key}>Adjoint : </Text>
            <Text style={styles.value}>{find?.assistant}</Text>
          </View>
          <View style={styles.containerKey}>
            <Text style={styles.key}>Effectif : </Text>
            <Text style={styles.value}>17</Text>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.input_search}
            placeholder="Rechercher par nom"
            placeholderTextColor="#17144D"></TextInput>
          <Feather name="search" size={24} color="#17144D" />
        </View>
        <SafeAreaView>
          <ScrollView></ScrollView>
        </SafeAreaView>
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
    marginHorizontal: responsiveScreenWidth(4),
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
  input_search: {
    fontSize: responsiveScreenFontSize(2),
    padding: 1,
  },
  key: {
    color: '#17144D',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2),
  },
  value: {
    color: '#17144D',
    fontSize: responsiveScreenFontSize(2),
  },
  containerKey: {
    flexDirection: 'row',
  },
  container1: {
    marginHorizontal: responsiveScreenWidth(4),
    marginVertical: responsiveScreenWidth(4),
  },
})
