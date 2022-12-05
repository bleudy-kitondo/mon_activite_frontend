import AntDesign from '@expo/vector-icons/AntDesign'
import * as ImagePicker from 'expo-image-picker'
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
    [image, setImage] = useState(
      require('../assets/defaultProfil.png'),
    )
  const CheckPlatform = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert('no permission')
      }
    }
  }
  useEffect(() => {
    CheckPlatform()
  }, [])

  const openGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options)
    if (!result.canceled) setImage({ uri: result.assets[0].uri })
  }
  function submit() {
    alert(
      userName +
        ' ' +
        password +
        ' ' +
        confirmPassword +
        ' ' +
        numberOfCongreg +
        ' ' +
        name +
        ' ' +
        lastName +
        ' ' +
        phoneNumber +
        ' ' +
        sex +
        ' ' +
        baptismalYear +
        ' ' +
        birthYear,
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Image
          style={styles.picture}
          source={require('../assets/logo.jpg')}
        />
        <Text style={styles.title}>
          Mon rapport d'activité de predication
        </Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.body}>
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
              {image && (
                <Image style={styles.profil} source={image} />
              )}
              <Pressable onPress={openGallery}>
                <AntDesign
                  name="plussquare"
                  size={30}
                  color="#206FAB"
                />
              </Pressable>
            </View>
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={20}
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
              maxLength={5}
              autoCorrect={false}
              keyboardType="dateTime"
              placeholder="Numero de l'assemblée"
              onChangeText={text => setNumberOfCongreg(text)}
            />
          </View>
          <View style={styles.secondPart}>
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
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={8}
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Date de naissance"
              onChangeText={text => setBirthYear(text)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#17144D"
              maxLength={8}
              autoCorrect={false}
              placeholder="Date de bapteme"
              keyboardType="numeric"
              onChangeText={text => setBaptismalYear(text)}
            />
          </View>
          <View>
            <Pressable
              // onPress={() => navigation.navigate('Userhome')}
              onPress={submit}
              style={styles.create}>
              <Text style={styles.PressableCreate}>Inscription</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <Image
          style={styles.picture}
          source={require('../assets/jw.png')}
        />
        <Text style={styles.hearderText}>
          {' '}
          Copyright ©2022, by Bleudy TETE
        </Text>
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
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#17144D',
    padding: 15,
    color: '#17144D',
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: '#fff',
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
    fontSize: 18,
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
    color: '#17144D',
    fontSize: 30,
    marginVertical: 40,
    width: '50%',
  },
  hearderText: {
    backgroundColor: '#206FAB',
    width: '90%',
    color: '#fff',
    padding: 20,
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
    height: '81%',
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
