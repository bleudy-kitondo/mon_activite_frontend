import AntDesign from '@expo/vector-icons/AntDesign'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { createProclamair } from '../utils/endpoint'
import { cloudinary } from '../utils/endpoint'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native'

const options = {
  allowsEditing: true,
  mediaType: ImagePicker.MediaTypeOptions.All,
  aspect: [4, 3],
  quality: 1,
}

export default function SignUp({ navigation }) {
  const [userName, setUserName] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState(''),
    [numberOfCongreg, setNumberOfCongreg] = useState(''),
    [name, setName] = useState(''),
    [lastName, setLastName] = useState(''),
    [sex, setSex] = useState(''),
    [phoneNumber, setPhoneNumber] = useState(''),
    [birthYear, setBirthYear] = useState(''),
    [baptismalYear, setBaptismalYear] = useState(''),
    [picture, setPicture] = useState(require('../assets/defaultProfil.png')),
    [image, setImage] = useState(require('../assets/defaultProfil.png')),
    [DatePickerVisibleBirthYear, setDatePickerVisibilityBirthYear] = useState(false),
    [DatePickerVisibleBaptismalYear, setDatePickerVisibilityBaptismalYear] =
      useState(false),
    BirthYear = 'Date de naissance',
    BaptismalYear = 'Date de bapteme',
    CheckPlatform = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('no permission')
        }
      }
    }
  useEffect(() => {
    CheckPlatform()
  }, [])

  // console.log('iamge', image)
  let tempBirthYear = new Date(birthYear),
    tempBaptismalYear = new Date(baptismalYear),
    formatBirthYear =
      tempBirthYear.getDate() +
      '-' +
      (tempBirthYear.getMonth() + 1) +
      '-' +
      tempBirthYear.getFullYear(),
    formatBaptismalYear =
      tempBaptismalYear.getDate() +
      '-' +
      (tempBaptismalYear.getMonth() + 1) +
      '-' +
      tempBaptismalYear.getFullYear()

  const showBirthYearPicker = () => {
      setDatePickerVisibilityBirthYear(true)
    },
    showBaptismalYearPicker = () => {
      setDatePickerVisibilityBaptismalYear(true)
    },
    hideDatePicker = () => {
      setDatePickerVisibilityBaptismalYear(false)
      setDatePickerVisibilityBirthYear(false)
    },
    confirmBirthYear = date => {
      setBirthYear(date)
      hideDatePicker()
    },
    confirmBaptismalYear = date => {
      setBaptismalYear(date)
      hideDatePicker()
    },
    openGallery = async () => {
      let result = await ImagePicker.launchImageLibraryAsync(options)
      if (!result.canceled) {
        console.log('result', result.assets[0].uri)
        setImage(result.assets[0].uri)
        setPicture({ uri: result.assets[0].uri })
      }
    },
    uploadCloudinary = async () => {
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'mon_activiteApp')
      data.append('cloud_name', 'davr0i2ga')
      console.log('data', data)
      await fetch(`${cloudinary}`, {
        method: 'post',
        body: data,
      })
        .then(res => res.json())
        .then(data => {
          console.log('data json', data)
        })
      // .then(res => {
      //   // console.log('resultat', res)
      //   alert('succes')
      // })
      // .catch(err => alert(err))
    }
  // console.log('image',image)

  // function submit() {
  //   if (
  //     userName !== '' &&
  //     password !== '' &&
  //     numberOfCongreg !== '' &&
  //     name !== '' &&
  //     lastName !== '' &&
  //     sex !== '' &&
  //     confirmPassword !== ''
  //   ) {
  //     if (password === confirmPassword) {
  //       axios
  //         .post(`${createProclamair}`, {
  //           userName,
  //           password,
  //           numberOfCongreg,
  //           name,
  //           lastName,
  //           phoneNumber,
  //           baptismalYear: formatBaptismalYear,
  //           birthYear: formatBirthYear,
  //           sex,
  //           picture: 'test',
  //         })
  //         .then(data => {
  //           alert(data.data.message)
  //           navigation.navigate('Userhome')
  //         })
  //         .catch(err => console.log(`err: ${err}`))
  //     } else {
  //       alert('mot de passe different')
  //     }
  //   } else {
  //     alert('remplissez le champ vide')
  //   }
  // }

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image style={styles.picture} source={require('../assets/logo1.png')} />
        <Text style={styles.title}>Mon activité de predication</Text>
      </View>
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign
              style={styles.icon}
              name="left"
              size={32}
              color="#206FAB"
              onPress={() => navigation.navigate('Login')}
            />
            <Text style={styles.title2}>Inscription</Text>
          </View>
          <View style={styles.mainPart}>
            <View style={styles.containerProfil}>
              {picture && <Image style={styles.profil} source={picture} />}
              <Pressable onPress={openGallery}>
                <AntDesign name="plussquare" size={30} color="#206FAB" />
              </Pressable>
            </View>
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={40}
              autoCorrect={false}
              placeholder="Nom d'utlisateur"
              onChangeText={text => setUserName(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              secureTextEntry
              autoCorrect={false}
              placeholder="Mot de passe"
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              autoCorrect={false}
              secureTextEntry
              placeholder="Confirmenr mot de passe"
              onChangeText={text => setConfirmPassword(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={10}
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Numero de l'assemblée"
              onChangeText={text => setNumberOfCongreg(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={20}
              autoCorrect={false}
              placeholder="Nom"
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={20}
              autoCorrect={false}
              placeholder="Prenom"
              onChangeText={text => setLastName(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={1}
              autoCorrect={false}
              placeholder="Sexe"
              onChangeText={text => setSex(text)}
            />
            <TextInput
              placeholderTextColor="#17144D"
              maxLength={10}
              autoCorrect={false}
              style={styles.input}
              keyboardType="numeric"
              placeholder="Telephone"
              onChangeText={text => setPhoneNumber(text)}
            />
            <Pressable style={styles.containerDate} onPress={showBirthYearPicker}>
              <DateTimePickerModal
                isVisible={DatePickerVisibleBirthYear}
                mode="date"
                onConfirm={confirmBirthYear}
                onCancel={hideDatePicker}
              />
              <Text style={styles.date}>
                {birthYear === '' ? BirthYear : formatBirthYear}
              </Text>
              <MaterialIcons name="date-range" size={30} color="#17144D" />
            </Pressable>
            <Pressable style={styles.containerDate} onPress={showBaptismalYearPicker}>
              <DateTimePickerModal
                isVisible={DatePickerVisibleBaptismalYear}
                mode="date"
                onConfirm={confirmBaptismalYear}
                onCancel={hideDatePicker}
              />
              <Text style={styles.date}>
                {baptismalYear === '' ? BaptismalYear : formatBaptismalYear}
              </Text>
              <MaterialIcons name="date-range" size={30} color="#17144D" />
            </Pressable>
            <Pressable onPress={uploadCloudinary} style={styles.create}>
              <Text style={styles.PressableCreate}>Inscription</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <Text style={styles.copyright}> Copyright ©2022, by Bleudy TETE</Text>
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
  input: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#17144D',
    backgroundColor: '#fff',
    padding: 15,
    color: '#17144D',
    borderRadius: 20,
    fontSize: responsiveScreenFontSize(2),
  },
  containerDate: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#17144D',
    padding: 10,
    color: '#17144D',
    borderRadius: 20,
    fontSize: responsiveScreenFontSize(2),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  date: {
    color: '#17144D',
    fontSize: responsiveScreenFontSize(2),
  },
  create: {
    backgroundColor: '#17144D',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  PressableCreate: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    fontWeight: 'bold',
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
    paddingTop: responsiveScreenHeight(3.2),
    padding: responsiveScreenHeight(1),
    backgroundColor: '#206FAB',
    height: responsiveScreenHeight(12),
    width: responsiveScreenWidth(100),
  },
  title: {
    color: '#E8E8EA',
    fontSize: responsiveScreenFontSize(3),
    width: responsiveScreenWidth(80),
  },
  title2: {
    fontSize: responsiveScreenFontSize(4),
    marginVertical: 40,
    marginHorizontal: 20,
    color: '#17144D',
  },
  copyright: {
    backgroundColor: '#206FAB',
    width: responsiveScreenWidth(100),
    textAlign: 'center',
    color: '#fff',
    padding: 20,
    fontSize: responsiveScreenFontSize(1.7),
  },
  containerProfil: {
    position: 'relative',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 100,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  profil: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  mainPart: {
    backgroundColor: '#ECECEE',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  body: {
    height: responsiveScreenHeight(81),
    width: responsiveScreenWidth(100),
  },
  secondPart: {
    marginHorizontal: 20,
  },
  icon: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 40,
    width: '25%',
  },
})
